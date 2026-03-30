import mongoose, { Schema, Document } from 'mongoose';
import type { IContact } from '../types';


const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IContact>('Contact', ContactSchema);
