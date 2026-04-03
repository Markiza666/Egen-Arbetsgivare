/**
 * Button Component
 * * Responsibilities:
 * - Provides a standardized, reusable button element.
 * - Supports different visual variants (primary, outline, ghost).
 * - Handles standard HTML button attributes like type and disabled state.
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
