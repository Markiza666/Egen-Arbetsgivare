import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchProvider } from '../../context/SearchProvider';
import Header from './Header';
import { vi, describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// Create a mock function for navigation
const mockNavigate = vi.fn();

// Mock react-router-dom to intercept useNavigate calls
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Search Navigation', () => {
    test('navigates to FAQ page on search submit', async () => {
        render(
            <MemoryRouter>
                <SearchProvider>
                    <Header />
                </SearchProvider>
            </MemoryRouter>
        );

        // Simulate user typing into the search input
        const searchInput = screen.getByPlaceholderText(/Sök.../i);
        fireEvent.change(searchInput, { target: { value: 'assistans' } });

        // Locate the form and trigger the submit event
        const searchForm = searchInput.closest('form');
        fireEvent.submit(searchForm!);

        // Verify that navigate was called with the correct URL
        expect(mockNavigate).toHaveBeenCalledWith('/faq');
    });
});
