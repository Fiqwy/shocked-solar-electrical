/* ========================================================================
   SHOCKED SOLAR & ELECTRICAL — engine
   Vanilla JS. Reads from window.CONTENT. Booted on DOMContentLoaded.
   ======================================================================== */
(function () {
  'use strict';

  const C = window.CONTENT;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const byRole = (name, r = document) => r.querySelector(`[data-role="${name}"]`);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isMobile = matchMedia('(max-width: 900px)').matches;
  const auFmt = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
  const numFmt = new Intl.NumberFormat('en-AU');

  // ----- Boot -----
  document.addEventListener('DOMContentLoaded', boot);

  function boot() {
    populateContent();
    initLenisAndGsap();
    initRevealAnimations();
    initNavScroll();
    initCursorSpotlight();
    initMagnetic();
    initHeroKenBurns();
    initSuburbCheck($('#hero-suburb-input'), byRole('hero-suburb-listbox'), byRole('hero-suburb-result'), 'hero');
    initSuburbCheck($('#nav-suburb-input'), null, null, 'nav');
    initTrustStripMarquee();
    initPillarsSpotlight();
    initSavingsCalc();
    initWorkGrid();
    initCountUps();
    initWhyParallax();
    initLeafletMap();
    initQuoteForm();
    initFaqEnhance();
    initDividerDraw();
    document.body.classList.remove('is-loading');
    requestAnimationFrame(() => {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  }

  /* ---------- Content population ---------- */
  function populateContent() {
    // Nav
    byRole('nav-links').innerHTML = C.nav.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
    byRole('nav-cta').firstElementChild.textContent = C.nav.cta;
    byRole('mobile-call-label').textContent = C.mobile_call_bar.label;

    // Hero — editorial / photo-led
    byRole('hero-eyebrow').textContent = C.hero.eyebrow;
    byRole('hero-h1-l1').textContent = C.hero.h1_line1;
    byRole('hero-h1-italic').textContent = C.hero.h1_italic;
    byRole('hero-h1-l3').textContent = C.hero.h1_line3;
    byRole('hero-subhead').textContent = C.hero.subhead;
    byRole('hero-primary-cta').textContent = C.hero.primary_cta;
    byRole('hero-secondary-cta').textContent = C.hero.secondary_cta;
    byRole('hero-scroll-hint').textContent = C.hero.scroll_hint;
    $('#hero-suburb-input').placeholder = C.hero.suburb_placeholder;
    byRole('hero-suburb-button').textContent = C.hero.suburb_button;

    // Trust strip
    const pills = C.trust_strip.pills.map(p => `<span class="trust-strip-pill">${p}</span>`).join('');
    byRole('trust-strip-track').innerHTML = pills + pills; // duplicate for seamless loop

    // Three pillars
    byRole('pillars-eyebrow').textContent = C.three_pillars.eyebrow;
    setWordSpans(byRole('pillars-h'), C.three_pillars.h2);
    $('[data-role="pillars-h"] ~ *, .three-pillars .section-lead, [data-role="pillars-lead"]'); // no-op
    byRole('pillars-lead').textContent = C.three_pillars.lead;
    byRole('pillars-grid').innerHTML = C.three_pillars.cards.map((card, i) => `
      <article class="pillar-card${i === 2 ? ' featured-amber' : ''}" data-reveal="fade-up">
        <div class="pillar-num">${card.num}</div>
        <div class="pillar-icon">${iconSvg(card.icon)}</div>
        <h3 class="pillar-title">${card.title}</h3>
        <p class="pillar-body">${card.body}</p>
        <ul class="pillar-bullets">${card.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </article>
    `).join('');

    // Savings
    byRole('savings-eyebrow').textContent = C.savings.eyebrow;
    setWordSpans(byRole('savings-h'), C.savings.h2);
    byRole('savings-intro').textContent = C.savings.intro;
    byRole('savings-slider-label').textContent = C.savings.slider_label;
    byRole('savings-battery-label').textContent = C.savings.battery_label;
    byRole('savings-out1-label').textContent = C.savings.out1_label;
    byRole('savings-out2-label').textContent = C.savings.out2_label;
    byRole('savings-out3-label').textContent = C.savings.out3_label;
    byRole('savings-disclaimer').textContent = C.savings.disclaimer;
    byRole('savings-cta').textContent = C.savings.cta;
    byRole('battery-seg').innerHTML = C.savings.battery_options.map((opt, i) => `
      <button type="button" role="radio" aria-checked="${i === 0}" data-batt="${i === 0 ? '0' : (i === 1 ? '13.5' : '27')}">${opt}</button>
    `).join('');

    // Recent work
    byRole('work-eyebrow').textContent = C.recent_work.eyebrow;
    setWordSpans(byRole('work-h'), C.recent_work.h2);
    byRole('work-lead').textContent = C.recent_work.lead;
    byRole('work-grid').innerHTML = C.recent_work.tiles.map((t, i) => `
      <article class="work-tile${t.feature ? ' feature' : ''}" data-idx="${i}" data-reveal="fade-up">
        <img src="${t.photo}" alt="${t.alt}" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async">
        <div class="work-tile-overlay" aria-hidden="true"></div>
        <div class="work-tile-meta">
          <span class="work-tile-chip">${t.chip}</span>
          <h3 class="work-tile-title">${t.title}</h3>
          <p class="work-tile-spec">${t.spec}</p>
        </div>
      </article>
    `).join('');

    // Why Shocked
    byRole('why-eyebrow').textContent = C.why_shocked.eyebrow;
    setWordSpans(byRole('why-h'), C.why_shocked.h2);
    byRole('why-body').innerHTML = C.why_shocked.body_paragraphs.map(p => `<p>${p}</p>`).join('');
    byRole('why-stats').innerHTML = C.why_shocked.stats.map(s => `
      <div class="stat-tile">
        <p class="stat-value"><span class="stat-num" data-target="${s.value}">0</span><span class="suffix">${s.suffix}</span></p>
        <p class="stat-label">${s.label}</p>
      </div>
    `).join('');

    // Service area
    byRole('area-eyebrow').textContent = C.service_area.eyebrow;
    setWordSpans(byRole('area-h'), C.service_area.h2);
    byRole('area-lead').textContent = C.service_area.lead;
    byRole('area-clusters').innerHTML = C.service_area.clusters.map(cl => `
      <li>
        <p class="area-cluster-name">${cl.name}</p>
        <p class="area-cluster-items">${cl.items}</p>
      </li>
    `).join('');
    byRole('area-softno').textContent = C.service_area.softno;

    // Quote form labels
    byRole('quote-eyebrow').textContent = C.quote.eyebrow;
    setWordSpans(byRole('quote-h'), C.quote.h2);
    byRole('quote-lead').textContent = C.quote.lead;
    byRole('q-name-label').textContent = C.quote.fields.name;
    byRole('q-phone-label').textContent = C.quote.fields.phone;
    byRole('q-email-label').textContent = C.quote.fields.email;
    byRole('q-suburb-label').textContent = C.quote.fields.suburb;
    byRole('q-interests-label').textContent = C.quote.fields.interests_label;
    byRole('q-message-label').textContent = C.quote.fields.message;
    byRole('q-consent').textContent = C.quote.consent;
    byRole('q-cta').textContent = C.quote.cta;
    byRole('q-interests').innerHTML = C.quote.fields.interests.map(i => `
      <button type="button" class="chip" aria-pressed="false" data-interest="${i}">${i}</button>
    `).join('');
    byRole('quote-success-h').textContent = C.quote.success_h;
    byRole('quote-success-body').textContent = C.quote.success_body;

    // FAQ
    byRole('faq-eyebrow').textContent = C.faq.eyebrow;
    setWordSpans(byRole('faq-h'), C.faq.h2);
    byRole('faq-side-cta').innerHTML = C.faq.side_cta.replace('0490 482 632', '<a href="tel:0490482632">0490 482 632</a>');
    byRole('faq-list').innerHTML = C.faq.items.map((it, i) => `
      <details${i === 0 ? ' open' : ''}>
        <summary>${it.q}</summary>
        <div class="faq-answer">${it.a}</div>
      </details>
    `).join('');

    // CTA banner — uses h2_html so we can italicise the emphasis word
    byRole('cta-h').innerHTML = C.cta_banner.h2_html;
    byRole('cta-sub').textContent = C.cta_banner.subhead;
    byRole('cta-primary').textContent = C.cta_banner.primary_cta;
    byRole('cta-secondary').textContent = C.cta_banner.secondary_cta;

    // Footer
    byRole('footer-tag').textContent = C.footer.brand_tag;
    byRole('footer-services-h').textContent = C.footer.services_h;
    byRole('footer-services').innerHTML = C.footer.services_items.map(s => `<li>${s}</li>`).join('');
    byRole('footer-areas-h').textContent = C.footer.areas_h;
    byRole('footer-areas').innerHTML = C.footer.areas_items.map(s => `<li>${s}</li>`).join('');
    byRole('footer-contact-h').textContent = C.footer.contact_h;
    byRole('footer-legal').textContent = C.footer.legal_line;
    byRole('footer-copy').textContent = C.footer.copyright;
    byRole('footer-credit').textContent = C.footer.credit;
  }

  function setWordSpans(el, text) {
    if (!el || !text) return;
    el.innerHTML = text.split(/\s+/).map(w =>
      `<span class="word"><span class="inner">${w}</span></span>`
    ).join(' ');
  }

  function iconSvg(key) {
    const icons = {
      solar: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
      aircon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="9" rx="2"/><path d="M5 11h.01M9 11h6M19 11h.01M8 19c.5-1.2 1.5-2 3-2s2.5.8 3 2M5 22c.5-1.2 1.5-2 3-2s2.5.8 3 2M13 22c.5-1.2 1.5-2 3-2s2.5.8 3 2"/></svg>`,
      electrical: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" fill-opacity="0.18"/></svg>`,
    };
    return icons[key] || icons.solar;
  }

  /* ---------- Lenis + GSAP wiring ---------- */
  let lenis;
  function initLenisAndGsap() {
    if (!window.Lenis || !window.gsap) return;
    if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    if (reduced) return;
    lenis = new window.Lenis({
      lerp: 0.09,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    window.gsap.ticker.add((t) => lenis.raf(t * 1000));
    window.gsap.ticker.lagSmoothing(0);
    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.addEventListener('load', () => window.ScrollTrigger.refresh());
    }
  }

  /* ---------- Reveal animations ---------- */
  function initRevealAnimations() {
    if (!window.gsap || reduced) {
      $$('[data-reveal]').forEach(el => el.style.opacity = 1);
      return;
    }
    const gsap = window.gsap;

    // HERO — editorial reveal. Lines slide up & fade, italic line slightly delayed for emphasis.
    const heroLines = $$('.hero-h1 .hero-line');
    if (heroLines.length) {
      gsap.set(heroLines, { y: 40, opacity: 0 });
      gsap.to(heroLines, {
        y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
        stagger: { each: 0.12, from: 'start' }, delay: 0.25,
      });
    }
    gsap.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.08 });
    gsap.from('.hero-subhead', { y: 18, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.75 });
    gsap.from('.hero-actions', { y: 18, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.95 });
    gsap.from('.hero-suburb-band', { y: 30, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 1.2 });
    gsap.from('.hero-scroll-hint', { opacity: 0, duration: 1.2, ease: 'power2.out', delay: 1.6 });

    // Section reveals via ScrollTrigger
    if (!window.ScrollTrigger) return;
    $$('[data-reveal="fade-up"]').forEach(el => {
      if (el.closest('.hero')) return;
      gsap.from(el, {
        y: 32, opacity: 0, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });
    $$('[data-reveal="word-stagger"]').forEach(el => {
      if (el.closest('.hero')) return;
      const inners = el.querySelectorAll('.inner');
      if (!inners.length) return;
      gsap.set(inners, { y: '100%', opacity: 0 });
      window.ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => gsap.to(inners, { y: '0%', opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.03 }),
      });
    });
    // Card stagger inside pillars + work grids
    $$('.pillars-grid, .work-grid').forEach(grid => {
      const cards = grid.children;
      window.ScrollTrigger.create({
        trigger: grid, start: 'top 80%', once: true,
        onEnter: () => gsap.from(cards, { y: 36, opacity: 0, duration: 0.7, ease: 'expo.out', stagger: 0.08 }),
      });
    });
  }

  /* ---------- Nav scroll behaviour ---------- */
  function initNavScroll() {
    const nav = byRole('nav');
    const sentinel = byRole('hero-sentinel');
    const mobileBar = $('.mobile-call-bar');
    if (!nav || !sentinel) return;

    // Track scroll position vs the hero sentinel (which sits at hero bottom).
    // We want "past hero" === sentinel ABOVE viewport (top < 0), not just isIntersecting=false.
    function updateNavState() {
      const past = sentinel.getBoundingClientRect().top < 80;
      nav.classList.toggle('scrolled', past);
      nav.classList.toggle('show-suburb', past);
      if (mobileBar) {
        mobileBar.classList.toggle('visible', past);
        document.body.classList.toggle('mobile-bar-on', past);
      }
    }
    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState, { passive: true });

    // Smooth scroll on anchor click (use Lenis if available)
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        const id = a.getAttribute('href').slice(1);
        if (!id || id === 'top') {
          if (lenis) { ev.preventDefault(); lenis.scrollTo(0, { offset: 0 }); }
          return;
        }
        const target = document.getElementById(id);
        if (!target) return;
        ev.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -72 });
        else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- Cursor spotlight ---------- */
  function initCursorSpotlight() {
    if (!hasHover || reduced) return;
    const root = document.documentElement;
    document.body.classList.add('cursor-ready');
    document.addEventListener('pointermove', (e) => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });
  }

  /* ---------- Magnetic CTAs ---------- */
  function initMagnetic() {
    if (!hasHover || reduced || !window.gsap) return;
    const gsap = window.gsap;
    $$('.magnetic').forEach(btn => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
      btn.addEventListener('pointerenter', () => btn.style.willChange = 'transform');
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const RAD = 140;
        if (dist < RAD) { xTo(dx * 0.4); yTo(dy * 0.4); }
        else { xTo(0); yTo(0); }
      });
      btn.addEventListener('pointerleave', () => { xTo(0); yTo(0); btn.style.willChange = 'auto'; });
    });
  }

  /* ---------- HERO Ken-Burns + parallax (replaces canvas chaos) ---------- */
  function initHeroKenBurns() {
    if (!window.gsap || !window.ScrollTrigger || reduced) return;
    const gsap = window.gsap;
    const plate = $('.hero-plate');
    const sun = $('.hero-sun');
    if (plate) {
      // Slow ambient Ken Burns — barely-there zoom + pan
      gsap.to(plate, { scale: 1.06, x: '-1%', y: '-1.5%', duration: 18, ease: 'sine.inOut', repeat: -1, yoyo: true });
      // Scroll parallax: drift up + fade as user scrolls
      gsap.to(plate, {
        yPercent: -10, opacity: 0.18, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
      });
    }
    if (sun) {
      gsap.to(sun, {
        scale: 1.15, opacity: 0.6, ease: 'sine.inOut',
        duration: 6, repeat: -1, yoyo: true,
      });
    }
  }

  /* ---------- (removed) HERO CANVAS voltage→sun ---------- */
  function _unused_initHeroCanvas() {
    const canvas = byRole('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    let W = 0, H = 0, DPR = 1;
    let particles = [];
    let mouseX = 0, mouseY = 0, hasMouse = false;
    let progress = 0; // 0 (arcs/cyan) -> 1 (rays/amber)
    let raf = 0, running = false;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      seed();
    }
    function seed() {
      const count = isMobile ? 60 : 95;
      particles = [];
      const sunX = W * 0.72, sunY = H * 0.28;
      for (let i = 0; i < count; i++) {
        // Arc start at random x along top half, vertical zigzag down
        const startX = Math.random() * W;
        const startY = (Math.random() * 0.6 + 0.05) * H;
        const len = 80 + Math.random() * 240;
        const dir = Math.random() < 0.5 ? -1 : 1;
        const segs = 4 + Math.floor(Math.random() * 4);
        // Ray vector from sun
        const angle = (Math.random() * Math.PI * 0.9) + Math.PI * 0.05; // mostly downward
        const rayLen = 180 + Math.random() * 360;
        particles.push({
          startX, startY, len, dir, segs,
          sunX, sunY, angle, rayLen,
          jitter: Math.random() * 12 - 6,
          hueShift: Math.random() * 20 - 10,
          alpha: 0.18 + Math.random() * 0.25,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';
      const p = progress;
      const arcAmt = 1 - p;
      // colour lerp HSL 190 (cyan) -> 40 (amber)
      const hue = 190 + (40 - 190) * p;
      const lineW = 1.2 + 0.4 * p;

      for (let i = 0; i < particles.length; i++) {
        const part = particles[i];
        ctx.strokeStyle = `hsla(${hue + part.hueShift}, 100%, 55%, ${part.alpha})`;
        ctx.lineWidth = lineW;
        // ARCS PATH (cyan voltage zigzag)
        if (arcAmt > 0.01) {
          ctx.beginPath();
          let x = part.startX;
          let y = part.startY;
          // cursor bias when present + arcAmt high
          let biasX = 0, biasY = 0;
          if (hasMouse && hasHover && arcAmt > 0.4) {
            const dx = mouseX - x, dy = mouseY - y;
            const d = Math.hypot(dx, dy);
            if (d < 260) {
              biasX = dx * 0.0015 * (1 - d / 260) * arcAmt;
              biasY = dy * 0.0015 * (1 - d / 260) * arcAmt;
              part.startX += biasX;
              part.startY += biasY;
            }
          }
          ctx.moveTo(x, y);
          const stepLen = part.len / part.segs;
          let zig = part.dir;
          for (let s = 0; s < part.segs; s++) {
            x += zig * (12 + Math.random() * 4) * arcAmt;
            y += stepLen;
            ctx.lineTo(x, y);
            zig = -zig;
          }
          ctx.globalAlpha = arcAmt;
          ctx.stroke();
        }
        // RAYS PATH (amber sunburst)
        if (p > 0.01) {
          ctx.beginPath();
          const rx = part.sunX;
          const ry = part.sunY;
          const ex = rx + Math.cos(part.angle) * part.rayLen;
          const ey = ry + Math.sin(part.angle) * part.rayLen;
          // ease-in for ray opacity so arcs hold first
          ctx.globalAlpha = p * p;
          ctx.moveTo(rx, ry);
          ctx.lineTo(ex, ey);
          ctx.stroke();
        }
      }
      // Sun core at p > 0.3
      if (p > 0.3) {
        const sunX = particles[0]?.sunX || W * 0.72;
        const sunY = particles[0]?.sunY || H * 0.28;
        const grad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 140);
        grad.addColorStop(0, `hsla(40, 100%, 65%, ${0.35 * p})`);
        grad.addColorStop(0.4, `hsla(40, 100%, 50%, ${0.12 * p})`);
        grad.addColorStop(1, 'transparent');
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sunX, sunY, 140, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
    function tick() {
      const hero = canvas.parentElement;
      const r = hero.getBoundingClientRect();
      progress = Math.max(0, Math.min(1, -r.top / (r.height * 0.8)));
      draw();
      raf = requestAnimationFrame(tick);
    }
    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 250); });

    if (hasHover && !reduced) {
      canvas.parentElement.addEventListener('pointermove', (e) => {
        const r = canvas.getBoundingClientRect();
        mouseX = e.clientX - r.left;
        mouseY = e.clientY - r.top;
        hasMouse = true;
      }, { passive: true });
    }

    if (reduced) {
      // Single static composite at p=0.5
      progress = 0.5;
      draw();
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting ? start() : stop());
    }, { threshold: 0 });
    io.observe(canvas.parentElement);
  }

  /* ---------- Suburb-check combobox ---------- */
  function initSuburbCheck(input, listbox, resultEl, key) {
    if (!input) return;
    const SUBURBS = C.suburbs;
    let activeIdx = -1;
    let debounce;
    let lastResults = [];

    function filter(qRaw) {
      const q = qRaw.trim().toLowerCase();
      if (q.length < 2) return [];
      const starts = SUBURBS.filter(s => s.toLowerCase().startsWith(q));
      const contains = SUBURBS.filter(s => !s.toLowerCase().startsWith(q) && s.toLowerCase().includes(q));
      return [...starts, ...contains].slice(0, 8);
    }
    function render(results) {
      if (!listbox) return;
      lastResults = results;
      if (!results.length) { listbox.hidden = true; input.setAttribute('aria-expanded', 'false'); return; }
      listbox.innerHTML = results.map((s, i) => `
        <li role="option" id="sub-opt-${i}" aria-selected="${i === activeIdx}" data-val="${s}">${s}</li>
      `).join('');
      listbox.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      $$('li', listbox).forEach((li, i) => {
        li.addEventListener('mousedown', (e) => { e.preventDefault(); select(results[i]); });
      });
    }
    function select(val) {
      input.value = val;
      if (listbox) { listbox.hidden = true; input.setAttribute('aria-expanded', 'false'); }
      activeIdx = -1;
      submit();
    }
    function submit() {
      const val = input.value.trim();
      if (!val) return;
      const normalised = val.replace(/\b\w/g, m => m.toUpperCase());
      const inList = SUBURBS.some(s => s.toLowerCase() === val.toLowerCase());
      sessionStorage.setItem('ssec_suburb', normalised);
      // Prefill quote form if present
      const quoteSuburb = $('#q-suburb');
      if (quoteSuburb && !quoteSuburb.value) quoteSuburb.value = normalised;
      if (!resultEl) {
        // nav variant — just scroll to quote
        const quote = document.getElementById('quote');
        if (quote) (lenis ? lenis.scrollTo(quote, { offset: -72 }) : quote.scrollIntoView({ behavior: 'smooth' }));
        return;
      }
      if (inList) {
        resultEl.innerHTML = `
          <div class="suburb-result-card success">
            <div class="suburb-result-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
            </div>
            <p class="suburb-result-text">${C.suburb_result.success_template(normalised)}</p>
            <a class="btn btn-primary" href="#quote">${C.suburb_result.success_cta}</a>
          </div>
        `;
      } else {
        resultEl.innerHTML = `
          <div class="suburb-result-card softno">
            <div class="suburb-result-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
            </div>
            <p class="suburb-result-text">${C.suburb_result.softno_template(normalised)}</p>
            <a class="btn btn-secondary" href="tel:0490482632">${C.suburb_result.softno_cta}</a>
          </div>
        `;
      }
      resultEl.classList.add('is-shown');
      // Scroll to quote on success CTA click
      const successCta = $('.suburb-result-card.success a', resultEl);
      if (successCta) successCta.addEventListener('click', (e) => {
        e.preventDefault();
        const quote = document.getElementById('quote');
        if (quote) (lenis ? lenis.scrollTo(quote, { offset: -72 }) : quote.scrollIntoView({ behavior: 'smooth' }));
      });
    }

    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        activeIdx = -1;
        render(filter(input.value));
      }, 150);
    });
    input.addEventListener('keydown', (e) => {
      if (!listbox) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (lastResults.length) {
          activeIdx = (activeIdx + 1) % lastResults.length;
          render(lastResults);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (lastResults.length) {
          activeIdx = (activeIdx - 1 + lastResults.length) % lastResults.length;
          render(lastResults);
        }
      } else if (e.key === 'Enter') {
        if (activeIdx >= 0 && lastResults[activeIdx]) {
          e.preventDefault();
          select(lastResults[activeIdx]);
        }
      } else if (e.key === 'Escape') {
        listbox.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        activeIdx = -1;
      }
    });
    input.addEventListener('blur', () => setTimeout(() => { if (listbox) { listbox.hidden = true; input.setAttribute('aria-expanded', 'false'); } }, 180));

    input.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      submit();
    });
  }

  /* ---------- Trust strip — JS clones already done in populateContent ---------- */
  function initTrustStripMarquee() {
    // Pause animation when offscreen for perf
    const track = byRole('trust-strip-track');
    if (!track) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused');
    });
    io.observe(track);
  }

  /* ---------- Pillars per-card spotlight ---------- */
  function initPillarsSpotlight() {
    if (!hasHover || reduced) return;
    $$('.pillar-card').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--card-mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty('--card-my', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    });
  }

  /* ---------- Savings calculator ---------- */
  function initSavingsCalc() {
    const slider = $('#sys-size');
    const display = byRole('sys-size-display');
    const out1 = byRole('savings-out1');
    const out2 = byRole('savings-out2');
    const out3 = byRole('savings-out3');
    const seg = byRole('battery-seg');
    const disclaimer = byRole('savings-disclaimer');
    if (!slider) return;

    let battery = '0';
    let displayedAnnual = 0, displayedTotal = 0;
    let firstInteraction = true;
    const K = C.savings.constants;

    function calc() {
      const kW = parseFloat(slider.value);
      slider.style.setProperty('--fillPct', `${((kW - 3) / (20 - 3)) * 100}%`);
      const self = K.SELF_CONSUMP[battery];
      const annual = kW * K.PEAK_SUN_HRS * 365 * (self * K.TARIFF_KWH + (1 - self) * K.FEED_IN);
      const total25 = annual * 25 * K.DEGRADATION_25YR;
      const installCost = K.INSTALL_COST_PER_KW * kW + K.BATTERY_COST[battery] - K.STC_PER_KW * kW - K.BATTERY_REBATE[battery];
      const payback = annual > 0 ? installCost / annual : 0;
      display.textContent = `${kW} kW`;
      animateNumber(out1, displayedAnnual, annual, v => auFmt.format(v), () => displayedAnnual = annual);
      animateNumber(out2, displayedTotal, total25, v => auFmt.format(v), () => displayedTotal = total25);
      out3.textContent = `${payback.toFixed(1)} years`;
      if (firstInteraction === false && disclaimer.hidden) disclaimer.hidden = false;
      firstInteraction = false;
    }
    function animateNumber(el, from, to, fmt, done) {
      if (reduced) { el.textContent = fmt(to); done(); return; }
      const start = performance.now();
      const D = 600;
      (function step(now) {
        const t = Math.min(1, (now - start) / D);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = fmt(from + (to - from) * eased);
        if (t < 1) requestAnimationFrame(step);
        else done();
      })(start);
    }
    slider.addEventListener('input', calc);
    if (seg) seg.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-batt]');
      if (!btn) return;
      $$('button', seg).forEach(b => b.setAttribute('aria-checked', 'false'));
      btn.setAttribute('aria-checked', 'true');
      battery = btn.dataset.batt;
      calc();
    });
    calc();
  }

  /* ---------- Recent work — lightbox ---------- */
  function initWorkGrid() {
    const lb = byRole('lightbox');
    const lbImg = byRole('lightbox-img');
    const lbCap = byRole('lightbox-cap');
    if (!lb) return;
    let idx = 0;
    const tiles = C.recent_work.tiles;
    function open(i) {
      idx = i;
      const t = tiles[i];
      lbImg.src = t.photo.replace('.webp', '.jpg'); // full-res JPEG when available
      lbImg.alt = t.alt;
      lbCap.textContent = `${t.title} · ${t.spec}`;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    }
    function close() {
      lb.hidden = true;
      document.body.style.overflow = '';
      if (lenis) lenis.start();
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }
    function nav(d) { open((idx + d + tiles.length) % tiles.length); }
    $$('.work-tile').forEach(t => t.addEventListener('click', () => open(parseInt(t.dataset.idx, 10))));
    byRole('lightbox-close').addEventListener('click', close);
    byRole('lightbox-prev').addEventListener('click', () => nav(-1));
    byRole('lightbox-next').addEventListener('click', () => nav(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') nav(-1);
      else if (e.key === 'ArrowRight') nav(1);
    });
  }

  /* ---------- Count-ups ---------- */
  function initCountUps() {
    const els = $$('.stat-num');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting || e.target.dataset.counted) return;
        e.target.dataset.counted = '1';
        const target = parseFloat(e.target.dataset.target);
        if (reduced) { e.target.textContent = numFmt.format(target); return; }
        const start = performance.now();
        const D = 1800;
        (function step(now) {
          const t = Math.min(1, (now - start) / D);
          const eased = 1 - Math.pow(1 - t, 5);
          e.target.textContent = numFmt.format(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Why parallax (removed — section deleted) ---------- */
  function initWhyParallax() { /* no-op */ }

  /* ---------- Leaflet map ---------- */
  function initLeafletMap() {
    const el = $('#leaflet-map');
    if (!el) return;
    const lazy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        lazy.disconnect();
        mountMap();
      });
    }, { rootMargin: '200px' });
    lazy.observe(el);

    function mountMap() {
      if (!window.L) {
        setTimeout(mountMap, 200);
        return;
      }
      const L = window.L;
      const base = C.brand.base;
      const map = L.map('leaflet-map', {
        center: [base.lat, base.lng],
        zoom: 10,
        scrollWheelZoom: false,
        attributionControl: true,
        zoomControl: true,
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 18,
        subdomains: 'abcd',
      }).addTo(map);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
        maxZoom: 18, subdomains: 'abcd', opacity: 0.65,
      }).addTo(map);

      // Base marker (Boronia Heights)
      L.marker([base.lat, base.lng], {
        icon: L.divIcon({ className: '', html: `<div class="shocked-marker base" aria-hidden="true"></div>`, iconSize: [24, 24], iconAnchor: [12, 12] }),
        alt: 'Shocked Solar base — Boronia Heights',
      }).addTo(map).bindPopup('Shocked Solar HQ · Boronia Heights');

      // Cluster centroids
      const clusters = [
        { name: 'Brisbane south', lat: -27.55, lng: 153.06 },
        { name: 'Logan',          lat: -27.66, lng: 153.10 },
        { name: 'Ipswich east',   lat: -27.65, lng: 152.85 },
        { name: 'Scenic Rim',     lat: -27.85, lng: 152.99 },
      ];
      clusters.forEach(c => {
        L.marker([c.lat, c.lng], {
          icon: L.divIcon({ className: '', html: `<div class="shocked-marker" aria-hidden="true"></div>`, iconSize: [16, 16], iconAnchor: [8, 8] }),
          alt: c.name,
        }).addTo(map).bindPopup(c.name);
      });

      // Service polygon (rough)
      L.polygon([
        [-27.39, 152.78],
        [-27.43, 153.20],
        [-27.85, 153.30],
        [-28.02, 152.92],
        [-27.85, 152.62],
        [-27.55, 152.65],
      ], { color: '#00D9FF', weight: 1.5, fillColor: '#00D9FF', fillOpacity: 0.08 }).addTo(map);

      // Tap to enable zoom on mobile
      const wrap = el.closest('.area-map-wrap');
      let hintTimer;
      if (isMobile && wrap) {
        wrap.classList.add('show-hint');
        hintTimer = setTimeout(() => wrap.classList.remove('show-hint'), 4500);
      }
      map.on('click', () => {
        map.scrollWheelZoom.enable();
        if (wrap) wrap.classList.remove('show-hint');
        clearTimeout(hintTimer);
      });
    }
  }

  /* ---------- Quote form ---------- */
  function initQuoteForm() {
    const form = byRole('quote-form');
    if (!form) return;
    const success = byRole('quote-success');
    const interestsGroup = byRole('q-interests');
    const submit = $('.quote-submit', form);
    const selectedInterests = new Set();

    interestsGroup?.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      const v = btn.dataset.interest;
      const on = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!on));
      if (on) selectedInterests.delete(v); else selectedInterests.add(v);
    });

    function setError(name, msg) {
      const field = form.querySelector(`#q-${name}`)?.closest('.field');
      const errEl = byRole(`q-${name}-error`);
      if (field) field.classList.toggle('has-error', !!msg);
      if (errEl) errEl.textContent = msg || '';
    }
    function validate() {
      let ok = true;
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      if (name.length < 2) { setError('name', 'Your name please'); ok = false; } else setError('name', '');
      if (!/^[\d\s\+\(\)]{8,}$/.test(phone)) { setError('phone', 'Looks short — number please'); ok = false; } else setError('phone', '');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setError('email', 'Real email please'); ok = false; } else setError('email', '');
      return ok;
    }
    ['name', 'phone', 'email'].forEach(n => {
      form[n].addEventListener('blur', validate);
    });

    // Prefill suburb from sessionStorage
    const suburbField = $('#q-suburb');
    if (suburbField && !suburbField.value) {
      const saved = sessionStorage.getItem('ssec_suburb');
      if (saved) suburbField.value = saved;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // Honeypot
      if (form.website.value) return;
      if (!validate()) return;
      submit.classList.add('is-loading');
      submit.disabled = true;

      const data = {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        suburb: form.suburb.value.trim(),
        interests: Array.from(selectedInterests),
        message: form.message.value.trim(),
      };

      try {
        // Placeholder send. Hook up Web3Forms / Formspree by replacing FORM_ENDPOINT.
        // For demo: simulate 700ms then show success.
        await new Promise(r => setTimeout(r, 700));
        // const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
        // if (!res.ok) throw new Error('bad response');
        form.hidden = true;
        success.hidden = false;
        if (window.gsap && !reduced) window.gsap.from(success, { y: 16, opacity: 0, duration: 0.5, ease: 'expo.out' });
      } catch (err) {
        const successText = byRole('quote-success-body');
        if (successText) successText.textContent = C.quote.error_body;
        form.hidden = true;
        success.hidden = false;
      } finally {
        submit.classList.remove('is-loading');
        submit.disabled = false;
      }
    });
  }

  /* ---------- FAQ enhancement (smooth open) ---------- */
  function initFaqEnhance() {
    if (reduced || !window.gsap) return;
    $$('.faq-list details').forEach(d => {
      const summary = d.querySelector('summary');
      const body = d.querySelector('.faq-answer');
      if (!summary || !body) return;
      summary.addEventListener('click', (e) => {
        // Native handles open toggle, we just animate height after toggle
        requestAnimationFrame(() => {
          if (d.open) {
            window.gsap.fromTo(body, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.32, ease: 'power2.out' });
          }
        });
      });
    });
  }

  /* ---------- Divider SVG draw-in ---------- */
  function initDividerDraw() {
    const path = byRole('divider-path');
    if (!path) return;
    if (reduced) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        path.style.transition = 'stroke-dashoffset 1400ms cubic-bezier(0.16, 1, 0.3, 1)';
        path.style.strokeDashoffset = '0';
        io.disconnect();
      });
    }, { threshold: 0.3 });
    io.observe(path);
  }

})();
