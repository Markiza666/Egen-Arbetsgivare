/**
 * AppRoutes Component
 * * The central routing configuration for the application.
 * Responsibilities:
 * - Defines the hierarchical structure of all application views.
 * - Implements the main Layout wrapper for consistent UI across pages.
 * - Maps URL paths to their respective page components (Home, Assistans, FAQ, etc.).
 * - Includes a "catch-all" wildcard route (*) to handle 404/Not Found states.
 * - Utilizes React Router's 'Outlet' mechanism for nested view rendering.
 * *Uses nested routes to wrap pages within the main Layout.
 */
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/home/HomePage';
import styles from '../pages/notFound/NotFound.module.scss'; // Reusing styles for the 404 placeholder
import ServicesPage from '../pages/services/ServicesPage';
import BecomingEmployerPage from '../pages/become-employer/BecomingEmployerPage';
import RegistrationGuide from '../pages/registration/RegistrationGuide';
import TestimonialsPage from '../pages/testimonialPage/TestimonialsPage';
import TestimonialDetailsPage from '../pages/testimonialPage/TestimonialDetailsPage';

const PagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className={styles.pagePlaceholder}>
        <h1>{title}</h1>
        <p>Denna sida är under konstruktion eller kunde inte hittas. Vi arbetar för fullt med att färdigställa innehållet.</p>
        <NavLink to="/" className={styles.backLink}>
            Tillbaka till startsidan
        </NavLink>
    </div>
);

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="vara-kunder" element={<TestimonialsPage />} />
                <Route path="vara-kunder/:id" element={<TestimonialDetailsPage />} />
                <Route path="tjanster" element={<ServicesPage />} />
                <Route path="bli-egen-arbetsgivare" element={<BecomingEmployerPage />} />
                <Route path="/steg-for-steg" element={<RegistrationGuide />} />
                <Route path="*" element={<PagePlaceholder title="404 - Sidan hittades inte" />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
