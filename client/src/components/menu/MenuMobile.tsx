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
import styles from './MenuMobile.module.scss';
import type { MenuMobileProps } from '../../types';

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.mobileMenuOverlay}>
            <div className={styles.mobileMenuContent}>
                <button 
                    type='button'
                    className={styles.closeBtn} 
                    onClick={onClose} 
                    aria-label="Stäng meny"
                >
                    <X size={32} />
                </button>
                
                <nav className={styles.mobileNav}>
                    <NavLink to="/" end onClick={onClose}>Hem</NavLink>
                    <NavLink to="/personlig-assistans" onClick={onClose}>Personlig assistans</NavLink>
                    <NavLink to="/bli-egen-arbetsgivare" onClick={onClose}>Bli egen arbetsgivare</NavLink>
                    <NavLink to="/vara-kunder" onClick={onClose}>Våra kunder</NavLink>
                    <NavLink to="/faq" onClick={onClose}>Frågor och svar</NavLink>
                    <hr />
                    <NavLink to="/om-oss" onClick={onClose}>Om oss</NavLink>
                    <NavLink to="/kontakt" onClick={onClose}>Kontakta oss</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default MenuMobile;
