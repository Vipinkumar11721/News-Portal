import express from 'express';
import { dbConnect } from './config/db.js';
import fileUpload from 'express-fileupload';
import router from './route/userRoute.js';
import cors from 'cors';

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

dbConnect();

app.use('/api', router);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
