/**
 * Footer Component
 * * The primary information area at the bottom of each page.
 * Contains:
 * - Brand identity and brief description.
 * - Organized links to internal pages (Navigation).
 * - Direct contact information and social media entry points.
 * - Legal information such as copyright and privacy policy links.
 */
import { NavLink } from 'react-router-dom'; // Accessibility (A11y): NavLink also adds aria-current="page" to the active link, which helps screen readers tell the user where they are.
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.scss';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const handleInactiveClick = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("Länken är klickbar för tillgänglighet, men inaktiv i detta projekt.");
    };

    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <section className="footer-section">
                    <h3>Egen Arbetsgivare</h3>

                    {/* Address */}
                    <div className="contact-item">
                        <MapPin size={20} aria-hidden="true" />
                        <address>
                            Hälsingegatan 49<br />
                            113 31 Stockholm
                        </address>
                    </div>

                    {/* Phone - Clickable but stopped */}
                    <div className="contact-item">
                        <Phone size={20} aria-hidden="true" />
                        <a href="tel:0107500775" onClick={handleInactiveClick}>
                            010-750 07 75
                        </a>
                    </div>

                    {/* Email - Clickable but stopped */}
                    <div className="contact-item">
                        <Mail size={20} aria-hidden="true" />
                        <a href="mailto:info@egenarbetsgivare.se" onClick={handleInactiveClick}>
                            info@egenarbetsgivare.se
                        </a>
                    </div>
                </section>

                <hr />

                <section className="footer-section">
                    <h3>Hitta snabbt</h3>
                    <ul>
                        <li><NavLink to="/personlig-assistans">Personlig assistans</NavLink></li>
                        <li><NavLink to="/bli-egen-arbetsgivare">Bli egen arbetsgivare</NavLink></li>
                        <li><NavLink to="/våra-kunder">Egna arbetsgivarnas berättelser</NavLink></li>
                        <li><NavLink to="/faq">Frågor och svar</NavLink></li>
                        <li><NavLink to="/om-oss">Om oss</NavLink></li>
                        <li><NavLink to="/nyheter">Nyheter</NavLink></li>
                        <li><NavLink to="/kontakt">Kontakta oss</NavLink></li>
                    </ul>
                </section>

                <hr />

                <section className="footer-section">
                    <h3>Sociala medier</h3>
                    <div className="social-icons">
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Youtube size={24} />
                    </div>
                </section>
            </div>

            <hr />

            <div className="footer-policy-links">
                <NavLink to="/policies">Våra policies</NavLink>
                <NavLink to="/tillganglighet">Tillgänglighet</NavLink>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>Copyright @ {currentYear}</p>
                <p>Egen Arbetsgivare</p>
                <p>Uppdaterad 2026-03-23</p>
            </div>
        </footer>
    );
};

export default Footer;