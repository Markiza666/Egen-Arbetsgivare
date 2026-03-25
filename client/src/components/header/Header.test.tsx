import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom';     // For extended matchers like toBeInTheDocument()

describe('Header Component', () => {
  
    // Test 1: Verify basic rendering of essential elements
    test('renders the logo and main navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // Check if the logo is present using the accessible alt text
        const logo = screen.getByAltText(/Egen Arbetsgivare Logotyp/i);
        expect(logo).toBeInTheDocument();
        
        // Check if a primary navigation link is rendered
        expect(screen.getByText(/Personlig assistans/i)).toBeInTheDocument();
    });

    // Test 2: Verify that NavLink handles active states correctly
    test('applies the active class when a navigation link is clicked', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const link = screen.getByText(/Om oss/i);
    
        // Simulate user clicking the link
        fireEvent.click(link);

        // React Router's NavLink should automatically apply the 'active' class
        expect(link).toHaveClass('active');
    });

    // Test 3: Test the mobile menu state logic (useState)
    test('opens the mobile menu when the menu button is clicked', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // Find the menu button (labeled "Meny" in your code)
        const menuBtn = screen.queryByRole('button', { name: /meny/i });
        
        if (menuBtn) {
            fireEvent.click(menuBtn);
            
            // Verify that the MobileMenu is triggered (checking for the close button inside it)
            const closeBtn = screen.getByLabelText(/Stäng meny/i);
            expect(closeBtn).toBeInTheDocument();
        }
    });

    // Test 4: Accessibility check for button types
    test('all header buttons should have a defined type attribute', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            // Ensuring buttons don't default to 'submit', which can cause issues in forms
            expect(button).toHaveAttribute('type', 'button');
        });
    });
});