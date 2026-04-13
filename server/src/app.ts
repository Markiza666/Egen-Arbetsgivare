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

// --- Middleware Stack ---
app.use(helmet());

/* v8 ignore next 3 */
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
app.use(express.json());

/* v8 ignore next 4 */
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

// --- API Routes ---

/**
 * Health check endpoint to verify server status
 */
app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

/**
 * Create a new contact request
 */
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

/**
 * Fetch all contact requests, sorted by newest first
 */
app.get('/api/contact', async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).send();
    }
});

/**
 * Fetch all approved testimonials
 */
app.get('/api/testimonials', async (req: Request, res: Response) => {
    try {
        const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).send();
    }
});

/**
 * Fetch a single testimonial by ID
 */
app.get('/api/testimonials/:id', async (req: Request, res: Response) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found.' });
        }
        
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving testimonial.' });
    }
});

/**
 * Submit a new testimonial (defaults to unapproved)
 */
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

export default app;
