import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
    test('achieves full coverage and verifies content with English documentation', () => {
        
        // Mock console.log to cover potential log statements (lines 18-19)
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
        
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Verify Brand/Logo (Handles multiple occurrences if necessary)
        expect(screen.queryAllByText(/Egen Arbetsgivare/i).length).toBeGreaterThan(0);

        // Verify Dynamic Year (Covers dynamic date logic, e.g., lines 16 & 67)
        const currentYear = new Date().getFullYear().toString();
        expect(screen.queryAllByText(new RegExp(currentYear)).length).toBeGreaterThan(0);

        // Verify Update Date (Specific requirement check, e.g., line 69)
        expect(screen.queryAllByText(/2026-03-23/i).length).toBeGreaterThan(0);

        // Verify Headings (Using 'exact: false' to ensure matches despite HTML tags)
        expect(screen.queryAllByText(/Hitta snabbt/i, { exact: false }).length).toBeGreaterThan(0);
        expect(screen.queryAllByText(/Våra policies/i, { exact: false }).length).toBeGreaterThan(0);

        // Execute Logic (Triggers click events to cover event handlers, e.g., lines 18-19)
        // Locate the phone link and trigger a click to ensure 100% logic coverage
        const phoneLink = screen.getByText(/010-750/i);
        fireEvent.click(phoneLink);
        
        // Verify that the mocked console was triggered by the click
        expect(consoleSpy).toHaveBeenCalled();
        
        // Restore console functionality
        consoleSpy.mockRestore();
    });
});
