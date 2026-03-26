/**
 * NotFound Component
 * * A fallback page (404 Error) for non-existent routes.
 * Purpose:
 * - Provides a user-friendly message when a URL is entered incorrectly.
 * - Offers clear navigation paths (e.g., "Back to Home") to prevent
 * users from getting stuck.
 */
import { NavLink } from 'react-router-dom';
import './NotFound.scss';
import type { NotFoundProps } from '../../types';

const NotFound: React.FC<NotFoundProps> = ({ 
    title = "404 - Sidan hittades inte", 
    message = "Hoppsan! Sidan du letar efter verkar ha tagit en kaffepaus. Den kan ha flyttats eller tagits bort." 
}) => {
    return (
        <div className="pagePlaceholder">
            <div className="container">
                <h1>{title}</h1>
                <p>{message}</p>
                <NavLink to="/" className="backLink">
                    Tillbaka till startsidan
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
