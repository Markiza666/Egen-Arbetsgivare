/**
 * Header Component
 * * The main site navigation and branding area.
 * Responsibilities:
 * - Renders primary navigation links using React Router NavLink.
 * - Includes accessibility tools (Listen, Easy-read, Language).
 * - Manages mobile menu state and responsive layout shifts (Desktop vs Mobile).
 * - Implements a body-scroll lock when the mobile overlay is active.
 */
import React, { useState, useEffect } from 'react';
import { Menu, Search, Globe, Volume2, BookOpen } from 'lucide-react';  // Icons for accessibility and menu
import { NavLink } from 'react-router-dom'; // Accessibility (A11y): NavLink also adds aria-current="page" to the active link, which helps screen readers tell the user where they are.
import Logo from '../../assets/Logo.svg';
import styles from './Header.module.scss';
import MenuMobile from '../menu/MenuMobile';

const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const Header: React.FC = () => {
    const isMobile = useWindowSize();

    // Define state for the menu (for mobile)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.siteHeader}>
            {/* TOP BAR - Mainly displayed on Desktop */}
            <div className={styles.topBar}>
                <div className={styles.topBarContainer}>
                    <div className={styles.accessTools}>
                        <button className={styles.accBtn} onClick={() => console.log('Lyssna aktiverat')} type='button'>
                            <Volume2 size={24} />
                            <span>Lyssna</span>
                        </button>

                        <button className={styles.accBtn} onClick={() => console.log('Lättläst aktiverat')} type='button'>
                            <BookOpen size={24} />
                            <span>Lättläst</span>
                        </button>

                        <button className={styles.accBtn} type='button'>
                            <Globe size={18} />
                            <span>Språk</span>
                        </button>
                    </div>
                    
                    <nav className={styles.secondaryNav}>
                        <NavLink to="/om-oss">Om oss</NavLink>
                        <NavLink to="/kontakt">Kontakta oss</NavLink>
                    </nav>
                </div>
            </div>

            {/* Main Header */}
            <div className={styles.mainHeader}>
                <div className={styles.mainHeaderContainer}>
                    <div className={styles.headerTopRow}>

                        {/* Menu button (Mobile) */}
                        {isMobile && (
                            <button type='button' className={styles.menuBtn} onClick={() => setIsMenuOpen(true)}>
                                <Menu size={24} />
                                <span>Meny</span>
                            </button>
                        )}

                        {/* Mobile Menu Component */}
                        <MenuMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

                        <NavLink to="/" className={styles.logo}>
                            <img src={Logo} alt="Egen Arbetsgivare Logotyp" />
                            <span className={styles.logoText}>Egen Arbetsgivare</span>
                        </NavLink>
                        
                        {/* Search field */}
                        <div className={styles.headerActions}>
                            {isMobile ? (
                                <button className={styles.searchBtn} type='button'>
                                    <Search size={24} />
                                    <span>Sök</span>
                                </button>
                            ) : (
                                <form className={styles.searchFieldDesktop}>
                                    <input type="text" placeholder="Sök..." />
                                    <button type='button'>
                                        <span>SÖK</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <NavLink to="/assistans">Personlig assistans</NavLink>
                    <NavLink to="/bli-egen-arbetsgivare">Bli egen arbetsgivare</NavLink>
                    <NavLink to="/kunder">Våra kunder</NavLink>
                    <NavLink to="/faq">Frågor och svar</NavLink>
                    <NavLink to="/nyheter">Nyheter</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
