const services = [
  {
    title: 'Conference Management',
    text: 'End-to-end planning and delivery for conferences, symposiums, roundtables and professional meetings.',
  },
  {
    title: 'Scientific Programme Support',
    text: 'Structured programme coordination for healthcare, research and educational audiences.',
  },
  {
    title: 'Faculty & Speaker Coordination',
    text: 'Speaker invitations, schedules, travel coordination, briefing and on-site support.',
  },
  {
    title: 'Sponsorship & Partnerships',
    text: 'Sponsor engagement, packages, visibility planning and partner coordination.',
  },
  {
    title: 'Registration & Delegate Experience',
    text: 'Registration journeys, delegate communications, guest flow and event-day operations.',
  },
  {
    title: 'Branding & Event Communications',
    text: 'Event identity, social media assets, programmes, signage and digital communication materials.',
  },
];

const events = [
  {
    year: '2024',
    title: 'Innovative Therapy Implementation (ITI) Summit',
    location: 'Rosewood Hotel, Abu Dhabi',
    date: '25 May 2024',
    category: 'Healthcare · Scientific Conference',
    description:
      'A multidisciplinary summit focused on innovative therapy access, reimbursement, precision medicine and practical implementation in the UAE healthcare system.',
    accent: 'eventOrange',
  },
  {
    year: '2024',
    title: 'FCHS Future Medicine Symposium',
    location: 'Fatima College of Health Sciences, Abu Dhabi',
    date: '23 May 2024',
    category: 'Education · Future Medicine',
    description:
      'A scientific symposium covering clinical trials, digital health, pharmacogenomics, regenerative medicine and cellular therapy.',
    accent: 'eventGold',
  },
];

function BrandMark() {
  return (
    <div className="brandMark" aria-label="SeroEvents">
      <span className="brandSymbol" aria-hidden="true">
        <i className="node n1" />
        <i className="node n2" />
        <i className="node n3" />
        <i className="node n4" />
        <i className="node n5" />
        <i className="bond b1" />
        <i className="bond b2" />
        <i className="bond b3" />
        <i className="bond b4" />
      </span>
      <span className="brandText">SeroEvents</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brandLink" href="#top">
          <BrandMark />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="headerCta" href="#contact">Plan an Event</a>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow glowOne" />
        <div className="heroGlow glowTwo" />
        <div className="moleculeGrid" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Healthcare & Scientific Event Management</p>
          <h1>Where healthcare, science<br />& people connect.</h1>
          <p className="heroLead">
            Professional conference and event management for healthcare, scientific,
            educational and corporate communities across the UAE and beyond.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#events">Explore Our Events</a>
            <a className="button buttonGhost" href="#contact">Plan Your Event</a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="heroPanelTop">
            <span>Built around every detail</span>
            <span className="statusDot">●</span>
          </div>
          <div className="heroPanelBody">
            <div>
              <strong>Strategy</strong>
              <span>Concept to programme</span>
            </div>
            <div>
              <strong>People</strong>
              <span>Faculty, partners & delegates</span>
            </div>
            <div>
              <strong>Delivery</strong>
              <span>Production to event day</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="sectionLabel">01 · About SeroEvents</div>
        <div className="split">
          <h2>We turn complex professional events into clear, engaging experiences.</h2>
          <div className="bodyCopy">
            <p>
              SeroEvents is a professional event management company specializing in healthcare,
              scientific, educational and corporate events.
            </p>
            <p>
              We connect experts, institutions, industry partners and communities through well-planned
              conferences, symposiums, workshops and networking experiences.
            </p>
          </div>
        </div>
        <div className="pillRow">
          <span>Scientific Events</span>
          <span>Healthcare Conferences</span>
          <span>Professional Networking</span>
          <span>Corporate Events</span>
        </div>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionHeadingRow">
          <div>
            <div className="sectionLabel">02 · What We Do</div>
            <h2>End-to-end event support.</h2>
          </div>
          <p>One team managing the event journey from early planning through final delivery.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span className="serviceNumber">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section eventsSection" id="events">
        <div className="sectionHeadingRow">
          <div>
            <div className="sectionLabel light">03 · Event Portfolio</div>
            <h2>Past events. Future-ready platform.</h2>
          </div>
          <p className="lightText">New conferences can be added as reusable event pages as the portfolio grows.</p>
        </div>
        <div className="eventGrid">
          {events.map((event) => (
            <article className={`eventCard ${event.accent}`} key={event.title}>
              <div className="eventTopline">
                <span>{event.category}</span>
                <span>{event.year}</span>
              </div>
              <div className="eventArtwork" aria-hidden="true">
                <span className="eventRing ringOne" />
                <span className="eventRing ringTwo" />
                <span className="eventRing ringThree" />
              </div>
              <div className="eventContent">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="eventMeta">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <span className="textLink">Event case study coming next →</span>
              </div>
            </article>
          ))}
          <article className="eventCard upcomingCard">
            <div className="eventTopline">
              <span>Upcoming Events</span>
              <span>Next</span>
            </div>
            <div className="upcomingBody">
              <span className="plus">+</span>
              <h3>Ready for the next conference.</h3>
              <p>The structure is prepared for future events, registration links, agendas, speakers and sponsors.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section whySection">
        <div className="sectionLabel">04 · Why SeroEvents</div>
        <div className="whyGrid">
          <div className="whyLead">
            <h2>Focused on the details that make professional events work.</h2>
          </div>
          <div className="whyItem"><span>01</span><h3>Professional planning</h3><p>Structured delivery from concept to execution.</p></div>
          <div className="whyItem"><span>02</span><h3>Scientific focus</h3><p>Built for healthcare, research and educational environments.</p></div>
          <div className="whyItem"><span>03</span><h3>Stakeholder coordination</h3><p>Connecting speakers, institutions, partners and participants.</p></div>
          <div className="whyItem"><span>04</span><h3>End-to-end management</h3><p>A coordinated event journey managed by one team.</p></div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div>
          <div className="sectionLabel light">05 · Contact</div>
          <h2>Planning your next conference?</h2>
          <p>Tell us what you are building. We will help shape the experience from concept to delivery.</p>
        </div>
        <div className="contactActions">
          <a className="button buttonPrimary" href="mailto:info@seroevents.com">info@seroevents.com</a>
          <a className="button buttonGhost" href="https://www.instagram.com/sero_events" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>

      <footer>
        <BrandMark />
        <p>Healthcare & Scientific Event Management</p>
        <p>© {new Date().getFullYear()} SeroEvents. All rights reserved.</p>
      </footer>
    </main>
  );
}
