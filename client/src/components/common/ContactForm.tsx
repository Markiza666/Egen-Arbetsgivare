/**
 * ContactForm Component
 * * Responsibilities:
 * - Collects user data via various input types (text, checkbox, radio).
 * - Manages complex form state, including arrays for multiple choices.
 * - Handles asynchronous submission to the backend API.
 * - Provides feedback via a success view upon successful submission.
 */
import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import Button from './Button';

const ContactForm: React.FC = () => {
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        message: '',
        preferences: [] as string[],
        hasAssistance: '',
        gdprConsent: false
    };

    const [formData, setFormData] = useState(initialFormState);
    const [submitted, setSubmitted] = useState(false);
    // This state tracks the loading status during the API call
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Handles updates for all input types.
     * Special logic is applied for checkboxes (arrays and booleans).
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
    
        if (type === 'checkbox' && name === 'preferences') {
            const { checked, value: checkboxValue } = event.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                preferences: checked 
                    ? [...prev.preferences, checkboxValue]
                    : prev.preferences.filter(item => item !== checkboxValue)
            }));
        } else if (type === 'checkbox' && name === 'gdprConsent') {
            const { checked } = event.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, gdprConsent: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    /**
     * Submits the form data to the server.
     */
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        // Final guard to ensure GDPR consent is granted before submission
        if (!formData.gdprConsent) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    preferences: formData.preferences,
                    hasAssistance: formData.hasAssistance
                }),
            });

            if (response.ok) {
                console.log('Data saved to database successfully!');
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                console.error('Server error:', errorData.message);
                alert('Något gick fel vid sparandet. Försök igen!');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Kunde inte nå servern. Kontrollera din internetanslutning.');
        } finally {
            // Ensure loading state is disabled regardless of success or failure
            setIsSubmitting(false);
        }
    };

    /**
     * Resets the form to its initial state to allow a new submission.
     */
    const handleReset = () => {
        setFormData(initialFormState);
        setSubmitted(false);
    };

    // --- SUCCESS VIEW ---
    if (submitted) {
        return (
            <div className={styles.successMessage}>
                <h3>Tack för ditt meddelande!</h3>
                <p>Vi har tagit emot dina uppgifter och återkommer till dig så snart vi kan.</p>
                <Button 
                    variant="outline" 
                    onClick={handleReset}
                >
                    Skicka ett till meddelande
                </Button>
            </div>
        );
    }

    // --- FORM VIEW ---
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>

            <p>Fält markerade med en (<span className={styles.requiredStar}>*</span>) är obligatoriska.</p>
            
            <div className={styles.inputGroup}>
                <label htmlFor="name">Namn <span className={styles.requiredStar}>*</span></label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="email">E-post <span className={styles.requiredStar}>*</span></label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className={styles.checkboxSection}>
                <p className={styles.sectionLabel}>Jag önskar:</p>
                {[
                    'Bli uppringd',
                    'Bli kontaktad via e-post',
                    'Boka ett personligt möte',
                    'Boka ett videosamtal'
                ].map(option => (
                    <label key={option} className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="preferences"
                            value={option}
                            checked={formData.preferences.includes(option)}
                            onChange={handleChange}
                        />
                        {option}
                    </label>
                ))}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="message">Hur kan vi hjälpa dig? <span className={styles.requiredStar}>*</span></label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} />
            </div>

            <div className={styles.radioSection}>
                <p className={styles.sectionLabel}>Nuvarande situation:</p>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="hasAssistance"
                        value="yes"
                        checked={formData.hasAssistance === 'yes'}
                        onChange={handleChange}
                        required
                    />
                    Jag har personlig assistans just nu
                </label>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="hasAssistance"
                        value="no"
                        checked={formData.hasAssistance === 'no'}
                        onChange={handleChange}
                    />
                    Jag har inte personlig assistans just nu
                </label>
            </div>

            <div className={styles.consentSection}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleChange}
                        required
                    />
                    Jag accepterar att Egen Arbetsgivare hanterar informationen jag lämnar i enlighet med sin integritetspolicy. <span className={styles.requiredStar}>*</span>
                </label>
            </div>

            {/* Submit Action: Using type="submit" and dynamic label for better UX */}
            <Button 
                variant="primary" 
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
            </Button>
        </form>
    );
};

export default ContactForm;
