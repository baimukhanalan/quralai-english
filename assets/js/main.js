/* =========================================================
   QURALAI — interactions
   ========================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';
  const PHI = (1 + Math.sqrt(5)) / 2;

  /* ---------------- data ---------------- */
  const STORIES = {
    reviews: { title: 'отзывы', items: ['review-1', 'review-2', 'review-3', 'rv-4', 'rv-5', 'rv-6', 'rv-7'] },
    results: { title: 'результаты', items: ['result-1', 'result-2', 'result-3', 'res-jennie', 'res-a2b2', 'res-2levels', 'res-ieltsmock', 'res-vlog'] },
    levels:  { title: '1 ай = 1 деңгей', items: ['res-b1', 'res-3weeks', 'res-levels'] },
    zero:    { title: 'с нуля', items: ['res-zero', 'res-challenge'] },
    ielts:   { title: 'ielts результат', items: ['ielts-1', 'ielts-2', 'ielts-3', 'ielts-4', 'ielts-5'] },
    lessons: { title: 'уроки', items: ['lesson-3', 'lesson-2', 'lesson-1'] },
    consult: { title: 'консультация', items: ['consult-1', 'consult-2', 'consult-3'] },
    path:    { title: 'мой путь', items: ['path-1', 'path-2', 'path-3'] },
    hello:   { title: 'танысу', items: ['hello-1', 'hello-2', 'hello-3'] },
    travel:  { title: 'Vietnam', items: ['vietnam-1', 'vietnam-3'] },
  };
  const REELS = [
    { id: 'DfK4L0IN_va', t: 'British or American?', s: 'акценты', tk: 'British or American?', sk: 'акценттер', likes: '20.7k', hot: true },
    { id: 'DepjRBNNou3', t: 'Говорю с семью акцентами', s: 'акценты', tk: 'Жеті акцентпен сөйлеймін', sk: 'акценттер' },
    { id: 'Der2Y7ZNv8b', t: 'Would have — самая грустная грамматика', s: 'грамматика', tk: 'Would have — ең мұңлы грамматика', sk: 'грамматика', likes: '669' },
    { id: 'DetmhjcN-1S', t: 'Slow English podcast · A2', s: 'listening', tk: 'Slow English podcast · A2', sk: 'listening', likes: '604' },
    { id: 'DepHaT2ND_T', t: 'Топ-3 ютубера, которые довели меня до C1', s: 'ресурсы', tk: 'C1-ге жеткізген топ-3 ютубер', sk: 'ресурстар', likes: '282' },
    { id: 'DeqsfLrNVRi', t: 'Как учиться в Гарварде бесплатно?', s: 'учёба', tk: 'Гарвардта қалай тегін оқимыз?', sk: 'оқу', likes: '219' },
    { id: 'De1zYvwN4IC', t: 'Как развить Speaking?', s: 'speaking', tk: 'Speaking-ті қалай дамытамыз?', sk: 'speaking' },
    { id: 'DeoW4KatvWH', t: 'Как я поставила этот акцент', s: 'произношение', tk: 'Бұл акцентті қалай қойдым', sk: 'айтылым' },
    { id: 'DfCmN25NDzp', t: 'GRWM in English', s: 'vocabulary', tk: 'GRWM in English', sk: 'vocabulary' },
    { id: 'DfKg5-qSAsa', t: 'Could have — грамматика', s: 'грамматика', tk: 'Could have — грамматика', sk: 'грамматика' },
    { id: 'DfHrEL7NwP_', t: 'Slow English podcast · часть 2', s: 'listening', tk: 'Slow English podcast · 2-бөлім', sk: 'listening' },
    { id: 'Deo1p0ctggU', t: 'Английский лёгкий — чё так париться?', s: 'мотивация', tk: 'Ағылшын оңай — неге сонша уайымдау?', sk: 'мотивация' },
  ];

  /* ---------------- text splitting ---------------- */
  function splitWords(el) {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'w';
            const i = document.createElement('span'); i.textContent = part;
            w.appendChild(i); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) {
          // wrap whole inline element (e.g. <em>) word by word inside
          walk(n);
        }
      });
    };
    walk(el);
  }
  function splitChars(el) {
    const txt = el.textContent; el.textContent = '';
    [...txt].forEach((ch) => { const s = document.createElement('span'); s.className = 'c'; s.textContent = ch; el.appendChild(s); });
  }
  $$('.reveal-lines').forEach(splitWords);
  $$('.split-chars').forEach(splitChars);
  window.QR = { resplit: (el) => { if (el.classList.contains('reveal-lines')) splitWords(el); } };
  const L = () => (window.QRi18n ? window.QRi18n.lang : 'en');
  const isKZ = () => L() === 'kz';
  const EN = (window.QRi18n && window.QRi18n.en) || {};
  const enReel = (id) => (EN.reels && EN.reels[id]) || {};

  /* ---------------- reels build ---------------- */
  const track = $('#reelTrack');
  if (track) {
    track.innerHTML = REELS.map((r) => `
      <a class="reel" href="https://www.instagram.com/reel/${r.id}/" data-id="${r.id}" data-title="${r.t}" data-title-kz="${r.tk}" data-title-en="${enReel(r.id).t || r.t}" data-cursor="▶ смотреть" target="_blank" rel="noopener">
        <img src="assets/img/reels/${r.id}.webp" alt="${r.t}" loading="lazy" draggable="false">
        ${r.likes ? `<span class="reel__likes ${r.hot ? 'reel__likes--hot' : ''}">♥ ${r.likes}</span>` : ''}
        <span class="reel__meta"><b data-kz="${r.tk}" data-en="${enReel(r.id).t || r.t}">${r.t}</b><span data-kz="${r.sk}" data-en="${enReel(r.id).s || r.s}">${r.s}</span></span>
      </a>`).join('');
    window.QRi18n && window.QRi18n.applyAttrs(track);
  }

  /* ---------------- no-GSAP fallback ---------------- */
  if (!hasGSAP) {
    document.body.classList.remove('is-loading');
    $('.loader')?.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- smooth scroll ---------------- */
  let lenis = null;
  if (!reduce && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }
  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: -10, duration: 1.4 });
    else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    e.preventDefault(); closeMenu(); scrollTo(id);
  }));

  /* ---------------- loader ---------------- */
  const greetings = ['Сәлем', 'Привет', 'Hello', 'Bonjour', 'Hola', 'Merhaba', 'Hi!'];
  const loader = $('.loader');
  const greetEl = $('[data-greet]');
  const countEl = $('.loader__count');

  const curtain = $('.curtain');
  gsap.set(curtain, { y: 0, yPercent: 0 });
  function intro(withLoader = true) {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove('is-loading');
        lenis?.start();
        ScrollTrigger.refresh();
      },
    });
    if (withLoader) tl.set(curtain, { yPercent: -100 }).to(loader, { yPercent: -100, duration: .7, ease: 'expo.inOut' }).set(loader, { display: 'none' });
    else tl.to(curtain, { yPercent: -100, duration: .7, ease: 'expo.inOut' });
    tl.from('.hero__word .c', { yPercent: 115, rotate: 7, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.04 }, '-=.4')
      .from('.hero__oval', { clipPath: 'inset(100% 0 0 0 round 999px)', duration: 1.3, ease: 'expo.out' }, '<.1')
      .fromTo('.hero__oval img', { scale: 1.5 }, { scale: 1.04, duration: 1.6, ease: 'expo.out' }, '<')
      .from('.hero__ring', { opacity: 0, scale: .7, duration: 1.2, ease: 'expo.out' }, '<.2')
      .from('.hero__tag', { opacity: 0, x: -10, duration: .8 }, '<.5')
      .from('.hero__lead .w > span', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.03 }, '<-.4')
      .from(['.hero__sub', '.hero__ctas', '.hero__stats', '.hero__scroll', '.hero__meta'], { opacity: 0, y: 18, duration: .9, ease: 'power3.out', stagger: .08 }, '<.2')
      .from('.float', { opacity: 0, scale: .6, rotate: '-=14', duration: 1, ease: 'back.out(1.6)', stagger: .1 }, '<.1')
      .add(() => runCounters($('.hero')), '<');
  }

  const isHome = !!$('.hero');
  let seen = false;
  try { seen = sessionStorage.getItem('qr-seen') === '1'; sessionStorage.setItem('qr-seen', '1'); } catch (e) {}
  function pageIn() {
    gsap.to(curtain, {
      yPercent: -100, duration: .7, ease: 'expo.inOut',
      onStart: () => { document.body.classList.remove('is-loading'); },
      onComplete: () => { lenis?.start(); ScrollTrigger.refresh(); },
    });
  }
  if (reduce || !isHome || seen) {
    loader.style.display = 'none';
    if (reduce) { document.body.classList.remove('is-loading'); gsap.set(curtain, { yPercent: -100 }); }
    else if (isHome) intro(false);
    else pageIn();
  } else {
    let gi = 0;
    const cnt = { v: 0 };
    gsap.to(cnt, { v: 100, duration: 1.15, ease: 'power2.inOut', onUpdate: () => { countEl.textContent = String(Math.round(cnt.v)).padStart(2, '0'); } });
    const cycle = () => {
      gi++;
      if (gi >= greetings.length) { intro(); return; }
      gsap.fromTo(greetEl, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .22, ease: 'power3.out', onStart: () => { greetEl.textContent = greetings[gi]; } });
      setTimeout(cycle, gi === greetings.length - 1 ? 220 : 140);
    };
    let started = false;
    const start = () => { if (started) return; started = true; setTimeout(cycle, 100); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
    setTimeout(start, 450);
  }

  /* safety: never leave the curtain/loader up (e.g. page loaded in a background tab) */
  setTimeout(() => {
    if (!document.body.classList.contains('is-loading')) return;
    document.body.classList.remove('is-loading');
    gsap.set(curtain, { y: 0, yPercent: -100 }); if (loader) loader.style.display = 'none';
    lenis?.start(); ScrollTrigger.refresh();
  }, 4500);

  /* ---------------- page transitions ---------------- */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    const href = a.getAttribute('href');
    if (!/^[a-z-]+\.html(#.*)?$/.test(href)) return;
    if (href === location.pathname.split('/').pop() && !href.includes('#')) { e.preventDefault(); scrollTo('#page-top'); return; }
    e.preventDefault();
    closeMenu();
    if (reduce) { location.href = href; return; }
    gsap.fromTo(curtain, { y: 0, yPercent: 100 }, { yPercent: 0, duration: .5, ease: 'expo.in', onComplete: () => { location.href = href; } });
  });
  addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(curtain, { yPercent: -100 }); });

  /* ---------------- cursor ---------------- */
  const cursor = $('.cursor');
  if (fine && !reduce) {
    document.documentElement.classList.add('has-cursor');
    const dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
    const pos = { x: innerWidth / 2, y: innerHeight / 2 }, rp = { ...pos };
    let visible = false;
    addEventListener('mousemove', (e) => {
      pos.x = e.clientX; pos.y = e.clientY;
      if (!visible) { visible = true; cursor.style.opacity = 1; rp.x = pos.x; rp.y = pos.y; }
    }, { passive: true });
    document.addEventListener('mouseleave', () => { visible = false; cursor.style.opacity = 0; });
    addEventListener('mousedown', () => cursor.classList.add('is-down'));
    addEventListener('mouseup', () => cursor.classList.remove('is-down'));
    gsap.ticker.add(() => {
      rp.x += (pos.x - rp.x) * 0.2; rp.y += (pos.y - rp.y) * 0.2;
      dot.style.transform = `translate3d(${pos.x}px,${pos.y}px,0)`;
      ring.style.transform = `translate3d(${rp.x}px,${rp.y}px,0)`;
    });
    document.addEventListener('mouseover', (e) => {
      const t = e.target;
      const lab = t.closest('[data-cursor]');
      const link = t.closest('a, button, summary');
      cursor.classList.remove('is-label', 'is-link', 'is-hello', 'is-red');
      if (lab) {
        label.textContent = lab.dataset.cursor;
        cursor.classList.add('is-label');
        if (lab.matches('.reel, .chip, .lab__phone')) cursor.classList.add('is-red');
      } else if (link) {
        cursor.classList.add('is-link');
      } else if (t.closest('[data-cursor-mode="hello"]')) {
        cursor.classList.add('is-hello');
      }
    });
  }

  /* ---------------- magnetic ---------------- */
  if (fine && !reduce) {
    $$('.magnetic').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: .6, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: .6, ease: 'power3' });
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.28);
        yTo((e.clientY - r.top - r.height / 2) * 0.38);
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, .35)' });
      });
    });
  }

  /* ---------------- hero: mouse parallax + scroll split ---------------- */
  const hero = $('.hero');
  if (!reduce && hero) {
    if (fine) {
      const floats = $$('.float', hero).map((el) => ({
        el, d: parseFloat(el.dataset.depth || 1),
        x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3' }),
      }));
      const portrait = $('.hero__oval');
      const pRx = gsap.quickTo(portrait, 'rotationY', { duration: 1, ease: 'power3' });
      const pRy = gsap.quickTo(portrait, 'rotationX', { duration: 1, ease: 'power3' });
      gsap.set(portrait, { transformPerspective: 900 });
      const pImg = $('img', portrait);
      $('.hero__portrait').addEventListener('mouseenter', () => gsap.to(pImg, { scale: 1.12, duration: 1.2, ease: 'expo.out' }));
      $('.hero__portrait').addEventListener('mouseleave', () => gsap.to(pImg, { scale: 1.04, duration: 1.2, ease: 'expo.out' }));
      hero.addEventListener('mousemove', (e) => {
        const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
        floats.forEach((f) => { f.x(nx * 60 * f.d); f.y(ny * 40 * f.d); });
        pRx(nx * 14); pRy(-ny * 10);
      });
    }
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } })
        .to('.hero__word--l', { xPercent: -22, ease: 'none' }, 0)
        .to('.hero__word--r', { xPercent: 26, ease: 'none' }, 0)
        .to('.hero__portrait', { scale: 1.28, yPercent: 10, ease: 'none' }, 0)
        .to('.hero__bottom', { yPercent: 40, opacity: 0, ease: 'none' }, 0)
        .to('.float--stamp', { yPercent: -140, ease: 'none' }, 0)
        .to('.float--note', { yPercent: -90, ease: 'none' }, 0)
        .to('.float--seal', { yPercent: -220, ease: 'none' }, 0);
    });
  }

  /* ---------------- counters ---------------- */
  function runCounters(scope) {
    $$('[data-count]', scope || document).forEach((el) => {
      if (el.dataset.done) return; el.dataset.done = 1;
      const end = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimals || 0, 10), suf = el.dataset.suffix || '';
      const o = { v: 0 };
      gsap.to(o, { v: end, duration: 2.2, ease: 'expo.out', onUpdate: () => { el.textContent = o.v.toFixed(dec).replace('.', ',') + suf; } });
    });
  }
  if (reduce) $$('[data-count]').forEach((el) => { el.textContent = String(el.dataset.count).replace('.', ',') + (el.dataset.suffix || ''); });

  /* ---------------- marquee (velocity reactive) ---------------- */
  const mq = $('.marquee__track');
  if (mq && !reduce) {
    let x = 0, dir = -1, speed = 0.6;
    gsap.ticker.add(() => {
      const v = lenis ? lenis.velocity : 0;
      if (Math.abs(v) > 0.5) dir = v > 0 ? -1 : 1;
      const boost = Math.min(Math.abs(v) * 0.35, 9);
      x += dir * (speed + boost);
      const half = mq.scrollWidth / 2;
      if (x <= -half) x += half; if (x > 0) x -= half;
      mq.style.transform = `translate3d(${x}px,0,0) skewX(${gsap.utils.clamp(-8, 8, -v * 0.35)}deg)`;
    });
  }

  /* ---------------- nav: scrolled / hide / flight / active ---------------- */
  const nav = $('.nav');
  const fill = $('.flight__fill'), plane = $('.flight__plane'), flight = $('.flight');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? y / max : 0;
    nav.classList.toggle('is-scrolled', y > 40);
    if (!document.body.classList.contains('menu-open')) nav.classList.toggle('is-hidden', y > lastY && y > 500);
    lastY = y;
    fill.style.transform = `scaleX(${p})`;
    plane.style.left = `${p * (flight.clientWidth - 14)}px`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();


  /* mobile menu */
  const burger = $('.nav__burger'), menu = $('.menu');
  function closeMenu() {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open'); lenis?.start();
  }
  burger.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (open) { lenis?.stop(); nav.classList.remove('is-hidden'); gsap.from($$('.menu a'), { yPercent: 60, opacity: 0, stagger: .05, duration: .8, ease: 'expo.out', delay: .15 }); }
    else lenis?.start();
  });

  /* ---------------- reveals ---------------- */
  if (!reduce) {
    $$('.reveal-lines').forEach((el) => {
      if (el.closest('.hero')) return;
      gsap.from($$('.w > span', el), {
        yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.04,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });
    $$('.stop').forEach((el) => gsap.from(el, { opacity: 0, x: -20, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
    const batchUp = (sel, opts = {}) => ScrollTrigger.batch(sel, {
      start: 'top 90%', once: true,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 50, rotate: opts.rot || 0 }, { opacity: 1, y: 0, rotate: 0, duration: 1.1, ease: 'expo.out', stagger: .09, clearProps: 'transform,opacity' }),
    });
    gsap.set('.principle, .case, .bubble, .pass, .acc__item, .hl__item, .lab', { opacity: 0 });
    batchUp('.principle'); batchUp('.case'); batchUp('.bubble', { rot: 2 }); batchUp('.pass', { rot: -1.5 });
    batchUp('.acc__item'); batchUp('.hl__item'); batchUp('.lab');
    if ($('.method__photo')) gsap.from('.method__photo img', { clipPath: 'inset(100% 0 0 0 round 999px 999px 18px 18px)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.method__photo', start: 'top 80%' } });
    if ($('.reel-rail')) gsap.from('.reel', { opacity: 0, x: 120, duration: 1.2, ease: 'expo.out', stagger: .06, clearProps: 'transform,opacity', scrollTrigger: { trigger: '.reel-rail', start: 'top 85%' } });
    gsap.from('.contact__title .c', { yPercent: 100, opacity: 0, rotate: 6, duration: 1.2, ease: 'expo.out', stagger: .04, scrollTrigger: { trigger: '.contact__title', start: 'top 85%' } });
    gsap.from('.contact__orb', { scale: 0, rotate: -90, duration: 1.4, ease: 'elastic.out(1,.5)', scrollTrigger: { trigger: '.contact__orb', start: 'top 92%' } });
  }

  /* ---------------- 01 PATH horizontal ---------------- */
  if (!reduce) {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      if (!$('.path__pin')) return;
      const pin = $('.path__pin');
      const section = $('.path');
      section.style.padding = '0';
      pin.style.width = 'max-content';
      const dist = () => pin.scrollWidth - innerWidth;
      const tween = gsap.to(pin, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 },
      });
      $$('.tcard', pin).forEach((card, i) => {
        gsap.fromTo(card, { rotate: i % 2 ? 4 : -4, y: i % 2 ? 60 : -30 }, {
          rotate: 0, y: 0, ease: 'none',
          scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 100%', end: 'left 45%', scrub: true },
        });
        const img = $('img', card);
        if (img) gsap.fromTo(img, { xPercent: -8 }, { xPercent: 8, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
      });
      return () => { section.style.padding = ''; pin.style.width = ''; };
    });
  }

  /* ---------------- 02 ACCENT LAB ---------------- */
  const lab = $('.lab'), labVideo = $('#labVideo'), chips = $$('.chip'), labNow = $('.lab__now span'), labBar = $('.phone__bar i');
  if (lab && labVideo) {
    let seg = null;
    const names = { 3: 'Американский', 7: 'Британский', 12: 'Русский', 17: 'Французский', 21: 'Valley girl', 30: 'Арабский', 35: 'Индийский' };
    const namesKZ = { 3: 'Американдық', 7: 'Британдық', 12: 'Орыс', 17: 'Француз', 21: 'Valley girl', 30: 'Араб', 35: 'Үнді' };
    ScrollTrigger.create({
      trigger: lab, start: 'top 85%', end: 'bottom 10%',
      onToggle: (st) => { if (st.isActive) { if (!seg) labVideo.play().catch(() => {}); } else { labVideo.pause(); } },
    });
    chips.forEach((c) => c.addEventListener('click', () => {
      const t = parseFloat(c.dataset.t), e = parseFloat(c.dataset.e);
      seg = { t, e };
      chips.forEach((x) => x.classList.toggle('is-on', x === c));
      labVideo.muted = false; labVideo.loop = false;
      labVideo.currentTime = t;
      labVideo.play().catch(() => {});
      lab.classList.add('is-playing');
      const lab = EN.lab || {};
      labNow.textContent = L() === 'en' ? (lab.now || 'Now playing: ') + ((lab.names || {})[t] || names[t]) + (lab.suffix || ' accent') : (isKZ() ? 'Қазір: ' + namesKZ[t] : 'Сейчас: ' + names[t]) + ' акцент';
    }));
    labVideo.addEventListener('timeupdate', () => {
      if (!seg) { labBar.style.transform = `scaleX(${labVideo.currentTime / (labVideo.duration || 1)})`; return; }
      const p = (labVideo.currentTime - seg.t) / (seg.e - seg.t);
      labBar.style.transform = `scaleX(${gsap.utils.clamp(0, 1, p)})`;
      if (labVideo.currentTime >= seg.e) {
        seg = null; labVideo.muted = true; labVideo.loop = true;
        lab.classList.remove('is-playing'); chips.forEach((x) => x.classList.remove('is-on'));
        labNow.textContent = L() === 'en' ? ((EN.lab || {}).again || 'Pick another accent') : isKZ() ? 'Тағы бір акцентті таңдаңыз' : 'Выберите ещё один акцент';
      }
    });
    $('.lab__phone').addEventListener('click', () => {
      if (labVideo.paused) labVideo.play(); else labVideo.muted = !labVideo.muted;
    });
  }

  /* ---------------- 03 CASES tilt ---------------- */
  if (fine && !reduce) {
    $$('.case').forEach((card) => {
      gsap.set(card, { transformPerspective: 1400 });
      const rx = gsap.quickTo(card, 'rotationX', { duration: .8, ease: 'power3' });
      const ry = gsap.quickTo(card, 'rotationY', { duration: .8, ease: 'power3' });
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 5);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 5);
      });
      card.addEventListener('mouseleave', () => { rx(0); ry(0); });
    });
  }

  /* ---------------- STORY VIEWER ---------------- */
  const viewer = $('#viewer'), vImg = $('.viewer__img'), vBars = $('.viewer__bars'), vTitle = $('.viewer__title');
  let vs = { key: null, i: 0, tween: null };
  function storyShow(i) {
    const g = STORIES[vs.key]; if (!g) return;
    if (i < 0) i = 0;
    if (i >= g.items.length) { storyClose(); return; }
    vs.i = i;
    vImg.src = `assets/img/stories/${g.items[i]}.webp`;
    gsap.fromTo(vImg, { opacity: .2, scale: 1.04 }, { opacity: 1, scale: 1, duration: .5, ease: 'power2.out' });
    $$('i', vBars).forEach((b, k) => gsap.set(b, { scaleX: k < i ? 1 : 0 }));
    vs.tween?.kill();
    vs.tween = gsap.to($$('i', vBars)[i], { scaleX: 1, duration: 5.5, ease: 'none', onComplete: () => storyShow(vs.i + 1) });
  }
  function storyOpen(key, i = 0) {
    const g = STORIES[key]; if (!g) return;
    vs.key = key;
    vBars.innerHTML = g.items.map(() => '<span><i></i></span>').join('');
    vTitle.textContent = g.title;
    viewer.classList.add('is-open'); viewer.setAttribute('aria-hidden', 'false');
    lenis?.stop();
    storyShow(i);
  }
  function storyClose() {
    vs.tween?.kill();
    viewer.classList.remove('is-open'); viewer.setAttribute('aria-hidden', 'true');
    lenis?.start();
  }
  $$('[data-story]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); storyOpen(el.dataset.story); }));
  $('.viewer__next').addEventListener('click', () => storyShow(vs.i + 1));
  $('.viewer__prev').addEventListener('click', () => storyShow(vs.i - 1));
  $$('[data-close]', viewer).forEach((b) => b.addEventListener('click', storyClose));

  /* ---------------- 05 REELS: drag rail + hover play + modal ---------------- */
  const rail = $('.reel-rail');
  const vmodal = $('#vmodal'), vVideo = $('video', vmodal), vTitle2 = $('.vmodal__title'), vIg = $('.vmodal__ig');
  function videoOpen(id, title) {
    vVideo.src = `assets/video/${id}.mp4`;
    vVideo.poster = `assets/img/reels/${id}.webp`;
    vTitle2.textContent = title; vIg.href = `https://www.instagram.com/reel/${id}/`;
    vmodal.classList.add('is-open'); vmodal.setAttribute('aria-hidden', 'false');
    lenis?.stop();
    vVideo.play().catch(() => {});
  }
  function videoClose() {
    vVideo.pause(); vVideo.removeAttribute('src'); vVideo.load();
    vmodal.classList.remove('is-open'); vmodal.setAttribute('aria-hidden', 'true');
    lenis?.start();
  }
  $$('[data-close]', vmodal).forEach((b) => b.addEventListener('click', videoClose));

  if (rail && track) {
    let x = 0, target = 0, down = false, sx = 0, sTarget = 0, moved = 0, lastX = 0, vel = 0;
    const bounds = () => Math.min(0, rail.clientWidth - track.scrollWidth);
    rail.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      down = true; moved = 0; sx = lastX = e.clientX; sTarget = target; vel = 0;
    });
    addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx));
      vel = e.clientX - lastX; lastX = e.clientX;
      target = gsap.utils.clamp(bounds() - 80, 80, sTarget + dx * 1.15);
      if (moved > 6) rail.classList.add('is-drag');
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      target = gsap.utils.clamp(bounds(), 0, target + vel * 14);
      setTimeout(() => rail.classList.remove('is-drag'), 0);
    });
    // horizontal trackpad scroll
    rail.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { e.preventDefault(); target = gsap.utils.clamp(bounds(), 0, target - e.deltaX); }
    }, { passive: false });
    gsap.ticker.add(() => {
      if (!down) target = gsap.utils.clamp(bounds(), 0, target);
      x += (target - x) * 0.1;
      track.style.transform = `translate3d(${x}px,0,0)`;
    });

    $$('.reel', track).forEach((card) => {
      const { id } = card.dataset;
      card.addEventListener('click', (e) => {
        e.preventDefault();
        if (moved > 6) return;
        videoOpen(id, L() === 'en' ? card.dataset.titleEn : isKZ() ? card.dataset.titleKz : card.dataset.title);
      });
      if (fine) {
        let v = null;
        card.addEventListener('mouseenter', () => {
          if (!v) {
            v = document.createElement('video');
            v.src = `assets/video/${id}.mp4`; v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
            card.insertBefore(v, card.querySelector('.reel__meta'));
          }
          v.currentTime = 0;
          v.play().then(() => card.classList.add('is-playing')).catch(() => {});
        });
        card.addEventListener('mouseleave', () => { card.classList.remove('is-playing'); v?.pause(); });
      }
    });
  }

  addEventListener('keydown', (e) => {
    if (viewer.classList.contains('is-open')) {
      if (e.key === 'Escape') storyClose();
      if (e.key === 'ArrowRight') storyShow(vs.i + 1);
      if (e.key === 'ArrowLeft') storyShow(vs.i - 1);
    }
    if (vmodal.classList.contains('is-open') && e.key === 'Escape') videoClose();
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------------- FAQ smooth accordion ---------------- */
  $$('.acc__item').forEach((d) => {
    const sum = $('summary', d), body = $('.acc__body', d);
    sum.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.open) {
        gsap.to(body, { height: 0, duration: .5, ease: 'power3.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'height' }); ScrollTrigger.refresh(); } });
      } else {
        // close others
        $$('.acc__item[open]').forEach((o) => { if (o !== d) { const b = $('.acc__body', o); gsap.to(b, { height: 0, duration: .45, ease: 'power3.inOut', onComplete: () => { o.open = false; gsap.set(b, { clearProps: 'height' }); } }); } });
        d.open = true;
        gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: .6, ease: 'power3.out', onComplete: () => ScrollTrigger.refresh() });
      }
    });
  });

  /* =========================================================
     GLOBE — fibonacci sphere (golden angle), travels between sections
     ========================================================= */
  const canvas = $('#globe');
  const globeEl = $('.globe');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const N = innerWidth < 700 ? 650 : 1100;
    const pts = [];
    const ga = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    const ll = (lat, lon) => { const a = lat * Math.PI / 180, b = lon * Math.PI / 180; return [Math.cos(a) * Math.sin(b), Math.sin(a), Math.cos(a) * Math.cos(b)]; };
    const home = ll(43.24, 76.9);
    const dests = [[40.7, -74], [51.5, -0.1], [41, 29], [37.5, 127], [25.2, 55.3], [16, 108.2], [52.5, 13.4], [43.65, -79.4], [55.75, 37.6], [-33.9, 151.2]].map(([a, b]) => ll(a, b));
    const slerp = (p, q, t) => {
      const d = Math.acos(gsap.utils.clamp(-1, 1, p[0] * q[0] + p[1] * q[1] + p[2] * q[2]));
      const s = Math.sin(d) || 1;
      const a = Math.sin((1 - t) * d) / s, b = Math.sin(t * d) / s;
      const lift = 1 + Math.sin(Math.PI * t) * 0.22;
      return [(p[0] * a + q[0] * b) * lift, (p[1] * a + q[1] * b) * lift, (p[2] * a + q[2] * b) * lift];
    };
    let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => { const r = globeEl.getBoundingClientRect(); W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr; };
    resize(); addEventListener('resize', resize);

    let rot = -1.2, tilt = 0.38, mx = 0, my = 0, t0 = 0;
    addEventListener('mousemove', (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });

    const proj = (p, ca, sa, ct, st) => {
      const x = p[0] * ca + p[2] * sa;
      const z = -p[0] * sa + p[2] * ca;
      const y = p[1] * ct - z * st;
      const z2 = p[1] * st + z * ct;
      return [x, y, z2];
    };
    let running = true;
    document.addEventListener('visibilitychange', () => { running = !document.hidden; });

    gsap.ticker.add((time) => {
      if (!running || !W) return;
      const v = lenis ? lenis.velocity : 0;
      rot += 0.0016 + Math.abs(v) * 0.0009 + (reduce ? -0.0016 : 0);
      const tl = tilt + my * 0.25, rr = rot + mx * 0.4;
      const ca = Math.cos(rr), sa = Math.sin(rr), ct = Math.cos(tl), st = Math.sin(tl);
      const R = Math.min(W, H) * 0.44, cx = W / 2, cy = H / 2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // outline
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(22,22,26,.14)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx, cy, R, R * Math.abs(Math.sin(tl)) , 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(22,22,26,.06)'; ctx.stroke();

      // dots
      for (let i = 0; i < N; i++) {
        const [x, y, z] = proj(pts[i], ca, sa, ct, st);
        const a = z > 0 ? 0.18 + z * 0.5 : 0.05 + (1 + z) * 0.05;
        const s = z > 0 ? 1.1 + z * 0.9 : 0.8;
        ctx.fillStyle = `rgba(22,22,26,${a.toFixed(3)})`;
        ctx.fillRect(cx + x * R - s / 2, cy - y * R - s / 2, s, s);
      }

      // arcs from home
      t0 += 0.004;
      dests.forEach((d, k) => {
        const phase = (t0 + k * 0.137) % 1;
        ctx.beginPath();
        let started = false, vis = 0;
        for (let j = 0; j <= 40; j++) {
          const t = j / 40;
          const [x, y, z] = proj(slerp(home, d, t), ca, sa, ct, st);
          if (z < -0.05) { started = false; continue; }
          vis++;
          const X = cx + x * R, Y = cy - y * R;
          if (!started) { ctx.moveTo(X, Y); started = true; } else ctx.lineTo(X, Y);
        }
        if (vis) { ctx.strokeStyle = k % 2 ? 'rgba(36,66,214,.35)' : 'rgba(226,67,44,.35)'; ctx.lineWidth = 1; ctx.stroke(); }
        // travelling dot
        const [px, py, pz] = proj(slerp(home, d, phase), ca, sa, ct, st);
        if (pz > 0) { ctx.beginPath(); ctx.arc(cx + px * R, cy - py * R, 2.4, 0, Math.PI * 2); ctx.fillStyle = k % 2 ? '#2442D6' : '#E2432C'; ctx.fill(); }
      });

      // home marker
      const [hx, hy, hz] = proj(home, ca, sa, ct, st);
      if (hz > 0) {
        const X = cx + hx * R, Y = cy - hy * R, pulse = (time * 0.8) % 1;
        ctx.beginPath(); ctx.arc(X, Y, 4 + pulse * 16, 0, Math.PI * 2); ctx.strokeStyle = `rgba(226,67,44,${(1 - pulse) * 0.6})`; ctx.stroke();
        ctx.beginPath(); ctx.arc(X, Y, 4, 0, Math.PI * 2); ctx.fillStyle = '#E2432C'; ctx.fill();
        ctx.font = '500 10px "JetBrains Mono", monospace'; ctx.fillStyle = 'rgba(22,22,26,.8)'; ctx.fillText('KZ · QURALAI', X + 10, Y + 4);
      }
    });

    // travel between sections
    const small = innerWidth < 900;
    const spots = {
      hero:    { x: '0vw', y: '2vh', s: 1.08, o: .55 },
      path:    { x: small ? '30vw' : '32vw', y: '18vh', s: .62, o: .4 },
      method:  { x: small ? '-30vw' : '-36vw', y: '-6vh', s: .7, o: .3 },
      cases:   { x: small ? '34vw' : '38vw', y: '-12vh', s: .8, o: .32 },
      reviews: { x: small ? '-34vw' : '-34vw', y: '22vh', s: .66, o: .32 },
      reels:   { x: '0vw', y: '34vh', s: 1.25, o: .22 },
      formats: { x: small ? '30vw' : '36vw', y: '4vh', s: .74, o: .3 },
      faq:     { x: small ? '-30vw' : '-38vw', y: '14vh', s: .62, o: .32 },
      contact: { x: small ? '10vw' : '20vw', y: '10vh', s: 1.15, o: .6 },
    };
    gsap.set(globeEl, { xPercent: -50, yPercent: -50 });
    $$('[data-globe]').forEach((sec) => {
      const sp = spots[sec.dataset.globe]; if (!sp) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 55%', end: 'bottom 55%',
        onToggle: (st) => { if (st.isActive) gsap.to(globeEl, { x: sp.x, y: sp.y, scale: sp.s, opacity: sp.o, duration: reduce ? 0 : 1.8, ease: 'expo.inOut', overwrite: 'auto' }); },
      });
    });
  }

  document.addEventListener('qr:lang', () => { ScrollTrigger.refresh(); });

  /* refresh after media loads */
  addEventListener('load', () => ScrollTrigger.refresh());
})();
