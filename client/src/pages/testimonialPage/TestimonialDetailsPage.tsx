import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import styles from './TestimonialDetailsPage.module.scss';
import type { ITestimonial } from '../../types';
import TestimonialForm from '../../components/common/testimonial/TestimonialForm';
import ContactForm from '../../components/common/contact-form/ContactForm';


const TestimonialDetailsPage: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const { id } = useParams<{ id: string }>(); // Plockar ID:t från URL:en
    const navigate = useNavigate();
    const [testimonial, setTestimonial] = useState<ITestimonial | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/testimonials/${id}`);
                if (!response.ok) throw new Error('Kunde inte hitta berättelsen.');
                const data = await response.json();
                setTestimonial(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (isLoading) return <div className={styles.loading}>Laddar berättelsen...</div>;
    if (!testimonial) return <div className={styles.error}>Hittade ingen berättelse.</div>;

    return (
        <main className={styles.content}>
            <Button 
            variant="outline" 
            className={styles.backButton}
            onClick={() => navigate(-1)}>
                ← Tillbaka
            </Button>

            <div className={styles.flexWrapper}>
                <div className={styles.topFlexWrapper}>
                    <section className={styles.testimonialGrid}>
                        <article className={styles.articleContainer}>
                            
                            <header className={styles.header}>
                                <div className={styles.rating}>
                                    {'★'.repeat(testimonial.rating)}
                                </div>
                                <h1>{testimonial.author}s resa</h1>
                                {testimonial.role && <p className={styles.role}>{testimonial.role}</p>}
                            </header>

                            <div className={styles.content}>
                                <p className={styles.text}>{testimonial.content}</p>
                            </div>
                        </article>
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
    );
};

export default TestimonialDetailsPage;
