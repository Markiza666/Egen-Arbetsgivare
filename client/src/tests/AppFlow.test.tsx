import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from '../context/SearchProvider';
import Layout from '../components/layout/Layout';
import { describe, test, expect, vi } from 'vitest';

/**
 * Mocking ScrollToTop to prevent errors in the test environment (JSDOM),
 * as window.scrollTo is not implemented there.
 */
vi.mock('../components/common/ScrollToTop', () => ({
    default: () => null
}));

describe('App Smoke Test', () => {
    test('renders the entire application shell without crashing', () => {
        /**
         * We wrap the Layout in a MemoryRouter and SearchProvider to simulate
         * the real app environment. We use initialEntries to set the starting URL.
         */
        render(
            <MemoryRouter initialEntries={['/']}>
                <SearchProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {/* Mocking a home page content inside the Outlet */}
                            <Route index element={<div data-testid="home-page">Home Page Content</div>} />
                        </Route>
                    </Routes>
                </SearchProvider>
            </MemoryRouter>
        );

        // Verify that the Header is present by checking for the listen button
        const listenBtn = screen.getByText(/Lyssna/i);
        expect(listenBtn).toBeInTheDocument();

        // Verify that the Search Input is rendered
        const searchInput = screen.getByPlaceholderText(/sök/i);
        expect(searchInput).toBeInTheDocument();

        //  Verify that the main content (Outlet) is correctly displayed
        const mainContent = screen.getByTestId('home-page');
        expect(mainContent).toBeInTheDocument();

        // Verify that the Footer is present using its ARIA role
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });
});
