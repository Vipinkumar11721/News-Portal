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
- MongoDB (choose one option below)

### MongoDB Setup Options

#### Option 1: MongoDB Atlas (Recommended for Production)
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Create a database user with username/password
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/`
5. Add your IP address to Network Access (or use `0.0.0.0/0` for all IPs)

#### Option 2: Local MongoDB (For Development)
1. Download and install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use default connection: `mongodb://localhost:27017/NewsPortal`

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

Create a `.env` file in the news directory (for local development only):
```env
VITE_API_URL=http://localhost:3000/api  # Local development
```

For production (Render), the API URL is relative (`/api`), so no environment variable is needed.

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

### 2. Create Admin User & Setup MongoDB
To access the admin dashboard, you need to create an admin user:

1. Visit `https://your-app-url/AdminSignUp`
2. Fill out the admin registration form
3. Login with admin credentials at `https://your-app-url/login`
4. Admin dashboard will be available at `https://your-app-url/admin-newslist`

**MongoDB Atlas Setup (Required for Production):**
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a cluster and database user
3. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/newsportal`
4. Add Render's IP addresses to Network Access (use `0.0.0.0/0` for all IPs)
5. Test the connection string in your local `.env` file first

### 3. Deploy

The `render.yaml` configuration allows Render to automatically deploy the full-stack application:

- **Service**: Node.js web service that serves both backend API and frontend static files
- **Build Command**: `npm run install:all && npm run build:frontend`
- **Start Command**: `cd Backend && npm start`

Click "Deploy" in your Render dashboard and Render will:
1. Install all dependencies
2. Build the React frontend
3. Start the Node.js server
4. Serve the application at your Render URL

### 4. Set Environment Variables in Render

In Render Dashboard → Environment:
- `MONGOURI`: `mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority`
- `NODE_ENV`: `production`

## Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user-register` | Register new user |
| POST | `/api/admin-register` | Register new admin user |
| POST | `/api/login` | User/Admin login |
| POST | `/api/add-news` | Add news article |
| GET | `/api/top-ten-news` | Get latest news |
| GET | `/api/admin-all-list` | Get all news (admin) |
| PUT | `/api/admin-news-approved` | Approve news (admin) |
| GET | `/api/get-contact-us` | Get contact submissions (admin) |
| POST | `/api/add-contact-us` | Submit contact form |

## Environment Variables

### Backend (.env)
- `MONGOURI`: MongoDB connection string
  - **Local Development**: `mongodb://localhost:27017/NewsPortal`
  - **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net/newsportal?retryWrites=true&w=majority`
- `NODE_ENV`: `development` or `production`
- `PORT`: Server port (default: 3000, Render sets automatically)

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

### Local Development Setup

1. **Start MongoDB** (make sure it's running locally)

2. **Start Backend Server:**
   ```bash
   cd Backend
   npm start
   # Runs on http://localhost:3000
   ```

3. **Start Frontend Server:**
   ```bash
   cd news
   npm run dev
   # Runs on http://localhost:5173
   ```

4. **Test Application:**
   - Open `http://localhost:5173` in browser
   - Try UserSignUp/AdminSignUp and Login
   - Frontend proxies `/api` calls to backend automatically

### Development Notes
- Hot reload enabled for both frontend and backend
- API calls use `/api` prefix (proxied to backend)
- File uploads saved to `Backend/uploads/` directory

## Production Build

```bash
# Frontend
cd news && npm run build

# Backend is already production-ready with npm start
```
