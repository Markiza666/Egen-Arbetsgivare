import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import Contact from './models/Contact';
import Testimonial from './models/Testimonial';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware Stack ---
app.use(helmet());
app.use(morgan('dev')); 
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

// --- Database Connection ---
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/own-employer';

mongoose.connect(mongoURI).catch(() => {
    // Silent catch or simple exit for production
    process.exit(1);
});

// --- API Routes ---

app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/contact', async (req: Request, res: Response) => {
    try {
        const { name, email, phone, message, preferences, hasAssistance } = req.body;
        const newContact = new Contact({
            name, email, phone, message, preferences, hasAssistance
        });
        await newContact.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.get('/api/contact', async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).send();
    }
});

app.post('/api/testimonials', async (req: Request, res: Response) => {
    try {
        const { author, role, content, rating } = req.body;
        const newTestimonial = new Testimonial({ author, role, content, rating });
        await newTestimonial.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.get('/api/testimonials', async (req: Request, res: Response) => {
    try {
        const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).send();
    }
});

// --- Server Lifecycle ---
app.listen(PORT, () => {
    // Keeping this console log to know the server is active
    console.log(`Server running on port ${PORT}`);
});
