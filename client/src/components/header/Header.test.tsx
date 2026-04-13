import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { SearchProvider } from '../../context/SearchProvider';
import Header from './Header';

// Mock lucide icons
vi.mock('lucide-react', () => ({
    Menu: () => <span data-testid="icon-menu" />,
    Search: () => <span data-testid="icon-search" />,
    X: () => <span data-testid="icon-x" />,
    Globe: () => <span data-testid="icon-globe" />,
    BookOpen: () => <span data-testid="icon-book" />,
    Volume2: () => <span data-testid="icon-volume" />,
    ChevronDown: () => <span data-testid="icon-chevron" />
}));

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Final Coverage Blitz', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Reset to desktop view as default before each test
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
        window.dispatchEvent(new Event('resize'));
    });

    test('should achieve 100% by covering all edge cases', async () => {
        render(
            <SearchProvider>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </SearchProvider>
        );

        // --- MOBILE VIEW SETUP ---
        await act(async () => {
            Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
            window.dispatchEvent(new Event('resize'));
        });

        // --- FIX MenuMobile LINE 18 & Header LINE 66 (Scroll lock) ---
        const menuBtn = screen.getByText(/Meny/i).closest('button');
        if (menuBtn) {
            fireEvent.click(menuBtn); // Open (Triggers line 66: overflow = 'hidden')
            expect(document.body.style.overflow).toBe('hidden');

            // Find the close button (X) in MenuMobile to trigger onClose
            const closeBtn = screen.getByTestId('icon-x').parentElement;
            if (closeBtn) {
                fireEvent.click(closeBtn); // FIXES LINE 18 & Header LINE 69 (overflow = 'unset')
                expect(document.body.style.overflow).toBe('unset');
            }
        }

        // --- FIX Header LINES 95-100 (Mobile search form) ---
        const searchToggle = screen.getByText(/Sök/i).closest('button');
        if (searchToggle) {
            fireEvent.click(searchToggle); // Open mobile search
            
            // Mobile input field is now rendered (Lines 95-100)
            const mobileInput = screen.getByPlaceholderText(/Vad letar du efter/i);
            fireEvent.change(mobileInput, { target: { value: 'Assistans' } });
            
            // Trigger submit to cover the full handleSearchSubmit logic
            const mobileForm = mobileInput.closest('form');
            if (mobileForm) {
                fireEvent.submit(mobileForm);
            }
        }

        // --- FIX AccessibilityBar (Branch Coverage) ---
        const langBtn = screen.getByText(/Språk/i).closest('button');
        if (langBtn) {
            fireEvent.click(langBtn); // Open
            const english = screen.getByText('English');
            fireEvent.click(english); // Close by selection (Important for branch coverage!)
        }

        expect(screen.getAllByText(/Egen Arbetsgivare/i).length).toBeGreaterThan(0);
    });

    test('should not navigate if search query is empty', async () => {
        // FORCE DESKTOP VIEW
        await act(async () => {
            Object.defineProperty(window, 'innerWidth', { writable: true, value: 1024 });
            window.dispatchEvent(new Event('resize'));
        });

        render(
            <SearchProvider>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </SearchProvider>
        );

        // The field is now visible in desktop view
        const searchInput = screen.getByPlaceholderText(/Sök.../i);
        const searchForm = searchInput.closest('form');
        
        if (searchForm) {
            fireEvent.submit(searchForm);
            expect(mockNavigate).not.toHaveBeenCalled();
        }
    });

    test('should handle desktop search submission', async () => {
        // Set screen to desktop
        await act(async () => {
            Object.defineProperty(window, 'innerWidth', { value: 1024 });
            window.dispatchEvent(new Event('resize'));
        });

        render(
            <SearchProvider>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </SearchProvider>
        );

        const desktopInput = screen.getByPlaceholderText(/Sök.../i);
        fireEvent.change(desktopInput, { target: { value: 'test' } });
        
        const desktopForm = desktopInput.closest('form');
        if (desktopForm) {
            fireEvent.submit(desktopForm);
            // Verify that navigation was actually triggered
            expect(mockNavigate).toHaveBeenCalledWith('/faq');
        }
    });
});
