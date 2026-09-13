import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Managing Director | Seroevents',
  description: 'Meet Mr. Abdel Karim Ajam, Managing Director of Seroevents.',
};

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
            <h2>Leadership focused on scientific quality and professional delivery.</h2>
            <p>
              Mr. Abdel Karim Ajam serves as Managing Director of Seroevents, leading the company’s
              development as a specialized scientific events and healthcare engagement platform in the UAE.
            </p>
          </div>

          <div className="contentCard">
            <h2>About the role</h2>
            <p>
              The Managing Director oversees the direction of Seroevents and supports the coordination of
              scientific programmes, healthcare partnerships, event operations and professional stakeholder
              engagement.
            </p>
            <p>
              His role is centered on ensuring that Seroevents remains focused on credible scientific content,
              respected experts, relevant professional audiences and high standards of execution.
            </p>
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
