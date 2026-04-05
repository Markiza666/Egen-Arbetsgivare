import styles from './AboutAssistancePage.module.scss';
import assistance from '../../assets/assistance.svg';
import ContactForm from '../../components/common/contact-form/ContactForm';
import { useServices } from '../../hooks/useServices';
import { LssInfo } from '../../components/assistance/LssInfo';
import { BasicNeeds } from '../../components/assistance/BasicNeeds';
import ServiceAccordion from '../home/ServiceAccordion';
import { NavLink } from 'react-router-dom';

const AboutAssistancePage: React.FC = () => {
    const { assistanceProviders, loading } = useServices();

    if (loading) return <div>Laddar tjänster...</div>;
    
    return (
        <div className={styles.assistancePage}>
            <nav className={styles.breadcrumbs}>
                <NavLink className={styles.nav} to="/">Hem</NavLink>
                <span>Personlig assistans</span>
            </nav>

            <header className={styles.hero}>
                <div className={styles.heroContainer}>
                    <img src={assistance} alt="Hero bild" className={styles.heroImg} />
                </div>
            </header>
            
            <main className={styles.content}>
                <h2>Om personlig assistans</h2>

                <div className={styles.flexWrapper}>
                    <div className={styles.topFlexWrapper}>
                        <section className={styles.introSection}>
                            <p>Idén med personlig assistans är att du som har en omfattande funktionsnedsättning ska kunna leva ett så självständigt liv som möjligt. FN slår i sin konvention fast att ”alla människor oavsett funktionsförmåga ska fullt ut åtnjuta alla mänskliga rättigheter och grundläggande friheter”.</p>

                            <p>Personlig assistans kan du få under hela eller delar av dygnet, beroende på ditt behov. Assistenterna hjälper dig med grundläggande behov, som att äta, tvätta och klä dig, men också med personliga behov som fritidsaktiviteter, träffa vänner, jobba, vara förälder och ta del i samhället.</p>

                            <p>Du ska ha rätt att välja vem som ska arbeta som personlig assistent åt dig, men i praktiken är det inte alltid möjligt om du anlitar kommunen eller ett företag för din personliga assistans.</p>
                        </section>

                        <LssInfo />
                        <BasicNeeds />

                        <section className={styles.organizeSection}>
                            <h3>Så kan assistans anordnas</h3>
                            <p>Den som anordnar assistansen tar arbetsgivaransvaret: bland annat att anställa assistenter, hantera löner, skatter och avgifter, ansvara för assistenternas arbetsmiljö och redovisa till Försäkringskassan och Skatteverket. </p>
                            <p>Det finns några olika sätt att anordna assistans som du kan läsa genom att öppna fliken:</p>
                        </section>

                        <section className={styles.accordionContainer}>
                            {assistanceProviders.map((provider) => (
                                <ServiceAccordion key={provider.id} title={provider.title}>
                                    <div className={styles.accordionContent}>
                                        <p>{provider.description}</p>
                                        
                                        <ul className={styles.featureList}>
                                            {provider.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>

                                        {/* En länk som leder vidare om användaren vill veta ännu mer */}
                                        <NavLink to={provider.path} className={styles.link}>
                                            Läs mer om {provider.title} →
                                        </NavLink>
                                    </div>
                                </ServiceAccordion>
                            ))}
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

export default AboutAssistancePage;
