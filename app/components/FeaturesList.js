import { Building2, Flame, MapPin, TrainFront } from 'lucide-react';

const ICON_MAP = {
  building: Building2,
  utilities: Flame,
  location: MapPin,
  commute: TrainFront,
};

export default function FeaturesList({ features = [] }) {
  const items = features.length ? features : [
    { icon: 'building', title: '19-Story High-Rise', desc: 'A landmark 180-unit community with panoramic views of the city and Lake Michigan.' },
    { icon: 'utilities', title: 'Utilities Included', desc: 'Cooking gas, water, and trash removal included in your rent.' },
    { icon: 'location', title: 'Prime Lakefront Location', desc: 'Steps from the Lakefront Trail, Belmont Harbor, and East Lakeview dining.' },
    { icon: 'commute', title: 'Seamless Commute', desc: 'Just off Lake Shore Drive with CTA Red and Brown Line access.' },
  ];

  return (
    <section className="section features-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2.75rem' }}>
          <span className="eyebrow">Why Grace Street Towers</span>
          <h2 className="section-title">High-Rise Living, Done Right</h2>
        </div>
        <div className="features-grid">
          {items.map(({ icon, title, desc }) => {
            const Icon = ICON_MAP[icon] || Building2;
            return (
              <div key={title} className="feature-item">
                <div className="feature-icon-wrap">
                  <Icon size={28} style={{ color: 'var(--accent)' }} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
