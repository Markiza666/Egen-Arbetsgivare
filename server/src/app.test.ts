import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../src/app';
import Contact from '../src/models/Contact';
import Testimonial from '../src/models/Testimonial';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create({
        binary: {
            version: '7.0.0' // Vi tvingar en stabil version
        }
    });
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
}, 120000);

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    // Clean collections between tests to ensure isolation
    await Contact.deleteMany({});
    await Testimonial.deleteMany({});
});

describe('API Endpoints Coverage Blitz', () => {
    
    // --- Health Check ---
    describe('GET /api/health', () => {
        it('should return 200 and status ok', async () => {
            const res = await request(app).get('/api/health');
            expect(res.status).toBe(200);
            expect(res.body.status).toBe('ok');
            expect(res.body).toHaveProperty('timestamp');
        });
    });

    // --- Contact Routes ---
    describe('Contact API', () => {
        it('should create a new contact request', async () => {
            const contactData = {
                name: 'Markiza',
                email: 'test@example.com',
                message: 'Hello!',
                hasAssistance: 'yes'
            };
            const res = await request(app).post('/api/contact').send(contactData);
            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);
        });

        it('should fetch all contacts', async () => {
            await Contact.create({ name: 'User1', email: 'u1@ex.com', message: 'Hi', hasAssistance: 'no' });
            const res = await request(app).get('/api/contact');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(1);
            expect(res.body[0].name).toBe('User1');
        });

        it('should return 500 on contact creation error', async () => {
            // Force error by sending invalid data (missing required name)
            const res = await request(app).post('/api/contact').send({});
            expect(res.status).toBe(500);
            expect(res.body.success).toBe(false);
        });
    });

    // --- Testimonial Routes ---
    describe('Testimonials API', () => {
        it('should fetch only approved testimonials', async () => {
            await Testimonial.create({ author: 'A', content: 'Good', rating: 5, approved: true });
            await Testimonial.create({ author: 'B', content: 'Bad', rating: 1, approved: false });
            
            const res = await request(app).get('/api/testimonials');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(1);
            expect(res.body[0].author).toBe('A');
        });

        it('should fetch a single testimonial by ID', async () => {
            const t = await Testimonial.create({ author: 'C', content: 'Great', rating: 4, approved: true });
            const res = await request(app).get(`/api/testimonials/${t._id}`);
            expect(res.status).toBe(200);
            expect(res.body.author).toBe('C');
        });

        it('should return 404 if testimonial is not found', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            const res = await request(app).get(`/api/testimonials/${fakeId}`);
            expect(res.status).toBe(404);
            expect(res.body.message).toBe('Testimonial not found.');
        });

        it('should return 500 if ID format is invalid', async () => {
            const res = await request(app).get('/api/testimonials/123-invalid-id');
            expect(res.status).toBe(500);
        });

        it('should create a new testimonial', async () => {
            const res = await request(app).post('/api/testimonials').send({
                author: 'Tester',
                content: 'Excellent service',
                rating: 5
            });
            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);
        });

        it('should return 500 on testimonial creation error', async () => {
            const res = await request(app).post('/api/testimonials').send({});
            expect(res.status).toBe(500);
            expect(res.body.success).toBe(false);
        });
    })
    
    describe('GET Error Handling', () => {
        it('should return 500 when GET /api/contact fails', async () => {
            // Mock Contact.find to throw an error
            const findSpy = vi.spyOn(Contact, 'find').mockImplementationOnce(() => {
                throw new Error('Database error');
            });

            const res = await request(app).get('/api/contact');
            expect(res.status).toBe(500);
            findSpy.mockRestore(); // Restore original behavior
        });

        it('should return 500 when GET /api/testimonials fails', async () => {
            // Mock Testimonial.find to throw an error
            const findSpy = vi.spyOn(Testimonial, 'find').mockImplementationOnce(() => {
                throw new Error('Database error');
            });

            const res = await request(app).get('/api/testimonials');
            expect(res.status).toBe(500);
            findSpy.mockRestore(); // Restore original behavior
        });
    });;
});