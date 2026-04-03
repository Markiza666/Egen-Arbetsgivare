/**
 * Testimonial Schema
 * Stores user reviews and ratings.
 */
import mongoose, { Schema } from 'mongoose'; 
import type { ITestimonial } from '../types';

const TestimonialSchema: Schema = new Schema({
    author: { type: String, required: true },
    role: { type: String, required: false },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    approved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
