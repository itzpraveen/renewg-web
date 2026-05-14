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
  { label: 'Total installations', value: '3 MW+' },
  { label: 'Residential projects', value: '2 MW+' },
  { label: 'Commercial & industrial', value: '1 MW+' },
];

const proofPoints = [
  {
    label: 'MNRE-aligned delivery',
    copy: 'Portal registration, documentation, KSEB liaison, net-meter commissioning, and subsidy facilitation.',
  },
  {
    label: 'Kerala + Karnataka operations',
    copy: 'RenewG Solar LLP operates in Karnataka, with Kerala delivery through Tenaga Energy Solutions.',
  },
  {
    label: 'End-to-end accountability',
    copy: 'Feasibility, supply, installation, commissioning, service visits, and long-term plant maintenance.',
  },
];

const services = [
  {
    title: 'On-grid solar EPC',
    tag: 'Bill reduction',
    icon: 'on-grid',
    copy:
      'Grid-synchronised rooftop and ground-mount systems engineered for predictable yield, compliance, and net-metering value.',
    bullets: ['Site survey and shade analysis', 'Structural and electrical design', 'Commissioning and monitoring'],
  },
  {
    title: 'Hybrid solar and storage',
    tag: 'Reliability',
    icon: 'hybrid',
    copy:
      'Solar PV paired with lithium-ion storage and smart dispatch for peak-load shaving, backup, and energy continuity.',
    bullets: ['Battery sizing', 'Load prioritisation', 'Automated energy controls'],
  },
  {
    title: 'Off-grid power systems',
    tag: 'Remote energy',
    icon: 'off-grid',
    copy:
      'Independent solar infrastructure for farms, remote operations, and critical facilities that cannot depend on weak grid supply.',
    bullets: ['Rugged components', 'Autonomous controls', 'Field service planning'],
  },
  {
    title: 'EV charging stations',
    tag: 'Solar mobility',
    icon: 'ev',
    copy:
      'AC and DC charging infrastructure integrated with solar generation, storage, access control, billing, and analytics.',
    bullets: ['Charger selection', 'Load approvals', 'Solar-to-wheel architecture'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Feasibility and portal registration',
    copy:
      'The team studies roof space, electricity bill, sanctioned load, phase availability, and registers the project on the National Rooftop Solar Portal where applicable.',
  },
  {
    number: '02',
    title: 'Material delivery and structure',
    copy:
      'Solar panels, inverter, DBs, cabling, mounting hardware, earthing, and safety components are delivered and installed to MNRE / KSEB standards.',
  },
  {
    number: '03',
    title: 'Wiring, inverter, and calibration',
    copy:
      'DC and AC wiring, earthing, inverter installation, plant calibration, and completion documentation are completed before utility inspection.',
  },
  {
    number: '04',
    title: 'Net meter and subsidy support',
    copy:
      'RenewG coordinates commissioning, net-meter connection, subsidy claim support, and post-installation service so the plant keeps producing.',
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
  '8-year on-site warranty for Thea / Solis on-grid inverter, extendable to 10 years.',
  '12-year solar panel product warranty with 30-year linear performance warranty.',
  '5 years of free plant maintenance with 2 free site visits per year by Tenaga.',
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
  { value: '120 kW', label: 'Kandirickal Rubbers, commercial rooftop' },
  { value: '70 kW', label: 'Malabar Foods, C&I installation' },
  { value: '11 kW', label: 'Residential rooftop under subsidy' },
  { value: '100 MW', label: 'TVM Solar City government project under ANERT' },
];

const batteryProducts = [
  {
    name: 'ARENQ LiFePO4 12.8V 100Ah Smart Battery',
    searchLabel: '12V inverter battery',
    voltage: '12.8V',
    capacity: '100Ah',
    bestFor: 'Single-battery inverter replacement',
    image: battery12v100ah,
    alt: 'ARENQ LiFePO4 12.8V 100Ah smart lithium inverter battery',
    summary: 'A compact lithium replacement for normal C10-150Ah tubular battery backup systems.',
    specs: ['100Ah / 12.8V', '5-year warranty', 'Smart BMS', 'Sine-wave inverter compatible'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 100Ah Smart Battery',
    searchLabel: '24V lithium inverter battery',
    voltage: '25.6V',
    capacity: '100Ah',
    bestFor: '24V inverter backup',
    image: battery25v100ah,
    alt: 'ARENQ LiFePO4 25.6V 100Ah smart lithium inverter battery',
    summary: 'Equivalent to two normal C10-150Ah tubular batteries for 24V inverter backup use.',
    specs: ['100Ah / 25.6V', 'Tubular replacement', 'Smart LiFePO4 pack', 'Solar inverter backup'],
  },
  {
    name: 'ARENQ LiFePO4 25.6V 200Ah Smart Battery',
    searchLabel: 'high backup 24V battery',
    voltage: '25.6V',
    capacity: '200Ah',
    bestFor: 'Longer home or office backup',
    image: battery25v200ah,
    alt: 'ARENQ LiFePO4 25.6V 200Ah smart lithium inverter battery',
    summary: 'Higher-capacity 24V lithium battery for homes and businesses that need longer backup.',
    specs: ['200Ah / 25.6V', 'Smart BMS', 'High backup capacity', 'Home and office backup'],
  },
  {
    name: 'ARENQ LiFePO4 48V 100Ah Smart Battery',
    searchLabel: '48V solar inverter battery',
    voltage: '48V',
    capacity: '100Ah',
    bestFor: 'Hybrid solar inverter backup',
    image: battery48v100ah,
    alt: 'ARENQ LiFePO4 48V 100Ah smart lithium solar inverter battery',
    summary: 'A 48V lithium battery option for solar hybrid inverters and larger backup systems.',
    specs: ['100Ah / 48V', 'Smart lithium battery', 'Solar inverter use', 'Clean compact cabinet'],
  },
  {
    name: 'ARENQ 121V 100Ah Lithium Battery Stack',
    searchLabel: 'high voltage lithium battery',
    voltage: '121V',
    capacity: '100Ah',
    bestFor: 'Larger high-voltage backup',
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
      'RenewG handles commercial, industrial, institutional, residential, hybrid, off-grid, battery storage, EV charging, and solar product procurement projects across Kerala and Karnataka.',
  },
  {
    question: 'Can RenewG help with PM Surya Ghar and net-metering?',
    answer:
      'Yes. The team supports residential customers with compliant rooftop design, National Rooftop Solar Portal registration, KSEB liaison, net-metering coordination, and subsidy claim facilitation.',
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
  {
    question: 'What documents are needed to start a PM Surya Ghar rooftop solar project?',
    answer:
      'The usual checklist includes the latest electricity bill, Aadhaar, PAN, bank cancelled cheque, rooftop photos, ownership proof, and a signed quotation after confirming the project.',
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
              <h1 id="hero-title">Solar EPC for Kerala &amp; Karnataka.</h1>
              <p>
                MNRE-aligned rooftop solar, lithium storage, EV charging, and lifecycle O&amp;M for homes,
                businesses, institutions, and communities ready to lower energy costs.
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

        <section className="track-record" aria-label="Selected RenewG project record">
          <div className="container track-record-grid">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">Proof from quotation</p>
              <h2>Established in 2017, with residential, C&amp;I, and government-scale delivery.</h2>
              <p>
                The customer quotation documents 3 MW+ commissioned across Kerala and Karnataka, including
                residential subsidy projects, commercial rooftops, and ANERT-backed government work.
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

        <section className="section quote-section" id="pm-surya">
          <div className="container quote-grid">
            <div className="quote-copy" data-reveal>
              <p className="eyebrow">PM Surya Ghar quotation clarity</p>
              <h2>Show customers the numbers before they commit.</h2>
              <p>
                The 5 kW sample quotation explains subsidy, expected generation, savings, timeline, warranty,
                and documents in one place. The website now mirrors that same clarity for new leads.
              </p>
              <p className="quote-note">
                Figures are indicative and depend on site conditions, KSEB tariff slabs, consumption pattern,
                final equipment selection, and MNRE / DISCOM processing.
              </p>
              <a className="text-link" href={createWhatsappHref('Hi RenewG, I want a PM Surya Ghar rooftop solar quotation. I can share my electricity bill and rooftop photos.')} target="_blank" rel="noopener noreferrer">
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
                <h2>ARENQ LiFePO4 lithium batteries for solar and home backup.</h2>
                <p>
                  Customers searching for lithium inverter battery, solar inverter battery, tubular battery
                  replacement, or smart BMS battery can ask RenewG for the right ARENQ model, current price,
                  stock, and compatibility guidance.
                </p>
                <div className="product-actions">
                  <a className="btn btn-product" href={createWhatsappHref('Hi RenewG, I want to buy an ARENQ lithium inverter battery. Please share price and availability.')} target="_blank" rel="noopener noreferrer">
                    <img src={iconWhatsapp} alt="" aria-hidden="true" className="btn-icon" />
                    Ask battery price
                  </a>
                  <a className="text-link" href="#battery-comparison">Compare models</a>
                </div>
              </div>

              <figure className="battery-lineup">
                <img src={batteryLineup} alt="Professional lithium inverter battery lineup for solar and home backup" loading="lazy" />
                <figcaption>Professional visual for the battery family. Exact models are shown below with real photos.</figcaption>
              </figure>
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

            <div className="battery-comparison" id="battery-comparison" data-reveal>
              <div>
                <p className="eyebrow">Model guide</p>
                <h3>Pick by inverter voltage, backup need, and compatibility.</h3>
                <p>
                  RenewG confirms inverter compatibility before sale. Pricing and stock can change, so every
                  battery enquiry routes to WhatsApp for current availability.
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
            <p>Solar EPC, lithium-ion storage, EV charging, and energy product trading across Kerala and Karnataka.</p>
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
