

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


//const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

app.use('/api/books', bookRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));