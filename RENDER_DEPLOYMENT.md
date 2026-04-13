# Render Deployment Guide - News Portal

## ✅ Pre-Deployment Checklist

### 1. **MongoDB Atlas Setup**
- [ ] Create a MongoDB Atlas cluster at https://www.mongodb.com/cloud/atlas
- [ ] Create a database user with credentials
- [ ] Get the connection string: `mongodb+srv://username:password@cluster.mongodb.net/`
- [ ] Add Render IP to Network Access (or use 0.0.0.0/0 for all IPs)

### 2. **Environment Variables Setup**
In Render Dashboard, add these environment variables:
```
MONGOURI: mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
NODE_ENV: production
```

### 3. **Code Updates Completed** ✓
- ✓ Fixed render.yaml build and start commands
- ✓ Updated Express to version 4 for compatibility
- ✓ Removed PORT env var (Render sets it automatically)
- ✓ Added uploads directory creation
- ✓ Created .env template file

## 📋 Deployment Steps

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### Step 2: Connect to Render
1. Go to https://dashboard.render.com
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Fill in the details:
   - **Name**: `newsportal-backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm run install:all && npm run build:frontend`
   - **Start Command**: `cd Backend && npm start`
   - **Region**: Choose your preferred region
   - **Plan**: Start with Free tier for testing

### Step 3: Add Environment Variables
In the Render dashboard:
1. Go to your service settings
2. Add environment variables:
   - `MONGOURI`: Your MongoDB connection string
   - `NODE_ENV`: `production`

### Step 4: Deploy
- Click "Create Web Service"
- Render will automatically build and deploy your app
- View logs in the Render dashboard

## 🔧 Important Notes

### Express Version
- Updated to Express 4.x for compatibility with current dependencies
- Avoids path-to-regexp issues present in Express 5.x

### File Upload Limitations
- Currently saves uploads to local `uploads/` directory
- **On Render (stateless environment)**: Files will be deleted when container restarts
- **Recommendation**: Use cloud storage (AWS S3, Cloudinary, or Azure Blob Storage)
- If you want persistent storage on Render, consider upgrading to Paid plans with persistent disks

### Frontend URL
- Frontend will be served at: `https://your-service-name.onrender.com`
- API calls use relative paths `/api` (automatically routes to backend)

### Local Testing Before Deploy
```bash
# Install dependencies
npm run install:all

# Build frontend
npm run build:frontend

# Start backend (make sure MONGOURI is set in .env)
cd Backend
npm start
```

## ⚠️ Known Issues & Solutions

### Issue: Build Fails with Module Not Found
**Solution**: Ensure .gitignore doesn't exclude necessary files. Check:
```bash
git status
```

### Issue: MongoDB Connection Error
**Solution**: 
1. Verify MongoDB URI in Render environment variables
2. Check MongoDB Atlas network access includes Render IPs
3. Ensure database credentials are correct

### Issue: Frontend Shows API 404 Errors
**Solution**: 
1. Check that backend is running (`/api` routes available)
2. Verify frontend build completed successfully
3. Check browser console for actual API errors

### Issue: Uploads Not Persisting
**Solution**: 
- This is expected behavior on Render
- For production, implement cloud storage
- Or upgrade to Render Paid plan with persistent disk

## 🚀 Next Steps for Production

1. **Implement Cloud Storage**
   - Replace local uploads with cloud service
   - Update file upload routes

2. **Add HTTPS Certificate**
   - Render provides free SSL automatically

3. **Enable Auto-Deploy**
   - Connect GitHub and enable auto-deploy on push

4. **Monitor Performance**
   - Use Render logs and metrics dashboard
   - Set up error alerts

5. **Scale When Needed**
   - Upgrade from Free to Paid plan
   - Add more instances or worker services

## 📞 Troubleshooting

**Check Real-Time Logs**:
```bash
# View logs in Render dashboard > your-service > Logs tab
```

**Test API locally**:
```bash
# Terminal 1: Start backend
cd Backend && npm start

# Terminal 2: Test API
curl http://localhost:3000/api/
```

**Verify Frontend Build**:
```bash
cd news
npm run build
# Check if dist/ folder is created
```

---

**Last Updated**: Ready for Render deployment ✅
