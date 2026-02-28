# News Portal - Full Stack Application

A news portal application with React frontend and Node.js Express backend connected to MongoDB.

## Project Structure

```
NewsPortal/
├── Backend/          # Node.js Express backend
│   ├── config/       # Database configuration
│   ├── model/        # MongoDB models
│   ├── route/        # API routes
│   └── uploads/      # File uploads directory
└── news/            # React Vite frontend
    └── src/
        ├── components/   # React components
        └── config/       # Frontend config (API endpoints)
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

### 1. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:
```env
MONGOURI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
NODE_ENV=production
PORT=9000
```

Start the backend:
```bash
npm start        # Production
npm run dev       # Development with nodemon
```

### 2. Frontend Setup

```bash
cd news
npm install
```

Create a `.env` file in the news directory:
```env
VITE_API_URL=http://localhost:9000/api  # Local development
```

For production (Render):
```env
VITE_API_URL=https://newsportal-backend.onrender.com/api
```

Start the frontend:
```bash
npm run dev       # Development (Vite dev server)
npm run build     # Production build
npm run preview   # Preview production build
```

## Deployment on Render

### 1. Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up and connect your GitHub account

### 2. Add MongoDB Connection

Before deploying, ensure you have a MongoDB Atlas cluster:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get the connection string
3. Add environment variables in Render dashboard

### 3. Deploy

The `render.yaml` configuration allows Render to automatically deploy both services:

- **Backend**: Node.js web service on port 9000
- **Frontend**: Static site built from `news/dist`

Click "Deploy" in your Render dashboard and Render will:
1. Handle the build process for both services
2. Set environment variables
3. Deploy to production URLs

### 4. Set Environment Variables in Render

In Render Dashboard → Environment:

**For Backend Service:**
- `MONGOURI`: `mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority`
- `NODE_ENV`: `production`

**For Frontend Service:**
- `VITE_API_URL`: (automatically set to your backend URL)

## Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user-register` | Register new user |
| POST | `/api/login` | User login |
| POST | `/api/add-news` | Add news article |
| GET | `/api/top-ten-news` | Get latest news |
| GET | `/api/admin-all-list` | Get all news (admin) |
| PUT | `/api/admin-news-approved` | Approve news (admin) |
| GET | `/api/get-contact-us` | Get contact submissions (admin) |
| POST | `/api/add-contact-us` | Submit contact form |

## Environment Variables

### Backend (.env)
- `MONGOURI`: MongoDB connection string
- `NODE_ENV`: `production` or `development`
- `PORT`: Server port (default: 9000)

### Frontend (.env)
- `VITE_API_URL`: Backend API base URL

## Troubleshooting

### Application Exited Early
- Check MongoDB connection string in `.env`
- Verify MongoDB is accessible
- See Backend logs in Render dashboard

### Frontend Not Loading
- Check `VITE_API_URL` is correctly set
- Browser console should show API errors (F12)
- Verify backend is running and accessible

### CORS Errors
- Backend has CORS enabled for all origins
- Check backend is accessible from frontend URL

## Development

Local development with hot reload:

```bash
# Terminal 1: Backend
cd Backend && npm run dev

# Terminal 2: Frontend
cd news && npm run dev
```

Visit `http://localhost:5173` (frontend) which proxies to `http://localhost:9000/api` (backend)

## Production Build

```bash
# Frontend
cd news && npm run build

# Backend is already production-ready with npm start
```
