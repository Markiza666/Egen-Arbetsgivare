import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../../context/SearchProvider';
import Header from './Header';
import { describe, test, expect } from 'vitest';

describe('Search Integration', () => {
    test('updates the search query when the user types', () => {
        /**
         * Render the Header within the necessary providers.
         * MemoryRouter handles navigation context, and SearchProvider 
         * manages the global search state.
         */
        render(
            <MemoryRouter>
                <SearchProvider>
                    <Header />
                </SearchProvider>
            </MemoryRouter>
        );

        /**
         * Select the search input field.
         * We use a case-insensitive regex to find the placeholder "Sök".
         */
        const input = screen.getByPlaceholderText(/sök/i) as HTMLInputElement;
        
        /**
         * Simulate a user typing 'Arbetsträning' into the input field.
         * This triggers the onChange event and updates the SearchContext state.
         */
        fireEvent.change(input, { target: { value: 'Arbetsträning' } });

        /**
         * Verify that the input element correctly reflects the typed value.
         * This ensures the two-way binding between the UI and the SearchProvider works.
         */
        expect(input.value).toBe('Arbetsträning');
    });
});
