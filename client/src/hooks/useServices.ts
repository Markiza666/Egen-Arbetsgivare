import { useState, useEffect } from 'react';
import type { RegistrationStep, ServiceItem, FaqItem } from '../types';

/**
 * useServices Hook
 * * Handles fetching and management of service-related data.
 * Currently serves static data but is structured to support asynchronous API calls and loading/error states.
 */
export const useServices = () => {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [assistanceProviders, setAssistanceProviders] = useState<ServiceItem[]>([]);
    const [registrationSteps, setRegistrationSteps] = useState<RegistrationStep[]>([]);
    const [faq, setFaq] = useState<FaqItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from an API with static data for now
        const fetchAllData = () => {
            const mainServices: ServiceItem[] = [
                {
                    id: '1',
                    title: 'Personlig assistans',
                    path: '/personlig-assistans',
                    description: 'Vi erbjuder trygg och professionell assistans där du som kund står i centrum. Vi sköter allt det administrativa så att du kan fokusera på ditt liv.',
                    features: ['Matchning av assistenter', 'Juridisk hjälp vid ansökan', 'Dygnet runt-support']
                },
                {
                    id: '2',
                    title: 'Bli egen arbetsgivare',
                    path: '/bli-egen-arbetsgivare',
                    description: 'För dig som vill ha maximal frihet. Vi stöttar dig i rollen som arbetsgivare för dina egna assistenter, med expertis inom ekonomi och lagar.',
                    features: ['Full kontroll över rekrytering', 'Löneadministration ingår', 'Utbildningspaket för dina anställda']
                },
                {
                    id: 'berattelser',
                    title: 'Egna berättelser',
                    path: '/vara-kunder',
                    description: 'Läs om hur andra har tagit makten över sin vardag som egna arbetsgivare.',
                    features: ['Kundintervjuer', 'Erfarenhetsutbyte', 'Inspiration']
                },
                {
                    id: 'nyheter',
                    title: 'Nyheter',
                    path: '/nyheter',
                    description: 'Håll dig uppdaterad om lagändringar och vad som händer hos Egen Arbetsgivare.',
                    features: ['Lagbevakning', 'Event', 'Branschnyheter']
                }
            ];

            const providers: ServiceItem[] = [
                {
                    id: 'kommun',
                    title: 'Kommun',
                    path: '/vara-kunder',
                    description: 'Att anlita kommunen innebär att det offentliga sköter allt. Det är tryggt men ger begränsat inflytande över vem som anställs.',
                    features: ['Offentlig regi', 'Trygghet', 'Begränsat inflytande']
                },
                {
                    id: 'privat-foretag',
                    title: 'Privat företag',
                    path: '/steg-for-steg',
                    description: 'Företaget står på din sida gentemot myndigheter. Du kan ofta påverka löner, men bör kontrollera transparensen i avtalet.',
                    features: ['Juridiskt stöd', 'Lönepåslag', 'Olika transparens']
                },
                {
                    id: 'brukarkooperativ',
                    title: 'Brukarkooperativ',
                    path: '/om-oss',
                    description: 'Ägs och styrs av medlemmarna utan vinstintresse. Allt överskott går tillbaka till assistansen.',
                    features: ['Icke-vinstdrivande', 'Medlemsstyrt', 'Hög kontroll']
                },
                {
                    id: 'egen-arbetsgivare-detalj',
                    title: 'Egen arbetsgivare',
                    path: '/bli-egen-arbetsgivare',
                    description: 'Maximal frihet. Du är själv arbetsgivare och har full kontroll över din budget och personal.',
                    features: ['Full makt', 'Egen budget', 'Vi sköter adm']
                }
            ];

            // New data for registration steps
            const stepsData: RegistrationStep[] = [
                {
                    id: 'step-1',
                    title: 'Steg för att registrera',
                    content: 'Här följer en genomgång av registreringsprocessen...',
                    points: [
                        'Registrera dig hos Bolagsverket eller som enskild firma.',
                        'Ansök om att bli arbetsgivare hos Skatteverket.',
                        'Teckna nödvändiga försäkringar.'
                    ],
                    buttonText: 'Läs mer om',
                    linkPath: '/registrera-guide'
                }
            ];

            const faqData: FaqItem[] = [ // Corrected type from FaqPage to FaqItem
                { q: "Vad innebär det att vara egen arbetsgivare?", a: "Det innebär att du har det juridiska ansvaret för dina assistenter, men med vårt stöd sköter vi det administrativa åt dig." },
                { q: "Hur ansöker man om assistansersättning?", a: "Du ansöker hos Försäkringskassan eller din kommun. Vi kan hjälpa dig med rådgivning inför din ansökan." },
                { q: "Vem kan bli min personliga assistent?", a: "I princip vem som helst som du har förtroende för och som har rätt kompetens, inklusive familjemedlemmar." },
                { q: "Vad får assistansersättningen användas till?", a: "Den ska täcka löner, sociala avgifter, utbildning och assistansomkostnader direkt kopplade till din assistans." },
                { q: "Erbjuder ni utbildning för mina assistenter?", a: "Ja, vi hjälper till att anordna relevanta utbildningar inom t.ex. lyftteknik, första hjälpen och specifika diagnoser." },
                { q: "Hur fungerar schemaläggning?", a: "Du bestämmer själv schemat utifrån dina behov, så länge det följer arbetstidslagen. Vi tillhandahåller verktyg för att förenkla detta." },
                { q: "Vad händer om en assistent blir sjuk?", a: "Som egen arbetsgivare ansvarar du för att ha en plan för vikarier, men vi finns som stöd för att hitta lösningar." },
                { q: "Kan jag byta från kommunen till att bli egen arbetsgivare?", a: "Absolut! Vi hjälper dig genom hela övergångsprocessen så att din assistans inte avbryts." },
                { q: "Vem sköter löneutbetalningarna?", a: "Genom vårt samarbete sköter vi all löneadministration, skatteinbetalningar och rapportering." },
                { q: "Vad är skillnaden mellan assistansbolag och egen arbetsgivare?", a: "Som egen arbetsgivare har du maximal kontroll och inflytande, medan ett bolag tar fler beslut åt dig." },
                { q: "Måste jag ha kollektivavtal?", a: "Det är inget krav enligt lag, men vi rekommenderar starkt att följa liknande villkor för att vara en attraktiv arbetsgivare." },
                { q: "Hur mycket kontroll har jag över rekryteringen?", a: "Du har 100% kontroll. Du väljer vem du vill intervjua och vem du vill anställa." },
                { q: "Får jag hjälp med arbetsmiljöansvaret?", a: "Ja, vi guidar dig genom systematiskt arbetsmiljöarbete för att säkerställa en trygg arbetsplats." },
                { q: "Vad kostar er tjänst?", a: "Vi erbjuder kostnadsfri rådgivning och våra administrativa tjänster finansieras genom en del av assistansersättningen." },
                { q: "Kan jag få assistans när jag reser utomlands?", a: "Ja, men det finns specifika regler beroende på resans längd och destination. Kontakta oss så planerar vi det." },
                { q: "Vilka försäkringar behöver mina assistenter?", a: "Vi hjälper dig att teckna alla nödvändiga ansvars- och olycksfallsförsäkringar för dina anställda." },
                { q: "Hur fungerar uppsägning av en assistent?", a: "Vi bistår med juridisk vägledning så att allt sker korrekt enligt arbetsrättsliga lagar och avtal." },
                { q: "Kan jag få hjälp med att skriva anställningsavtal?", a: "Självklart! Vi har färdiga mallar och juridisk expertis som ser till att alla avtal är korrekta." }
            ];
            
            setServices(mainServices);
            setAssistanceProviders(providers);
            setRegistrationSteps(stepsData);
            setFaq(faqData); // Now this works!
            setLoading(false);
        };

        fetchAllData();
    }, []);

    // Return everything so components can consume it
    return { services, assistanceProviders, registrationSteps, faq, loading };
};
