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

    /**
     * Handles updates for all input types.
     * Special logic is applied for checkboxes (arrays and booleans).
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
    
        // Logic for multiple-choice preferences (Checkbox array)
        if (type === 'checkbox' && name === 'preferences') {
            const { checked, value: checkboxValue } = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                preferences: checked 
                    ? [...prev.preferences, checkboxValue]
                    : prev.preferences.filter(item => item !== checkboxValue)
            }));
        // Logic for single GDPR consent (Boolean)
        } else if (type === 'checkbox' && name === 'gdprConsent') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, gdprConsent: checked }));
        // Logic for standard text inputs and radio buttons
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    /**
     * Submits the form data to the server.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Final guard to ensure GDPR consent is granted
        if (!formData.gdprConsent) return; // Security check

        try {
            // Attempting to post the data to the backend API
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message 
                    // Note: Ensure backend is updated if phone/preferences are needed
                }),
            });

            if (response.ok) {
                console.log('Data sparad i databasen!');
                setSubmitted(true);
            } else {
                console.error('Servern svarade med ett fel');
            }
        } catch (error) {
            console.error('Kunde inte nå servern:', error);
        }
            console.log('Form submitted:', formData);
            setSubmitted(true);
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
            
            {/* Standard Input Fields */}
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

            {/* Checkbox Section for multiple options */}
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

            {/* Radio Section for mutually exclusive choices */}
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

            {/* GDPR Compliance Checkbox*/}
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

            {/* Form Actions */}
            <Button 
            variant="primary" 
            onClick={handleReset}
            >
                Skicka ett till meddelande
            </Button>
        </form>
    );
};

export default ContactForm;
