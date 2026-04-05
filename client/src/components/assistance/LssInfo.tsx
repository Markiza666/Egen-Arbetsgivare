import styles from './LssInfo.module.scss';

export const LssInfo = () => (
    <section className={styles.who}>
        <h3>Vem kan få personlig assistans?</h3>

        <p>Om du tillhör vissa grupper, så kallat personkretsen, kan du omfattas av Lagen om Stöd och Service, LSS. Det är personer:</p>

        <ul>
            <li>Som har utvecklingsstörning, autism eller autismliknande tillstånd.</li>

            <li>Med betydande och bestående begåvningsmässig funktionsnedsättning efter en hjärnskada i vuxen ålder.</li>
            
            <li>Med andra fysiska eller psykiska funktionsnedsättningar som inte beror på normalt åldrande och som finns kvar under lång tid, och som orsakar betydande svårigheter i det dagliga livet.</li>
        </ul>
    </section>
);
