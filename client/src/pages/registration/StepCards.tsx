/**
 * StepCard Component
 * * Responsibilities:
 * - Represents a single step in a multi-step guide or process.
 * - Dynamically injects inline links into the description text.
 * - Handles external links for both titles and sub-links.
 * - Displays metadata like estimated time for completion.
 */
import type { Step } from '../../types';
import styles from './RegistrationGuide.module.scss';

const StepCard: React.FC<Step> = ({ number, title, description, estimate, link, subLink }) => {

    /**
     * Logic to handle inline linking:
     * If a subLink is provided, we split the description at the text point
     * where the link should appear to insert the anchor tag between parts.
     */
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
