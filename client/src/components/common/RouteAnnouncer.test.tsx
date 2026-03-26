import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RouteAnnouncer from './RouteAnnouncer';
import '@testing-library/jest-dom';

describe('RouteAnnouncer Component', () => {
    
    test('announces the correct page title when navigating', () => {
        // We test a subpage, e.g. /about-us
        render(
            <MemoryRouter initialEntries={['/om-oss']}>
                <RouteAnnouncer />
            </MemoryRouter>
        );

        // We look for the text "about us" (independent of upper/lower case)
        // We also check that "Navigated to page" is included
        expect(screen.getByText(/Navigerade till sidan/i)).toBeInTheDocument();
        expect(screen.getByText(/om oss/i)).toBeInTheDocument();
    });

    test('announces "Startsida" when at the root path', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <RouteAnnouncer />
            </MemoryRouter>
        );

        // Check that "Homepage" is rendered
        expect(screen.getByText(/Startsida/i)).toBeInTheDocument();
    });
});