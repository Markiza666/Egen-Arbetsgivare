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
import './ServiceAccordion.scss';

const ServiceAccordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordion-item ${isOpen ? 'is-open' : 'is-closed'}`}>
            <button 
                className="accordion-header" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}  // Indicates the current state of the accordion (expanded or collapsed)
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`} // Links the button to the content panel
                type="button"
            >
                <span className="accordion-title">{title}</span>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            
            <div className="accordion-content">
                <div className="content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ServiceAccordion;
