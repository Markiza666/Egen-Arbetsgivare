/**
 * AboutPage Component
 * Provides detailed information about the "Egen arbetsgivare" concept.
 * Features a responsive grid for information, a video section, and a contact form.
 */
import styles from './AboutPage.module.scss';
import videoPlaceholder from '../../assets/video-thumbnail.svg';
import ContactForm from '../../components/common/contact-form/ContactForm';
import { NavLink } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <main className={styles.aboutContainer}>
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Om</span>
            </nav>
            
            <section className={styles.heroSection}>
                <h2>Om Egen arbetsgivare</h2>
                <p className={styles.lead}>
                    Din startpunkt för självbestämmande och kontroll över din personliga assistans.
                </p>
            </section>

            <section className={styles.infoGrid}>
                <div className={styles.topSection}>
                    <div className={styles.textBlock}>
                        <h2>Vad innebär det att vara egen arbetsgivare?</h2>
                        <p>
                            <strong className={styles.p}>egenarbetsgivare.se</strong> är skapad för att vara den självklara startpunkten för dig som vill ta kontrollen över din personliga assistans. Vi finns till för att sprida kunskap, inspirera fler att våga ta steget och för att samla alla viktiga verktyg på en och samma plats.
                        </p>
                    </div>

                    <div className={styles.textBlock}>
                        <h2>Egen arbetsgivare och Egen Assistans</h2>
                        <p>
                            Att vara egen arbetsgivare innebär att du har det juridiska ansvaret, men du behöver aldrig stå ensam. Genom vårt samarbete får du en trygg partner som sköter det administrativa medan du fokuserar på ditt liv.
                        </p>
                    </div>
                    
                    <div className={styles.videoSection}>
                        <h2>Se hur det fungerar</h2>

                        <div className={styles.videoWrapper}>
                            <img src={videoPlaceholder} alt="Video om hur Egen Assistans fungerar" />
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.ctaSection}>
                        <h2>Ta nästa steg</h2>

                        <p>Vi erbjuder oberoende och kostnadsfri rådgivning. Lämna dina uppgifter så hör vi av oss!</p>

                        <div className={styles.formWrapper}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
