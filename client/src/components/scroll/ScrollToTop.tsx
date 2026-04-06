import { useEffect, useState, useCallback } from "react";
import styles from './ScrollToTop.module.scss';
import Button from "../common/button/Button";

const ScrollToTop = () => {
    // Calculate the initial state immediately.
    // React executes this function only once during "mount".
    const [isVisible, setIsVisible] = useState<boolean>(() => {
        return typeof window !== 'undefined' && window.scrollY > 300;
    });

    // Function to handle visibility based on scroll position
    const toggleVisibility = useCallback((): void => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        // Add listener for future scroll events.
        window.addEventListener("scroll", toggleVisibility);
        
        // We don't need to manually call toggleVisibility() here anymore, 
        // since the correct initial value was already set in useState above.
        
        // Cleanup: remove the event listener on unmount
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [toggleVisibility]);

    // Smooth scroll to the top of the document
    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Do not render the button if it's not supposed to be visible
    if (!isVisible) return null;

    return (
        <div className={styles.scrollToTop}>
            <Button 
                variant="icon" 
                onClick={scrollToTop} 
                aria-label="Scroll to top"
            >
                <span>↑</span>
            </Button>
        </div>
    );
};

export default ScrollToTop;
