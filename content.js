// Shocked Solar & Electrical — single source of truth
// All page copy, tiles, suburbs, FAQ. Edit here; everything else reads from window.CONTENT.

window.CONTENT = {
  brand: {
    name: 'Shocked Solar & Electrical',
    short: 'Shocked Solar',
    legal: 'Shocked Solar & Electrical Pty Ltd',
    abn: '27 684 898 762',
    phone_display: '0490 482 632',
    phone_tel: '0490482632',
    email: 'shockedsolarelectrical@gmail.com',
    instagram: 'https://www.instagram.com/shockedsolarandelectrical/',
    instagram_handle: '@shockedsolarandelectrical',
    base: { lat: -27.6739, lng: 152.9947, label: 'Boronia Heights' },
  },

  nav: {
    links: [
      { label: 'Services', href: '#three-pillars' },
      { label: 'Recent work', href: '#recent-work' },
      { label: 'Brands', href: '#brands' },
      { label: 'Why Shocked', href: '#why-shocked' },
      { label: 'Savings', href: '#savings-calc' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Quote', href: '#quote' },
    ],
    cta: 'Get a free quote',
    phone_mobile: 'Call',
  },

  hero: {
    eyebrow: 'Brisbane · Gold Coast · Northern NSW',
    // H1 rendered in three lines, middle italic + amber for emotional weight.
    // Copy lifted verbatim from his caption DX88FHQCcfk — pure brand voice.
    h1_line1: 'Quality kit.',
    h1_italic: 'Clean installs.',
    h1_line3: 'Honest pricing.',
    subhead: 'Solar, battery, air-con and electrical across South-East Queensland. One crew on the tools, from a 100kW off-grid build to a single bedroom split.',
    primary_cta: 'Get a free quote',
    secondary_cta: 'Call 0490 482 632',
    scroll_hint: 'Scroll to see the standard',
    suburb_placeholder: 'Your suburb or postcode',
    suburb_button: 'Check my suburb',
    trust_pill: '10 Year Installation Warranty',
    trust_line: 'ABN 27 684 898 762 · Shocked Solar & Electrical Pty Ltd',
    supporting_strip: ['Solar.', 'Power.', 'Comfort.'],
    photo: 'assets/gallery/10-DQlR5EGkyhf.jpg', // 100kW NQ flagship — the strongest photo
  },

  suburb_result: {
    success_template: (s) => `Yep, we cover ${s}. Lock in a free quote and we'll lock in a time.`,
    success_cta: 'Get my free quote',
    softno_template: (s) => `${s} is outside our standard run, but we travel for the bigger jobs. Give us a ring.`,
    softno_cta: 'Call 0490 482 632',
  },

  trust_strip: {
    pills: [
      'Residential + Commercial',
      'Off-grid + battery storage',
      'Split-system air-con',
      'Switchboard upgrades',
      'Brisbane to the Gold Coast + Tweed',
      'SAA accredited installer',
      'LONGi · SolaX · GoodWe · Sungrow',
      'Pty Ltd · ABN 27 684 898 762',
    ],
  },

  three_pillars: {
    eyebrow: 'What we do',
    h2: 'Three trades. One crew. One call.',
    lead: 'The same crew that wires a commercial array installs your bedroom split system. Big job or small, one number gets it sorted.',
    cards: [
      {
        num: '01',
        title: 'Solar + battery',
        body: 'Panels, inverters and battery storage for homes and businesses. From a 13kW home system to a 100kW off-grid property, we design it for your roof and your usage, then install it clean.',
        bullets: [
          'Residential + commercial',
          'Battery storage + whole-home backup',
          'Off-grid + remote properties',
          'Single-phase + 3-phase systems',
          'Federal STC rebate handled',
        ],
        thumb: 'assets/gallery/10-DQlR5EGkyhf.jpg',
        icon: 'solar',
      },
      {
        num: '02',
        title: 'Air-conditioning',
        body: 'Split-system supply, install and relocation across South-East Queensland. Single bedroom heads, multi-head fit-outs, or relocating units for a reno. We size it right, mount it clean and leave the wiring tidy behind every cover.',
        bullets: [
          'Split systems sized for SEQ summer',
          'Multi-head fit-outs',
          'Relocation + re-pipe',
          'Patio + entertainment area integration',
          'Quiet, compliant, tested under load',
        ],
        thumb: 'assets/gallery/11-DNK4dt9TITb.webp',
        icon: 'aircon',
      },
      {
        num: '03',
        title: 'General electrical',
        body: 'Sparky work done properly. Kitchen appliance installs, lighting, power, patio fit-outs, entertainment areas, and switchboard work when the existing board cannot safely handle a new load. Residential and commercial. Roughed in, fit off, and tested under load.',
        bullets: [
          'Kitchen appliance install + fit-off',
          'Lighting + power',
          'Patio + entertainment electrical',
          'Switchboard work as required',
          'Residential + commercial',
        ],
        thumb: 'assets/gallery/06-DX6gXyFCd6h.webp',
        icon: 'electrical',
      },
    ],
  },

  callback: {
    eyebrow: 'Prefer we call you?',
    h2: 'Quick call back.',
    lead: 'Drop your number and the team will ring you back. No call centre, no runaround.',
    name_ph: 'Your name',
    phone_ph: 'Your number',
    service_label: 'What about?',
    services: ['Solar + battery', 'Air-conditioning', 'General electrical', 'Not sure yet'],
    cta: 'Call me back',
    success: 'Got it. The team will give you a ring shortly. Urgent? Call 0490 482 632.',
    error: "Couldn't send that. Call us on 0490 482 632 and we'll sort it.",
  },

  upgrade: {
    eyebrow: 'Already on solar?',
    h2: 'Get more out of the system you have.',
    lead: 'Most homes started with a small system. If your bills are still creeping up, there is usually more to gain. We add to and look after existing systems, not just new ones.',
    items: [
      { title: 'Add more panels', body: 'Expand an undersized array to cover the bills you actually have now.' },
      { title: 'Add a battery', body: 'Store your daytime solar for the evening and keep the lights on through a blackout.' },
      { title: 'Inverter upgrade', body: 'Swap an ageing or undersized inverter for a modern hybrid that is battery ready.' },
      { title: 'Switchboard upgrade', body: 'Bring an older board up to spec so it can safely carry solar, battery and EV load.' },
      { title: 'Servicing & fault-finding', body: 'System underperforming or throwing errors? We diagnose it and put it right.' },
      { title: 'Grid connection & compliance', body: 'Paperwork, metering and network approvals handled properly.' },
    ],
    cta: 'Book a system health check',
  },

  savings: {
    eyebrow: 'Brisbane payback',
    h2: 'Drag the slider. See the savings.',
    intro: 'Based on a Brisbane roof getting 5 peak sun hours a day, current Energex tariffs and the federal STC rebate. Real numbers depend on your usage and retailer; book a quote for the exact figure.',
    slider_label: 'System size',
    battery_label: 'Battery',
    battery_options: ['No battery', '13.5kWh', '27kWh'],
    out1_label: 'Estimated annual saving',
    out2_label: 'Over 25 years',
    out3_label: 'Payback in roughly',
    disclaimer: 'Indicative example only, not a Shocked price. Real numbers depend on your usage and your power plan. Your written quote has the exact figures.',
    cta: 'Book my real quote',
    // Constants for the calc (see brief component_techniques 06)
    constants: {
      PEAK_SUN_HRS: 5.0,
      HOME_USAGE_KWH: 6500,
      TARIFF_KWH: 0.30,
      FEED_IN: 0.06,
      INSTALL_COST_PER_KW: 1200,
      STC_PER_KW: 320,
      BATTERY_COST: { '0': 0, '13.5': 12500, '27': 22000 },
      BATTERY_REBATE: { '0': 0, '13.5': 4080, '27': 7140 },
      SELF_CONSUMP: { '0': 0.40, '13.5': 0.65, '27': 0.85 },
      DEGRADATION_25YR: 0.92,
    },
  },

  incentives: {
    eyebrow: 'Lower the up-front cost',
    h2: 'The rebates, then the real price.',
    lead: 'Solar is cheaper than most people think once the rebates come off, and we show every dollar on the written quote. No fine print, no surprises.',
    tiles: [
      { name: 'Federal solar rebate', body: 'The federal small-scale rebate (STCs) comes straight off a new system as an up-front discount, not a refund you chase later.' },
      { name: 'Federal battery rebate', body: 'The federal Cheaper Home Batteries Program discounts a new battery installed with solar. The amount depends on the battery size and the scheme tier at install.' },
      { name: 'Feed-in tariff', body: 'The power your system exports back to the grid earns you a credit on your power bill through your retailer.' },
    ],
    warranty_h: 'And the risk sits with us.',
    warranty_body: 'Every install is backed by our 10 Year Installation Warranty, on top of the separate manufacturer warranties on the panels, inverter and battery. Rebates cut the price. The warranty removes the risk.',
    finance_line: 'Finance available. Ask us about no-deposit options when you book your quote.',
    disclaimer: 'Rebates move around with your system, your retailer and the current scheme. We work out the exact figure on your written quote.',
  },

  call_band: {
    line: 'Rather just talk it through?',
    sub: 'Ring the team and get a straight answer, no pressure.',
    phone_label: 'Call 0490 482 632',
  },

  recent_work: {
    eyebrow: 'Recent work',
    h2: 'Real jobs. Real spec sheets.',
    lead: 'Every install on this page has been delivered by the team. Brand names are the kit we actually put up.',
    tiles: [
      {
        photo: 'assets/gallery/10-DQlR5EGkyhf.jpg',
        chip: '100kW · Off-grid',
        title: 'Remote NQ property',
        spec: 'Jinko panels · Schletter racking · Sigenergy inverters · 96kWh battery',
        alt: '100kW solar array on a remote North Queensland property, with Jinko panels, Schletter racking, Sigenergy inverters and 96kWh battery storage',
        feature: true,
      },
      {
        photo: 'assets/gallery/02-DYwL2LtqA1l-reel.jpg',
        chip: '21kW · Commercial',
        title: 'Mount Gravatt commercial',
        spec: 'TCL 440W panels · GoodWe 20kW 3-phase inverter',
        alt: '21kW commercial solar install in Mount Gravatt with TCL 440W panels and GoodWe 20kW 3-phase inverter',
      },
      {
        photo: 'assets/gallery/03-DYwKM2hGsQd.webp',
        chip: '13.3kW + 50kWh',
        title: 'Whole-home backup',
        spec: 'LONGi Hi-MO X10 panels · 10kW SolaX inverter · 50kWh SolaX battery',
        alt: 'Whole-home backup install with LONGi Hi-MO X10 panels, SolaX inverter and SolaX 50kWh battery',
      },
      {
        photo: 'assets/gallery/04-DYtoSH4Gue.webp',
        chip: '13.2kW · Shed',
        title: '13.2kW shed solar',
        spec: 'Clean install on the workshop roof',
        alt: '13.2kW solar system installed on a Queensland shed',
      },
      {
        photo: 'assets/gallery/07-DX6bbvVCXqV.webp',
        chip: 'Engineering',
        title: 'Landscape config for wind rating',
        spec: 'Re-worked on site, no yield lost',
        alt: 'Solar array re-configured to landscape orientation to meet wind rating compliance',
      },
      {
        photo: 'assets/gallery/11-DNK4dt9TITb.webp',
        chip: 'AC + Patio',
        title: 'Patio fit-out + AC relocation',
        spec: 'Split systems relocated, fly-over patio roughed in and fit off',
        alt: 'Two split system air conditioners relocated and patio entertainment area roughed in',
      },
    ],
  },

  brands: {
    eyebrow: 'The kit',
    h2: 'Gear we <em class="italic-serif">stand behind</em>.',
    lead: 'The gear we actually install, across all three trades. Tap a category to see the brands.',
    groups: [
      { key: 'panels', category: 'Solar panels', items: [
        { brand: 'LONGi', product: 'Hi-MO X10 panels', logo: 'assets/brands/longi.svg' },
        { brand: 'Trina', product: 'Vertex high-output panels', logo: 'assets/brands/trina.svg' },
        { brand: 'TCL', product: '440W high-efficiency', logo: '' },
        { brand: 'Jinko', product: 'High-output mono panels', logo: 'assets/brands/jinko.svg' },
      ]},
      { key: 'inverters', category: 'Inverters', items: [
        { brand: 'SolaX', product: 'Hybrid inverters', logo: '' },
        { brand: 'GoodWe', product: '3-phase inverters', logo: '' },
        { brand: 'Sungrow', product: 'String + hybrid', logo: 'assets/brands/sungrow.svg' },
        { brand: 'Sigenergy', product: 'Hybrid inverter + storage', logo: '' },
      ]},
      { key: 'batteries', category: 'Batteries', items: [
        { brand: 'SolaX', product: 'Triple Power, up to 50kWh', logo: '' },
        { brand: 'Sigenergy', product: 'Modular storage', logo: '' },
      ]},
      { key: 'racking', category: 'Racking', items: [
        { brand: 'Schletter', product: 'Wind-rated mounting', logo: '' },
        { brand: 'Clenergy', product: 'Rail mounting systems', logo: '' },
        { brand: 'Antai', product: 'Mounting systems', logo: '' },
        { brand: 'PowerWave', product: 'Roof mounting', logo: '' },
      ]},
      { key: 'aircon', category: 'Air-conditioning', items: [
        { brand: 'Mitsubishi', product: 'Split systems', logo: 'assets/brands/mitsubishi.svg', lh: 24 },
        { brand: 'Daikin', product: 'Split + multi-head', logo: 'assets/brands/daikin.svg', lh: 22 },
      ]},
      { key: 'electrical', category: 'General electrical', items: [
        { brand: 'Clipsal', product: 'Switches + power points', logo: '' },
        { brand: 'Schneider Electric', product: 'Switchboards + protection', logo: 'assets/brands/schneider.svg', lh: 22 },
        { brand: 'Legrand', product: 'Wiring accessories', logo: 'assets/brands/legrand.svg', lh: 26 },
        { brand: 'Atom', product: 'Electrical accessories', logo: '' },
      ]},
    ],
    creds: [
      { type: 'shield', label: 'SAA Accredited Installer', meta: 'Solar Accreditation Australia', id: 'S4689636' },
      { type: 'cert', label: 'Electrical Contractor Licence', meta: 'Queensland', id: '1508323' },
    ],
    footnote: 'We confirm the exact make and model of every component on your written quote.',
  },

  why_shocked: {
    eyebrow: 'The 100kW standard',
    h2: 'Same kit on your roof as on a commercial site.',
    body_paragraphs: [
      'The team started Shocked Solar & Electrical in 2025 to do solar and electrical properly, and to be straight with people about it.',
      'Took on a 100kW remote North Queensland job on Jinko panels, Schletter racking and Sigenergy inverters, with 96kWh of battery storage. Wired a 21kW commercial site at Mount Gravatt on TCL 440W panels and a GoodWe 3-phase inverter. Ran a 13.3kW LONGi Hi-MO X10 system into a 50kWh SolaX battery for whole-home backup.',
      'Rethought a system on site to a landscape layout when wind ratings changed the game. Relocated split systems to clear room for a monster fly-over patio, then roughed in and fit off the kitchenette behind it.',
      'Big jobs, small jobs, residential or commercial. Same crew, same standard, every time.',
    ],
    stats: [
      { value: 100, suffix: 'kW', label: 'Largest install on the books' },
      { value: 96, suffix: 'kWh', label: 'Biggest battery wired' },
      { value: 3, suffix: '', label: 'Trades under one roof' },
      { value: 6, suffix: '+', label: 'Quality brands installed' },
    ],
    photo: 'assets/gallery/01-DY27kAgzr9B.webp',
  },

  process: {
    eyebrow: 'How it runs',
    h2: 'From first call to clean handover.',
    lead: "Here's exactly how a Shocked job runs, whether it's solar, a split system or a switchboard. No surprises.",
    steps: [
      { num: '01', title: 'Free quote & site check', body: 'We look at your roof, your switchboard and your usage, then give you a real quote with the rebates already worked in.' },
      { num: '02', title: 'Design & paperwork', body: 'We size the system properly and handle the STC, retailer and network paperwork so you do not have to.' },
      { num: '03', title: 'Clean install, one crew', body: 'The same team that quoted it installs it. Tidy cabling, tidy site, built to the spec we wire into commercial jobs.' },
      { num: '04', title: 'Tested & handed over', body: 'We test everything under load, show you how it works and leave the place the way we found it.' },
    ],
  },

  service_area: {
    eyebrow: 'Service area',
    h2: 'Where the team works.',
    lead: 'From the Redcliffe peninsula in the north, down through Brisbane, Logan, Ipswich and the Scenic Rim, out to the Gold Coast and across the border to Tweed Heads. The team does not mind a drive, so for larger commercial and off-grid work we range further again, including remote North Queensland.',
    clusters: [
      { name: 'Moreton Bay & Redcliffe', items: 'Redcliffe · Scarborough · Margate · Clontarf · North Lakes · Sandgate' },
      { name: 'Brisbane south', items: 'Mount Gravatt · Sunnybank · Salisbury · Moorooka · Tarragindi · Carindale' },
      { name: 'Logan', items: 'Browns Plains · Boronia Heights · Springwood · Beenleigh · Loganholme · Daisy Hill' },
      { name: 'Ipswich', items: 'Springfield · Goodna · Camira · Bellbird Park · Gailes' },
      { name: 'Scenic Rim & Tamborine', items: 'Jimboomba · Greenbank · Yarrabilba · Flagstone · Tamborine · Canungra' },
      { name: 'Gold Coast & Tweed', items: 'Southport · Burleigh · Palm Beach · Coolangatta · Tweed Heads (NSW)' },
    ],
    softno: 'Outside the run? For commercial and off-grid jobs the team travels. Ring 0490 482 632 and we will sort it.',
  },

  quote: {
    eyebrow: 'Free quote',
    h2: 'Tell us about the job.',
    lead: 'Tell us about the job and the team will get back to you to lock in a time.',
    sla: 'We reply to every quote request, usually the same business day.',
    fields: {
      name: 'Your name',
      phone: 'Phone',
      email: 'Email',
      suburb: 'Suburb or postcode',
      interests_label: 'What are you after?',
      interests: ['Solar + battery', 'Air-conditioning', 'General electrical', 'Not sure yet'],
      message: 'Tell us about the job (optional)',
      referral_label: 'How did you hear about us? (optional)',
      referrals: ['Google', 'Instagram or Facebook', 'A mate or referral', 'Saw a job nearby', 'Other'],
    },
    consent: 'By sending this you agree to be contacted about your quote. We will never share your details.',
    cta: 'Send to the team',
    success_h: 'Got it.',
    success_body: "Cheers, the team will be in touch shortly. If it's urgent give us a bell on 0490 482 632.",
    error_body: "Couldn't send that one. Try again, or call us on 0490 482 632 and we'll sort it.",
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Straight answers.',
    side_cta: 'Still got a question? Ring the team on 0490 482 632.',
    items: [
      { q: 'Why should I go solar now?', a: 'Power prices keep climbing and the Queensland sun does the heavy lifting. A well-sized system cuts your bills from day one, gives you more independence from the grid, and pairs with a battery so you keep the lights on when the grid drops. We will tell you honestly whether it stacks up for your place.' },
      { q: 'Do I still get the federal solar rebate?', a: 'Yes. The federal small-scale rebate (STCs) is currently available on new systems and is shown as an up-front discount on the quote, not a refund later. We walk you through the exact rebate your system is eligible for before you sign anything.' },
      { q: 'What about the battery rebate?', a: 'Yes. The federal Cheaper Home Batteries Program is currently available on new battery installs alongside solar. The dollar value depends on the battery size and which tier the scheme is in at the time of install, so we calculate it fresh at quote time and show it as a line item on the quote.' },
      { q: 'Do I really need a battery, or just panels?', a: 'Depends on your bills, your usage and whether you want the lights on when the grid goes down. We have done full whole-home backup with 50kWh SolaX, and we have done panels-only where it made more sense. Honest advice on the quote, not a sales pitch.' },
      { q: 'What does the 10 Year Installation Warranty cover?', a: 'Everything the team installs. The full scope, exclusions and call-out terms are spelled out in the written quote you sign, alongside the separate manufacturer warranties on panels, inverters and batteries. We walk you through both at quote time, not after.' },
      { q: 'Are you accredited and licensed?', a: 'Yes. We are accredited with Solar Accreditation Australia (SAA S4689636), the body that now accredits solar installers across Australia, and we hold electrical contractor licence 1508323. Every install is done to those standards.' },
      { q: 'What brands do you install?', a: 'A big range across all three trades: LONGi, Trina, TCL and Jinko panels; SolaX, GoodWe, Sungrow and Sigenergy inverters; SolaX and Sigenergy batteries; Schletter, Clenergy, Antai and PowerWave racking; Mitsubishi and Daikin air-con; and Clipsal, Schneider, Legrand and Atom electrical. Tap through them in the kit section above.' },
      { q: 'How do you choose which brand for my job?', a: 'We match the kit to your roof, your budget and how you actually use power, not to whatever is sitting in the shed. Premium gear where it earns its keep, solid value where it makes sense, and we tell you straight which way we would go and why. The exact make and model, and the reason for it, is spelled out on your written quote before you sign a thing.' },
      { q: 'Can you do off-grid or remote properties?', a: 'Yes. The team has delivered a 100kW off-grid system on a remote North Queensland property with 96kWh of battery storage. Big or small, on-grid or off, we can design for it.' },
      { q: 'Can you upgrade my switchboard at the same time as solar?', a: 'Often yes. On a lot of older homes you have to, because the existing board cannot safely handle a new inverter or battery. If that is the case we flag it up front in the quote and arrange it. One crew, one visit, one cost. No surprises mid-install.' },
      { q: 'How do I know what size air-con I need?', a: 'Room size, ceiling height, insulation, window orientation and how many people use the space. The team measures on site and sizes the head properly. Undersized units run flat out and die early. Oversized ones short-cycle. So we size the head to the room, not to a catalogue.' },
      { q: 'Can you relocate or add a split system for a reno or patio?', a: 'Yes. On a recent job we relocated two split systems to clear room for a large fly-over patio, then roughed in and fit off the patio, entertainment area and kitchenette behind it. If you are renovating, we work it in.' },
      { q: 'What electrical work do you do beyond solar?', a: 'Plenty. Kitchen appliance installs like ovens and cooktops, lighting, power, patio and entertainment fit-outs, and switchboard work. Residential and commercial. If it needs a licensed sparky, we cover it.' },
      { q: 'How long does an install take?', a: 'A standard residential solar system is usually a one-day install once your STC paperwork, your retailer paperwork and our material order are sorted. Bigger jobs and battery installs can run two to three days. We give you a real timeline in the quote, not a guess.' },
      { q: 'Will my system keep working in a blackout?', a: 'With the right battery, yes. A solar-only system shuts down in a blackout for safety, but a battery with backup keeps your essentials running. We have wired full whole-home backup on a 50kWh SolaX battery, and we will tell you honestly what your setup can carry.' },
      { q: 'Do you handle insurance or warranty repair work?', a: 'Yes. If a system has been damaged or needs a warranty claim looked at, we can assess it, document it and carry out the repair. Give us a call and we will talk you through it.' },
      { q: 'What areas do you cover?', a: 'From Redcliffe in the north down to Tweed Heads, plus the wider South-East and remote jobs by arrangement. Check the map above, or ring us and we will confirm your spot.' },
    ],
  },

  cta_banner: {
    // Sentences rendered as separate <span class="sent sent--block"> for one-line-per-sentence layout
    h2_sentences: [
      'Why not go solar?',
      'Right kit, right install.',
      'Powered the <em>right way</em>.',
    ],
    subhead: 'Get a free quote on solar, air-con or electrical. Brisbane and surrounds.',
    primary_cta: 'Get a free quote',
    secondary_cta: 'Call 0490 482 632',
    photo: 'assets/gallery/10-DQlR5EGkyhf.jpg',
  },

  footer: {
    brand_tag: 'Solar, air-con and electrical for South-East Queensland and Northern NSW. Powered the right way.',
    services_h: 'Services',
    services_items: ['Solar + battery', 'Off-grid solar', 'Air-conditioning', 'General electrical', 'Commercial installs', 'Whole-home backup'],
    areas_h: 'Service area',
    areas_items: ['Moreton Bay & Redcliffe', 'Brisbane south', 'Logan', 'Ipswich', 'Gold Coast & Tweed', 'Larger jobs (wider SEQ + NQ)'],
    contact_h: 'Contact',
    legal_line: 'Shocked Solar & Electrical Pty Ltd · ABN 27 684 898 762 · SAA accredited S4689636 · Electrical licence 1508323',
    copyright: '© 2026 Shocked Solar & Electrical Pty Ltd. All rights reserved.',
    credit: 'Built by Applied Intelligence',
  },

  mobile_call_bar: {
    label: 'Call 0490 482 632',
    aria_label: 'Call Shocked Solar and Electrical on 0490 482 632',
  },

  micro_copy: [
    "Nothing we can't handle.",
    'Same kit. Same crew. Same warranty.',
    'Real jobs. Real spec sheets.',
    'Drag the slider. See the savings.',
    'Big jobs. Small jobs. Clean installs.',
    'Quality kit. Honest pricing.',
    'Sized right. Mounted clean.',
    'Roughed in. Fit off. Tested under load.',
    'Tell us about the job.',
    'Lock in a time that suits.',
    'Call the team. 0490 482 632',
  ],

  // Service-area suburbs the team covers, Redcliffe in the north to Tweed Heads in the south.
  // Used by the suburb-check combobox. Order alphabetised.
  suburbs: [
    'Acacia Ridge','Algester','Annerley','Archerfield','Bahrs Scrub','Bannockburn','Beenleigh','Belivah','Bellbird Park','Berrinba',
    'Bethania','Bilinga','Boronia Heights','Bracken Ridge','Brighton','Broadbeach','Browns Plains','Buccan','Burleigh Heads','Calamvale',
    'Camira','Carbrook','Carindale','Cedar Grove','Cedar Vale','Chambers Flat','Cleveland','Clontarf','Coolangatta','Coomera',
    'Coopers Plains','Cornubia','Crestmead','Currumbin','Daisy Hill','Deception Bay','Drewvale','Eagleby','Edens Landing','Eight Mile Plains',
    'Ellen Grove','Flagstone','Forestdale','Forest Lake','Gailes','Goodna','Greenbank','Griffin','Heritage Park','Hillcrest',
    'Holland Park','Holmview','Inala','Ipswich','Jimboomba','Kallangur','Kingston','Kippa-Ring','Kirra','Kuraby',
    'Larapinta','Logan Central','Loganholme','Loganlea','Logan Reserve','Mackenzie','Macleay Island','Mango Hill','Mansfield','Margate',
    'Marsden','Meadowbrook','Mermaid Beach','Miami','Moorooka','Mount Cotton','Mount Gravatt','Mount Warren Park','Mundoolun','Munruben',
    'Murrumba Downs','Nerang','New Beith','Newport','North Lakes','North Maclean','Oxley','Pallara','Palm Beach','Park Ridge',
    'Park Ridge South','Parkinson','Petrie','Priestdale','Redbank','Redbank Plains','Redcliffe','Regents Park','Richlands','Robina',
    'Rochedale','Rochedale South','Rothwell','Runcorn','Russell Island','Salisbury','Sandgate','Scarborough','Shailer Park','Shorncliffe',
    'Slacks Creek','South Maclean','Southport','Spring Mountain','Springfield','Springfield Central','Springfield Lakes','Springwood','Stockleigh','Stretton',
    'Sunnybank','Sunnybank Hills','Surfers Paradise','Tallebudgera','Tamborine','Tanah Merah','Tarragindi','Tugun','Tweed Heads','Tweed Heads South',
    'Underwood','Varsity Lakes','Veresdale','Waterford','Waterford West','Wishart','Woodridge','Woody Point','Yarrabilba','Yeronga',
  ],
};
