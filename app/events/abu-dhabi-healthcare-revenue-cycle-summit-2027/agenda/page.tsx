import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../../components/SiteNav';
import styles from './page.module.css';

const canonicalUrl = 'https://alaabmt.github.io/seroevents-website/events/abu-dhabi-healthcare-revenue-cycle-summit-2027/agenda/';

export const metadata: Metadata = {
  title: 'Scientific Programme | Abu Dhabi Healthcare Revenue Cycle Summit 2027',
  description: 'Explore the scientific programme framework for the Abu Dhabi Healthcare Revenue Cycle Summit 2027, covering reimbursement, CDI, case mix, payment integrity, costing, data and AI.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Scientific Programme | Abu Dhabi Healthcare Revenue Cycle Summit 2027',
    description: 'Scientific programme framework for the UAE healthcare revenue cycle summit in Abu Dhabi, 7–8 May 2027.',
    url: canonicalUrl,
    siteName: 'Seroevents',
    locale: 'en_AE',
    type: 'website',
    images: [{
      url: 'https://alaabmt.github.io/seroevents-website/abu-dhabi-healthcare-revenue-cycle-summit-2027.png',
      width: 1536,
      height: 864,
      alt: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027',
    }],
  },
};

const pillars = [
  ['01', 'Reimbursement Transformation in the UAE', 'Leadership discussion on the evolving reimbursement environment, financial sustainability and the implications for provider and payer operating models.'],
  ['02', 'Case-Mix Integrity, CDI & Coding Quality', 'Accurate documentation, coding quality and faithful representation of clinical complexity across the revenue cycle.'],
  ['03', 'Denial Prevention & Payment Integrity', 'Upstream prevention, claims quality, payer-provider alignment, resubmission reduction and more reliable payment outcomes.'],
  ['04', 'Clinical Costing & Financial Sustainability', 'Using clinical costing, service-line insight and financial data to support sustainable healthcare delivery and decision-making.'],
  ['05', 'Payer–Provider Collaboration', 'Structured dialogue on shared operational challenges, reimbursement, claims, utilization and data quality.'],
  ['06', 'Healthcare Data & Interoperability', 'Connecting clinical and financial information to improve coding, claims, analytics and revenue-cycle decisions.'],
  ['07', 'AI & Automation in Revenue Cycle', 'Practical use cases across CDI, coding, prior authorization, claims, denials and analytics, with appropriate governance and human oversight.'],
  ['08', 'Leadership, Workforce & Operating Models', 'Capabilities, accountability, workforce development and operating models required for the next phase of revenue-cycle transformation.'],
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Seroevents', item: 'https://alaabmt.github.io/seroevents-website/' },
    { '@type': 'ListItem', position: 2, name: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027', item: 'https://alaabmt.github.io/seroevents-website/events/abu-dhabi-healthcare-revenue-cycle-summit-2027/' },
    { '@type': 'ListItem', position: 3, name: 'Scientific Programme', item: canonicalUrl },
  ],
};

export default function AgendaPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteNav />

      <header className={styles.hero}>
        <p className={styles.eyebrow}>7–8 May 2027 · Abu Dhabi, UAE</p>
        <h1>Scientific Programme</h1>
        <p className={styles.lead}>A focused programme framework built around the clinical, financial, operational and digital issues shaping healthcare revenue cycle in the UAE.</p>
      </header>

      <main>
        <section className={styles.intro}>
          <div>
            <p className={styles.label}>Programme development</p>
            <h2>Scientific architecture for the first edition.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>The detailed timed agenda and faculty will be announced progressively as the scientific programme is finalized. The current framework defines the core subject areas around which plenary discussions, expert sessions and focused cross-sector dialogue will be developed.</p>
            <p>The programme is intended for senior healthcare leaders and specialist teams across providers, payers, finance, revenue cycle, HIM, coding, CDI, clinical operations, data and digital health.</p>
          </div>
        </section>

        <section className={styles.pillars}>
          <div className={styles.sectionHead}>
            <p className={styles.labelLight}>Programme pillars</p>
            <h2>Eight areas shaping the UAE revenue-cycle agenda.</h2>
          </div>
          <div className={styles.grid}>
            {pillars.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.statusSection}>
          <div>
            <p className={styles.label}>Agenda status</p>
            <h2>Detailed sessions will be published progressively.</h2>
          </div>
          <div className={styles.statusCard}>
            <strong>Current stage</strong>
            <p>Scientific framework confirmed. Detailed session titles, timings, moderators and faculty are under development and will be added when formally confirmed.</p>
            <a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Scientific%20Contribution">Scientific contribution enquiry →</a>
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p>Abu Dhabi Healthcare Revenue Cycle Summit 2027</p>
            <h2>Shaping the Future of Healthcare Revenue Cycle in the UAE</h2>
          </div>
          <a href="mailto:info@seroevents.com?subject=RCM%20Summit%202027%20-%20Register%20Interest">Register Interest</a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
