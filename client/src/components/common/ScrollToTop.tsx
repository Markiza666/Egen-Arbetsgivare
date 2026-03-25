/**
 * ScrollToTop Component
 * * This component handles the window scroll position during client-side navigation.
 * Since React Router doesn't automatically reset scroll position when the path changes,
 * this hook-based component ensures the user is always scrolled to the top (0, 0)
 * of the page upon entering a new route.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Forces the window to the top (x: 0, y: 0)
    }, [pathname]); // Runs every time the URL changes

    return null; // This component does not render anything visually.
};

export default ScrollToTop;