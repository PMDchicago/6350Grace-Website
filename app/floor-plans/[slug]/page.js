import { getUnits, getUnitBySlug, getSiteConfig } from '../../../lib/content';
import Link from 'next/link';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import CtaBand from '../../components/CtaBand';

export function generateStaticParams() {
  const units = getUnits();
  return units.map(u => ({ slug: u.slug || u.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }));
}

export function generateMetadata({ params }) {
  const unit = getUnitBySlug(params.slug);
  return {
    title: unit ? `${unit.title} — Grace Street Towers` : 'Unit Details',
    description: unit ? `${unit.title} apartment at Grace Street Towers. ${unit.price_range}/month.` : ''
  };
}

export default function UnitDetailPage({ params }) {
  const site = getSiteConfig();
  const unit = getUnitBySlug(params.slug);

  if (!unit) {
    return (
      <main>
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
            <h1>Unit Not Found</h1>
            <Link href="/floor-plans">← Back to Floor Plans</Link>
          </div>
        </section>
      </main>
    );
  }

  const photos = unit.photos || [];
  const isAvailable = unit.availability === 'Available';

  return (
    <main>
      <section className="section">
        <div className="container">
          <Link href="/floor-plans" className="unit-back-link">
            <ArrowLeft size={16} /> All Floor Plans
          </Link>

          <div className="unit-detail-header">
            <div>
              <h1 className="unit-detail-title">{unit.title}</h1>
              <span className={`availability-badge ${isAvailable ? 'badge-available' : 'badge-waitlist'}`}>
                {unit.availability || 'Call for Info'}
              </span>
            </div>
            <div className="unit-detail-price">
              <span className="unit-price">{unit.price_range}</span>
              <span className="unit-price-sub">per month</span>
              {unit.sq_ft ? <span className="muted" style={{ fontSize: '0.85rem' }}>{unit.sq_ft} sq ft</span> : null}
            </div>
          </div>

          {unit.description && (
            <p style={{ marginBottom: '2rem', color: 'var(--muted)', maxWidth: '700px', lineHeight: '1.7' }}>
              {unit.description}
            </p>
          )}

          {unit.floor_plan && (
            <div className="unit-detail-floorplan">
              <h2 className="unit-detail-section-title">Floor Plan</h2>
              <div className="unit-detail-floorplan-img">
                <img src={unit.floor_plan} alt={`${unit.title} floor plan`} />
              </div>
            </div>
          )}

          {photos.length > 0 && (
            <div className="unit-detail-photos">
              <h2 className="unit-detail-section-title">Interior Photos</h2>
              <div className="unit-detail-photo-grid">
                {photos.map((photo, i) => (
                  <figure key={i} className="unit-detail-photo-item">
                    <img src={photo.src} alt={photo.alt_text || 'Unit interior'} loading="lazy" />
                    {photo.alt_text && <figcaption>{photo.alt_text}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {unit.video_url && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="unit-detail-section-title">Video Tour</h2>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <iframe
                  src={unit.video_url}
                  title={`${unit.title} video tour`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </div>
          )}

          {Array.isArray(unit.features) && unit.features.length > 0 && (
            <div className="unit-detail-features">
              <h2 className="unit-detail-section-title">Features</h2>
              <ul className="unit-features" style={{ maxWidth: '500px' }}>
                {unit.features.map((f) => (
                  <li key={f}>
                    <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="unit-detail-cta">
            <a href={`tel:${site.phone_number?.replace(/[^0-9]/g, '') || ''}`} className="btn-primary">
              <Phone size={15} /> Call {site.phone_number}
            </a>
            <Link href="/contact" className="btn-primary">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
      <CtaBand site={site} />
    </main>
  );
}
