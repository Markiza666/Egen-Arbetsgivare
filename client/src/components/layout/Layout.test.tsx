import { render, screen } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import Layout from './Layout';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { SearchProvider } from '../../context/SearchProvider';

// Mocking ScrollToTop to avoid window.scrollTo errors in JSDOM
vi.mock('../common/ScrollToTop', () => ({
    default: () => null
}));

describe('Layout Component', () => {
    test('renders Header, Footer and page content via Outlet', async () => {
        render(
        <MemoryRouter initialEntries={['/test']}>
            <SearchProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="test" element={<div data-testid="child-content">Main Page Content</div>} />
                </Route>
            </Routes>
            </SearchProvider>
        </MemoryRouter>
        );

        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();

        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
        
        expect(screen.getByTestId('child-content')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument(); 
    });
});
