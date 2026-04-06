import React, { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import styles from './Header.module.scss';
import MenuMobile from '../menu/MenuMobile';
import AccessibilityBar from './AccessibilityBar';
import Button from '../common/button/Button';
import { useSearch } from '../../hooks/useSearch';

/**
 * Custom hook to track window size and determine if view is mobile.
 */
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

    const navigate = useNavigate();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { searchQuery, setSearchQuery } = useSearch();

    /**
     * Handles the search submission.
     * Redirects the user to the FAQ page to see the filtered results.
     */
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Only navigate if there is an actual search query
        if (searchQuery.trim() !== "") {
            navigate('/faq'); // Redirect to FAQ page
        }
        
        if (isMobile) {
            setIsSearchOpen(false); // Close the mobile search bar after searching
        }
    };

    /**
     * Accessibility: Lock body scroll when the mobile menu is open 
     * to prevent background scrolling.
     */
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.siteHeader}>
            {/* --- ACCESSIBILITY & SECONDARY NAV --- */}
            <div className={styles.topBar}>
                <div className={styles.topBarContainer}>
                    <AccessibilityBar /> 
                    {!isMobile && (
                        <nav className={styles.secondaryNav}>
                            <NavLink to="/om-oss">Om oss</NavLink>
                            <NavLink to="/kontakt">Kontakt</NavLink>
                        </nav>
                    )}
                </div>
            </div>

            {/* --- MAIN NAVIGATION AREA --- */}
            <div className={styles.mainHeader}>
                <div className={styles.mainHeaderContainer}>
                    
                    {/* Row 1: Menu Button, Logo, and Search Toggle */}
                    <div className={styles.headerTopRow}>
                        {isMobile && (
                            <>
                                <Button variant="menu" onClick={() => setIsMenuOpen(true)}>
                                    <Menu size={24} />
                                    <span>Meny</span>
                                </Button>
                                {/* This component handles the actual mobile menu overlay */}
                                <MenuMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                            </>
                        )}

                        <NavLink to="/" className={styles.logo}>
                            <img src={Logo} alt="Egen Arbetsgivare Logo" />
                            <span className={styles.logoText}>Egen Arbetsgivare</span>
                        </NavLink>
                        
                        <div className={styles.headerActions}>
                            {isMobile ? (
                                <Button variant="menu" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                    {isSearchOpen ? <X size={24} /> : <Search size={24} />}
                                    <span>{isSearchOpen ? 'Stäng' : 'Sök'}</span>
                                </Button>
                            ) : (
                                /* DESKTOP SEARCH FORM */
                                <form className={styles.searchFieldDesktop} onSubmit={handleSearchSubmit}>
                                    <input 
                                        type="text" 
                                        placeholder="Sök..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <Button variant="primary" type="submit">
                                        <Search size={18} />
                                        <span>SÖK</span>
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                    
                    {/* MOBILE SEARCH FORM */}
                    {isMobile && isSearchOpen && (
                        <form className={styles.mobileSearchInput} onSubmit={handleSearchSubmit}>
                            <div className={styles.inputWrapper}>
                                <input 
                                    type="text" 
                                    autoFocus
                                    placeholder="Vad letar du efter?" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button variant="primary" type="submit">
                                    <span>SÖK</span>
                                </Button>
                            </div>
                        </form>
                    )}
                </div>

                {/* --- DESKTOP MAIN NAVIGATION --- */}
                <nav className={styles.desktopNav}>
                    <NavLink to="/personlig-assistans">Personlig assistans</NavLink>
                    <NavLink to="/bli-egen-arbetsgivare">Bli egen arbetsgivare</NavLink>
                    <NavLink to="/vara-kunder">Våra kunder</NavLink>
                    <NavLink to="/faq">Frågor och svar</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
