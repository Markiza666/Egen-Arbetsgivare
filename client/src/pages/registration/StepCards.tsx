import type { Step } from '../../types';
import styles from './RegistrationGuide.module.scss';

const StepCard: React.FC<Step> = ({ number, title, description, estimate, link, subLink }) => {

    const parts = subLink ? description.split(subLink.text) : [description];
    return (
        <div className={styles.stepCard}>
            <ul>
                <li className={styles.stepBadge}>Steg {number}</li>
            </ul>
            <div className={styles.stepInfo}>

                {/* If link exists, make title clickable */}
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                            <h3>{title}</h3>
                    </a>
                ) : (
                    <h3>{title}</h3>
                )}

                <p>
                    {parts[0]}
                        {subLink && (
                            <a href={subLink.url} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                {subLink.text}
                            </a>
                        )}
                    {parts[1]}
                </p>
        
                <div className={styles.metaData}>
                    <span className={styles.timeTag}>⏱ Beräknad tid: {estimate}</span>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
