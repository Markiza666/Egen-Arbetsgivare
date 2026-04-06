import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityBar from './AccessibilityBar';
import { describe, test, expect } from 'vitest';

describe('AccessibilityBar', () => {
    test('toggles easy-read class on body when button is clicked', () => {
        render(<AccessibilityBar />);
        const easyReadBtn = screen.getByRole('button', { name: /Lättläst/i });
        
        // First click to enable easy-read mode
        fireEvent.click(easyReadBtn);
        expect(document.body.classList.contains('easy-read')).toBe(true);
        
        // Second click to disable easy-read mode (testing the toggle functionality)
        fireEvent.click(easyReadBtn); 
        expect(document.body.classList.contains('easy-read')).toBe(false);
    });

    test('logs to console when listen button is clicked', () => {
        // Spy on console.log to verify the side effect
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
        render(<AccessibilityBar />);
        const listenBtn = screen.getByRole('button', { name: /Lyssna/i });
        
        fireEvent.click(listenBtn);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Lyssna'));
        
        // Clean up the spy
        consoleSpy.mockRestore();
    });

    test('opens language dropdown and selects a language', () => {
        render(<AccessibilityBar />);
        const langBtn = screen.getByRole('button', { name: /Språk/i });

        // Click to open the dropdown menu
        fireEvent.click(langBtn);
        expect(langBtn).toHaveAttribute('aria-expanded', 'true');

        // Find and click a specific language to cover the selection logic (Line 66)
        const englishOption = screen.getByText('English');
        fireEvent.click(englishOption);

        // Verify that the dropdown closes after selection
        expect(langBtn).toHaveAttribute('aria-expanded', 'false');
    });
});
