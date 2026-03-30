import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import Contact from './models/Contact';

// Configure environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logs calls in the terminal
app.use(express.json()); // Allows us to read JSON in req.body
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

// Database connection (MongoDB)
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/own-employer';

mongoose.connect(mongoURI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));

// Test-route
app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: 'The server is awake and doing well!',
        timestamp: new Date().toISOString()
    });
});

// POST: Submit a contact request
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new document based on our model
        const newContact = new Contact({
            name,
            email,
            message
    });

    // Save to MongoDB
    await newContact.save();

    res.status(201).json({ message: 'Request saved!', data: newContact });
    } catch (error) {
        console.error('Internal server error:', error);
        res.status(500).json({ message: 'Something went wrong while saving.' });
    }
});

// GET: Get all contacts (good for testing)
app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Could not get contacts.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
});
