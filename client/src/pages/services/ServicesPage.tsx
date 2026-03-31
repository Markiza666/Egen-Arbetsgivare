/**
 * ServicesPage Component
 * Displays the list of services using data from useServices hook.
 * Implements CSS Modules for scoped styling and clean architecture.
 */
import { useServices } from '../../hooks/useServices';
import styles from './ServicesPage.module.scss';

const ServicesPage: React.FC = () => {
    const { services, loading } = useServices();

    if (loading) {
        return <div className={styles.servicesContainer}>Loading services...</div>;
    }

    return (
            <div className={styles.servicesContainer}>
                <h1>Våra Tjänster i detalj</h1>
                {services.map((service) => (
                    <section key={service.id} id={service.id} className={styles.serviceCard}>
                        <h2>{service.title}</h2>
                        <p className={styles.lead}>{service.description}</p>
                        <div className={styles.content}>
                            <p>Vi på Egen Arbetsgivare brinner för att {service.title} ska vara enkelt för dig...</p>
                        </div>
                    </section>
                ))}
            </div>
    );
};

export default ServicesPage;
