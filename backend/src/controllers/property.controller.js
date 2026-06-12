import Property from '../models/Property.js'

export const getProperties = async (req, res) => {
  try {
    const { minPrice, maxPrice, location, minArea, maxArea } = req.query
    const filter = {}

    if (minPrice || maxPrice) {
      filter.price = {}
      if (minPrice) filter.price.$gte = Number(minPrice)
      if (maxPrice) filter.price.$lte = Number(maxPrice)
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' }
    }

    if (minArea || maxArea) {
      filter.area = {}
      if (minArea) filter.area.$gte = Number(minArea)
      if (maxArea) filter.area.$lte = Number(maxArea)
    }

    const properties = await Property.find(filter).populate('owner', 'name phone email')
    res.status(200).json(properties)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('owner', 'name phone email')

    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    res.status(200).json(property)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProperty = async (req, res) => {
  try {
    const { title, description, location, price, area, rooms, bathrooms, amenities, images } = req.body

    const property = await Property.create({
      title,
      description,
      location,
      price,
      area,
      rooms,
      bathrooms,
      amenities: amenities || [],
      images: images || [],
      owner: req.userId,
      ownerName: req.body.ownerName,
      ownerPhone: req.body.ownerPhone,
      ownerEmail: req.body.ownerEmail
    })

    res.status(201).json({
      success: true,
      message: 'Property created successfully',
      property
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    // Check if user is owner or admin
    if (property.owner.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this property' })
    }

    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    res.status(200).json({
      success: true,
      message: 'Property updated successfully',
      property: updated
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
    if (!property) {
      return res.status(404).json({ message: 'Property not found' })
    }

    if (property.owner.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this property' })
    }

    await Property.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, message: 'Property deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const toggleFavorite = async (req, res) => {
  try {
    const { propertyId } = req.body
    const User = (await import('../models/User.js')).default

    const user = await User.findById(req.userId)
    const isFavorited = user.favorites.includes(propertyId)

    if (isFavorited) {
      user.favorites = user.favorites.filter(id => id.toString() !== propertyId)
    } else {
      user.favorites.push(propertyId)
    }

    await user.save()
    res.status(200).json({
      success: true,
      message: isFavorited ? 'Removed from favorites' : 'Added to favorites',
      favorites: user.favorites
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
