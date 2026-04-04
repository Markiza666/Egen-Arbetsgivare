/**
 * HomePage Component
 * * The main entry point of the application.
 * Responsibilities:
 * - Introduces the core business value proposition.
 * - Aggregates key highlights from services, news, and client stories.
 * - Acts as a gateway to deeper sections of the site (Assistans, Arbetsgivare, etc.).
 */
import React, { useState } from 'react';
import startHero from '../../assets/startHero.svg';
import ServiceAccordion from './ServiceAccordion';
import { NavLink } from 'react-router-dom'; 
import styles from './HomePage.module.scss';
import { useServices } from '../../hooks/useServices';
import Testimonial from '../../components/common/testimonial/Testimonial';
import TestimonialForm from '../../components/common/testimonial/TestimonialForm';
import Button from '../../components/common/button/Button';

const HomePage: React.FC = () => {
    const { services, loading } = useServices();
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility

    if (loading) return <div>Laddar tjänster...</div>;

    return (
        <div className={styles.homePage}>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <img src={startHero} alt="Hero bild" className={styles.heroImg} />
                    <h1 className={styles.heroTitle}>
                        <span>Egen arbetsgivare?</span>
                        <span>Såhär kommer du igång!</span>
                    </h1>
                </div>
            </section>

            <div className={styles.contentWrapper}>
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <ServiceAccordion key={service.id} title={service.title}>
                            <p>{service.description}</p>
                            
                            {/* List from data */}
                            <ul>
                                {service.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>

                            <NavLink to={service.path || `/tjanster/${service.id}`} className={styles.readMore}>
                                Läs mer om {service.title}
                            </NavLink>
                        </ServiceAccordion>
                    ))}
                </div>

                <section className={styles.mainInfo}>
                    <h2>Ta kommandot över din vardag</h2>

                    <h3>Mer frihet som egen arbetsgivare</h3>

                    <p>Idag anordnas bara tre procent av all personlig assistans av brukaren själv. Det borde kunna vara betydligt fler, särskilt om man kan få hjälp med det administrativa och juridiska.  Som egen anordnare, med egen firma, bestämmer du själv hur du vill ha det.</p>

                    <p>Välj själv vilka som ska vara dina assistenter, vad de ska få i lön, vilka utbildningar de ska gå, deras arbetsuppgifter och hur jobbet ska skötas.</p>

                    <p>Kom att <NavLink to="/bli-egen-arbetsgivare">bli egen arbetsgivare</NavLink> och <NavLink to="/kontakt">kontakta Egen assistans</NavLink> om du vill ha hjälp.</p>
                </section>
            </div>

            <div className={styles.testimonial}>
                <section className={styles.testimonialSection}>
                    <hr className={styles.divider} />
                    <h2>Vad våra medlemmar säger</h2>
                    
                    <div className={styles.testimonialGrid}>
                        <Testimonial 
                            quote="Att bli egen arbetsgivare var det bästa beslutet för min familj. Vi har äntligen kontroll." 
                            author="Karin S." 
                            subline="Egen arbetsgivare sedan 2023" 
                        />
                        <Testimonial 
                            quote="Suveränt stöd med det administrativa. Nu kan jag fokusera på att vara pappa istället för pappersarbetare." 
                            author="Marcus L." 
                            subline="Medlem i Västerbotten" 
                        />
                    </div>

                    <div className={styles.formContainer}>
                        {!showForm ? (
                            <Button 
                            variant="primary" 
                            onClick={() => setShowForm(true)}>
                                Dela din upplevelse med oss
                            </Button>
                        ) : (
                            <div className={styles.formFadeIn}>
                                <TestimonialForm />
                                <Button 
                                variant="cancel" 
                                onClick={() => setShowForm(false)}
                                >
                                    Avbryt
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
