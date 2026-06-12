# Web BDS - Nền tảng bất động sản căn hộ

Dự án web bất động sản fullstack với React, Node.js, MongoDB, và AI hỗ trợ.

## 🏗️ Cấu trúc dự án

```
Web_BDS/
├── frontend/          # React + Vite
├── backend/           # Express.js
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **State Management**: React Context / Redux (optional)
- **CSS**: Tailwind CSS / CSS Modules

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **AI**: OpenAI API
- **Validation**: Joi / Yup

## 📋 Tính năng chính

### 1. Listings (Danh sách căn hộ)
- Hiển thị danh sách căn hộ với ảnh, giá, thông tin
- Chi tiết căn hộ (location, amenities, reviews)
- Upload/manage listings (admin)

### 2. Search & Filter
- Tìm kiếm theo khoảng giá, vị trí, diện tích
- Filter theo tiện ích (gym, pool, parking...)
- AI suggestions based on user preferences

### 3. User Authentication
- Đăng ký / Đăng nhập
- JWT token management
- User profiles

### 4. Booking & Favorites
- Yêu thích căn hộ
- Booking xem căn hộ
- Lịch sử yêu cầu

### 5. Admin Dashboard
- Quản lý listings
- Quản lý bookings
- Analytics

### 6. AI Features
- 💬 Chatbot hỗ trợ khách hàng (OpenAI)
- 🤖 Property recommendations
- 🔍 Smart search suggestions
- 📝 Property description generation

## 🚀 Hướng dẫn setup

### Prerequisites
- Node.js 16+
- MongoDB
- OpenAI API Key

### 1. Clone repository
```bash
git clone https://github.com/my1410/Web_BDS.git
cd Web_BDS
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Tạo file `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/web_bds
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

Chạy backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

Backend API sẽ chạy tại: `http://localhost:5000`

## 📁 Folder Structure

### Frontend
```
frontend/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── hooks/           # Custom hooks
│   ├── context/         # React Context
│   ├── utils/           # Helper functions
│   ├── styles/          # Global styles
│   └── App.jsx
├── public/
├── index.html
├── vite.config.js
└── package.json
```

### Backend
```
backend/
├── src/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Custom middleware
│   ├── services/         # Business logic
│   ├── utils/            # Helper functions
│   ├── config/           # Configuration
│   └── app.js
├── .env
├── .gitignore
└── package.json
```

## 🔌 API Endpoints (Coming Soon)

### Auth
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/me` - Lấy thông tin user

### Properties
- `GET /api/properties` - Danh sách căn hộ
- `GET /api/properties/:id` - Chi tiết căn hộ
- `POST /api/properties` - Tạo listing (admin)
- `PUT /api/properties/:id` - Cập nhật listing
- `DELETE /api/properties/:id` - Xóa listing

### AI
- `POST /api/ai/chat` - Chat với AI assistant
- `POST /api/ai/recommend` - Gợi ý căn hộ
- `POST /api/ai/generate-description` - Generate mô tả

### Bookings
- `GET /api/bookings` - Danh sách booking
- `POST /api/bookings` - Tạo booking
- `PUT /api/bookings/:id` - Cập nhật booking

## 📝 Licensing

MIT License - Xem file LICENSE

## 👥 Contributors

- my1410

---

**Happy Coding!** 🎉
