import React from 'react';
import styles from './FaqPage.module.scss';
import { NavLink } from 'react-router-dom';
import ServiceAccordion from '../home/ServiceAccordion'; // Assuming this is your accordion
import ContactForm from '../../components/common/contact-form/ContactForm';
import { useServices } from '../../hooks/useServices';

/**
 * FaqPage Component
 * Provides answers to common questions about personal assistance.
 * Includes a contact form for users who need further assistance.
 */

const FaqPage: React.FC = () => {
    const { faq, loading } = useServices();

    // 2. Handle loading state
    if (loading) {
        return (
            <main className={styles.faqContainer}>
                <p>Laddar frågor...</p>
            </main>
        );
    }

    return (
        <main className={styles.faqContainer}>
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Frågor och svar</span>
            </nav>

            <header className={styles.header}>
                <h2>Vanliga frågor och svar</h2>
                <p>
                    Det är mycket att tänka på, och vi har därför samlat ett antal viktiga frågor 
                    och svar som vi ofta får gällande självbestämmande och assistansersättning.
                </p>
            </header>

            <section className={styles.faqGrid}>
                {faq.map((item, index) => (
                    <ServiceAccordion key={index} title={item.q}>
                        <div className={styles.answer}>
                            <p>{item.a}</p>
                        </div>
                    </ServiceAccordion>
                ))}
            </section>

            <section className={styles.contactSection}>
                <div className={styles.contactText}>
                    <h3>Hittade du inte svar på din fråga?</h3>
                    <p>Skriv ditt meddelande här så svarar vi så fort vi kan.</p>
                </div>
                <div className={styles.formWrapper}>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
};

export default FaqPage;
