const menuItems = [
  ['Home', '/seroevents-website/'],
  ['About', '/seroevents-website/about/'],
  ['Managing Director', '/seroevents-website/about/managing-director/'],
  ['Services', '/seroevents-website/services/'],
  ['Scientific Areas', '/seroevents-website/scientific-areas/'],
  ['Events', '/seroevents-website/events/'],
  ['Upcoming Events', '/seroevents-website/events/upcoming/'],
  ['Past Events', '/seroevents-website/events/past/'],
  ['Partnerships', '/seroevents-website/partners/'],
  ['Gallery', '/seroevents-website/gallery/'],
  ['Contact', '/seroevents-website/contact/'],
];

export function SiteNav() {
  return (
    <header className="subHeader">
      <div className="navLeft">
        <details className="navMenu">
          <summary aria-label="Open website menu"><span className="menuIcon" aria-hidden="true">☰</span><span>Menu</span></summary>
          <nav className="navMenuPanel" aria-label="All pages">
            {menuItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </details>
        <a className="subBrand" href="/seroevents-website/">Seroevents</a>
      </div>
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
