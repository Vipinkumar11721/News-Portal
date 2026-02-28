import express from 'express';
import { dbConnect } from './config/db.js';
import fileUpload from 'express-fileupload';
import router from './route/userRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

dbConnect();

app.use('/api', router);

// Serve static files from the frontend build directory
const frontendPath = path.join(__dirname, '../news/dist');
app.use(express.static(frontendPath));

// Handle React Router - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
