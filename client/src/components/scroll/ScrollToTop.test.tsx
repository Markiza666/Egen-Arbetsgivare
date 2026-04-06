import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop Component Full Coverage', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
        // Mock the window.scrollTo method since it's not implemented in JSDOM
        window.scrollTo = vi.fn();
        
        // Set default scroll position values
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
    });

    test('should show button when scrolling down and scroll to top on click', async () => {
        render(<ScrollToTop />);

        // Verify that the button is hidden initially (covers initial state)
        expect(screen.queryByRole('button')).toBeNull();

        // Simulate scrolling down
        await act(async () => {
            Object.defineProperty(window, 'scrollY', { value: 500 });
            window.dispatchEvent(new Event('scroll'));
        });

        // Find the button (using findBy to allow React time to render)
        const button = await screen.findByRole('button');
        expect(button).toBeDefined();

        // Click the button (This covers the scrollTo logic!)
        await act(async () => {
            fireEvent.click(button);
        });

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });

        // Simulate scrolling back up (to cover the "else" branch in toggleVisibility)
        await act(async () => {
            Object.defineProperty(window, 'scrollY', { value: 0 });
            window.dispatchEvent(new Event('scroll'));
        });
        
        expect(screen.queryByRole('button')).toBeNull();
    });

    test('should initialize as visible if already scrolled down', () => {
        // Test the initialization logic (lines 10-12) when the component mounts
        Object.defineProperty(window, 'scrollY', { value: 500 });
        
        render(<ScrollToTop />);
        
        expect(screen.getByRole('button')).toBeDefined();
    });
});
