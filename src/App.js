import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
);
const VirusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
);
const CPUIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
);
const HardDriveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>
);
const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
);
const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="5" y1="12" x2="13" y2="12"/></svg>
);
const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.93 6.93l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const SERVICES = [
  { icon: <VirusIcon />, title: 'Virus & Malware Removal', desc: 'Complete elimination of viruses, spyware, ransomware, and all malicious software. Your system restored to factory-clean performance.', badge: 'SPECIALTY' },
  { icon: <LaptopIcon />, title: 'Laptop & Desktop Repair', desc: "Hardware diagnostics and full repairs for all brands. Screens, keyboards, motherboards, power issues — if it's broken, we fix it.", badge: '24H TURNAROUND' },
  { icon: <CPUIcon />, title: 'Performance Upgrades', desc: 'RAM upgrades, SSD installations, thermal paste replacement. Transform a slow machine into a speed demon.', badge: null },
  { icon: <HardDriveIcon />, title: 'Data Recovery', desc: 'Lost files, crashed drives, accidental deletion — we dig deep to recover what matters most to you.', badge: null },
  { icon: <WifiIcon />, title: 'Network & Connectivity', desc: 'WiFi issues, network setup, router configuration, and troubleshooting dropped connections and slow speeds.', badge: null },
  { icon: <BatteryIcon />, title: 'Battery Replacement', desc: 'Genuine or high-quality replacement batteries for laptops of all brands. Back to full charge capacity.', badge: null },
];

const TESTIMONIALS = [
  { name: 'Maria L.', stars: 5, text: 'Had my laptop back the same day with all my files intact after a nasty virus. Incredible service and very fair pricing!' },
  { name: 'James R.', stars: 5, text: 'My computer was so slow I could barely use it. After the tune-up it runs like new. 20+ years of experience really shows.' },
  { name: 'Sandra M.', stars: 5, text: 'Fixed my cracked screen in under an hour. Professional, fast, and honest. Won\'t go anywhere else for my computer repairs.' },
  { name: 'Tony K.', stars: 5, text: 'Called about a virus issue at 10am, had my laptop back by noon. Unbelievable turnaround. Highly recommend Fertech!' },
];

const PROCESS = [
  { num: '01', title: 'Bring It In', desc: 'Drop off your device at a time that works for you. No appointment needed.' },
  { num: '02', title: 'Free Diagnosis', desc: 'We assess the problem thoroughly at no charge and give you an honest quote.' },
  { num: '03', title: 'Expert Repair', desc: 'We get to work immediately. Minor issues can be fixed within the hour.' },
  { num: '04', title: 'Pick It Up', desc: 'Most repairs done in 24 hours. We call when it\'s ready.' },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= count ? 'star filled' : 'star'}><StarIcon filled={i <= count} /></span>
      ))}
    </div>
  );
}

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div ref={ref} className={`anim-section ${inView ? 'anim-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo('hero')}>
            <span className="logo-fer">FER</span><span className="logo-tech">TECH</span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['services','process','about','reviews','contact'].map(s => (
              <li key={s}><button onClick={() => scrollTo(s)}>{s.charAt(0).toUpperCase()+s.slice(1)}</button></li>
            ))}
          </ul>
          <a href="tel:+13125550100" className="nav-cta">Call Now</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <div className="grid-overlay" />
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot" />Chicago's Trusted Computer Tech</div>
          <h1 className="hero-title">
            <span className="hero-line">YOUR COMPUTER</span>
            <span className="hero-line accent">FIXED FAST.</span>
            <span className="hero-line">FIXED RIGHT.</span>
          </h1>
          <p className="hero-sub">
            Over <strong>20 years</strong> of professional experience repairing laptops and desktops.
            Virus removal, hardware repair, data recovery — done with pride, done properly.
          </p>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">20+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">24H</span><span className="stat-label">Turnaround</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">1HR</span><span className="stat-label">Minor Repairs</span></div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Get a Free Diagnosis</button>
            <button className="btn-ghost" onClick={() => scrollTo('services')}>See Services</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="circuit-card">
            <div className="circuit-header">
              <div className="circuit-dots"><span /><span /><span /></div>
              <span className="circuit-label">SYSTEM SCAN</span>
            </div>
            <div className="scan-lines">
              {['CPU Health','RAM Status','Storage','Network','Security','Temperature'].map((item, i) => (
                <div key={item} className="scan-line" style={{ animationDelay: `${i * 0.3}s` }}>
                  <span className="scan-name">{item}</span>
                  <div className="scan-bar"><div className="scan-fill" style={{ animationDelay: `${i * 0.3 + 0.5}s` }} /></div>
                  <span className="scan-ok">OK</span>
                </div>
              ))}
            </div>
            <div className="scan-footer"><span className="scan-status">● FERTECH DIAGNOSTIC v2.0</span></div>
          </div>
        </div>
        <div className="hero-scroll-hint" onClick={() => scrollTo('services')}>
          <span>Scroll</span><div className="scroll-arrow" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        {[
          { icon: <ShieldIcon />, text: 'No Fix, No Fee' },
          { icon: <ClockIcon />, text: '24H Turnaround' },
          { icon: <CheckIcon />, text: 'Free Diagnosis' },
          { icon: <CheckIcon />, text: 'All Brands Serviced' },
        ].map((item, i) => (
          <div key={i} className="trust-item">
            <span className="trust-icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">WHAT WE DO</div>
            <h2 className="section-title">Every Repair.<br />Every Device.</h2>
            <p className="section-sub">From a simple tune-up to a complex motherboard repair — two decades of hands-on experience means your device is in the right hands.</p>
          </AnimatedSection>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80} className="service-card-wrap">
                <div className="service-card">
                  {s.badge && <span className="service-badge">{s.badge}</span>}
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-arrow">→</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section process-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">HOW IT WORKS</div>
            <h2 className="section-title">Simple.<br />Transparent.</h2>
          </AnimatedSection>
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <AnimatedSection key={i} delay={i * 100} className="process-step-wrap">
                <div className="process-step">
                  <div className="process-num">{p.num}</div>
                  <h3 className="process-title">{p.title}</h3>
                  <p className="process-desc">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-inner">
          <div className="about-visual">
            <AnimatedSection>
              <div className="about-badge-card">
                <div className="about-years">20+</div>
                <div className="about-years-label">Years of Expertise</div>
                <div className="about-divider" />
                <div className="about-skills">
                  {['Virus Removal', 'Hardware Repair', 'Data Recovery', 'Upgrades', 'Networking', 'Diagnostics'].map(skill => (
                    <span key={skill} className="about-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="about-text">
            <AnimatedSection delay={100}>
              <div className="section-label">ABOUT FERTECH</div>
              <h2 className="section-title">Passion Meets<br />Precision.</h2>
              <p className="about-desc">
                I've been working with computers for over 20 years — not because it's just a job, but because I genuinely love it.
                Every machine that comes through my door gets the same care and attention I'd give my own device.
              </p>
              <p className="about-desc">
                Based in Chicago, I built Fertech on a simple promise: honest diagnosis, expert repair, and respect for your time and your machine.
                Whether it's a stubborn virus, a cracked screen, or a laptop that just won't turn on — I've seen it all and fixed it all.
              </p>
              <div className="about-highlights">
                {['Professional-grade tools & parts','All major brands serviced','Transparent pricing, no surprises','Same-day repair on many issues'].map((h, i) => (
                  <div key={i} className="about-highlight">
                    <span className="highlight-check"><CheckIcon /></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section reviews-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">TESTIMONIALS</div>
            <h2 className="section-title">What Customers Say.</h2>
          </AnimatedSection>
          <div className="reviews-grid">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 80} className="review-card-wrap">
                <div className="review-card">
                  <Stars count={t.stars} />
                  <p className="review-text">"{t.text}"</p>
                  <div className="review-author">
                    <div className="author-avatar">{t.name[0]}</div>
                    <span className="author-name">{t.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container contact-inner">
          <div className="contact-info">
            <AnimatedSection>
              <div className="section-label">GET IN TOUCH</div>
              <h2 className="section-title">Ready to Fix<br />Your Device?</h2>
              <p className="contact-sub">Reach out any time. Diagnosis is always free — bring it in or send a message and we'll get back to you fast.</p>
              <div className="contact-details">
                <a href="tel:+13125550100" className="contact-item">
                  <span className="contact-item-icon"><PhoneIcon /></span>
                  <div><span className="contact-item-label">Phone</span><span className="contact-item-value">(312) 555-0100</span></div>
                </a>
                <a href="mailto:info@fertech.com" className="contact-item">
                  <span className="contact-item-icon"><MailIcon /></span>
                  <div><span className="contact-item-label">Email</span><span className="contact-item-value">info@fertech.com</span></div>
                </a>
                <div className="contact-item">
                  <span className="contact-item-icon"><MapPinIcon /></span>
                  <div><span className="contact-item-label">Location</span><span className="contact-item-value">Chicago, Illinois</span></div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon"><ClockIcon /></span>
                  <div><span className="contact-item-label">Hours</span><span className="contact-item-value">Mon–Sat: 9AM – 7PM</span></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={150} className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-check"><CheckIcon /></div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within a few hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(312) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required placeholder="you@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Describe the Problem</label>
                  <textarea required rows={4} placeholder="Tell us what's going on with your device..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>
                <button type="submit" className="btn-primary full-width">Send Message →</button>
                <p className="form-note">Free diagnosis · No commitment required</p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <button className="logo" onClick={() => scrollTo('hero')}>
            <span className="logo-fer">FER</span><span className="logo-tech">TECH</span>
          </button>
          <p className="footer-tagline">Professional Computer Repair · Chicago, IL</p>
          <div className="footer-links">
            {['services','process','about','reviews','contact'].map(s => (
              <button key={s} onClick={() => scrollTo(s)}>{s.charAt(0).toUpperCase()+s.slice(1)}</button>
            ))}
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Fertech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
