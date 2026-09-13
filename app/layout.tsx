import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SeroEvents | Healthcare & Scientific Event Management',
  description:
    'SeroEvents delivers professional healthcare, scientific, educational and corporate conferences and events across the UAE and beyond.',
  keywords: [
    'SeroEvents',
    'conference management UAE',
    'healthcare events',
    'scientific conferences',
    'Abu Dhabi events',
    'Dubai events',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
