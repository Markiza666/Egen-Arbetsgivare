/**
 * ServiceAccordion Component
 * * An accessible disclosure component (Accordion) used to toggle visibility of content.
 * Features:
 * - Managed 'isOpen' state for smooth toggling.
 * - ARIA attributes (aria-expanded, aria-controls) for screen reader compatibility.
 * - Dynamic ID generation to link the trigger button with the content panel.
 */
import React, { useState } from 'react';
import type { AccordionProps } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ServiceAccordion.module.scss'

const ServiceAccordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <button 
                className={styles.accordionHeader} 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}  // Indicates the current state of the accordion (expanded or collapsed)
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`} // Links the button to the content panel
                type="button"
            >
                <span className={styles.accordionTitle}>{title}</span>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            
            <div className={styles.accordionContent}>
                <div className="content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ServiceAccordion;
