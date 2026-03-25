/**
 * Layout Component
 * * Acts as the structural wrapper (Master Page) for the entire application.
 * Structure:
 * - Global helpers: ScrollToTop and RouteAnnouncer.
 * - Persistent UI: Header and Footer.
 * - Content Area: Uses <Outlet /> to render the specific page content based on the route.
 */
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AccessibilityBar from '../header/AccessibilityBar';
import ScrollToTop from '../common/ScrollToTop';
import RouteAnnouncer from '../common/RouteAnnouncer';

const Layout: React.FC = () => {
    return (
        <div className="app-wrapper">
            {/* Logic for resetting scroll position */}
            <ScrollToTop />
            <RouteAnnouncer />  {/* This handles accessibility when changing pages */}
            
            {/* Global elements that are always visible */}
            <AccessibilityBar />
            <Header />

            {/* Unique content of the page */}
            <main id="main-content">
                <Outlet />
            </main>

            {/* Global elements that are always visible */}
            <Footer />
        </div>
    );
};

export default Layout;
