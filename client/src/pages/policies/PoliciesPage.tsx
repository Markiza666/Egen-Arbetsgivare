import React from 'react';
import styles from './PoliciesPage.module.scss';
import { NavLink } from 'react-router-dom';

/**
 * PoliciesPage Component
 * Displays the company's privacy policy and data handling procedures.
 * Structured with focus on readability and clear navigation.
 */
const PoliciesPage: React.FC = () => {
    return (
        <main className={styles.policiesContainer}>
            {/* Breadcrumbs for easy navigation back to home */}
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Våra policies</span>
            </nav>

            <header className={styles.header}>
                <h2>Våra policies</h2>
                <p className={styles.intro}>
                    Här hittar du information om hur vi hanterar dina uppgifter och vår syn på din integritet.
                </p>
            </header>

            <article className={styles.content}>
                {/* Section: Data Handling */}
                <section className={styles.policySection}>
                    <h3>Hantering av personuppgifter</h3>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout. The point of using Lorem Ipsum 
                        is that it has a more-or-less normal distribution of letters, as opposed to 
                        using 'Content here, content here'.
                    </p>
                    <p>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum 
                        as their default model text, and a search for 'lorem ipsum' will uncover 
                        many web sites still in their infancy.
                    </p>
                </section>

                <hr className={styles.divider} />

                {/* Section: Privacy Policy */}
                <section className={styles.policySection}>
                    <h3>Integritetspolicy</h3>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout. The point of using Lorem Ipsum 
                        is that it has a more-or-less normal distribution of letters.
                    </p>
                    <p>
                        Various versions have evolved over the years, sometimes by accident, 
                        sometimes on purpose (injected humour and the like).
                    </p>
                </section>

                {/* Footer / Contact call-to-action within the policy page */}
                <footer className={styles.policyFooter}>
                    <p>
                        Kontakta Egen assistans eller skicka meddelande till våra 
                        <NavLink to="/kontakt"> kontaktpersoner</NavLink> om du har frågor.
                    </p>
                </footer>
            </article>
        </main>
    );
};

export default PoliciesPage;
