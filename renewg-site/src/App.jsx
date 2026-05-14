import { useEffect, useMemo, useState } from 'react';
import logo from './assets/renewg-logo.png';
import heroImage from './assets/solar-rooftop-hero.webp';
import hybridImage from './assets/hybrid-ev-storage.webp';
import residentialImage from './assets/residential-consultation.webp';
import battery12v100ah from './assets/product-arenq-12v-100ah.webp';
import battery25v100ah from './assets/product-arenq-25v-100ah.webp';
import battery25v200ah from './assets/product-arenq-25v-200ah.webp';
import battery48v100ah from './assets/product-arenq-48v-100ah.webp';
import battery121v100ah from './assets/product-arenq-121v-100ah-stack.webp';
import iconOnGrid from './assets/icon-on-grid.svg';
import iconHybrid from './assets/icon-hybrid.svg';
import iconOffGrid from './assets/icon-offgrid.svg';
import iconEv from './assets/icon-ev.svg';
import iconTrading from './assets/icon-trading.svg';
import iconWhatsapp from './assets/icon-whatsapp.svg';
import './App.css';

const whatsappNumber = '918050245123';
const secondaryNumber = '918050863123';
const createWhatsappHref = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const whatsappHref = createWhatsappHref('Hi RenewG, I want to plan a solar project.');

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Homes', href: '#homes' },
  { label: 'Batteries', href: '#batteries' },
  { label: 'Trading', href: '#trading' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const heroMetrics = [
  { label: 'Solar capacity delivered', value: '50+ MW' },
  { label: 'Core region', value: 'Karnataka' },
  { label: 'Support model', value: 'EPC + O&M' },
];

const proofPoints = [
  {
    label: 'Commercial rooftops',
    copy: 'High-yield PV designs for factories, campuses, hospitals, and institutions.',
  },
  {
    label: 'Resilient power',
    copy: 'Hybrid solar, lithium-ion storage, and backup controls sized to real load profiles.',
  },
  {
    label: 'Residential savings',
    copy: 'Rooftop solar guidance with net-metering and PM Surya Ghar documentation support.',
  },
];

const services = [
  {
    title: 'On-grid solar EPC',
    tag: 'Bill reduction',
    icon: iconOnGrid,
    alt: 'On-grid solar icon',
    copy:
      'Grid-synchronised rooftop and ground-mount systems engineered for predictable yield, compliance, and net-metering value.',
    bullets: ['Site survey and shade analysis', 'Structural and electrical design', 'Commissioning and monitoring'],
  },
  {
    title: 'Hybrid solar and storage',
    tag: 'Reliability',
    icon: iconHybrid,
    alt: 'Hybrid solar icon',
    copy:
      'Solar PV paired with lithium-ion storage and smart dispatch for peak-load shaving, backup, and energy continuity.',
    bullets: ['Battery sizing', 'Load prioritisation', 'Automated energy controls'],
  },
  {
    title: 'Off-grid power systems',
    tag: 'Remote energy',
    icon: iconOffGrid,
    alt: 'Off-grid solar icon',
    copy:
      'Independent solar infrastructure for farms, remote operations, and critical facilities that cannot depend on weak grid supply.',
    bullets: ['Rugged components', 'Autonomous controls', 'Field service planning'],
  },
  {
    title: 'EV charging stations',
    tag: 'Solar mobility',
    icon: iconEv,
    alt: 'EV charging icon',
    copy:
      'AC and DC charging infrastructure integrated with solar generation, storage, access control, billing, and analytics.',
    bullets: ['Charger selection', 'Load approvals', 'Solar-to-wheel architecture'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Audit the site',
    copy:
      'RenewG studies roof strength, shade, sanctioned load, diesel backup, bill history, and future demand before recommending capacity.',
  },
  {
    number: '02',
    title: 'Engineer the business case',
    copy:
      'The team builds a practical design with generation estimates, ROI logic, subsidy or net-metering path, and equipment choices.',
  },
  {
    number: '03',
    title: 'Build with control',
    copy:
      'Procurement, installation, approvals, safety checks, and commissioning are managed through a single accountable EPC workflow.',
  },
  {
    number: '04',
    title: 'Operate for yield',
    copy:
      'Monitoring, preventive maintenance, service visits, and performance reviews keep the asset producing after handover.',
  },
];

const tradingItems = [
  'Tier-1 solar modules, inverters, optimisers, and microinverters',
  'Lithium-ion battery packs with BMS, cabinets, and protection gear',
  'Mounting structures, DC cabling, AC panels, meters, and BOS hardware',
  'AC/DC EV chargers with load management and service support',
];

const batteryProducts = [
  {
    name: 'ARENQ LiFePO4 12.8V 100Ah Smart Battery',
    searchLabel: '12V inverter battery',
    image: battery12v100ah,
    alt: 'ARENQ LiFePO4 12.8V 100Ah smart lithium inverter battery',
    summary: 'A compact lithium replacement for normal C10-150Ah tubular battery backup systems.',
    specs: ['100Ah / 12.8V', '5-year warranty', 'Smart BMS', 'Sine-wave inverter compatible'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 100Ah Smart Battery',
    searchLabel: '24V lithium inverter battery',
    image: battery25v100ah,
    alt: 'ARENQ LiFePO4 25.6V 100Ah smart lithium inverter battery',
    summary: 'Equivalent to two normal C10-150Ah tubular batteries for 24V inverter backup use.',
    specs: ['100Ah / 25.6V', 'Tubular replacement', 'Smart LiFePO4 pack', 'Solar inverter backup'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 200Ah Smart Battery',
    searchLabel: 'high backup 24V battery',
    image: battery25v200ah,
    alt: 'ARENQ LiFePO4 25.6V 200Ah smart lithium inverter battery',
    summary: 'Higher-capacity 24V lithium battery for homes and businesses that need longer backup.',
    specs: ['200Ah / 25.6V', 'Smart BMS', 'High backup capacity', 'Home and office backup'],
  },
  {
    name: 'ARENQ LiFePO4 48V 100Ah Smart Battery',
    searchLabel: '48V solar inverter battery',
    image: battery48v100ah,
    alt: 'ARENQ LiFePO4 48V 100Ah smart lithium solar inverter battery',
    summary: 'A 48V lithium battery option for solar hybrid inverters and larger backup systems.',
    specs: ['100Ah / 48V', 'Smart lithium battery', 'Solar inverter use', 'Clean compact cabinet'],
  },
  {
    name: 'ARENQ 121V 100Ah Lithium Battery Stack',
    searchLabel: 'high voltage lithium battery',
    image: battery121v100ah,
    alt: 'ARENQ 121V 100Ah modular lithium battery stack for inverter backup',
    summary: 'Modular high-voltage lithium battery stack for larger inverter and solar backup needs.',
    specs: ['121V / 100Ah', 'Modular stack', 'Integrated controls', 'Compatibility check required'],
  },
];

const faqItems = [
  {
    question: 'What kind of solar projects can RenewG handle?',
    answer:
      'RenewG handles commercial, industrial, institutional, residential, hybrid, off-grid, battery storage, EV charging, and solar product procurement projects across Karnataka.',
  },
  {
    question: 'Can RenewG help with PM Surya Ghar and net-metering?',
    answer:
      'Yes. The team supports residential customers with compliant rooftop design, documentation guidance, net-metering coordination, and subsidy-aligned project planning.',
  },
  {
    question: 'How should a business start the evaluation?',
    answer:
      'Share your electricity bill, site location, approximate roof or land area, and backup requirement. RenewG can then assess solar capacity, savings potential, and the right implementation path.',
  },
  {
    question: 'Does RenewG also supply solar products?',
    answer:
      'Yes. RenewG sources panels, inverters, ARENQ lithium inverter batteries, mounting structures, EV charging hardware, and supporting electrical components for installers, EPC firms, and end customers.',
  },
  {
    question: 'Can I buy lithium inverter batteries from RenewG?',
    answer:
      'Yes. RenewG supplies ARENQ LiFePO4 lithium batteries for 12V, 24V, 48V, and high-voltage inverter backup needs. Customers can ask for price, stock, delivery, and inverter compatibility on WhatsApp before buying.',
  },
];

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

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -48px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <div id="top" className={navOpen ? 'app is-nav-open' : 'app'}>
      <header className="site-header">
        <div className="container nav-container">
          <a className="logo" href="#top" aria-label="RenewG home" onClick={closeNav}>
            <img src={logo} alt="RenewG logo" width="150" />
          </a>

          <nav className={navOpen ? 'site-nav open' : 'site-nav'} id="site-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            aria-controls="site-nav"
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
          <img className="hero-image" src={heroImage} alt="Commercial rooftop solar installation in Karnataka" />
          <div className="hero-shade" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="hero-kicker">RenewG</p>
              <h1 id="hero-title">Solar EPC for Karnataka rooftops.</h1>
              <p>
                Design, procurement, installation, storage, EV charging, and lifecycle O&M for businesses,
                institutions, communities, and homes ready to lower energy costs.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                  Plan my project
                </a>
                <a className="btn btn-secondary" href="#solutions">
                  Explore solutions
                </a>
              </div>
            </div>

            <dl className="hero-metrics" data-reveal>
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="proof-strip" aria-label="RenewG project focus">
          <div className="container proof-grid">
            {proofPoints.map((point) => (
              <article key={point.label} data-reveal>
                <h2>{point.label}</h2>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section solutions" id="solutions">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Solutions</p>
              <h2>One accountable team from energy study to operating asset.</h2>
              <p>
                RenewG helps customers choose the right mix of solar generation, storage, EV charging, and
                procurement support without forcing every site into the same package.
              </p>
            </div>

            <div className="solution-grid">
              {services.map((service) => (
                <article className="solution-card" key={service.title} data-reveal>
                  <div className="solution-icon">
                    <img src={service.icon} alt={service.alt} width="52" height="52" loading="lazy" />
                  </div>
                  <p className="solution-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section energy-stack" id="process">
          <div className="container stack-grid">
            <figure className="stack-media" data-reveal>
              <img src={hybridImage} alt="Solar canopy with battery storage and EV charging" loading="lazy" />
              <figcaption>Solar generation, storage, and EV charging designed as one energy system.</figcaption>
            </figure>

            <div className="stack-copy">
              <div className="section-heading compact" data-reveal>
                <p className="eyebrow">Process</p>
                <h2>Built like infrastructure, not a one-time installation.</h2>
                <p>
                  The right solar project starts with the electrical reality of the site. RenewG keeps the
                  journey clear from the first audit to performance monitoring.
                </p>
              </div>

              <div className="process-list">
                {processSteps.map((step) => (
                  <article key={step.number} data-reveal>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section homes" id="homes">
          <div className="container homes-grid">
            <div className="homes-copy" data-reveal>
              <p className="eyebrow">Homes and communities</p>
              <h2>Residential solar that feels understandable before installation day.</h2>
              <p>
                For individual homes, apartments, and housing communities, RenewG turns rooftop capacity,
                subsidy paperwork, net-metering, and savings estimates into a simple decision path.
              </p>
              <div className="home-actions">
                <a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Check my rooftop on WhatsApp
                </a>
                <a className="text-link" href="#faq">
                  Read common questions
                </a>
              </div>
            </div>

            <figure className="homes-media" data-reveal>
              <img src={residentialImage} alt="Residential rooftop solar consultation with homeowner" loading="lazy" />
            </figure>
          </div>
        </section>

        <section className="section products" id="batteries">
          <div className="container">
            <div className="product-intro" data-reveal>
              <div className="section-heading compact">
                <p className="eyebrow">Inverter batteries</p>
                <h2>ARENQ LiFePO4 lithium batteries for solar and home backup.</h2>
                <p>
                  Customers searching for lithium inverter battery, solar inverter battery, tubular battery
                  replacement, or smart BMS battery can ask RenewG for the right ARENQ model, current price,
                  stock, and compatibility guidance.
                </p>
              </div>
              <a className="btn btn-product" href={createWhatsappHref('Hi RenewG, I want to buy an ARENQ lithium inverter battery. Please share price and availability.')} target="_blank" rel="noopener noreferrer">
                <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                Ask battery price
              </a>
            </div>

            <div className="product-grid">
              {batteryProducts.map((product) => (
                <article className="product-card" key={product.name} data-reveal>
                  <div className="product-image">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-body">
                    <p className="product-label">{product.searchLabel}</p>
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                    <ul>
                      {product.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                    <a
                      className="product-whatsapp"
                      href={createWhatsappHref(`Hi RenewG, I want to buy ${product.name}. Please share price, stock, delivery, and inverter compatibility details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask / buy on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trading" id="trading">
          <div className="container trading-grid">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">Product trading</p>
              <h2>Procurement support for installers, EPC teams, and end customers.</h2>
              <p>
                RenewG sources authenticated solar panels, inverters, ARENQ lithium batteries, storage systems,
                EV charging, and balance-of-system equipment with practical technical guidance and after-sales
                coordination.
              </p>
            </div>

            <div className="trading-panel" data-reveal>
              <img src={iconTrading} alt="" aria-hidden="true" width="56" height="56" loading="lazy" />
              <ul>
                {tradingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Questions customers ask before going solar.</h2>
              <p>
                These are the first checks RenewG usually handles before capacity, commercial terms, or
                implementation timelines are finalised.
              </p>
            </div>

            <div className="faq-list" data-reveal>
              {faqItems.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner" data-reveal>
            <p className="eyebrow">Start here</p>
            <h2>Send one electricity bill. Get a practical solar path.</h2>
            <p>
              Share your bill, site location, and roof or land details. RenewG will help you understand capacity,
              savings, storage needs, and the right next step.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                WhatsApp RenewG
              </a>
              <a className="btn btn-secondary dark" href="mailto:hello@renewg.in">
                Email hello@renewg.in
              </a>
            </div>
          </div>
        </section>
      </main>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat">
        <img src={iconWhatsapp} alt="" aria-hidden="true" />
      </a>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#top" aria-label="RenewG home">
              <img src={logo} alt="RenewG logo" width="160" loading="lazy" />
            </a>
            <p>Solar EPC, lithium-ion storage, EV charging, and energy product trading across Karnataka.</p>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              {phoneContacts.map((contact) => (
                <li key={contact.tel}>
                  {contact.label}: <a href={`tel:${contact.tel}`}>{contact.display}</a>
                  {contact.isWhatsapp ? ' (WhatsApp)' : ''}
                </li>
              ))}
              <li>
                Email: <a href="mailto:hello@renewg.in">hello@renewg.in</a>
              </li>
              <li>Suncity Thokkutu, Ullal, Dakshina Kannada, Karnataka - 575017</li>
            </ul>
          </div>

          <div>
            <h3>Explore</h3>
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
          <small>&copy; {year} RenewG. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
