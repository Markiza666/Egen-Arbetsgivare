import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    test('opens the mobile menu when the menu button is clicked', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
        window.dispatchEvent(new Event('resize'));

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        
        const menuBtn = screen.getByRole('button', { name: /meny/i });
        fireEvent.click(menuBtn);

        const closeBtn = screen.getByLabelText(/Stäng meny/i);
        expect(closeBtn).toBeInTheDocument();
    });
});
