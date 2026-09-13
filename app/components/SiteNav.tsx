export function SiteNav() {
  return (
    <header className="subHeader">
      <a className="subBrand" href="/seroevents-website/">SeroEvents</a>
      <nav className="subNav" aria-label="Primary">
        <a href="/seroevents-website/about/">About</a>
        <a href="/seroevents-website/services/">Services</a>
        <a href="/seroevents-website/events/">Events</a>
        <a href="/seroevents-website/gallery/">Gallery</a>
        <a href="/seroevents-website/partners/">Partners</a>
        <a href="/seroevents-website/contact/">Contact</a>
      </nav>
      <a className="subCta" href="/seroevents-website/events/upcoming/">Upcoming Events</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="subFooter">
      <div><strong>SeroEvents</strong><span>Healthcare & Scientific Event Management</span></div>
      <div className="subFooterLinks">
        <a href="/seroevents-website/events/upcoming/">Upcoming</a>
        <a href="/seroevents-website/events/past/">Past Events</a>
        <a href="/seroevents-website/partners/">Partners</a>
        <a href="mailto:info@seroevents.com">info@seroevents.com</a>
      </div>
    </footer>
  );
}
