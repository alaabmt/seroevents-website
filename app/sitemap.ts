import type { MetadataRoute } from 'next';
import { events } from '../lib/events';

const baseUrl = 'https://alaabmt.github.io/seroevents-website';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/services/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/scientific-areas/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/partners/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/events/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/events/upcoming/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/events/past/`, changeFrequency: 'monthly', priority: 0.6 },
    {
      url: `${baseUrl}/events/abu-dhabi-healthcare-revenue-cycle-summit-2027/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/events/abu-dhabi-healthcare-revenue-cycle-summit-2027/agenda/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    { url: `${baseUrl}/contact/`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const pastEventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}/`,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticPages, ...pastEventPages];
}
