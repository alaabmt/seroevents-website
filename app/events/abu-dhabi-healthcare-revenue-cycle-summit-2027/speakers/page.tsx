import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../../components/SiteNav';
import styles from './page.module.css';

const base = 'https://alaabmt.github.io/seroevents-website/events/abu-dhabi-healthcare-revenue-cycle-summit-2027';
const canonicalUrl = `${base}/speakers/`;

export const metadata: Metadata = {
  title: 'Speakers | Abu Dhabi Healthcare Revenue Cycle Summit 2027',
  description: 'Meet the healthcare leaders, reimbursement experts, RCM professionals, payers, CDI, coding, finance, data and AI experts contributing to the Abu Dhabi Healthcare Revenue Cycle Summit 2027.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Speakers | Abu Dhabi Healthcare Revenue Cycle Summit 2027',
    description: 'Faculty announcements for the Abu Dhabi Healthcare Revenue Cycle Summit 2027 will be published progressively as speakers are confirmed.',
    url: canonicalUrl,
    siteName: 'Seroevents',
    locale: 'en_AE',
    type: 'website',
  },
};

const facultyProfiles = [
  ['Healthcare Leadership', 'Senior executives from hospitals and health systems addressing financial sustainability, operating models and system transformation.'],
  ['Finance & Revenue Cycle', 'CFOs, finance leaders and revenue cycle executives sharing practical perspectives on performance, integrity and transformation.'],
  ['Payers & TPAs', 'Insurance and third-party administrator leaders contributing perspectives on reimbursement, claims, payment integrity and payer-provider collaboration.'],
  ['CDI, Coding & HIM', 'Experts in clinical documentation improvement, coding quality, case-mix integrity and health information management.'],
  ['Data, Digital & AI', 'Leaders in healthcare analytics, interoperability, automation and AI-enabled revenue cycle workflows.'],
  ['Market Access & Value', 'Experts exploring sustainable access, value-based funding and the connection between reimbursement and patient access.'],
];

export default function SpeakersPage() {
  return (
    <div className={styles.page}>
      <SiteNav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Abu Dhabi Healthcare Revenue Cycle Summit 2027</p>
          <h1>Speakers &amp; Faculty</h1>
          <p className={styles.lead}>Faculty announcements will be published progressively as participation is confirmed.</p>
          <div className={styles.meta}>7–8 May 2027 · Abu Dhabi, UAE</div>
        </section>

        <section className={styles.intro}>
          <div>
            <p className={styles.label}>Scientific faculty</p>
            <h2>Perspectives from across the healthcare revenue cycle.</h2>
          </div>
          <div className={styles.copy}>
            <p>The Summit is being designed to bring together a multidisciplinary faculty representing the clinical, financial, payer, operational and technology dimensions of healthcare revenue cycle management in the UAE.</p>
            <p>Speaker invitations are being developed around relevance to the scientific programme, practical expertise and the ability to contribute meaningful cross-sector discussion. Individual names will be added only after confirmation.</p>
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.gridHeader}>
            <p className={styles.label}>Faculty perspectives</p>
            <h2>Who will contribute to the programme.</h2>
          </div>
          <div className={styles.grid}>
            {facultyProfiles.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.statusSection}>
          <div>
            <p className={styles.label}>Speaker announcements</p>
            <h2>Confirmed faculty will appear here.</h2>
            <p>We are intentionally not publishing unconfirmed names. Speaker profiles, roles and session participation will be added as confirmations are completed.</p>
          </div>
          <a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Scientific%20Contribution">Scientific contribution enquiry</a>
        </section>

        <section className={styles.footerLinks}>
          <a href={`${base}/`}>Summit overview</a>
          <a href={`${base}/agenda/`}>Scientific programme</a>
          <a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Register%20Interest">Register interest</a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
