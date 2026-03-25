import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RouteAnnouncer from './RouteAnnouncer';
import '@testing-library/jest-dom';

describe('RouteAnnouncer Component', () => {
  
    test('announces the correct page title when navigating', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/assistans']}>
                <Routes>
                    <Route path="/assistans" element={<RouteAnnouncer />} />
                </Routes>
            </MemoryRouter>
        );

        // We look for the div with the sr-only class that contains our text
        const announcement = container.querySelector('.sr-only');
        
        expect(announcement).toBeInTheDocument();
        expect(announcement?.textContent).toMatch(/Navigerade till sidan: assistans/i);
    });

    test('announces "Startsida" when at the root path', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<RouteAnnouncer />} />
                </Routes>
            </MemoryRouter>
        );

        const announcement = container.querySelector('.sr-only');
        
        expect(announcement).toBeInTheDocument();
        expect(announcement?.textContent).toMatch(/Startsida/i);
    });
});