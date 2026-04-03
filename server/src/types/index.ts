/**
 * IContact Interface
 * Represents a contact request document in the database.
 */
import { Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    phone?: string;
    message: string;
    preferences: string[];
    hasAssistance: string;
    createdAt: Date;
}

export interface ITestimonial extends Document {
    author: string;
    role: string;
    content: string;
    rating: number;
    approved: boolean;
    createdAt: Date;
}

