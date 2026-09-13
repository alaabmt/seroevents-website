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
            <p className="pageEyebrow">Managing Director</p>
            <h2>Healthcare leadership shaped by more than two decades of operational experience.</h2>
            <p>
              Mr. Abdel Karim Ajam serves as Managing Director of Seroevents, leading the company’s
              development as a specialized scientific events and healthcare engagement platform in the UAE.
            </p>
          </div>

          <div className="contentCard">
            <h2>Professional background</h2>
            <p>
              His career includes senior responsibilities in healthcare human resources, talent acquisition,
              manpower planning and project management within major Abu Dhabi healthcare institutions.
            </p>
            <p>
              This operational background supports Seroevents’ focus on structured coordination, stakeholder
              engagement, professional standards and disciplined delivery.
            </p>
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
        <div className="contentGrid">
          <div className="contentCard">
            <h3>Scientific Engagement</h3>
            <p>Supporting platforms that bring healthcare professionals, institutions and scientific leaders together.</p>
          </div>
          <div className="contentCard">
            <h3>Professional Standards</h3>
            <p>Maintaining a premium, credible and healthcare-focused approach across Seroevents activities.</p>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="emptyState">
          <p className="pageEyebrow">Seroevents</p>
          <h2>Where Scientific Expertise Meets Meaningful Engagement.</h2>
          <p>
            Seroevents develops and delivers medical conferences, scientific forums, expert meetings and
            professional healthcare education in the UAE.
          </p>
          <div className="linkRow">
            <a className="pillLink orange" href="/seroevents-website/contact/">Contact Seroevents</a>
            <a className="pillLink" href="/seroevents-website/about/">Back to About</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
