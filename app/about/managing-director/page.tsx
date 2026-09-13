import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Managing Director | Seroevents',
  description: 'Meet Mr. Abdel Karim Ajam, Managing Director of Seroevents.',
};

const experience = [
  {
    title: 'Human Resources Business Partner',
    organisation: 'Sheikh Shakhbout Medical City (SSMC)',
    period: 'Jan 2024 – Aug 2026',
    location: 'Abu Dhabi, UAE',
  },
  {
    title: 'Human Resources Project Manager',
    organisation: 'SSMC / Mayo Clinic',
    period: 'Nov 2022 – Jan 2024',
    location: 'United Arab Emirates',
  },
  {
    title: 'Senior Talent Acquisition & Manpower Planning',
    organisation: 'SSMC / Mayo Clinic',
    period: 'Nov 2019 – Nov 2022',
    location: 'Abu Dhabi, UAE',
  },
  {
    title: 'Senior Recruitment & Manpower Planning Officer',
    organisation: 'Sheikh Khalifa Medical City',
    period: 'May 2000 – Nov 2019',
    location: 'Abu Dhabi, UAE',
  },
];

export default function ManagingDirectorPage() {
  return (
    <div className="pageShell">
      <SiteNav />

      <section className="pageHero">
        <p className="pageEyebrow">Leadership · Seroevents</p>
        <h1>Mr. Abdel Karim Ajam</h1>
        <p>Managing Director of Seroevents</p>
      </section>

      <section className="contentSection">
        <div className="contentGrid">
          <div className="contentCard dark">
            <p className="pageEyebrow">Leadership Built on Healthcare Experience</p>
            <h2>More than two decades of healthcare-sector experience shaping the way Seroevents operates.</h2>
            <p>
              Mr. Abdel Karim Ajam leads Seroevents with more than two decades of professional experience within
              the UAE healthcare sector. His background across major healthcare institutions in Abu Dhabi has
              developed a strong understanding of healthcare organisations, professional stakeholders,
              multidisciplinary teams and the standards required to deliver complex initiatives successfully.
            </p>
          </div>

          <div className="contentCard">
            <h2>Leadership Approach</h2>
            <p>
              At Seroevents, this experience shapes a disciplined approach to scientific event management —
              bringing together credible scientific expertise, thoughtful programme development, effective
              stakeholder coordination and professional execution.
            </p>
            <p>
              Under his leadership, Seroevents is focused on building trusted scientific platforms where
              healthcare professionals, experts, institutions and industry stakeholders can exchange knowledge
              and develop meaningful professional connections.
            </p>
          </div>
        </div>
      </section>

      <section className="contentSection white">
        <div className="contentGrid">
          <div className="contentCard">
            <p className="pageEyebrow">Company Confidence</p>
            <h3>Healthcare-Sector Understanding</h3>
            <p>Leadership grounded in more than two decades of experience across the UAE healthcare environment.</p>
          </div>
          <div className="contentCard">
            <p className="pageEyebrow">Company Confidence</p>
            <h3>Structured Professional Delivery</h3>
            <p>Disciplined coordination, stakeholder engagement and operational standards across Seroevents programmes.</p>
          </div>
          <div className="contentCard">
            <p className="pageEyebrow">Company Confidence</p>
            <h3>Scientific Quality Supported by Advisory Input</h3>
            <p>Selected programmes are supported by independent scientific advisory input to help maintain relevance, educational value and professional standards.</p>
          </div>
          <div className="contentCard">
            <p className="pageEyebrow">Company Confidence</p>
            <h3>Meaningful Healthcare Engagement</h3>
            <p>Creating platforms that bring together healthcare professionals, scientific leaders, institutions and industry stakeholders.</p>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="contentGrid">
          <div className="contentCard dark">
            <p className="pageEyebrow">At a Glance</p>
            <h2>20+ Years in the UAE Healthcare Sector</h2>
            <p>Experience spanning healthcare human resources, talent acquisition, manpower planning and project management.</p>
          </div>
          <div className="contentCard">
            <p className="pageEyebrow">Professional Credentials</p>
            <h3>PMP & Six Sigma Black Belt</h3>
            <p>Project Management Professional (PMP) and Certified Six Sigma Black Belt (CSSBB).</p>
          </div>
        </div>
      </section>

      <section className="contentSection white">
        <p className="pageEyebrow">Selected Experience</p>
        <div className="eventList">
          {experience.map((item) => (
            <div className="eventRow" key={`${item.title}-${item.period}`}>
              <span className="year">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.organisation}</p>
              </div>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contentSection">
        <div className="contentGrid">
          <div className="contentCard">
            <p className="pageEyebrow">Professional Credentials</p>
            <h3>Project Management Professional (PMP)</h3>
            <p>Project Management Institute · Issued December 2023.</p>
          </div>
          <div className="contentCard">
            <p className="pageEyebrow">Professional Credentials</p>
            <h3>Certified Six Sigma Black Belt (CSSBB)</h3>
            <p>International Six Sigma Institute · Issued March 2024.</p>
          </div>
        </div>
      </section>

      <section className="contentSection white">
        <div className="emptyState">
          <p className="pageEyebrow">Seroevents</p>
          <h2>Leadership focused on trust, scientific relevance and professional execution.</h2>
          <p>
            Seroevents develops and delivers medical conferences, scientific forums, expert meetings and
            professional healthcare education in the UAE, supported by structured operational leadership and
            scientific advisory input across selected programmes.
          </p>
          <div className="linkRow">
            <a className="pillLink orange" href="/seroevents-website/partners/">Partner With Seroevents</a>
            <a className="pillLink" href="/seroevents-website/about/">Back to About</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
