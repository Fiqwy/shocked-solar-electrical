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
      { label: 'Savings', href: '#savings-calc' },
      { label: 'Why Shocked', href: '#why-shocked' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Quote', href: '#quote' },
    ],
    cta: 'Get a free quote',
    phone_mobile: 'Call',
  },

  hero: {
    eyebrow: 'Brisbane · Logan · Ipswich · Scenic Rim',
    // H1 rendered in three lines, middle italic + amber for emotional weight.
    // Copy lifted verbatim from his caption DX88FHQCcfk — pure brand voice.
    h1_line1: 'Quality kit.',
    h1_italic: 'Clean installs.',
    h1_line3: 'Honest pricing.',
    subhead: 'Premium solar, air-con and electrical from the team behind 100kW off-grid and 21kW commercial installs. The same SolaX, GoodWe, LONGi and Jinko gear on your roof. Backed by our 10 Year Installation Warranty.',
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
      '10 Year Installation Warranty',
      'Residential + Commercial',
      '100kW off-grid installed',
      'SolaX · GoodWe · Jinko · LONGi · TCL · Sigenergy',
      'Schletter racking',
      'Up to 96kWh battery storage',
      'Brisbane · Logan · Ipswich',
      'Pty Ltd · ABN 27 684 898 762',
    ],
  },

  three_pillars: {
    eyebrow: 'What we do',
    h2: 'Three trades. One crew. One call.',
    lead: 'Solar, air-con and general electrical, all done by the same team, to the same spec we wire into commercial sites. Quality kit, clean installs, honest pricing.',
    cards: [
      {
        num: '01',
        title: 'Solar + battery',
        body: 'Premium panels, inverters and battery storage from SolaX, GoodWe, Jinko, LONGi and TCL. Residential and commercial, from 13kW homes to 100kW remote properties. Clean installs, honest advice, real savings, and a 10 Year Installation Warranty on every system the team puts up.',
        bullets: [
          'Residential + commercial',
          'Battery storage up to 96kWh',
          'Whole-home backup',
          'Federal STC rebate handled',
          '10 Year Installation Warranty',
        ],
        thumb: 'assets/gallery/10-DQlR5EGkyhf.jpg',
        icon: 'solar',
      },
      {
        num: '02',
        title: 'Air conditioning',
        body: 'Split-system supply, install and relocation across Brisbane. Single bedroom heads, multi-head fit-outs, or shifting units to clear room for a monster patio build. We size it right, mount it clean, leave the wiring tidy behind every cover.',
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
        body: 'Sparky work done properly. Kitchen appliance installs, lighting, power, patio fit-outs, entertainment areas and switchboard work when the existing board cannot safely handle a new load. Residential and commercial. Roughed in, fit off and tested under load. Powered the right way, every job.',
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

  savings: {
    eyebrow: 'Brisbane payback',
    h2: 'Drag the slider. See the savings.',
    intro: 'Based on a Brisbane roof getting 5 peak sun hours a day, current Energex tariffs and the federal STC rebate. Real numbers depend on your usage and retailer; book a quote for the exact figure.',
    slider_label: 'System size',
    battery_label: 'Battery',
    battery_options: ['No battery', '13.5 kWh', '27 kWh'],
    out1_label: 'Estimated annual saving',
    out2_label: 'Over 25 years',
    out3_label: 'Payback in roughly',
    disclaimer: 'Estimate only. Final savings depend on your usage pattern, retailer plan and current STC + federal battery rebate tier at quote time.',
    cta: 'Book my real quote',
    // Constants for the calc (see brief component_techniques 06)
    constants: {
      PEAK_SUN_HRS: 5.0,
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

  recent_work: {
    eyebrow: 'Recent work',
    h2: 'Real jobs. Real spec sheets.',
    lead: 'Every install on this page has been delivered by the team. Brand names are the kit we actually put up.',
    tiles: [
      {
        photo: 'assets/gallery/10-DQlR5EGkyhf.jpg',
        chip: '100 kW · Off-grid',
        title: 'Remote NQ property',
        spec: 'Jinko panels · Schletter racking · Sigenergy inverters · 96 kWh battery',
        alt: '100 kW solar array on a remote North Queensland property, with Jinko panels, Schletter racking, Sigenergy inverters and 96 kWh battery storage',
        feature: true,
      },
      {
        photo: 'assets/gallery/02-DYwL2LtqA1l-reel.jpg',
        chip: '21 kW · Commercial',
        title: 'Mount Gravatt commercial',
        spec: 'TCL 440W panels · GoodWe 20kW 3-phase inverter',
        alt: '21 kW commercial solar install in Mount Gravatt with TCL 440W panels and GoodWe 20kW 3-phase inverter',
      },
      {
        photo: 'assets/gallery/03-DYwKM2hGsQd.webp',
        chip: '13.3 kW + 50 kWh',
        title: 'Whole-home backup',
        spec: 'LONGi Hi-MO X10 panels · 10kW SolaX inverter · 50kWh SolaX battery',
        alt: 'Whole-home backup install with LONGi Hi-MO X10 panels, SolaX inverter and SolaX 50kWh battery',
      },
      {
        photo: 'assets/gallery/04-DYtoSH4Gue.webp',
        chip: '13.2 kW · Shed',
        title: '13.2 kW shed solar',
        spec: 'Workshop run cleanly, built to perform',
        alt: '13.2 kW solar system installed on a Queensland shed',
      },
      {
        photo: 'assets/gallery/07-DX6bbvVCXqV.webp',
        chip: 'Engineering',
        title: 'Landscape config for wind rating',
        spec: 'Re-thought on site for compliance without losing yield',
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

  why_shocked: {
    eyebrow: 'The 100kW standard',
    h2: 'Same kit on your roof as on a commercial site.',
    body_paragraphs: [
      'The team started Shocked Solar & Electrical to do solar properly. Quality kit, clean installs, honest pricing.',
      'We have tackled a 100kW remote North Queensland job on Jinko, Schletter and Sigenergy with 96kWh of battery storage. We have wired up a 21kW commercial site in Mount Gravatt on TCL 440W panels and a GoodWe 3-phase inverter. We have run a 13.3kW LONGi Hi-MO X10 system into a 50kWh SolaX battery for whole-home backup.',
      'We have rethought a system on site to a landscape config when wind ratings changed the game. We have relocated split systems to clear room for a monster fly-over patio, then roughed in and fit off the kitchenette behind it.',
      'Big jobs, small jobs, residential or commercial. Every install backed by our 10 Year Installation Warranty.',
    ],
    stats: [
      { value: 100, suffix: 'kW', label: 'Largest install on the books' },
      { value: 96, suffix: 'kWh', label: 'Biggest battery wired' },
      { value: 10, suffix: 'yr', label: 'Installation warranty' },
      { value: 6, suffix: '+', label: 'Quality brands installed' },
    ],
    photo: 'assets/gallery/01-DY27kAgzr9B.webp',
  },

  service_area: {
    eyebrow: 'Service area',
    h2: 'Where the team works.',
    lead: 'Brisbane south, Logan, Ipswich east and Scenic Rim for everyday work. For larger commercial and off-grid jobs the team travels further, including remote North Queensland, so if you sit outside the standard run, ring us and we will talk it through.',
    clusters: [
      { name: 'Brisbane south', items: 'Mount Gravatt · Sunnybank · Salisbury · Moorooka · Tarragindi · Carindale' },
      { name: 'Logan', items: 'Browns Plains · Boronia Heights · Springwood · Beenleigh · Loganholme · Daisy Hill' },
      { name: 'Ipswich east', items: 'Springfield · Goodna · Camira · Bellbird Park · Gailes' },
      { name: 'Scenic Rim fringe', items: 'Jimboomba · Greenbank · Cedar Vale · Yarrabilba · Flagstone' },
    ],
    softno: 'Outside Brisbane / Logan / Ipswich? Bigger jobs welcome. Call 0490 482 632.',
  },

  quote: {
    eyebrow: 'Free quote',
    h2: 'Tell us about the job.',
    lead: 'Hit send and the team will get back to you to lock in a time. No automated tedium, just a real reply.',
    fields: {
      name: 'Your name',
      phone: 'Phone',
      email: 'Email',
      suburb: 'Suburb or postcode',
      interests_label: 'What are you after?',
      interests: ['Solar + battery', 'Air-conditioning', 'General electrical', 'Not sure yet'],
      message: 'Tell us about the job (optional)',
    },
    consent: 'By sending this you agree to be contacted about your quote. We will never share your details.',
    cta: 'Send to the team',
    success_h: 'Got it.',
    success_body: "Cheers, the team will be in touch shortly. If it’s urgent give us a bell on 0490 482 632.",
    error_body: "Couldn't send that one. Try again, or call us on 0490 482 632 and we'll sort it.",
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Straight answers.',
    side_cta: 'Still got a question? Ring the team on 0490 482 632.',
    items: [
      { q: 'Do I still get the federal solar rebate?', a: 'Yes. The federal small-scale rebate (STCs) is currently available on new systems and is shown as an up-front discount on the quote, not a refund later. We walk you through the exact rebate your system is eligible for before you sign anything.' },
      { q: 'What about the battery rebate?', a: 'Yes. The federal Cheaper Home Batteries Program is currently available on new battery installs alongside solar. The dollar value depends on the battery size and which tier the scheme is in at the time of install, so we calculate it fresh at quote time and show it as a line item on the quote.' },
      { q: 'Do I really need a battery, or just panels?', a: 'Depends on your bills, your usage and whether you want the lights on when the grid goes down. We have done full whole-home backup with 50kWh SolaX and we have done panels-only where it made more sense. Honest advice on the quote, not a sales pitch.' },
      { q: 'What brands do you actually install?', a: 'SolaX, GoodWe, Jinko, LONGi, TCL and Sigenergy for solar and batteries. Schletter for racking. We pick the brand to suit the job, not the margin. Every panel and inverter we put up is a quality bankable brand with full Australian warranty support.' },
      { q: 'How do I know what size air-con I need?', a: 'Room size, ceiling height, insulation, window orientation and how many people use the space. The team measures on site and sizes the head properly. Undersized units run flat out and die early. Oversized ones short-cycle. We get it right the first time.' },
      { q: 'Can you upgrade my switchboard at the same time as solar?', a: 'Often yes. On a lot of older homes you have to, because the existing board cannot safely handle a new inverter or battery. If that’s the case we’ll flag it up front in the quote and arrange it. One crew, one visit, one cost. No surprises mid-install.' },
      { q: 'How long does an install take?', a: 'A standard residential solar system is usually a one-day install once your STC paperwork, your retailer paperwork and our material order are sorted. Bigger jobs and battery installs can run two to three days. We give you a real timeline in the quote, not a guess.' },
      { q: 'What does the 10 Year Installation Warranty cover?', a: 'Everything the team installs. The full scope, exclusions and call-out terms are spelled out in the written quote you sign, alongside the separate manufacturer warranties on panels, inverters and batteries. We walk you through both at quote time, not after.' },
      { q: 'What areas do you actually cover?', a: 'Brisbane south, Logan, Ipswich east and Scenic Rim for everyday solar, air-con and electrical work. For larger commercial and off-grid jobs we travel further, including remote North Queensland. If you sit outside the standard run, ring us and we will talk it through.' },
      { q: 'How quickly can you get out for a quote?', a: 'Call 0490 482 632 or send the form and we’ll lock in a time that suits. We always give you a real answer on timing rather than a vague promise.' },
    ],
  },

  cta_banner: {
    // Sentences rendered as separate <span class="sent sent--block"> for one-line-per-sentence layout
    h2_sentences: [
      'Right kit.',
      'Right install.',
      'Powered the <em>right way</em>.',
    ],
    subhead: 'Get a free quote on solar, air-con or electrical. Brisbane and surrounds.',
    primary_cta: 'Get a free quote',
    secondary_cta: 'Call 0490 482 632',
    photo: 'assets/gallery/10-DQlR5EGkyhf.jpg',
  },

  footer: {
    brand_tag: 'Quality solar, air-con and electrical. Powered the right way.',
    services_h: 'Services',
    services_items: ['Solar + battery', 'Air conditioning', 'General electrical', 'Commercial installs', 'Whole-home backup'],
    areas_h: 'Service area',
    areas_items: ['Brisbane south', 'Logan', 'Ipswich east', 'Scenic Rim', 'Larger jobs (wider SEQ + NQ)'],
    contact_h: 'Contact',
    legal_line: 'Shocked Solar & Electrical Pty Ltd · ABN 27 684 898 762 · 10 Year Installation Warranty on every install',
    copyright: '© 2026 Shocked Solar & Electrical Pty Ltd. All rights reserved.',
    credit: 'Built by Applied Intelligence',
  },

  mobile_call_bar: {
    label: 'Call 0490 482 632',
    aria_label: 'Call Shocked Solar and Electrical on 0490 482 632',
  },

  micro_copy: [
    'Why not go solar?',
    'Powered the right way.',
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

  // Brisbane / Logan / Ipswich / Scenic Rim suburbs the team services.
  // Used by the suburb-check combobox. Order alphabetised.
  suburbs: [
    'Acacia Ridge','Algester','Annerley','Archerfield','Bahrs Scrub','Bannockburn','Beenleigh','Belivah','Bellbird Park','Berrinba',
    'Bethania','Boronia Heights','Browns Plains','Buccan','Calamvale','Camira','Carbrook','Carindale','Cedar Grove','Cedar Vale',
    'Chambers Flat','Cleveland','Coomera','Coopers Plains','Cornubia','Crestmead','Daisy Hill','Drewvale','Eagleby','Edens Landing',
    'Eight Mile Plains','Ellen Grove','Flagstone','Forestdale','Forest Lake','Gailes','Goodna','Greenbank','Heritage Park','Hillcrest',
    'Holland Park','Holmview','Inala','Ipswich','Jimboomba','Kingston','Kuraby','Larapinta','Logan Central','Loganholme',
    'Loganlea','Logan Reserve','Mackenzie','Macleay Island','Mansfield','Marsden','Meadowbrook','Moorooka','Mount Cotton','Mount Gravatt',
    'Mount Warren Park','Mundoolun','Munruben','New Beith','Nerang','North Maclean','Oxley','Pallara','Park Ridge','Park Ridge South',
    'Parkinson','Priestdale','Redbank','Redbank Plains','Regents Park','Richlands','Rochedale','Rochedale South','Runcorn','Russell Island',
    'Salisbury','Shailer Park','Slacks Creek','South Maclean','Spring Mountain','Springfield','Springfield Central','Springfield Lakes','Springwood','Stockleigh',
    'Stretton','Sunnybank','Sunnybank Hills','Tamborine','Tanah Merah','Tarragindi','Underwood','Veresdale','Waterford','Waterford West',
    'Wishart','Woodridge','Yarrabilba','Yeronga',
  ],
};
