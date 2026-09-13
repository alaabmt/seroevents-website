import type { Metadata } from 'next';
import './globals.css';
import './site-pages.css';
import './institutional-theme.css';

export const metadata: Metadata = {
  title: 'Seroevents | Scientific Events & Healthcare Engagement UAE',
  description:
    'Seroevents develops and delivers medical conferences, scientific forums, expert meetings and professional healthcare education in the UAE.',
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
