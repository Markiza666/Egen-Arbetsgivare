import { NavLink } from 'react-router-dom';
import register from '../../assets/register.svg';
import ContactForm from '../../components/common/ContactForm';
import { registrationSteps } from '../../data/registrationSteps';
import styles from './RegistrationGuide.module.scss';
import StepCard from './StepCards';

const RegistrationGuide: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>

            {/* Navigation Breadcrumbs - Using CSS for the separator arrow */}
            <nav className={styles.breadcrumbs}>
                <a href="/">Hem</a>
                <span>Bli egen arbetsgivare</span>
                <span>Bli egen arbetsgivare</span>
            </nav>

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroContainer}>
                    <img src={register} alt="Personlig assistans hjältebild" className={styles.heroImg} />
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.flexWrapper}>
                    <div className={styles.topFlexWrapper}>
                        <h2>Steg för steg guid</h2>
                        <h3>Såhär registrerar du dig som egen arbetsgivare</h3>
                        <section className={styles.stepper}>
                            {registrationSteps.map((step) => (
                                    <StepCard key={step.number} {...step} />
                            ))}
                        </section>

                        <section className={styles.contactIntro}>
                            <p>Tveka inte att <NavLink to="/kontakt"className={styles.inlineLink} >kontakta Egen assistans</NavLink> eller lämna dina uppgifter så kontaktar vi dig för att hjälpa dig. </p>
                        </section>
                    </div>

                    <div className={styles.bottomFlexWrapper}>
                        <section className={styles.formSection}>
                            <ContactForm />
                        </section>
                    </div>
                </div>
                
            </main>
        </div>
    );
};

export default RegistrationGuide;
