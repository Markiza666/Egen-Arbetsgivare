/**
 * AccessibilityBar Component
 * * * Responsibilities:
 * - Provides specialized assistive tools to improve web accessibility (A11y).
 * - Features 'Listen' (TTS), 'Easy-read' mode, and Language switching.
 * - Uses the global Button component with the 'ghost' variant for a subtle UI.
 * * This component is central to meeting WCAG standards for inclusive design.
 */
import { Volume2, BookOpen, Globe } from 'lucide-react';
import styles from './AccessibilityBar.module.scss';
import Button from '../common/button/Button';

const AccessibilityBar: React.FC = () => {
    return (
        <div className={styles.accessibilityBar}>
            <div className={styles.container}>
                <Button 
                variant="ghost" 
                onClick={() => console.log('Lyssna aktiverat')}>
                    <Volume2 size={18} />
                    <span>Lyssna</span>
                </Button>

                <Button 
                variant="ghost" 
                onClick={() => console.log('Lättläst aktiverat')}>
                    <BookOpen size={18} />
                    <span>Lättläst</span>
                </Button>

                <Button variant="ghost">
                    <Globe size={18} />
                    <span>Språk</span>
                </Button>
            </div>
        </div>
    );
};

export default AccessibilityBar;
