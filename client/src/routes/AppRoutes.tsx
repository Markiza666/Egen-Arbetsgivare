/**
 * AppRoutes Component
 * * The central routing configuration for the application.
 * Responsibilities:
 * - Defines the hierarchical structure of all application views.
 * - Implements the main Layout wrapper for consistent UI across pages.
 * - Maps URL paths to their respective page components (Home, Assistans, FAQ, etc.).
 * - Includes a "catch-all" wildcard route (*) to handle 404/Not Found states.
 * - Utilizes React Router's 'Outlet' mechanism for nested view rendering.
 */
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/home/HomePage';
import './../pages/notFound/NotFound.scss'; // Återanvänd samma stil för 404-sidan

const PagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="page-placeholder">
        <h1>{title}</h1>
        <p>Denna sida är under konstruktion eller kunde inte hittas. Vi arbetar för fullt med att färdigställa innehållet.</p>
        <NavLink to="/" className="back-link">Tillbaka till startsidan</NavLink>
    </div>
);

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                
                <Route path="assistans" element={<PagePlaceholder title="Personlig Assistans" />} />
                <Route path="arbetsgivare" element={<PagePlaceholder title="Bli egen arbetsgivare" />} />
                <Route path="kunder" element={<PagePlaceholder title="Våra kunder" />} />
                <Route path="faq" element={<PagePlaceholder title="Frågor och svar" />} />
                <Route path="nyheter" element={<PagePlaceholder title="Nyheter" />} />
                <Route path="om-oss" element={<PagePlaceholder title="Om oss" />} />
                <Route path="kontakt" element={<PagePlaceholder title="Kontakta oss" />} />
                
                <Route path="*" element={<PagePlaceholder title="404 - Sidan hittades inte" />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;