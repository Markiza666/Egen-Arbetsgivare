/**
 * ScrollToTop Component
 * * This component handles the window scroll position during client-side navigation.
 * Since React Router doesn't automatically reset scroll position when the path changes,
 * this hook-based component ensures the user is always scrolled to the top (0, 0)
 * of the page upon entering a new route.
 */
import { useEffect, useState } from "react";
import styles from './ScrollToTop.module.scss';
import Button from "../common/button/Button";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Show button when page is scorched down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={styles.scrollToTop}>
            {isVisible && (
                <Button variant="icon" 
                onClick={scrollToTop} 
                aria-label="Scroll to top">
                    <span>↑</span>
                </Button>
            )}
        </div>
    );
};

export default ScrollToTop;
