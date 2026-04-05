import styles from './ContactPage.module.scss';
import ContactForm from '../../components/common/contact-form/ContactForm';
import { Phone, Mail } from 'lucide-react';
import contact_shef from '../../assets/contakt_shef.svg';
import contakt_jur from '../../assets/contact_jur.svg';

const staffMembers = [
    {
        id: 1,
        name: 'Mohamed Abdallah',
        role: 'Verksamhetsansvarig',
        phone: '010-750 07 75',
        email: 'mohamed.a@egenarbetsgivare.se',
        image: contact_shef
    },
    {
        id: 2,
        name: 'Andrea Ivares ',
        role: 'Kundansvarig',
        phone: '010-750 07 75',
        email: 'andrea.i@egenarbetsgivare.se',
        image: contakt_jur
    }
];

const ContactPage: React.FC = () => {
    return (
        <main className={styles.contactPage}>
            <header className={styles.header}>
                <h2>Kontakta oss</h2>
                <p>Vi hjälper dig gärna med frågor kring din assistans.</p>
            </header>

            <section className={styles.staffSection}>
                <h3>Våra kontaktpersoner</h3>
                <div className={styles.staffGrid}>
                    {staffMembers.map(member => (
                        <div key={member.id} className={styles.staffCard}>
                            <img src={member.image} alt={member.name} className={styles.avatar} />
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                                <div className={styles.details}>
                                    <p>
                                        <Phone size={16} className={styles.icon} /> 
                                        {member.phone}
                                    </p>

                                    <p>
                                        <Mail size={16} className={styles.icon} /> 
                                        {member.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className={styles.downSection}>
                <section className={styles.formContainer}>
                    <h3>Skicka ett meddelande</h3>
                    <ContactForm />
                </section>

                <section className={styles.mapContainer}>
                    <h3>Hitta till oss</h3>
                    <div className={styles.mapWrapper}>
                        "<iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.3166400700293!2d18.035189912200156!3d59.34700500950049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d76eb7622dd%3A0x8e1253145db4e0e3!2sH%C3%A4lsingegatan%2049%2C%20113%2031%20Stockholm!5e0!3m2!1sen!2sse!4v1775377722444!5m2!1sen!2sse" 
                            className={styles.mapIframe} 
                            title="Karta över vårt kontor på Hälsingegatan 49"
                            allowFullScreen 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>"
                        <div className={styles.addressOverlay}>
                            <p>Hälsingegatan 49, 113 31 Stockholm</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ContactPage;
