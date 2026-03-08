import { getPage, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import MarkdownContent from '../components/MarkdownContent';
import CtaBand from '../components/CtaBand';

export const metadata = {
  title: 'Neighborhood',
  description: 'Discover the East Lakeview neighborhood — lakefront living, dining, nightlife, and culture.',
};

export default function NeighborhoodPage() {
  const site = getSiteConfig();
  const page = getPage('neighborhood');
  const highlights = page.highlights || [];

  return (
    <main>
      <PageHero
        title="East Lakeview"
        subtitle="Your new backyard. One of Chicago's most walkable and vibrant lakefront neighborhoods."
      />

      {highlights.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="neighborhood-grid">
              {highlights.map((h) => (
                <div key={h.title} className="neighborhood-card">
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <MarkdownContent html={page.html} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5!2d-87.6445!3d41.9525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3b5d1e6ed61%3A0x1234567890abcdef!2s635+W+Grace+St%2C+Chicago%2C+IL+60613!5e0!3m2!1sen!2sus!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grace Street Towers Location"
            />
          </div>
        </div>
      </section>

      <CtaBand site={site} />
    </main>
  );
}
