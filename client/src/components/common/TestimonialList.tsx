import React, { useEffect, useState } from 'react';
import styles from './TestimonialList.module.scss';
import type { ITestimonial } from '../../types';

const TestimonialList: React.FC = () => {
    const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5001/api/testimonials');
                
                if (!response.ok) throw new Error('Kunde inte hämta omdömen.');
                
                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ett fel uppstod');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (isLoading) return <div className={styles.loading}>Laddar omdömen...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            <h2>Vad våra kunder säger</h2>
            <div className={styles.grid}>
                {testimonials.length > 0 ? (
                    testimonials.map((t) => (
                        <div key={t._id} className={styles.card}>
                            <div className={styles.rating}>
                                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                            </div>
                            <p className={styles.content}>"{t.content}"</p>
                            <p className={styles.author}>- {t.author}</p>
                            {t.role && <p className={styles.role}>{t.role}</p>}
                        </div>
                    ))
                ) : (
                    <p>Inga omdömen har publicerats än.</p>
                )}
            </div>
        </div>
    );
};

export default TestimonialList;
