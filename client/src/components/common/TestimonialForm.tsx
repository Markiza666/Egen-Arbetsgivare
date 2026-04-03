/**
 * TestimonialForm Component
 * * Responsibilities:
 * - Provides an interactive interface for users to submit their experiences.
 * - Manages local state for form inputs (name, email, rating, and comment).
 * - Handles star-rating logic (using Unicode characters) and form submission.
 * - Displays a success message upon successful interaction.
 * * Usage & Context:
 * - Integrated into the 'TestimonialSection' or 'HomePage'.
 * - Data is collected locally and will be dispatched to the backend API (e.g., /api/testimonials).
 * - Utilizes global SCSS variables for consistent styling across the application.
 */
import React, { useState } from 'react';
import styles from './TestimonialForm.module.scss';
import type { TestimonialFormData } from '../../types';
import Button from './Button';

const TestimonialForm: React.FC = () => {
    const [formData, setFormData] = useState<TestimonialFormData>({
        name: '',
        email: '',
        rating: 5, // Default to 5 stars
        comment: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state

    /**
     * Submits the testimonial to the backend API
     */
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://127.0.0.1:5001/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: formData.name,   // Mapping 'name' to 'author' in backend
                    content: formData.comment, // Mapping 'comment' to 'content' in backend
                    rating: formData.rating,
                    // email is currently not in the schema, but could be added later
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Server returned an error');
            }
        } catch (error) {
            console.error('Failed to connect to the server:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Success View ---
    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <h3>Tack för att du delar din upplevelse!</h3>
                <p>Din recension har skickats för granskning.</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Skicka en till
                </Button>
            </div>
        );
    }

    // --- Form View ---
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Dela din upplevelse</h2>
            
            <div className={styles.inputGroup}>
                <label htmlFor="name">Namn</label>
                <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="email">E-post (visas ej offentligt)</label>
                <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                />
            </div>

            <div className={styles.inputGroup}>
                <label>Betyg</label>
                <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Button 
                            key={star}
                            type="button" // Important: Changed from "submit" to "button" to avoid triggering form submit
                            variant="icon"
                            className={star <= formData.rating ? styles.activeStar : styles.star}
                            onClick={() => setFormData({...formData, rating: star})}
                            aria-label={`Ge ${star} stjärnor`}
                        >
                            ★
                        </Button>
                    ))}
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="comment">Din berättelse</label>
                <textarea 
                    id="comment" 
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    required 
                />
            </div>

            <Button 
                type="submit" 
                variant="primary" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Skickar...' : 'Skicka recension'}
            </Button>
        </form>
    );
};

export default TestimonialForm;
