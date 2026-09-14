import { events } from '../lib/events';
import { NavigationMenu } from './components/SiteNav';

const services = [
  ['Medical Conferences', 'Development and management of professional medical conferences across specialties.'],
  ['Scientific Forums', 'Focused meetings designed around a specialty, clinical topic or area of healthcare development.'],
  ['Expert Meetings & Roundtables', 'Selected expert groups for structured scientific and professional discussion.'],
  ['Medical Education Programmes', 'Educational activities for healthcare professionals, from scientific updates to specialist workshops.'],
  ['Scientific Programme Development', 'Programme architecture, session planning, topic development, faculty planning and agenda management.'],
  ['End-to-End Event Management', 'Venue, production, registration, logistics, delegate communications and on-site operations.'],
];

const audiences = ['Healthcare Professionals','Scientific Committees','Medical Societies','Hospitals & Healthcare Groups','Universities & Academic Institutions','Research Organisations','Pharmaceutical & Biotechnology Companies','Medical Device & Diagnostic Companies','Healthcare Technology Organisations'];

const homeValues = [
  ['Scientific Integrity', 'Credible, balanced and evidence-based scientific content.'],
  ['Ethics & Transparency', 'Responsible and transparent engagement across programmes and partnerships.'],
  ['Relevance', 'Programmes aligned with emerging evidence, unmet needs and regional healthcare priorities.'],
  ['Collaboration', 'Meaningful scientific exchange across healthcare stakeholders.'],
  ['Scientific Independence', 'Appropriate governance and separation of scientific and commercial interests.'],
  ['Quality & Impact', 'High standards in programme design with practical, real-world value.'],
];

function BrandMark() {
  return (
    <div className="brandMark" aria-label="Seroevents">
      <span className="brandSymbol" aria-hidden="true">
        <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" /><i className="node n5" />
        <i className="bond b1" /><i className="bond b2" /><i className="bond b3" /><i className="bond b4" />
      </span>
      <span className="brandText">Seroevents</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="homeNavLeft">
          <NavigationMenu />
          <a className="brandLink" href="/seroevents-website/"><BrandMark /></a>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="/seroevents-website/about/">About</a>
          <a href="/seroevents-website/services/">Services</a>
          <a href="/seroevents-website/scientific-areas/">Scientific Areas</a>
          <a href="/seroevents-website/partners/">Partnerships</a>
          <a href="/seroevents-website/events/">Events</a>
        </nav>
        <a className="headerCta" href="/seroevents-website/partners/">Partner With Us</a>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow glowOne" /><div className="heroGlow glowTwo" /><div className="moleculeGrid" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Scientific Events & Healthcare Engagement · UAE</p>
          <h1>Where Scientific Expertise Meets Meaningful Engagement</h1>
          <p className="heroLead">Scientific conferences, healthcare forums, expert meetings, and professional medical education — developed and delivered in the UAE.</p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="/seroevents-website/events/upcoming/">Upcoming Events</a>
            <a className="button buttonGhost" href="/seroevents-website/events/past/">Past Events</a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="heroPanelTop"><span>Scientific engagement, professionally delivered</span><span className="statusDot">●</span></div>
          <div className="heroPanelBody">
            <div><strong>Science First</strong><span>Relevant content and clear objectives</span></div>
            <div><strong>The Right Experts</strong><span>Credible faculty and specialist voices</span></div>
            <div><strong>The Right Audience</strong><span>Focused professional engagement</span></div>
          </div>
        </div>
      </section>

      <section className="section eventsSection" id="events">
        <div className="sectionHeadingRow"><div><div className="sectionLabel light">01 · Events</div><h2>Upcoming programme and selected past events.</h2></div><p className="lightText">Our events are the clearest expression of how Seroevents brings scientific quality, credible expertise and professional delivery together.</p></div>
        <div className="eventGrid">
          <article className="eventCard upcomingCard"><div className="eventTopline"><span>Upcoming Event</span><span>2027</span></div><img className="upcomingArtwork" src="/seroevents-website/iti-summit-2027.jpg" alt="Innovative Therapy Implementation Summit 2027 — ITI: Horizon Scanning"/><div className="upcomingBody"><h3>Innovative Therapy Implementation (ITI) Summit 2027</h3><p><strong>Theme: ITI: Horizon Scanning</strong></p><p>Focused on the next wave of innovative therapies, including cell & gene therapy, peptides, longevity, innovative medicines and UAE implementation readiness.</p><p>Abu Dhabi · Date and venue to be confirmed</p><a className="textLink" href="/seroevents-website/events/upcoming/">View upcoming event →</a></div></article>
          {events.map(event=><article className={`eventCard ${event.accent}`} key={event.title}><div className="eventTopline"><span>{event.category}</span><span>{event.year}</span></div><div className="eventArtwork" aria-hidden="true"><span className="eventRing ringOne"/><span className="eventRing ringTwo"/><span className="eventRing ringThree"/></div><div className="eventContent"><h3>{event.title}</h3><p>{event.description}</p><div className="eventMeta"><span>{event.date}</span><span>{event.location}</span></div><a className="textLink" href={`/seroevents-website/events/${event.slug}/`}>View case study →</a></div></article>)}
        </div>
      </section>

      <section className="section servicesSection">
        <div className="sectionHeadingRow"><div><div className="sectionLabel">02 · Vision · Mission · Aim</div><h2>Built around scientific credibility and practical value.</h2></div><p>Our ambition is to be known for programmes that are robust, evidence-based, current and useful in real-world healthcare practice.</p></div>
        <div className="serviceGrid">
          <article className="serviceCard"><span className="serviceNumber">01</span><h3>Vision</h3><p>To become a trusted benchmark for high-quality scientific events in the UAE and the region, recognised for robust, evidence-based and up-to-date scientific programmes that translate knowledge into meaningful clinical practice.</p></article>
          <article className="serviceCard"><span className="serviceNumber">02</span><h3>Mission</h3><p>To develop and deliver scientifically rigorous healthcare programmes that bring together credible experts, current evidence and relevant professional audiences—creating meaningful opportunities for education, exchange and collaboration.</p></article>
          <article className="serviceCard"><span className="serviceNumber">03</span><h3>Our Aim</h3><p>To ensure every Seroevents programme delivers practical value to healthcare professionals through relevant scientific content, evidence-based discussion and clear takeaways that can inform everyday clinical practice.</p></article>
        </div>
        <div className="pillRow"><span>Robust Science</span><span>Current Evidence</span><span>Practical Takeaways</span></div>
      </section>

      <section className="section whySection">
        <div className="sectionLabel">03 · Our Values</div>
        <div className="sectionHeadingRow"><div><h2>The standards behind every Seroevents programme.</h2></div><p>Scientific credibility depends not only on the topic, but also on how a programme is developed, governed and delivered.</p></div>
        <div className="serviceGrid">{homeValues.map((value,index)=><article className="serviceCard" key={value[0]}><span className="serviceNumber">0{index+1}</span><h3>{value[0]}</h3><p>{value[1]}</p></article>)}</div>
      </section>

      <section className="section servicesSection">
        <div className="sectionLabel">04 · The Origin of Sero</div>
        <div className="split">
          <h2>Science and connection are built into our name.</h2>
          <div className="bodyCopy">
            <p><strong>The name “Sero” comes from serotonin.</strong> Serotonin is a signalling molecule closely associated with communication within the human body and with aspects of mood, wellbeing and human experience.</p>
            <p>We chose Sero because it connects our identity directly to science while also representing connection between people. That idea reflects what Seroevents is built to do: bring together healthcare professionals, scientific experts, institutions and partners around evidence, dialogue and meaningful engagement.</p>
            <p>The molecular structure in our visual identity reinforces the origin of the name and our connection to healthcare and science.</p>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="sectionLabel">05 · Creating Meaningful Scientific Platforms</div>
        <div className="split">
          <h2>Scientific quality, credible faculty and the right professional audience.</h2>
          <div className="bodyCopy">
            <p>At Seroevents, we believe successful medical events are defined by more than their size. They are defined by the quality of the scientific content, the credibility of the faculty, the relevance of the audience, and the value of the conversations they create.</p>
            <p>Based in the United Arab Emirates, Seroevents develops and delivers professional scientific platforms that connect healthcare professionals, scientific leaders, institutions, medical societies and industry partners.</p>
          </div>
        </div>
        <div className="pillRow"><span>Medical Conferences</span><span>Scientific Forums</span><span>Expert Meetings</span><span>Medical Education</span></div>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionHeadingRow"><div><div className="sectionLabel">06 · Our Services</div><h2>Built for scientific and healthcare audiences.</h2></div><p>From concept development to final delivery, we combine scientific understanding with professional event management.</p></div>
        <div className="serviceGrid">{services.map((service,index)=><article className="serviceCard" key={service[0]}><span className="serviceNumber">0{index+1}</span><h3>{service[0]}</h3><p>{service[1]}</p></article>)}</div>
      </section>

      <section className="section whySection">
        <div className="sectionLabel">07 · Our Philosophy</div>
        <div className="split"><h2>The Right Science. The Right Experts. The Right Audience.</h2><div className="bodyCopy"><p>Meaningful scientific engagement happens when credible experts, relevant content, and the right professional audience come together in the right environment.</p><p>Our role is to create that environment with a focus on quality, relevance, professionalism and meaningful interaction.</p></div></div>
      </section>

      <section className="section servicesSection">
        <div className="sectionHeadingRow"><div><div className="sectionLabel">08 · Who We Work With</div><h2>Across the healthcare ecosystem.</h2></div><p>Seroevents supports scientific leaders, institutions and organisations involved in professional healthcare education and engagement.</p></div>
        <div className="pillRow">{audiences.map(item=><span key={item}>{item}</span>)}</div>
      </section>

      <section className="section whySection">
        <div className="sectionLabel">09 · Why Seroevents</div>
        <div className="whyGrid">
          <div className="whyLead"><h2>Medical events require more than ordinary event management.</h2></div>
          <div className="whyItem"><span>01</span><h3>Scientific Understanding</h3><p>Scientific credibility, faculty quality and educational value remain central.</p></div>
          <div className="whyItem"><span>02</span><h3>Focused Engagement</h3><p>Clear objectives and carefully selected professional audiences.</p></div>
          <div className="whyItem"><span>03</span><h3>Premium Experience</h3><p>Venue, production and delegate experience aligned with programme quality.</p></div>
          <div className="whyItem"><span>04</span><h3>Strong Coordination</h3><p>Structured coordination across scientific leaders, partners, suppliers and participants.</p></div>
        </div>
      </section>

      <section className="contactSection" id="contact"><div><div className="sectionLabel light">10 · Partnership</div><h2>Focus on the science. We support the event around it.</h2><p>Seroevents works with conference chairs, scientific leaders, institutions and healthcare organisations to develop and deliver high-quality medical meetings.</p></div><div className="contactActions"><a className="button buttonPrimary" href="/seroevents-website/partners/">Discuss a Partnership</a><a className="button buttonGhost" href="/seroevents-website/contact/">Contact Us</a></div></section>

      <footer><BrandMark /><p>Scientific Events & Healthcare Engagement</p><p>© {new Date().getFullYear()} Seroevents. All rights reserved.</p></footer>
    </main>
  );
}
