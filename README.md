# SeroEvents Website

Official website for **SeroEvents** — healthcare and scientific conference management.

## Initial build

This first version includes:

- responsive SeroEvents black/orange visual identity
- hero, about, services, event portfolio, value proposition and contact sections
- past-event cards for the ITI Summit and FCHS Future Medicine Symposium
- an upcoming-events placeholder ready for future conferences
- SEO metadata
- static export configuration so the site can later be deployed to GitHub Pages or another static host

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Next planned work

- add official SeroEvents logo assets
- create reusable event detail pages
- add event photography/gallery
- add speakers, sponsors, agendas and registration links
- connect final domain and deployment workflow
