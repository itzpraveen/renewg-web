import { useEffect, useMemo, useState } from 'react';
import logo from './assets/renewg-logo.png';
import heroIllustration from './assets/hero-illustration.svg';
import iconOnGrid from './assets/icon-on-grid.svg';
import iconHybrid from './assets/icon-hybrid.svg';
import iconOffGrid from './assets/icon-offgrid.svg';
import iconEv from './assets/icon-ev.svg';
import iconTrading from './assets/icon-trading.svg';
import iconWhatsapp from './assets/icon-whatsapp.svg';
import './App.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Product Trading', href: '#trading' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  {
    label: 'Cumulative Solar Capacity',
    value: '50+ MW',
  },
  {
    label: 'Lifecycle Support',
    value: '24/7 monitoring',
  },
  {
    label: 'Projects Delivered',
    value: 'Custom EPC for every site',
  },
];

const trustBarItems = [
  'Commercial & Industrial',
  'PM Surya Ghar Programs',
  'Energy Trading Partnerships',
];

const services = [
  {
    tag: 'On-Grid',
    title: 'On-Grid Solar Solutions',
    icon: iconOnGrid,
    iconAlt: 'Illustration of on-grid solar panels',
    copy:
      'Grid-interactive PV systems engineered for maximum net-metering benefits and bill optimization in C&I and residential environments.',
    bullets: [
      'Detailed load studies and ROI modelling',
      'Tier-1 modules, inverters, and BOS hardware',
      'SCADA-enabled monitoring and proactive O&M',
    ],
  },
  {
    tag: 'Hybrid',
    title: 'Hybrid Solar Solutions',
    icon: iconHybrid,
    iconAlt: 'Illustration of hybrid solar with battery storage',
    copy:
      'PV with intelligent lithium-ion storage that balances peak load, strengthens resilience, and automates tariff optimization.',
    bullets: [
      'Smart energy management with dynamic dispatch',
      'Scalable storage capacities and modular design',
      'Load prioritisation and backup automation',
    ],
  },
  {
    tag: 'Off-Grid',
    title: 'Off-Grid Solar Solutions',
    icon: iconOffGrid,
    iconAlt: 'Illustration of stand-alone solar arrays',
    copy:
      'Independent solar infrastructure for remote sites, agri-operations, and critical facilities that demand total energy autonomy.',
    bullets: [
      'Custom system sizing with ruggedised components',
      'Integrated storage and intelligent controls',
      'Field training and long-haul maintenance support',
    ],
  },
  {
    tag: 'EV',
    title: 'EV Charging Stations',
    icon: iconEv,
    iconAlt: 'Illustration of electric vehicle being charged',
    copy:
      'Turnkey charging networks from load assessments to commissioning, software integration, and lifecycle service.',
    bullets: [
      'AC and DC fast-charging infrastructure',
      'User access, billing, and energy analytics',
      'Solar-to-wheel integrations with storage',
    ],
  },
];

const projectSegments = [
  {
    title: 'Commercial & Industrial',
    copy:
      'Large-format rooftop and ground-mounted arrays with structural retrofits, grid synchronisation, and performance-linked maintenance.',
    bullets: [
      'Detailed load profiling and power quality studies',
      'Safety-first construction with zero-lost time metrics',
      'Energy dashboards and SLA-backed O&M',
    ],
  },
  {
    title: 'Domestic & Residential',
    copy:
      'Scalable rooftop PV for smart homes, gated communities, and PM Surya Ghar beneficiaries with subsidy documentation support.',
    bullets: [
      'Hybrid inverters, smart meters, and app insights',
      'Designs that complement rooftops and skylines',
      'Neighbourhood-scale energy communities',
    ],
  },
];

const tradingBullets = [
  'Tier-1 solar panels, microinverters, and optimisers',
  'Lithium-ion battery packs with advanced BMS control',
  'Mounting structures, cabling, and protection systems',
  'AC/DC chargers and load management software',
];

const heroStack = [
  'On-grid, off-grid, and hybrid solar PV',
  'Lithium-ion storage architectures',
  'Smart EV charging infrastructure',
  'Digital monitoring & O&M services',
];

const whatsappNumber = '918050245123';
const secondaryNumber = '918050863123';
const whatsappHref = `https://wa.me/${whatsappNumber}`;

const phoneContacts = [
  {
    label: 'Consultation',
    tel: `+${whatsappNumber}`,
    display: '+91 80502 45123',
    isWhatsapp: true,
  },
  {
    label: 'Operations',
    tel: `+${secondaryNumber}`,
    display: '+91 80508 63123',
    isWhatsapp: false,
  },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <div className={navOpen ? 'app is-nav-open' : 'app'}>
      <header className="site-header">
        <div className="container nav-container">
          <a className="logo" href="#top" aria-label="RenewG home">
            <img src={logo} alt="RenewG logo" />
          </a>
          <nav className={navOpen ? 'site-nav open' : 'site-nav'} id="site-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-decoration" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="hero-badge">Karnataka • Solar EPC • Energy Innovation</span>
              <h1 id="hero-title">Powering Karnataka&apos;s transition to clean, resilient energy</h1>
              <p>
                RenewG delivers turnkey solar EPC, hybrid storage, and EV charging ecosystems for commercial, industrial, and domestic
                customers. We engineer every site for reliability, regulatory compliance, and measurable ROI.
              </p>
              <div className="hero-actions">
                <a className="btn whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                  <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                  WhatsApp Consultation
                </a>
                <a className="btn primary" href="#contact">Talk to Our Experts</a>
              </div>
              <div className="hero-metrics">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="hero-panel" aria-label="RenewG solution stack">
              <img src={heroIllustration} alt="Illustration of solar panels, battery storage, and EV" className="hero-illustration" />
              <div className="panel-card">
                <h2>Integrated clean energy stack</h2>
                <ul>
                  {heroStack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="panel-badges">
                  <span>Design</span>
                  <span>Build</span>
                  <span>Operate</span>
                </div>
              </div>
            </aside>
          </div>
          <div className="container trust-bar" aria-label="RenewG focus areas">
            {trustBarItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-grid">
            <div className="section-intro">
              <span className="eyebrow">About RenewG</span>
              <h2>Solar EPC specialists rooted in Karnataka</h2>
              <p>
                With deep engineering, procurement, and construction expertise, RenewG transforms rooftops and landscapes into
                high-performing solar assets. We align every deployment with sustainability goals, government programs, and long-term
                operational performance.
              </p>
              <ul className="about-list">
                <li>Dedicated teams for C&amp;I, institutional, and residential solar.</li>
                <li>Comprehensive project management from feasibility through commissioning.</li>
                <li>Lifecycle asset care including remote diagnostics and field service.</li>
              </ul>
            </div>
            <div className="about-cards">
              <article className="about-card">
                <h3>Commercial &amp; Industrial</h3>
                <p>High-yield deployments engineered for peak productivity and uncompromised safety compliance.</p>
              </article>
              <article className="about-card">
                <h3>Domestic &amp; PM Surya Ghar</h3>
                <p>Smart home solar with subsidy advisory, net-metering support, and intuitive performance insights.</p>
              </article>
              <article className="about-card">
                <h3>Energy Innovation</h3>
                <p>Hybrid storage, EV charging, and digital platforms that enable resilient, future-ready ecosystems.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-intro centered">
              <span className="eyebrow">Services</span>
              <h2>End-to-end delivery across every solar scenario</h2>
              <p>
                Precision engineering, certified components, and data-driven operations ensure each system delivers dependable savings
                and uptime.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-header">
                    <div className="service-heading">
                      <span className="service-tag">{service.tag}</span>
                      <h3>{service.title}</h3>
                    </div>
                    <img src={service.icon} alt={service.iconAlt} className="service-icon" />
                  </div>
                  <p>{service.copy}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}.</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container projects-grid">
            <div className="section-intro">
              <span className="eyebrow">Projects</span>
              <h2>Deployments delivering measurable impact</h2>
              <p>
                Our portfolio spans industrial rooftops, educational campuses, housing communities, and agricultural estates—each
                tailored for compliance and performance.
              </p>
            </div>
            <div className="project-cards">
              {projectSegments.map((segment) => (
                <article key={segment.title} className="project-card">
                  <h3>{segment.title}</h3>
                  <p>{segment.copy}</p>
                  <ul>
                    {segment.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}.</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trading" id="trading">
          <div className="container trading-grid">
            <div className="trading-copy">
              <span className="eyebrow">Product Trading</span>
              <h2>Solar &amp; lithium-ion products supplied with confidence</h2>
              <p>
                RenewG sources a curated inventory of solar modules, inverters, lithium-ion battery packs, balance-of-system hardware,
                and EV charging equipment for EPC firms, installers, and end customers.
              </p>
              <p>
                We leverage OEM-certified partnerships, rigorous quality audits, and responsive after-sales support to keep projects on
                schedule and on budget.
              </p>
              <ul className="trading-list">
                {tradingBullets.map((bullet) => (
                  <li key={bullet}>{bullet}.</li>
                ))}
              </ul>
            </div>
            <div className="trading-card">
              <img src={iconTrading} alt="Connected supply chain representing trading" className="trading-icon" />
              <h3>Procurement advantages</h3>
              <p>Technical sourcing specialists align the right technology mix with each deployment opportunity.</p>
              <div className="pill-group">
                <span className="pill">OEM-authenticated inventory</span>
                <span className="pill">Rapid fulfilment</span>
                <span className="pill">Warranty-backed support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container cta-content">
            <h2>Ready to launch your next solar or storage project?</h2>
            <p>
              Partner with RenewG to design, build, and operate sustainable energy systems tailored to your business or community
              goals.
            </p>
            <div className="cta-actions">
              <a className="btn primary" href="mailto:hello@renewg.in">Schedule a consultation</a>
              <a className="btn whatsapp light" href={whatsappHref} target="_blank" rel="noreferrer">
                <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer">
        <img src={iconWhatsapp} alt="" aria-hidden="true" />
        <span className="sr-only">Chat with RenewG on WhatsApp</span>
      </a>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#top" aria-label="RenewG home">
              <img src={logo} alt="RenewG logo" />
            </a>
            <p>Solar EPC specialists empowering Karnataka with intelligent, connected energy ecosystems.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              {phoneContacts.map((contact) => (
                <li key={contact.tel}>
                  {contact.label}:{' '}
                  <a href={`tel:${contact.tel}`}>{contact.display}</a>
                  {contact.isWhatsapp ? ' (WhatsApp)' : ''}
                </li>
              ))}
              <li>Email: hello@renewg.in</li>
              <li>Address: Suncity Thokkutu, 1st Floor, No. 3-3 (39), Mangaluru Taluku, Ullal, Dakshina Kannada, Karnataka - 575017</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={`footer-${link.href}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {year} RenewG. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
