/**
 * MenuMobile Component
 * * An interactive overlay menu specifically designed for small-screen navigation.
 * Functionality:
 * - Triggered by the Header's menu button.
 * - Provides a full-screen navigation experience for mobile users.
 * - Includes a clear 'Close' action and handles focus/overlay logic 
 * to ensure smooth mobile UX.
 */
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import './../menu/MenuMobile.scss';
import type { MenuMobileProps } from '../../types';

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
                <button 
                    type='button'
                    className="close-btn" 
                    onClick={onClose} 
                    aria-label="Stäng meny"
                >
                    <X size={32} />
                </button>
                
                <nav className="mobile-nav">
                    <NavLink to="/" end onClick={onClose}>Hem</NavLink>
                    <NavLink to="/assistans" onClick={onClose}>Personlig assistans</NavLink>
                    <NavLink to="/arbetsgivare" onClick={onClose}>Bli egen arbetsgivare</NavLink>
                    <NavLink to="/kunder" onClick={onClose}>Våra kunder</NavLink>
                    <NavLink to="/faq" onClick={onClose}>Frågor och svar</NavLink>
                    <NavLink to="/nyheter" onClick={onClose}>Nyheter</NavLink>
                    <hr />
                    <NavLink to="/om-oss" onClick={onClose}>Om oss</NavLink>
                    <NavLink to="/kontakt" onClick={onClose}>Kontakta oss</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default MenuMobile;
