import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../components/SiteNav';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027 | Seroevents',
  description: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027 — 7–8 May 2027, Abu Dhabi, UAE. Shaping the Future of Healthcare Revenue Cycle in the UAE.',
};

const themes = [
  ['01', 'Reimbursement Transformation', 'Preparing for the next phase of reimbursement reform and financial sustainability in the UAE.'],
  ['02', 'Clinical Costing & Value-Based Funding', 'Connecting cost, outcomes and reimbursement to support sustainable healthcare delivery.'],
  ['03', 'Case-Mix Integrity & CDI', 'Strengthening documentation, coding quality and accurate representation of clinical complexity.'],
  ['04', 'Denial Prevention & Payment Integrity', 'Moving upstream from appeals toward prevention, accuracy and payer–provider alignment.'],
  ['05', 'Data & Interoperability', 'Building reliable clinical-financial data flows that support better revenue-cycle decisions.'],
  ['06', 'AI, Automation & Workforce', 'Applying automation responsibly across coding, CDI, authorization, claims and analytics.'],
];

const audience = [
  'Hospital & Health-System Executives', 'CFOs & Finance Leaders', 'Revenue Cycle Leaders',
  'Payers, Insurers & TPAs', 'HIM, Coding & CDI Leaders', 'Clinical Leaders',
  'Digital Health, Data & AI Leaders', 'Healthcare System & Policy Stakeholders',
  'Market Access & Value-Based Healthcare Leaders', 'RCM & Healthcare Technology Organisations',
];

const programme = [
  'Reimbursement transformation in the UAE',
  'Case-mix integrity, CDI and coding quality',
  'Denial prevention and payment integrity',
  'Clinical costing and financial sustainability',
  'Payer–provider collaboration',
  'Healthcare data and interoperability',
  'AI and automation in revenue cycle',
  'Leadership, workforce and operating models',
];

export default function RevenueCycleSummitPage() {
  return (
    <div className={styles.page}>
      <SiteNav />

      <section className={styles.hero}>
        <img className={styles.heroImage} src="/seroevents-website/rcm-summit-2027-hero.webp" alt="Abu Dhabi Healthcare Revenue Cycle Summit 2027" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>7–8 May 2027 · Abu Dhabi, UAE</p>
          <h1>Abu Dhabi Healthcare Revenue Cycle Summit 2027</h1>
          <p className={styles.theme}>Shaping the Future of Healthcare Revenue Cycle in the UAE</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Register%20Interest">Register Interest</a>
            <a className={styles.secondaryButton} href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Partnership%20Enquiry">Partnership Enquiries</a>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.sectionLabel}>Why this summit</p>
          <h2>The healthcare revenue-cycle environment is changing.</h2>
        </div>
        <div className={styles.introText}>
          <p>Healthcare reimbursement in the UAE is entering a new stage shaped by reimbursement reform, clinical costing, case-mix integrity, payment integrity, digital health and AI.</p>
          <p>The Summit will provide a focused platform for healthcare leaders to examine what these changes mean for organisations, patients and the sustainability of the healthcare system.</p>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabelLight}>Six converging forces</p>
          <h2>Scientific and strategic themes for 2027.</h2>
        </div>
        <div className={styles.themeGrid}>
          {themes.map(([number, title, text]) => (
            <article className={styles.themeCard} key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeadLight}>
          <p className={styles.sectionLabel}>Who should attend</p>
          <h2>A focused audience across the healthcare ecosystem.</h2>
        </div>
        <div className={styles.audienceGrid}>
          {audience.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className={styles.programmeSection}>
        <div className={styles.programmeIntro}>
          <p className={styles.sectionLabel}>Scientific programme</p>
          <h2>Designed around the issues shaping healthcare financial performance.</h2>
          <p>Full scientific programme and faculty will be announced progressively.</p>
        </div>
        <div className={styles.programmeList}>
          {programme.map((item, index) => (
            <div className={styles.programmeItem} key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.impactSection}>
        <p className={styles.sectionLabelLight}>From discussion to sector value</p>
        <h2>The Summit will not only discuss the UAE revenue cycle — it will begin measuring it.</h2>
        <div className={styles.impactGrid}>
          <div><strong>UAE Revenue Cycle Benchmark</strong><span>Developing a clearer evidence base for performance and priorities.</span></div>
          <div><strong>Payer–Provider Dialogue</strong><span>Creating structured cross-sector discussion on shared challenges.</span></div>
          <div><strong>Case-Mix Integrity Principles</strong><span>Promoting accuracy, quality and responsible documentation practice.</span></div>
          <div><strong>2027–2030 Agenda</strong><span>Identifying priorities for the next phase of revenue-cycle transformation.</span></div>
        </div>
      </section>

      <section className={styles.participationSection}>
        <div>
          <p className={styles.sectionLabel}>Get involved</p>
          <h2>Be part of the conversation shaping healthcare revenue cycle in the UAE.</h2>
        </div>
        <div className={styles.pathGrid}>
          <article><span>01</span><h3>Attend</h3><p>Join a focused community of healthcare decision-makers and practitioners.</p><a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Register%20Interest">Register interest →</a></article>
          <article><span>02</span><h3>Contribute</h3><p>Share expertise through scientific dialogue, panels and focused discussions.</p><a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Scientific%20Contribution">Scientific enquiries →</a></article>
          <article><span>03</span><h3>Partner</h3><p>Engage with a highly relevant UAE healthcare leadership audience.</p><a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Partnership%20Enquiry">Partnership enquiries →</a></article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p>7–8 May 2027 · Abu Dhabi, UAE</p>
          <h2>Abu Dhabi Healthcare Revenue Cycle Summit 2027</h2>
          <span>Venue details will be announced shortly.</span>
        </div>
        <a className={styles.primaryButton} href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Enquiry">Contact Seroevents</a>
      </section>

      <SiteFooter />
    </div>
  );
}
