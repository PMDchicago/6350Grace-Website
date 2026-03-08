import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function HomeHero({ site }) {
  return (
    <section className="home-hero">
      <div className="container hero-inner">
        <span className="hero-eyebrow">East Lakeview · Chicago</span>
        <h1 className="hero-title">Elevated Living on Grace Street</h1>
        <p className="hero-subtitle">
          A 19-story landmark in one of Chicago&rsquo;s most coveted lakefront
          neighborhoods. 180 thoughtfully designed apartments just steps from
          Lake Shore Drive.
        </p>
        <div className="hero-ctas">
          <Link href="/floor-plans" className="btn-primary">
            {site.marketing_knobs?.hero_cta || 'View Apartments'}
            <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${site.phone_number?.replace(/[^0-9]/g, '')}`}
            className="btn-outline"
          >
            <Phone size={15} />
            {site.phone_number}
          </a>
        </div>
      </div>
    </section>
  );
}
