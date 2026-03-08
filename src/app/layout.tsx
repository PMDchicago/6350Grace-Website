import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grace Street Towers | East Lakeview Chicago Apartments',
  description:
    'Experience quality high-rise living at Grace Street Towers, a 19-story apartment community in prestigious East Lakeview, Chicago. Studios, 1- and 2-bedroom apartments available.',
  keywords:
    'Grace Street Towers, Chicago apartments, East Lakeview, high-rise, lakefront living, studio apartment, 1 bedroom, 2 bedroom',
  openGraph: {
    title: 'Grace Street Towers | East Lakeview Chicago Apartments',
    description:
      '19-story high-rise living in prestigious East Lakeview, Chicago. Just off Lake Shore Drive.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Grace Street Towers',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
