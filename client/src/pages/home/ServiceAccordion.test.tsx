import { render, screen, fireEvent } from '@testing-library/react';
import ServiceAccordion from './ServiceAccordion';
import '@testing-library/jest-dom';

describe('ServiceAccordion Component', () => {
    const testTitle = "Test Service";
    const testContent = "This is the hidden content";

    test('should be collapsed by default', () => {
        render(
            <ServiceAccordion title={testTitle}>
                <p>{testContent}</p>
            </ServiceAccordion>
        );

        const button = screen.getByRole('button', { name: new RegExp(testTitle, 'i') });
        
        // Check initial ARIA state
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    test('should expand and show content when clicked', () => {
        render(
            <ServiceAccordion title={testTitle}>
                <p>{testContent}</p>
            </ServiceAccordion>
        );

        const button = screen.getByRole('button', { name: new RegExp(testTitle, 'i') });
        
        // Simulate user click
        fireEvent.click(button);

        // Verify that ARIA state updated and content is accessible
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });
});
