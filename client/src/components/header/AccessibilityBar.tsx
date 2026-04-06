/**
 * AccessibilityBar Component
 * * Responsibilities:
 * - Provides specialized assistive tools to improve web accessibility (A11y).
 * - Features 'Listen' (TTS), 'Easy-read' mode, and Language switching.
 * - Uses the global Button component with the 'ghost' variant for a subtle UI.
 * * This component is central to meeting WCAG standards for inclusive design.
 */
import React, { useState } from 'react';
import { Volume2, BookOpen, Globe, ChevronDown } from 'lucide-react';
import styles from './AccessibilityBar.module.scss';
import Button from '../common/button/Button';

const AccessibilityBar: React.FC = () => {
    // Define dummy languages for the dropdown list
    const languages = ['Svenska', 'English', 'Suomi', 'العربية'];
    
    // State to toggle the language dropdown visibility
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <div className={styles.accessibilityBar}>
            <div className={styles.container}>
                {/* LISTEN TOOL */}
                <Button 
                    variant="ghost" 
                    onClick={() => console.log('Lyssna aktiverat')}
                >
                    <Volume2 size={18} />
                    <span>Lyssna</span>
                </Button>

                {/* EASY-READ TOOL */}
                <Button 
                    variant="ghost" 
                    onClick={() => {
                        document.body.classList.toggle('easy-read');
                        console.log('Lättläst aktiverat');
                    }}
                >
                    <BookOpen size={18} />
                    <span>Lättläst</span>
                </Button>

                {/* LANGUAGE TOOL WITH DROPDOWN */}
                <div className={styles.langWrapper}>
                    <Button 
                        variant="ghost" 
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        aria-expanded={isLangOpen}
                    >
                        <Globe size={18} />
                        <span>Språk</span>
                        <ChevronDown 
                            size={14} 
                            className={`${styles.chevron} ${isLangOpen ? styles.open : ''}`} 
                        />
                    </Button>

                    {/* Conditional rendering of the language list */}
                    {isLangOpen && (
                        <ul className={styles.langDropdown}>
                            {languages.map((lang) => (
                                <li 
                                    key={lang} 
                                    onClick={() => setIsLangOpen(false)}
                                    className={styles.langItem}
                                >
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccessibilityBar;
