import styles from './summit-nav.module.css';

const base = '/seroevents-website/events/abu-dhabi-healthcare-revenue-cycle-summit-2027';

export function SummitNav() {
  return (
    <nav className={styles.summitNav} aria-label="Abu Dhabi Healthcare Revenue Cycle Summit navigation">
      <div className={styles.inner}>
        <a href={`${base}/`}>Overview</a>
        <a href={`${base}/agenda/`}>Programme</a>
        <span className={styles.comingSoon} aria-label="Speakers, coming soon">Speakers <small>Coming soon</small></span>
        <span className={styles.comingSoon} aria-label="Advisory Board, coming soon">Advisory Board <small>Coming soon</small></span>
        <span className={styles.comingSoon} aria-label="Venue and Travel, coming soon">Venue &amp; Travel <small>Coming soon</small></span>
        <a className={styles.register} href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Register%20Interest">Register Interest</a>
      </div>
    </nav>
  );
}
