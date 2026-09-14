import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../components/SiteNav';
import styles from './page.module.css';

const canonicalUrl = 'https://alaabmt.github.io/seroevents-website/events/abu-dhabi-healthcare-revenue-cycle-summit-2027/';
const imageUrl = 'https://alaabmt.github.io/seroevents-website/RCM%20Flayer.png';
const seoTitle = 'Abu Dhabi Healthcare Revenue Cycle Summit 2027 | UAE';
const seoDescription = 'Abu Dhabi Healthcare Revenue Cycle Summit 2027, 7–8 May. UAE leaders explore reimbursement, CDI, payment integrity, clinical costing, data and AI.';

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    'Abu Dhabi Healthcare Revenue Cycle Summit 2027',
    'healthcare revenue cycle UAE',
    'revenue cycle management Abu Dhabi',
    'RCM conference UAE',
    'healthcare reimbursement UAE',
    'case mix integrity UAE',
    'clinical documentation improvement UAE',
    'CDI UAE',
    'payment integrity UAE',
    'clinical costing UAE',
    'healthcare finance conference Abu Dhabi',
    'healthcare AI UAE',
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  authors: [{ name: 'Seroevents', url: 'https://alaabmt.github.io/seroevents-website/' }],
  creator: 'Seroevents',
  publisher: 'Seroevents',
  category: 'Healthcare',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: canonicalUrl,
    siteName: 'Seroevents',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: imageUrl,
        width: 1536,
        height: 864,
        alt: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027 — 7–8 May 2027, Abu Dhabi, UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: [imageUrl],
  },
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  '@id': `${canonicalUrl}#event`,
  name: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027',
  description: 'A focused UAE healthcare leadership and scientific summit exploring reimbursement transformation, case-mix integrity, CDI, payment integrity, clinical costing, data, interoperability, AI and automation in healthcare revenue cycle.',
  url: canonicalUrl,
  image: [imageUrl],
  startDate: '2027-05-07',
  endDate: '2027-05-08',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Abu Dhabi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressRegion: 'Abu Dhabi',
      addressCountry: 'AE',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Seroevents',
    url: 'https://alaabmt.github.io/seroevents-website/',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare executives, finance leaders, revenue cycle leaders, payers, insurers, TPAs, HIM, coding, CDI, clinical, digital health, data, AI and market access professionals',
  },
  about: [
    { '@type': 'Thing', name: 'Healthcare Revenue Cycle Management' },
    { '@type': 'Thing', name: 'Healthcare Reimbursement' },
    { '@type': 'Thing', name: 'Clinical Documentation Improvement' },
    { '@type': 'Thing', name: 'Case-Mix Integrity' },
    { '@type': 'Thing', name: 'Payment Integrity' },
    { '@type': 'Thing', name: 'Clinical Costing' },
    { '@type': 'Thing', name: 'Healthcare Data and Interoperability' },
    { '@type': 'Thing', name: 'Artificial Intelligence in Healthcare Revenue Cycle' },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Seroevents',
      item: 'https://alaabmt.github.io/seroevents-website/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Events',
      item: 'https://alaabmt.github.io/seroevents-website/events/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Abu Dhabi Healthcare Revenue Cycle Summit 2027',
      item: canonicalUrl,
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteNav />

      <section className={styles.hero}>
        <h1 className={styles.srOnly}>Abu Dhabi Healthcare Revenue Cycle Summit 2027</h1>
        <img className={styles.heroImage} src="/seroevents-website/RCM%20Flayer.png" alt="Abu Dhabi Healthcare Revenue Cycle Summit 2027 — 7–8 May 2027, Abu Dhabi, UAE" width="1536" height="864" fetchPriority="high" />
        <div className={styles.heroActionBar}>
          <div>
            <strong>7–8 May 2027 · Abu Dhabi, UAE</strong>
            <span>Shaping the Future of Healthcare Revenue Cycle in the UAE</span>
          </div>
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
