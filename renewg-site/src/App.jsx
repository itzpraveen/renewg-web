import { useEffect, useMemo, useState } from 'react';
import logo from './assets/renewg-logo.png';
import heroImage from './assets/solar-rooftop-hero.webp';
import hybridImage from './assets/hybrid-ev-storage.webp';
import residentialImage from './assets/residential-consultation.webp';
import batteryLineup from './assets/battery-lineup-studio.webp';
import battery12v100ah from './assets/product-arenq-12v-100ah.webp';
import battery25v100ah from './assets/product-arenq-25v-100ah.webp';
import battery25v200ah from './assets/product-arenq-25v-200ah.webp';
import battery48v100ah from './assets/product-arenq-48v-100ah.webp';
import battery121v100ah from './assets/product-arenq-121v-100ah-stack.webp';
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
  { label: 'PM Surya', href: '#pm-surya' },
  { label: 'Batteries', href: '#batteries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const heroMetrics = [
  { label: 'Serving since', value: '2017' },
  { label: 'Total installed', value: '3 MW+' },
  { label: 'Residential', value: '2 MW+' },
  { label: 'Commercial & industrial', value: '1 MW+' },
];

const proofPoints = [
  {
    label: 'MNRE-aligned delivery',
    copy: 'We handle portal registration, documentation, KSEB liaison, net-meter commissioning, and subsidy paperwork — so you never have to chase it yourself.',
  },
  {
    label: 'Kerala & Karnataka coverage',
    copy: 'RenewG Solar LLP delivers across Karnataka, and into Kerala through our partner Tenaga Energy Solutions.',
  },
  {
    label: 'One team, start to finish',
    copy: 'Site survey, supply, installation, commissioning, and years of scheduled service — all from one accountable team.',
  },
];

const services = [
  {
    title: 'On-grid solar EPC',
    tag: 'Lower bills',
    icon: 'on-grid',
    copy:
      'Grid-tied rooftop and ground-mount systems built for steady output, clean compliance, and full net-metering value.',
    bullets: ['Site survey and shade analysis', 'Structural and electrical design', 'Commissioning and monitoring'],
  },
  {
    title: 'Hybrid solar and storage',
    tag: 'Backup power',
    icon: 'hybrid',
    copy:
      'Solar paired with lithium storage and smart control — for peak-load shaving, backup, and uninterrupted supply.',
    bullets: ['Battery sizing', 'Load prioritisation', 'Automated energy controls'],
  },
  {
    title: 'Off-grid power systems',
    tag: 'Remote sites',
    icon: 'off-grid',
    copy:
      'Standalone solar for farms, remote operations, and critical facilities that cannot rely on a weak grid.',
    bullets: ['Rugged components', 'Autonomous controls', 'Field service planning'],
  },
  {
    title: 'EV charging stations',
    tag: 'Solar mobility',
    icon: 'ev',
    copy:
      'AC and DC charging tied into your solar and storage, with access control, billing, and usage analytics.',
    bullets: ['Charger selection', 'Load approvals', 'Solar-to-wheel design'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Feasibility and registration',
    copy:
      'We study your roof space, electricity bill, sanctioned load, and phase supply — then register the project on the National Rooftop Solar Portal where it applies.',
  },
  {
    number: '02',
    title: 'Material and structure',
    copy:
      'Panels, inverter, distribution boxes, cabling, mounting hardware, earthing, and safety gear are delivered and installed to MNRE and KSEB standards.',
  },
  {
    number: '03',
    title: 'Wiring, inverter, and calibration',
    copy:
      'DC and AC wiring, earthing, inverter setup, plant calibration, and completion documents — all finished before the utility inspection.',
  },
  {
    number: '04',
    title: 'Net meter and subsidy support',
    copy:
      'We coordinate commissioning, the net-meter connection, and your subsidy claim — then keep the plant serviced so it keeps producing.',
  },
];

const tradingItems = [
  'Tier-1 solar modules, inverters, optimisers, and microinverters',
  'Lithium-ion battery packs with BMS, cabinets, and protection gear',
  'Mounting structures, DC cabling, AC panels, meters, and BOS hardware',
  'AC/DC EV chargers with load management and service support',
];

const quoteHighlights = [
  { label: 'Example system', value: '5 kW on-grid rooftop' },
  { label: 'Expected generation', value: '~600 units / month' },
  { label: 'Monthly saving', value: '~₹4,200 @ ₹7/unit' },
  { label: 'MNRE subsidy', value: '₹78,000' },
  { label: 'Net cost after subsidy', value: '₹2,12,000' },
  { label: 'Simple payback', value: '~4.2 years' },
];

const warrantyItems = [
  '8-year on-site warranty on the Thea / Solis on-grid inverter, extendable to 10 years.',
  '12-year product warranty on solar panels, with a 30-year linear performance warranty.',
  '5 years of free plant maintenance, including 2 site visits a year by Tenaga.',
];

const documentItems = [
  'Latest electricity bill',
  'Aadhaar and PAN card',
  'Bank cancelled cheque',
  '4-6 rooftop photos',
  'Ownership proof',
  'Signed quotation copy',
];

const trackRecord = [
  { value: '120 kW', label: 'Kandirickal Rubbers — commercial rooftop' },
  { value: '70 kW', label: 'Malabar Foods — C&I installation' },
  { value: '11 kW', label: 'Residential rooftop under subsidy' },
  { value: '100 MW', label: 'TVM Solar City — government project under ANERT' },
];

const batteryProducts = [
  {
    name: 'ARENQ LiFePO4 12.8V 100Ah Smart Battery',
    shortName: 'ARENQ LiFePO4 Smart Battery',
    category: '12 V inverter battery',
    voltage: '12.8V',
    capacity: '100Ah',
    bestFor: 'Single-battery inverter replacement',
    image: battery12v100ah,
    alt: 'ARENQ LiFePO4 12.8V 100Ah smart lithium inverter battery',
    summary: 'A compact lithium swap for a single C10-150Ah tubular battery.',
    specs: ['5-year warranty', 'Smart BMS', 'Sine-wave inverter ready'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 100Ah Smart Battery',
    shortName: 'ARENQ LiFePO4 Smart Battery',
    category: '24 V inverter battery',
    voltage: '25.6V',
    capacity: '100Ah',
    bestFor: '24 V inverter backup',
    image: battery25v100ah,
    alt: 'ARENQ LiFePO4 25.6V 100Ah smart lithium inverter battery',
    summary: 'Equal to two tubular batteries, sized for 24 V inverter backup.',
    specs: ['Replaces 2 tubular batteries', 'Smart BMS', 'Solar inverter ready'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 200Ah Smart Battery',
    shortName: 'ARENQ LiFePO4 Smart Battery',
    category: '24 V high-backup battery',
    voltage: '25.6V',
    capacity: '200Ah',
    bestFor: 'Longer home or office backup',
    image: battery25v200ah,
    alt: 'ARENQ LiFePO4 25.6V 200Ah smart lithium inverter battery',
    summary: 'Higher-capacity 24 V lithium for homes and offices that need longer backup.',
    specs: ['High backup capacity', 'Smart BMS', 'Home & office backup'],
  },
  {
    name: 'ARENQ LiFePO4 48V 100Ah Smart Battery',
    shortName: 'ARENQ LiFePO4 Smart Battery',
    category: '48 V solar battery',
    voltage: '48V',
    capacity: '100Ah',
    bestFor: 'Hybrid solar inverter backup',
    image: battery48v100ah,
    alt: 'ARENQ LiFePO4 48V 100Ah smart lithium solar inverter battery',
    summary: 'A 48 V lithium option for solar hybrid inverters and larger backup systems.',
    specs: ['Hybrid inverter ready', 'Smart BMS', 'Compact cabinet'],
  },
  {
    name: 'ARENQ 121V 100Ah Lithium Battery Stack',
    shortName: 'ARENQ Lithium Battery Stack',
    category: 'High-voltage battery',
    voltage: '121V',
    capacity: '100Ah',
    bestFor: 'Larger high-voltage backup',
    image: battery121v100ah,
    alt: 'ARENQ 121V 100Ah modular lithium battery stack for inverter backup',
    summary: 'A modular high-voltage stack for large inverter and solar backup needs.',
    specs: ['Modular stack', 'Integrated controls', 'Compatibility check needed'],
  },
];

const faqItems = [
  {
    question: 'What kind of solar projects do you take on?',
    answer:
      'We handle residential, commercial, industrial, and institutional solar — on-grid, hybrid, and off-grid — plus battery storage, EV charging, and equipment supply across Kerala and Karnataka.',
  },
  {
    question: 'Can you help with PM Surya Ghar and net-metering?',
    answer:
      'Yes. We support homeowners with compliant rooftop design, National Rooftop Solar Portal registration, KSEB liaison, net-metering coordination, and subsidy claims.',
  },
  {
    question: 'How does a business get started?',
    answer:
      'Share your electricity bill, location, approximate roof or land area, and backup needs. We then assess your solar capacity, savings potential, and the right way to implement it.',
  },
  {
    question: 'Do you also supply solar products?',
    answer:
      'Yes. We supply panels, inverters, ARENQ lithium inverter batteries, mounting structures, EV charging hardware, and supporting electricals — to installers, EPC firms, and end customers.',
  },
  {
    question: 'Can I buy lithium inverter batteries from you?',
    answer:
      'Yes. We stock ARENQ LiFePO4 batteries for 12 V, 24 V, 48 V, and high-voltage inverter backup. Ask us for price, stock, delivery, and inverter compatibility on WhatsApp before buying.',
  },
  {
    question: 'What documents do I need for a PM Surya Ghar rooftop project?',
    answer:
      'Your latest electricity bill, Aadhaar, PAN, a bank cancelled cheque, 4-6 rooftop photos, ownership proof, and a signed quotation once you confirm the project.',
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

function ServiceGlyph({ type }) {
  const common = {
    width: '58',
    height: '58',
    viewBox: '0 0 58 58',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    focusable: false,
  };

  if (type === 'hybrid') {
    return (
      <svg {...common}>
        <path className="glyph-accent" d="M14 18h18l7 8H21l-7-8Z" />
        <path d="M11 35h18v12H11V35Z" />
        <path d="M33 33h14v14H33V33Z" />
        <path d="M18 35v-7h18v5" />
        <path d="M38 38h4M38 42h4" />
        <path className="glyph-accent" d="M40 12v7M36.5 15.5h7" />
      </svg>
    );
  }

  if (type === 'off-grid') {
    return (
      <svg {...common}>
        <path className="glyph-accent" d="M9 42h40" />
        <path d="M16 29 29 18l13 11v15H16V29Z" />
        <path d="M24 44V32h10v12" />
        <path d="M38 19h7v25" />
        <path className="glyph-accent" d="M13 17h12l5 6H18l-5-6Z" />
      </svg>
    );
  }

  if (type === 'ev') {
    return (
      <svg {...common}>
        <path d="M14 33h23l6 5v7H11v-7l3-5Z" />
        <path d="M18 33l4-10h13l5 10" />
        <path className="glyph-accent" d="M43 18h4v17" />
        <path className="glyph-accent" d="M47 18v-5h-7v10h7" />
        <path d="M18 45a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 45a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path className="glyph-accent" d="M15 22h22l8 9H23l-8-9Z" />
      <path d="M11 34h22l8 9H19l-8-9Z" />
      <path d="M23 22v21M34 22v21" />
      <path d="M16 28h23M13 39h23" />
      <path className="glyph-accent" d="M44 14h5v5M49 14l-9 9" />
    </svg>
  );
}

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
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

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
            <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
            WhatsApp us
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

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="Commercial rooftop solar installation in Karnataka" />
          <div className="hero-shade" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">Solar · Storage · EV charging</p>
              <h1 id="hero-title">Solar EPC for Kerala &amp; Karnataka.</h1>
              <p>
                MNRE-aligned rooftop solar, lithium storage, EV charging, and long-term maintenance — for homes,
                businesses, and institutions ready to cut energy costs.
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

            <dl className="hero-metrics">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="proof-strip" aria-label="Why customers choose RenewG">
          <div className="container proof-grid">
            {proofPoints.map((point) => (
              <article key={point.label} data-reveal>
                <h2>{point.label}</h2>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="track-record" aria-label="Selected RenewG project record">
          <div className="container track-record-grid">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">Track record</p>
              <h2>Trusted since 2017 — homes, businesses, and government projects.</h2>
              <p>
                Over 3 MW commissioned across Kerala and Karnataka — from subsidised home rooftops to large
                commercial plants and ANERT-backed government work.
              </p>
            </div>

            <div className="record-list" data-reveal>
              {trackRecord.map((item) => (
                <article key={`${item.value}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solutions" id="solutions">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Solutions</p>
              <h2>One team, from energy study to a running plant.</h2>
              <p>
                We help you choose the right mix of solar, storage, EV charging, and equipment supply — without
                forcing every site into the same package.
              </p>
            </div>

            <div className="solution-grid">
              {services.map((service) => (
                <article className="solution-card" key={service.title} data-reveal>
                  <div className="solution-icon">
                    <ServiceGlyph type={service.icon} />
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
              <figcaption>Solar generation, storage, and EV charging — designed as one energy system.</figcaption>
            </figure>

            <div className="stack-copy">
              <div className="section-heading compact" data-reveal>
                <p className="eyebrow">Process</p>
                <h2>Built like infrastructure, not a one-time install.</h2>
                <p>
                  Every solar project starts with the electrical reality of your site. We keep the path clear —
                  from the first audit to performance monitoring.
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
              <p className="eyebrow">Homes &amp; communities</p>
              <h2>Residential solar you understand before install day.</h2>
              <p>
                For homes, apartments, and housing societies, we turn rooftop capacity, subsidy paperwork,
                net-metering, and savings estimates into one clear decision.
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

        <section className="section quote-section" id="pm-surya">
          <div className="container quote-grid">
            <div className="quote-copy" data-reveal>
              <p className="eyebrow">PM Surya Ghar</p>
              <h2>See your savings before you spend a rupee.</h2>
              <p>
                Here is a real 5 kW rooftop example — subsidy, monthly generation, savings, and payback in one
                view. Your quotation follows the same format, sized to your roof and electricity bill.
              </p>
              <p className="quote-note">
                Figures are indicative. Final numbers depend on site conditions, KSEB tariff slabs, your usage
                pattern, equipment selection, and MNRE / DISCOM processing.
              </p>
              <a
                className="text-link"
                href={createWhatsappHref(
                  'Hi RenewG, I want a PM Surya Ghar rooftop solar quotation. I can share my electricity bill and rooftop photos.',
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a quotation on WhatsApp
              </a>
            </div>

            <div className="quote-panel" data-reveal>
              <div className="quote-metrics">
                {quoteHighlights.map((item) => (
                  <article key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="quote-split">
                <div>
                  <h3>Warranty and service</h3>
                  <ul>
                    {warrantyItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Documents needed</h3>
                  <ul>
                    {documentItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section products" id="batteries">
          <div className="container">
            <div className="product-intro" data-reveal>
              <div className="section-heading compact">
                <p className="eyebrow">Inverter batteries</p>
                <h2>ARENQ LiFePO4 batteries for solar and home backup.</h2>
                <p>
                  Lithium replacements for tubular inverter batteries — longer life, smart BMS protection, and a
                  compact footprint. Tell us your inverter and we will match the right model, price, and stock.
                </p>
                <div className="product-actions">
                  <a
                    className="btn btn-product"
                    href={createWhatsappHref(
                      'Hi RenewG, I want to buy an ARENQ lithium inverter battery. Please share price and availability.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                    Ask battery price
                  </a>
                  <a className="text-link" href="#battery-comparison">
                    Compare models
                  </a>
                </div>
              </div>

              <figure className="battery-lineup">
                <img
                  src={batteryLineup}
                  alt="ARENQ lithium inverter battery range for solar and home backup"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="product-grid">
              {batteryProducts.map((product) => (
                <article className="product-card" key={product.name} data-reveal>
                  <div className="product-image">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-body">
                    <p className="product-label">{product.category}</p>
                    <p className="product-spec">
                      <span>{product.voltage}</span>
                      <span className="product-spec-divider" aria-hidden="true" />
                      <span>{product.capacity}</span>
                    </p>
                    <h3>{product.shortName}</h3>
                    <p className="product-summary">{product.summary}</p>
                    <ul>
                      {product.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                    <a
                      className="product-whatsapp"
                      href={createWhatsappHref(
                        `Hi RenewG, I want to buy ${product.name}. Please share price, stock, delivery, and inverter compatibility details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask price on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="battery-comparison" id="battery-comparison" data-reveal>
              <div>
                <p className="eyebrow">Model guide</p>
                <h3>Pick by inverter voltage, backup need, and compatibility.</h3>
                <p>
                  We confirm inverter compatibility before every sale. Pricing and stock change often, so each
                  enquiry routes to WhatsApp for live availability.
                </p>
              </div>
              <div className="comparison-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Voltage</th>
                      <th>Capacity</th>
                      <th>Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batteryProducts.map((product) => (
                      <tr key={`compare-${product.name}`}>
                        <td>{product.name.replace('ARENQ ', '')}</td>
                        <td>{product.voltage}</td>
                        <td>{product.capacity}</td>
                        <td>{product.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section trading" id="trading">
          <div className="container trading-grid">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">Equipment supply</p>
              <h2>Equipment supply for installers, EPC teams, and buyers.</h2>
              <p>
                We source genuine solar panels, inverters, ARENQ lithium batteries, storage systems, EV chargers,
                and balance-of-system parts — with real technical guidance and after-sales support.
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
                These are the first things we usually sort out before capacity, commercial terms, or timelines
                are finalised.
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
            <h2>Send one electricity bill. Get a clear solar plan.</h2>
            <p>
              Share your bill, location, and roof or land details. We will help you understand capacity, savings,
              storage needs, and the right next step.
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

      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RenewG on WhatsApp"
      >
        <img src={iconWhatsapp} alt="" aria-hidden="true" />
      </a>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#top" aria-label="RenewG home">
              <img src={logo} alt="RenewG logo" width="160" loading="lazy" />
            </a>
            <p>Solar EPC, lithium-ion storage, EV charging, and energy equipment supply across Karnataka and Kerala.</p>
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
