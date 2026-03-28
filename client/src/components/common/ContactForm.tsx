import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

/**
 * ContactForm Component
 * * Includes contact preferences, status radio buttons, and GDPR consent.
 */
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
    
        if (type === 'checkbox' && name === 'preferences') {
            const { checked, value: checkboxValue } = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                preferences: checked 
                    ? [...prev.preferences, checkboxValue]
                    : prev.preferences.filter(item => item !== checkboxValue)
            }));
        } else if (type === 'checkbox' && name === 'gdprConsent') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, gdprConsent: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.gdprConsent) return; // Security check
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

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
                <button 
                    type="button" 
                    className={styles.submitBtn} 
                    onClick={handleReset}
                >
                    Skicka ett till meddelande
                </button>
            </div>
        );
    }

    // --- FORM VIEW ---
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>

            <p>Fält markerade med en (<span className={styles.requiredStar}>*</span>) är obligatoriska.</p>
            
            {/* Standard fields */}
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

            {/* Contact Preferences */}
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

            {/* Assistance Status */}
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

            {/* GDPR Consent */}
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

            <button 
                type="submit" 
                className={styles.submitBtn} 
                disabled={!formData.gdprConsent}
            >
                Kontakt
            </button>
        </form>
    );
};

export default ContactForm;
