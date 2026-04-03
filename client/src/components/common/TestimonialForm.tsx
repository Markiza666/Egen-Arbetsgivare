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
import Button from '../common/Button';

const TestimonialForm: React.FC = () => {
    const [formData, setFormData] = useState<TestimonialFormData>({
        name: '',
        email: '',
        rating: 5, // Default to 5 stars
        comment: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we will eventually add the API call to your backend
        console.log('Submitting testimonial:', formData);
        setIsSubmitted(true);
    };

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
                        <Button type="submit" variant="icon"
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

            {/* Using the new Button component as a submit button */}
            <Button type="submit" variant="primary" style={{ width: '100%' }}>
                Skicka recension
            </Button>
        </form>
    );
};

export default TestimonialForm;
