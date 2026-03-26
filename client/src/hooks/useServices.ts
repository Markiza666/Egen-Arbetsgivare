import { useState, useEffect } from 'react';
import type { ServiceItem } from '../types';

/**
 * useServices Hook
 * * Handles fetching and management of service-related data.
 * Currently serves static data but is structured to support asynchronous API calls and loading/error states.
 */
export const useServices = () => {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from an API with static data for now
        const fetchServices = () => {
            const data: ServiceItem[] = [
                {
                    id: '1',
                    title: 'Personlig assistans',
                    description: 'Vi erbjuder trygg och professionell assistans där du som kund står i centrum. Vi sköter allt det administrativa så att du kan fokusera på ditt liv.',
                    features: ['Matchning av assistenter', 'Juridisk hjälp vid ansökan', 'Dygnet runt-support']
                },
                {
                    id: '2',
                    title: 'Bli egen arbetsgivare',
                    description: 'För dig som vill ha maximal frihet. Vi stöttar dig i rollen som arbetsgivare för dina egna assistenter, med expertis inom ekonomi och lagar.',
                    features: ['Full kontroll över rekrytering', 'Löneadministration ingår', 'Utbildningspaket för dina anställda']
                },
                {
                    id: 'berattelser',
                    title: 'Egna berättelser',
                    description: 'Läs om hur andra har tagit makten över sin vardag som egna arbetsgivare.',
                    features: ['Kundintervjuer', 'Erfarenhetsutbyte', 'Inspiration']
                },
                {
                    id: 'nyheter',
                    title: 'Nyheter',
                    description: 'Håll dig uppdaterad om lagändringar och vad som händer hos Egen Arbetsgivare.',
                    features: ['Lagbevakning', 'Event', 'Branschnyheter']
                }
            ];
            
            setServices(data);
            setLoading(false);
        };

        fetchServices();
    }, []);

  return { services, loading };
};