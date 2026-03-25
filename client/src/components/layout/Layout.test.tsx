import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mocking ScrollToTop to avoid window.scrollTo errors in JSDOM
vi.mock('../common/ScrollToTop', () => ({
  default: () => null
}));

describe('Layout Component', () => {
    test('renders Header, Footer and page content via Outlet', () => {
            render(
                <MemoryRouter initialEntries={['/test']}>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <   Route path="test" element={<div data-testid="child-content">Main Page Content</div>} />
                            </Route>
                        </Routes>
                </MemoryRouter>
            );

        // 1. Verify Header (Logo alt text)
        expect(screen.getByAltText(/Egen Arbetsgivare Logotyp/i)).toBeInTheDocument();

        // 2. Verify Outlet content
        expect(screen.getByTestId('child-content')).toBeInTheDocument();

        // 3. Verify Footer
        // Instead of ©, let's look for a text that is likely in your footer.
        // If you have "Kontakt" or "Snabblänkar" in the footer, use that.
        // Here we use a function to find any text containing "Arbetsgivare" 
        // and verify that the footer exists by role.
        const footerElement = screen.getByRole('contentinfo'); // 'contentinfo' is the default ARIA role for <footer>
        expect(footerElement).toBeInTheDocument();
    });
});