import styles from './BasicNeeds.module.scss'

export const BasicNeeds = () => (
    <section className={styles.needs}>
        <h3>De grundläggande behov som kan ge dig rätt att få personlig assistans:</h3>
        
        <ul>
            <li>Andning</li>
            <li>Personlig hygien</li>
            <li>Måltider</li>
            <li>Av- och påklädning</li>
            <li>Kommunikation</li>
            <li>Annan hjälp som förutsätter ingående  kunskap om den funktionsnedsatte.</li>
        </ul>
    </section>
);
