/**
 * RouteAnnouncer Component
 * * Provides an "aria-live" region to notify screen reader users of navigation changes.
 * In a Single Page Application (SPA), page loads aren't detected by default;
 * this component monitors the URL path and announces the current page title
 * to ensure an accessible user experience.
 */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteAnnouncer: React.FC = () => {
    const { pathname } = useLocation();

    // We calculate the title directly in the rendering logic instead of in a state.
    // This follows React's recommendation: "You might not need an effect".
    const pageTitle = pathname === '/' 
        ? 'Startsida' 
        : pathname.split('/')[1].replace(/-/g, ' ');
    
    const announcement = `Navigerade till sidan: ${pageTitle}`;

    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
        }
    }, [pathname]);

    return (
        <div 
            aria-live="assertive" 
            aria-atomic="true" 
            className="sr-only"
        >
            {announcement}
        </div>
    );
};

export default RouteAnnouncer;
