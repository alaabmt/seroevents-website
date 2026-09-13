export function SiteNav() {
  return (
    <header className="subHeader">
      <a className="subBrand" href="/seroevents-website/">Seroevents</a>
      <nav className="subNav" aria-label="Primary">
        <a href="/seroevents-website/about/">About</a>
        <a href="/seroevents-website/services/">Services</a>
        <a href="/seroevents-website/scientific-areas/">Scientific Areas</a>
        <a href="/seroevents-website/partners/">Partnerships</a>
        <a href="/seroevents-website/events/">Events</a>
        <a href="/seroevents-website/contact/">Contact</a>
      </nav>
      <a className="subCta" href="/seroevents-website/events/upcoming/">Upcoming Events</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="subFooter">
      <div><strong>Seroevents</strong><span>Scientific Events & Healthcare Engagement</span></div>
      <div className="subFooterLinks">
        <a href="/seroevents-website/scientific-areas/">Scientific Areas</a>
        <a href="/seroevents-website/events/upcoming/">Upcoming</a>
        <a href="/seroevents-website/events/past/">Past Events</a>
        <a href="/seroevents-website/partners/">Partnerships</a>
        <a href="mailto:info@seroevents.com">info@seroevents.com</a>
      </div>
    </footer>
  );
}
