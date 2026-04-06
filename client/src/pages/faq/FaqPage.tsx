import React from 'react';
import styles from './FaqPage.module.scss';
import { NavLink } from 'react-router-dom';
import ServiceAccordion from '../home/ServiceAccordion'; // Assuming this is your accordion
import ContactForm from '../../components/common/contact-form/ContactForm';
import { useServices } from '../../hooks/useServices';
import { useSearch } from '../../hooks/useSearch';

/**
 * FaqPage Component
 * Provides answers to common questions about personal assistance.
 * Includes a contact form for users who need further assistance.
 */

const FaqPage: React.FC = () => {
    const { faq, loading } = useServices();
    const { searchQuery } = useSearch();

    /**
     * DERIVED STATE: Filter the FAQ list based on the global search query.
     * This happens automatically every time searchQuery changes in the Header.
     */
    const filteredFaq = faq.filter(item => {
        const query = searchQuery.toLowerCase();
        return (
            item.q.toLowerCase().includes(query) || 
            item.a.toLowerCase().includes(query)
        );
    });

    // Handle loading state
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
                {searchQuery && (
                    <p className={styles.searchFeedback}>
                        Visar resultat för: "<strong>{searchQuery}</strong>"
                    </p>
                )}
            </header>

            <section className={styles.faqGrid}>
                {filteredFaq.length > 0 ? (
                    filteredFaq.map((item, index) => (
                        <ServiceAccordion key={index} title={item.q}>
                            <div className={styles.answer}>
                                <p>{item.a}</p>
                            </div>
                        </ServiceAccordion>
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <p>Vi hittade inga svar som matchar din sökning.</p>
                    </div>
                )}
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
