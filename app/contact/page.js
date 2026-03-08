import { getPage, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import MarkdownContent from '../components/MarkdownContent';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact',
  description: 'Schedule a tour or contact the leasing office at Grace Street Towers.',
};

export default function ContactPage() {
  const site = getSiteConfig();
  const page = getPage('contact');
  const addr = site.address || {};
  const addressLine = typeof addr === 'string'
    ? addr
    : `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`;

  return (
    <main>
      <PageHero
        title="Contact & Schedule a Tour"
        subtitle="We'd love to show you around."
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            {/* Contact Info */}
            <div className="card">
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem' }}>Get in Touch</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Phone size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.2rem' }}>Phone</div>
                    <a href={`tel:${site.phone_number?.replace(/[^0-9]/g, '')}`}>{site.phone_number}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.2rem' }}>Email</div>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.2rem' }}>Address</div>
                    <span>{addressLine}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Clock size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.2rem' }}>Office Hours</div>
                    <div>Monday – Friday: 9:00 AM – 5:00 PM</div>
                    <div>Saturday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h2>
              <form className="contact-form" action="https://formspree.io/f/placeholder" method="POST">
                <label>
                  Full Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" />
                </label>
                <label>
                  Interested In
                  <select name="unit_type">
                    <option value="">Select unit type...</option>
                    <option value="studio">Studio</option>
                    <option value="1br">One Bedroom</option>
                    <option value="2br">Two Bedroom</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} placeholder="I'm interested in..." />
                </label>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ background: 'var(--surface)' }}>
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
    </main>
  );
}
