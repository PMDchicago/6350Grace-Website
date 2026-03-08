import Link from 'next/link';
import { getUnits, getUnitBySlug, getSiteConfig } from '../../../lib/content';
import { CheckCircle, Building2, ArrowLeft } from 'lucide-react';
import CtaBand from '../../components/CtaBand';

export function generateStaticParams() {
  const units = getUnits();
  return units.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }) {
  const unit = getUnitBySlug(params.slug);
  if (!unit) return { title: 'Unit Not Found' };
  return {
    title: `${unit.title} | Floor Plans`,
    description: unit.description || `${unit.title} apartments at Grace Street Towers.`,
  };
}

export default function UnitDetailPage({ params }) {
  const site = getSiteConfig();
  const unit = getUnitBySlug(params.slug);

  if (!unit) {
    return (
      <main>
        <section className="page-hero">
          <div className="container"><h1>Unit Not Found</h1></div>
        </section>
      </main>
    );
  }

  const isAvailable = unit.availability === 'Available';
  const hasFloorPlan = !!unit.floor_plan_image;
  const hasImages = unit.images && unit.images.length > 0;
  const hasVideo = !!unit.video_url;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link href="/floor-plans" style={{ color: 'var(--accent)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
            <ArrowLeft size={14} /> All Floor Plans
          </Link>
          <h1>{unit.title}</h1>
          <p>{unit.price_range} per month</p>
        </div>
      </section>

      <section className="unit-detail">
        <div className="container">
          <div className="unit-detail-grid">
            {/* Left: Media */}
            <div className="unit-detail-media">
              {/* Floor Plan */}
              <div className="unit-floor-plan">
                {hasFloorPlan ? (
                  <img src={unit.floor_plan_image} alt={`${unit.title} floor plan`} />
                ) : (
                  <div className="unit-floor-plan-placeholder">
                    <Building2 size={48} strokeWidth={1.25} />
                    <span>Floor Plan Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Photo Gallery */}
              {hasImages && (
                <div className="unit-images-grid">
                  {unit.images.map((img, i) => (
                    <img key={i} src={img} alt={`${unit.title} photo ${i + 1}`} loading="lazy" />
                  ))}
                </div>
              )}

              {/* Video Tour */}
              {hasVideo && (
                <div className="unit-video">
                  <iframe
                    src={unit.video_url}
                    title={`${unit.title} video tour`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="unit-detail-info">
              <div>
                <span className={`availability-badge ${isAvailable ? 'badge-available' : 'badge-waitlist'}`}>
                  {unit.availability || 'Call for Info'}
                </span>
              </div>

              <h1>{unit.title}</h1>

              <div className="unit-detail-pricing">
                {unit.price_range} <span>/mo</span>
              </div>

              {unit.sq_ft && (
                <p className="muted">{unit.sq_ft} sq ft</p>
              )}

              {unit.description && (
                <p className="unit-detail-desc">{unit.description}</p>
              )}

              {Array.isArray(unit.features) && unit.features.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Features</h3>
                  <ul className="unit-features">
                    {unit.features.map((f) => (
                      <li key={f}>
                        <CheckCircle size={16} style={{ color: 'var(--green)', flexShrink: 0 }} strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginTop: '1rem' }}>
                <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand site={site} />
    </main>
  );
}
