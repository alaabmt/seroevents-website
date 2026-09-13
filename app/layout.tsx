import type { Metadata } from 'next';
import './globals.css';
import './site-pages.css';
import './institutional-theme.css';

const siteTitle = 'Seroevents | Scientific Events & Healthcare Engagement UAE';
const siteDescription =
  'Seroevents develops and delivers medical conferences, scientific forums, expert meetings and professional healthcare education in the UAE.';

export const metadata: Metadata = {
  metadataBase: new URL('https://alaabmt.github.io/seroevents-website/'),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'Seroevents',
    'medical conferences UAE',
    'scientific events UAE',
    'healthcare engagement UAE',
    'medical education UAE',
    'expert meetings UAE',
    'scientific forums UAE',
    'healthcare conferences Abu Dhabi',
    'medical events Dubai',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://alaabmt.github.io/seroevents-website/',
    siteName: 'Seroevents',
    type: 'website',
    images: [
      {
        url: 'sero-share-card.jpg',
        width: 1200,
        height: 630,
        alt: 'SeroEvents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['sero-share-card.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
