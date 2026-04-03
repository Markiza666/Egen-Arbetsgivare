/**
 * Contact Schema
 * Defines the structure for contact requests stored in MongoDB.
 * Includes personal details, contact preferences, and current assistance status.
 */
import mongoose, { Schema } from 'mongoose';
import type { IContact } from '../types';

const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false }, // Optional field
    message: { type: String, required: true },
    preferences: { type: [String], default: [] }, // Array for multiple choice selections
    hasAssistance: { type: String, required: true }, // 'yes' or 'no' from radio buttons
    createdAt: { type: Date, default: Date.now } // Automatic timestamp
});

export default mongoose.model<IContact>('Contact', ContactSchema);
