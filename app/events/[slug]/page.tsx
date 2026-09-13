import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { events, getEvent } from '../../../lib/events';

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};

  return {
    title: `${event.shortTitle} | SeroEvents`,
    description: event.description,
  };
}

function MiniMark() {
  return (
    <span className="miniMark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <main className="eventDetailPage">
      <header className="detailHeader">
        <a className="detailBrand" href="../../">
          <MiniMark />
          <span>SeroEvents</span>
        </a>
        <a className="detailBack" href="../../#events">← All Events</a>
      </header>

      <section className={`eventHero ${event.accent}`}>
        <div className="eventHeroPattern" aria-hidden="true" />
        <div className="eventHeroCopy">
          <p className="eventKicker">{event.category} · {event.year}</p>
          <h1>{event.title}</h1>
          <p className="eventHeroLead">{event.description}</p>
        </div>
        <div className="eventFacts">
          <div><span>Date</span><strong>{event.date}</strong></div>
          <div><span>Venue</span><strong>{event.location}</strong></div>
          <div><span>Time</span><strong>{event.time}</strong></div>
          {event.cme && <div><span>Accreditation</span><strong>{event.cme}</strong></div>}
        </div>
      </section>

      <section className="eventDetailSection eventOverviewSection">
        <div className="detailSectionLabel">Overview</div>
        <div className="detailTwoCol">
          <h2>A focused scientific programme built around practical discussion.</h2>
          <div className="detailBody">
            {event.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="eventDetailSection detailDark">
        <div className="detailSectionLabel detailLabelLight">Programme Themes</div>
        <div className="highlightGrid">
          {event.highlights.map((item, index) => (
            <div className="highlightItem" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="eventDetailSection">
        <div className="detailSectionLabel">Selected Programme</div>
        <div className="programmeList">
          {event.programme.map((item) => (
            <article className="programmeRow" key={`${item.time}-${item.title}`}>
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                {item.speaker && <p>{item.speaker}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="eventDetailSection facultySection">
        <div className="detailSectionLabel">Faculty & Contributors</div>
        <div className="facultyGrid">
          {event.faculty.map((name) => <span key={name}>{name}</span>)}
        </div>
      </section>

      <section className="eventCaseStudyCta">
        <div>
          <p className="eventKicker">SeroEvents Portfolio</p>
          <h2>Planning a scientific or healthcare event?</h2>
          <p>From programme coordination to event-day delivery, SeroEvents supports the complete conference journey.</p>
        </div>
        <a className="button buttonPrimary" href="mailto:info@seroevents.com">Plan Your Event</a>
      </section>

      <footer className="detailFooter">
        <span>SeroEvents</span>
        <a href="../../">Back to homepage</a>
      </footer>
    </main>
  );
}
