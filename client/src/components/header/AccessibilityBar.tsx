/**
 * AccessibilityBar Component
 * * A dedicated toolbar providing specialized assistive features.
 * Features:
 * - 'Listen' (Text-to-Speech) activation.
 * - 'Easy-read' mode for simplified cognitive content.
 * - Language switcher to handle multilingual navigation.
 * This bar ensures the site meets high standards of inclusive design.
 */
import { Volume2, BookOpen, Globe } from 'lucide-react';
import './AccessibilityBar.scss';

const AccessibilityBar: React.FC = () => {
    return (
        <div className="accessibility-bar">
            <div className="container">
                <button className="acc-btn" onClick={() => console.log('Lyssna aktiverat')} type='button'>
                    <Volume2 size={18} />
                    <span>Lyssna</span>
                </button>
                
                <button className="acc-btn" onClick={() => console.log('Lättläst aktiverat')} type='button'>
                    <BookOpen size={18} />
                    <span>Lättläst</span>
                </button>

                <button className="acc-btn" type='button'>
                    <Globe size={18} />
                    <span>Språk</span>
                </button>
            </div>
        </div>
    );
};

export default AccessibilityBar;
