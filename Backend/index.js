import express from 'express';
import { dbConnect } from './config/db.js';
import fileUpload from 'express-fileupload';
import router from './route/userRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use(express.json());
app.use(fileUpload());
app.use(cors());

dbConnect();

app.use('/api', router);

// Serve static files from the frontend build directory
const frontendPath = path.join(__dirname, '../news/dist');
if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
  
  // Handle React Router - serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
} else {
  console.warn(`Frontend build directory not found at: ${frontendPath}`);
}

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
