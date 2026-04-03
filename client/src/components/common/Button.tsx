/**
 * Button Component
 * * Responsibilities:
 * - Provides a standardized, reusable button element for the entire application.
 * - Supports multiple visual variants: primary, outline, cancel, ghost, icon, menu.
 * - Polymorphic behavior: Automatically renders as a React Router 'NavLink' if the 'to' prop is provided,
 * otherwise renders as a standard HTML 'button'.
 * - Spreads all standard HTML button attributes or NavLink props to the root element.
 */
import React from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    children, 
    className, 
    ...props 
}) => {
    // Combine base style with the specific variant and any extra classes
    const buttonClass = `${styles.btn} ${styles[variant]} ${className || ''}`;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
