import { getPage, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import MarkdownContent from '../components/MarkdownContent';
import CtaBand from '../components/CtaBand';

export const metadata = {
  title: 'Amenities',
  description: 'Explore the amenities at Grace Street Towers — outdoor pool, fitness center, parking, laundry, and more.',
};

export default function AmenitiesPage() {
  const site = getSiteConfig();
  const page = getPage('amenities');

  return (
    <main>
      <PageHero title={page.title} subtitle={page.seo_description} />
      <section className="section">
        <div className="container">
          <MarkdownContent html={page.html} />
        </div>
      </section>
      <CtaBand site={site} />
    </main>
  );
}
