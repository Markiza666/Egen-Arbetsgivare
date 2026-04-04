import TestimonialList from '../../components/common/testimonial/TestimonialList';
import TestimonialForm from '../../components/common/testimonial/TestimonialForm';
import styles from './TestimonialsPage.module.scss';
import ContactForm from '../../components/common/ContactForm';
import Button from '../../components/common/button/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className={styles.pageContainer}>
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Våra kunder</span>
            </nav>

            <h2>Vad våra medlemmar säger</h2>

            <main className={styles.content}>
                <div className={styles.flexWrapper}>
                    <div className={styles.topFlexWrapper}>
                        <section className={styles.testimonialGrid}>
                            <TestimonialList />
                        </section>

                        <section className={styles.formContainer}>
                            {!showForm ? (
                                <Button 
                                variant="primary" 
                                onClick={() => setShowForm(true)}>
                                    Dela din upplevelse med oss
                                </Button>
                            ) : (
                                <div className={styles.formFadeIn}>
                                    <h3>Har vi hjälpt dig?</h3>
                                    <p>Dela gärna din egen berättelse och inspirera andra!</p>
                                    <TestimonialForm />
                                    <Button 
                                    variant="cancel" 
                                    onClick={() => setShowForm(false)}
                                    >
                                        Avbryt
                                    </Button>
                                </div>
                            )}
                        </section>
                    </div>

                    <div className={styles.bottomFlexWrapper}>
                        <p>Du är alltid välkommen att <NavLink to="/kontakt"className={styles.inlineLink} >kontakta Egen assistans</NavLink> genom telefon, e-post, chatt för att berätta dina upplevelser som egen arbetsgivaren. </p>

                        {/* Contact Form Section */}
                        <section className={styles.formSection}>
                            <ContactForm />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TestimonialsPage;
