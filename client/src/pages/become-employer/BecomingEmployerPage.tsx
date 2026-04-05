import bli_egen_arbetsgivare from '../../assets/bli_egen_arbetsgivare.svg';
import Testimonial from '../../components/common/testimonial/Testimonial';
import ServiceAccordion from '../../pages/home/ServiceAccordion'; // Reusing your existing component
import ContactForm from '../../components/common/contact-form/ContactForm';
import styles from './BecomingEmployerPage.module.scss';
import { useServices } from '../../hooks/useServices';
import { NavLink } from 'react-router-dom';

/**
 * BecomingEmployerPage Component
 * Provides information for users transitioning to being their own employer.
 * Uses ServiceAccordion for accessible content toggling.
 */
const BecomingEmployerPage: React.FC = () => {
    const { registrationSteps, loading } = useServices();

    if (loading) {
        return <div className={styles.loading}>Hämtar information...</div>;
    }

    return (
        <div className={styles.pageContainer}>
      
            {/* Navigation Breadcrumbs - Using CSS for the separator arrow */}
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Bli egen arbetsgivare</span>
            </nav>

            {/* Hero Section - Main visual entrance */}
            <header className={styles.hero}>
                <div className={styles.heroContainer}>
                    <img src={bli_egen_arbetsgivare} alt="Personlig assistans hjältebild" className={styles.heroImg} />
                </div>
            </header>

            <main className={styles.content}>
            
                {/* User Testimonial - Building trust with social proof */}
                <Testimonial 
                    quote="Att bli egen arbetsgivare är det bästa beslutet jag tagit! Det är fruktansvärt stor skillnad jämfört med innan."
                    author="Mattias"
                    subline="Ryggmärgsskadad sedan 1997"
                />

                <div className={styles.flexWrapper}>
                    <div className={styles.topFlexWrapper}>
                        {/* Intro Section - Core value proposition */}
                        <section className={styles.introText}>
                            <h2>Mer frihet som egen arbetsgivare</h2>
                            <p>
                                Det är bara du som vet allt du behöver och vill ha i din vardag och därför har du rätt att bestämma hur ska det vara.
                            </p>

                            <p>
                                Välj själv vilka som ska vara dina assistenter, vad de ska få i lön, vilka utbildningar de ska gå, deras arbetsuppgifter och hur jobbet ska skötas.
                            </p>

                            <p>
                                Du kan ge dina assistenter lite mer i lön om du känner att de förtjänar det än vad de får hos kommunen eller en privat anordnare, eftersom du vet att de administrativa omkostnaderna blir betydligt mindre. 
                            </p>
                        </section>

                        {/* Responsibilities List - Legal and administrative overview */}
                        <section className={styles.responsibilities}>
                            <h3 className={styles.respBold}>Som egen arbetsgivare ansvarar du för:</h3>
                            <ul>
                                <li>Arbetsgivaransvar, ansvara för arbetsmiljö etc</li>
                                <li>Rekrytera assistenter</li>
                                <li>Skriva anställningsavtal och ev kollektivavtal</li>
                                <li>Skaffa försäkringar till assistenterna</li>
                                <li>Administrera löner, skatter, semesterersättning</li>
                                <li>Rapportera tider till Försäkringskassa/kommun</li>
                                <li>Kommunicera med Försäkringskassa/kommun, ev överklaga beslut</li>
                                <li>Skicka fakturor till Försäkringskassa/kommun</li>
                                <li>Ordna utbildningar till assistenterna (t.ex. hjärt-lungräddning)</li>
                            </ul>
                        </section>

                        {/* Step-by-step Guide - Using the accessible ServiceAccordion */}
                        <section className={styles.registrationStep}>
                            <p>Som arbetsgivare kan du göra en beräkning av dina grundläggande behov och fylla i blanketter till statliga sidor.</p>
                            
                            {/* Vi loopar igenom alla steg från vår hook */}
                            {registrationSteps.map((step) => (
                                <ServiceAccordion key={step.id} title={step.title}>
                                    <div className={styles.accordionInner}>
                                        <p>{step.content}</p>
                                        
                                        <ul>
                                            {step.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>

                                        <NavLink to="/steg-for-steg" className={styles.readMoreBtn}>
                                            {step.buttonText}
                                        </NavLink>
                                    </div>
                                </ServiceAccordion>
                            ))}
                        </section>

                        {/* Support Invitation */}
                        <section className={styles.contactIntro}>
                            <p>Det gäller även om du känner att det är svårt och du anlitar oss så hör av dig då tar vi hand om allt administrativt arbete för dig.</p>
                            <h2>Varför behöver du få hjälp?</h2>
                            <p>Alla behöver hjälp och vårat mål är att stötta och hjälpa till dem som vill vara självständig för att främja vägen till.</p>
                            <p>Oavsett vad det gäller är du alltid välkommen att <NavLink to="/kontakt"className={styles.inlineLink} >kontakta Egen assistans</NavLink> genom telefon, e-post, chatt eller lämna dina uppgifter så hör vi av oss. Vill du istället sätta dig ner och diskutera kan vi träffas på ett förutsättningslöst möte – självklart är det gratis. </p>
                        </section>
                    </div>

                    <div className={styles.bottomFlexWrapper}>

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

export default BecomingEmployerPage;
