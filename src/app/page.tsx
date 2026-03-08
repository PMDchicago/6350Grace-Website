'use client';

import { useState } from 'react';

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo">
            Grace Street <span>Towers</span>
          </a>
          <button
            className="nav-toggle"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <nav>
            <ul className={navOpen ? 'open' : ''}>
              <li><a href="#apartments">Apartments</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#neighborhood">Neighborhood</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">East Lakeview · Chicago</p>
          <h1>Elevated Living on Grace Street</h1>
          <p>
            A 19-story landmark in one of Chicago&rsquo;s most coveted lakefront
            neighborhoods. 180 thoughtfully designed apartments just steps from
            Lake Shore Drive.
          </p>
          <div className="hero-buttons">
            <a href="#apartments" className="btn btn-gold">View Apartments</a>
            <a href="#contact" className="btn btn-outline">Schedule a Tour</a>
          </div>
        </div>
      </section>

      {/* APARTMENTS */}
      <section id="apartments" className="section apartments-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Apartment Collection</h2>
            <p>
              Studios, one-bedroom, and two-bedroom residences designed for
              modern lakefront living.
            </p>
            <div className="gold-line" />
          </div>
          <div className="unit-grid">
            {/* Studio */}
            <div className="unit-card">
              <div className="unit-card-image">Studio</div>
              <div className="unit-card-body">
                <h3>Studio</h3>
                <p className="unit-price">From $1,350/mo</p>
                <ul>
                  <li>Efficient open floor plan</li>
                  <li>Full kitchen with gas range</li>
                  <li>Ample closet space</li>
                  <li>City or lake views available</li>
                </ul>
                <a href="#contact" className="btn btn-navy">Inquire</a>
              </div>
            </div>
            {/* 1BR */}
            <div className="unit-card">
              <div className="unit-card-image">One Bed</div>
              <div className="unit-card-body">
                <h3>One Bedroom</h3>
                <p className="unit-price">From $1,450/mo</p>
                <ul>
                  <li>Separate living and sleeping areas</li>
                  <li>Updated kitchen finishes</li>
                  <li>Large windows with natural light</li>
                  <li>In-unit dining space</li>
                </ul>
                <a href="#contact" className="btn btn-navy">Inquire</a>
              </div>
            </div>
            {/* 2BR */}
            <div className="unit-card">
              <div className="unit-card-image">Two Bed</div>
              <div className="unit-card-body">
                <h3>Two Bedroom</h3>
                <p className="unit-price">From $1,600/mo</p>
                <ul>
                  <li>Spacious two-bedroom layout</li>
                  <li>Ideal for roommates or home office</li>
                  <li>Premium lake-facing units available</li>
                  <li>Extra storage</li>
                </ul>
                <a href="#contact" className="btn btn-navy">Inquire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Building Amenities</h2>
            <p>
              Everything you need for comfortable, connected high-rise living.
            </p>
            <div className="gold-line" />
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🏊</div>
              <h3>Outdoor Pool</h3>
              <p>
                Sun-drenched seasonal pool deck with lounge seating and skyline
                views — your private urban oasis.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Fitness Center</h3>
              <p>
                On-site fitness room with cardio and strength equipment, open to
                all residents.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👔</div>
              <h3>On-Site Laundry</h3>
              <p>
                Convenient laundry facilities on every floor so you never have
                to leave the building.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Indoor Parking</h3>
              <p>
                Heated garage parking available for residents. Bike storage also
                provided.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>24/7 Security</h3>
              <p>
                Controlled-access building with on-site management and security
                camera monitoring.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Utilities Included</h3>
              <p>
                Cooking gas, water, and trash removal are included in your rent —
                great value in the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD */}
      <section id="neighborhood" className="section apartments-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>East Lakeview</h2>
            <p>
              Your new backyard (well, close enough). One of Chicago&rsquo;s most
              walkable and vibrant lakefront neighborhoods.
            </p>
            <div className="gold-line" />
          </div>
          <div className="neighborhood-grid">
            <div className="neighborhood-item">
              <h3>🌊 Lakefront Living</h3>
              <p>
                Steps from the Lakefront Trail, Belmont Harbor, tennis courts,
                the Marovitz Golf Course, and Chicago&rsquo;s iconic beaches.
              </p>
            </div>
            <div className="neighborhood-item">
              <h3>🚇 Seamless Commute</h3>
              <p>
                Just off Lake Shore Drive with CTA Red and Brown Line access.
                Downtown in under 15 minutes.
              </p>
            </div>
            <div className="neighborhood-item">
              <h3>🍽️ Dining &amp; Nightlife</h3>
              <p>
                Ann Sather, Coda di Volpe, Kingston Mines, and hundreds of
                restaurants, cafés, and bars within walking distance.
              </p>
            </div>
            <div className="neighborhood-item">
              <h3>🛍️ Shopping &amp; Culture</h3>
              <p>
                Boutiques on Broadway, Wrigley Field, live theater, and the
                vibrant Northalsted corridor — all at your doorstep.
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5!2d-87.6445!3d41.9525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3b5d1e6ed61%3A0x1234567890abcdef!2s635+W+Grace+St%2C+Chicago%2C+IL+60613!5e0!3m2!1sen!2sus!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grace Street Towers Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Schedule a Tour</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                We&rsquo;d love to show you around. Visit us during office hours
                or reach out to arrange a private tour.
              </p>
              <div className="contact-detail">
                <h4>Address</h4>
                <p>635 W. Grace St., Chicago, IL 60613</p>
              </div>
              <div className="contact-detail">
                <h4>Phone</h4>
                <a href="tel:7738711845">(773) 871-1845</a>
              </div>
              <div className="contact-detail">
                <h4>Email</h4>
                <a href="mailto:manager@gracestreettowers.com">
                  manager@gracestreettowers.com
                </a>
              </div>
              <div className="contact-detail">
                <h4>Office Hours</h4>
                <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                <p>Saturday: By Appointment</p>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/placeholder"
              method="POST"
            >
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <textarea name="message" placeholder="I'm interested in..." required />
              <button type="submit" className="btn btn-gold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Grace Street Towers LLC. All rights
          reserved. 635 W. Grace St., Chicago, IL 60613 &middot;{' '}
          <a href="tel:7738711845">(773) 871-1845</a>
        </p>
      </footer>
    </>
  );
}
