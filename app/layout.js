import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { getSiteConfig } from '../lib/content';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  title: { default: 'Grace Street Towers', template: '%s | Grace Street Towers' },
  description: 'Experience quality high-rise living at Grace Street Towers — a 19-story apartment community in East Lakeview, Chicago.',
};

export default function RootLayout({ children }) {
  const site = getSiteConfig();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{
        '--primary': (site.colors && site.colors.primary) || '#1a2744',
        '--primary-dark': '#111c33',
        '--accent': (site.colors && site.colors.secondary) || '#c9a96e',
      }}>
        <SiteHeader site={site} />
        {children}
        <SiteFooter site={site} />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}</Script>
      </body>
    </html>
  );
}
