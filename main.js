const PAGES = [
  {
    photo: "images/NewYearWebsite.png",
    siteTitle: "New Year 2025",
    description: "A album like diary with your photo and a note on each page on the occasion of new year.",
    link: "https://royalgeek775.github.io/ToMyMoti/",
    linkLabel: "Step inside",
    accent: "#e8a0b8",
    pageBg: "#fef5f8",
    bandColor: "linear-gradient(90deg,#f2b8c6,#e8a0b8,#d890b0)"
  },
  {
    photo: "images/LoveLetter15Dec.png",
    siteTitle: "A Love Letter",
    description: "Devoted to my moti, written on 15 December 2025",
    link: "https://royalgeek775.github.io/MaMoti/",
    linkLabel: "Read on",
    accent: "#c8a0e0",
    pageBg: "#f8f4ff",
    bandColor: "linear-gradient(90deg,#d8c0f0,#c8a8e8,#b890d8)"
  },
  {
    photo: "iamges/Valentine.png",
    siteTitle: "Valentine's Day",
    description: "A valentine website for my goluu moluu.",
    link: "https://royalgeek775.github.io/Valentine/",
    linkLabel: "Discover",
    accent: "#a8c8e8",
    pageBg: "#f4f8ff",
    bandColor: "linear-gradient(90deg,#c0d8f8,#a8c0f0,#90a8e8)"
  },
  {
    photo: "images/LoveCard.png",
    siteTitle: "Love Card",
    description: "A card for my motii jii",
    link: "https://royalgeek775.github.io/MotiJi/",
    linkLabel: "Explore",
    accent: "#a8d8c0",
    pageBg: "#f4fdf8",
    bandColor: "linear-gradient(90deg,#b8e8d0,#a0d8b8,#88c8a0)"
  },
  {
    photo: "images/LoveJournal.png",
    siteTitle: "Love Journal",
    description: "A journal about myy motii and me.",
    link: "https://royalgeek775.github.io/MyJigglypuff/",
    linkLabel: "Linger here",
    accent: "#e8c8a0",
    pageBg: "#fffaf2",
    bandColor: "linear-gradient(90deg,#f0d8b0,#e8c898,#d8b880)"
  },
  {
    photo: "images/LoveLetter1.png",
    siteTitle: "A Love letter",
    description: "A love letter for myy jigglypufff",
    link: "https://royalgeek775.github.io/LoveLetter/",
    linkLabel: "Open an envelope",
    accent: "#e8b0c8",
    pageBg: "#fff5fa",
    bandColor: "linear-gradient(90deg,#f8c8dc,#e8b0c8,#d898b8)"
  },
  {
    photo: "images/ValentineWebsite.png",
    siteTitle: "Valentines Day",
    description: "A Valentines Day Websitee",
    link: "https://royalgeek775.github.io/ForMyValentine/",
    linkLabel: "Wander in",
    accent: "#c0a8e0",
    pageBg: "#f8f4ff",
    bandColor: "linear-gradient(90deg,#d8c0f8,#c0a8e8,#a890d8)"
  },
  {
    photo: "images/Sorry1.png",
    siteTitle: "Sorry Website",
    description: "A Sorry Website cuz i make so many mistakess.",
    link: "https://royalgeek775.github.io/I-mSorry/",
    linkLabel: "Uncover",
    accent: "#d8b890",
    pageBg: "#fffaf4",
    bandColor: "linear-gradient(90deg,#e8d0a8,#d8b888,#c8a070)"
  },
  {
    photo: "images/Sorry2.png",
    siteTitle: "Sorry Website",
    description: "Another sorry website cuz my motii is alwayss rightt",
    link: "https://royalgeek775.github.io/Sorry/",
    linkLabel: "Enter the garden",
    accent: "#a8c0e8",
    pageBg: "#f4f8ff",
    bandColor: "linear-gradient(90deg,#b8d0f8,#a0b8f0,#88a0e0)"
  },
 
];

let current   = -1;
let animating = false;
const total   = PAGES.length;

const cover    = document.getElementById('cover');
const pageCard = document.getElementById('page-card');
const btnPrev  = document.getElementById('btn-prev');
const btnNext  = document.getElementById('btn-next');
const dotsEl   = document.getElementById('dots');
const openBtn  = document.getElementById('open-btn');
const btnClose = document.getElementById('btn-close');

PAGES.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot';
  d.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(d);
});

function updateDots() {
  [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === current));
}

function updateNav() {
  const open = current >= 0;
  btnPrev.classList.toggle('hidden', current <= 0);
  btnNext.classList.toggle('hidden', current < 0 || current >= total - 1);
  btnClose.classList.toggle('hidden', !open);
  dotsEl.style.opacity = open ? '1' : '0';
  updateDots();
}

function buildPageHTML(p, idx) {
  const titleColor = p.accent.replace(/e8/g,'a8').replace(/d8/g,'88') + 'cc';
  const linkColor  = p.accent.replace(/e8/g,'98').replace(/d8/g,'78');
  return `<div class="page-inner" style="background:${p.pageBg};">
    <div class="page-header-band" style="background:${p.bandColor};"></div>
    <div class="page-border" style="border-color:${p.accent}22;"></div>
    <div class="page-border-inner" style="border-color:${p.accent}14;"></div>
    <div class="page-corner tl" style="color:${p.accent};">&#10022;</div>
    <div class="page-corner tr" style="color:${p.accent};">&#10022;</div>
    <div class="page-corner bl" style="color:${p.accent};">&#10022;</div>
    <div class="page-corner br" style="color:${p.accent};">&#10022;</div>
    <div class="page-scroll">
      <div class="pg-num">Page ${idx + 1} &nbsp;of&nbsp; ${total}</div>
      <div class="pg-num-rule">
        <span style="background:${p.accent};"></span>
        <i style="color:${p.accent};">&#10022;</i>
        <span style="background:${p.accent};"></span>
      </div>
      <div class="pg-img-wrap">
        <img src="${p.photo}" alt="${p.siteTitle}" loading="lazy">
        <div class="pg-caption-strip" style="background:${p.bandColor};"></div>
      </div>
      <div class="pg-title" style="color:${titleColor};">${p.siteTitle}</div>
      <div class="pg-ornament-row" style="color:${p.accent};">
        <span class="or"></span><span class="od">&#10038;</span><span class="or"></span>
      </div>
      <div class="pg-desc">${p.description}</div>
      <div class="pg-footer">
        <div class="pg-footer-rule" style="background:${p.accent};"></div>
        <a class="pg-link" href="${p.link}" target="_blank" rel="noopener"
           style="color:${linkColor};border-color:${p.accent}80;">${p.linkLabel || 'Visit'}</a>
        <div class="pg-footer-rule" style="background:${p.accent};"></div>
      </div>
    </div>
  </div>`;
}

function showPage(idx) {
  if (animating) return;
  animating = true;
  const p = PAGES[idx];
  if (pageCard.classList.contains('visible')) {
    pageCard.classList.add('flip-out');
    setTimeout(() => {
      pageCard.classList.remove('flip-out');
      pageCard.innerHTML = buildPageHTML(p, idx);
      pageCard.classList.add('flip-in');
      setTimeout(() => { pageCard.classList.remove('flip-in'); animating = false; }, 380);
    }, 340);
  } else {
    pageCard.innerHTML = buildPageHTML(p, idx);
    pageCard.classList.add('visible', 'flip-in');
    setTimeout(() => { pageCard.classList.remove('flip-in'); animating = false; }, 380);
  }
}

function openBook(e) {
  if (e) spawnDust(e.clientX, e.clientY);
  cover.classList.add('open');
  current = 0;
  setTimeout(() => showPage(0), 500);
  updateNav();
}

function closeBook(e) {
  if (animating) return;
  if (e) spawnDust(e.clientX, e.clientY);
  animating = true;
  pageCard.classList.add('flip-out');
  setTimeout(() => {
    pageCard.classList.remove('flip-out', 'visible');
    pageCard.innerHTML = '';
    cover.classList.remove('open');
    current = -1;
    animating = false;
    updateNav();
  }, 380);
}

function goTo(idx) {
  if (idx < 0 || idx >= total || idx === current || animating) return;
  spawnDust(window.innerWidth / 2, window.innerHeight / 2);
  current = idx;
  showPage(idx);
  updateNav();
}

function nextPage(e) {
  if (e) spawnDust(e.clientX, e.clientY);
  goTo(current + 1);
}

function prevPage(e) {
  if (current === 0) { closeBook(e); return; }
  if (e) spawnDust(e.clientX, e.clientY);
  goTo(current - 1);
}

openBtn.addEventListener('click', openBook);
btnNext.addEventListener('click', nextPage);
btnPrev.addEventListener('click', prevPage);
btnClose.addEventListener('click', closeBook);

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextPage(null);
  if (e.key === 'ArrowLeft')  prevPage(null);
  if (e.key === 'Enter' && current < 0) openBook(null);
  if (e.key === 'Escape' && current >= 0) closeBook(null);
});

let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx < 0 && current >= 0) nextPage(null);
    if (dx > 0 && current >= 0) prevPage(null);
  }
}, { passive: true });

updateNav();

function spawnDust(x, y) {
  const colors = ['#f2b8c6','#d8c0f0','#b8d8f8','#c3eadc','#f8d8a0','#e8c0e8'];
  for (let i = 0; i < 16; i++) {
    const d = document.createElement('div');
    d.className = 'dust';
    d.style.left = x + 'px'; d.style.top = y + 'px';
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    const ang = Math.random() * Math.PI * 2;
    const dist = 30 + Math.random() * 80;
    d.style.setProperty('--dx', Math.cos(ang) * dist + 'px');
    d.style.setProperty('--dy', Math.sin(ang) * dist + 'px');
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 1500);
  }
}

(function() {
  const c   = document.getElementById('aurora-bg');
  const ctx = c.getContext('2d');
  let W, H, t = 0;

  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);

  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.2 + 0.2,
    a: Math.random() * 0.7 + 0.1,
    pa: Math.random() * Math.PI * 2,
    ps: Math.random() * 0.008 + 0.002
  }));

  const auroraColors = [
    ['#c080e000','#c080e030','#8040c040','#6020a020','#c080e000'],
    ['#8060c000','#a080e028','#c0a0f838','#a080e028','#8060c000'],
    ['#60a0d000','#80c0f028','#a0e0ff38','#80c0f028','#60a0d000'],
    ['#a060d000','#c080e830','#e0a0ff40','#c080e830','#a060d000'],
    ['#60c0a000','#80e0c028','#a0ffd838','#80e0c028','#60c0a000'],
  ];

  const nebulae = [
    { x: 0.2,  y: 0.3,  r: 0.35, c: '#c080e815' },
    { x: 0.75, y: 0.6,  r: 0.3,  c: '#80c0f812' },
    { x: 0.5,  y: 0.15, r: 0.28, c: '#e090c010' },
    { x: 0.85, y: 0.25, r: 0.25, c: '#a0e0d810' },
  ];

  function draw() {
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   '#08041a');
    bg.addColorStop(0.4, '#0d0818');
    bg.addColorStop(0.7, '#120a10');
    bg.addColorStop(1,   '#0a0610');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    for (const s of stars) {
      s.pa += s.ps;
      const a = s.a * (0.5 + 0.5 * Math.sin(s.pa));
      ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,255,${a})`; ctx.fill();
    }

    for (let bi = 0; bi < 5; bi++) {
      const yBase = H * (0.3 + bi * 0.1 + 0.04 * Math.sin(t * 0.0003 + bi));
      const waveH = H * (0.12 + 0.06 * Math.sin(t * 0.0004 + bi * 1.3));
      const cols  = auroraColors[bi];
      const nPts  = 7;
      ctx.save();
      ctx.globalAlpha = 0.6 + 0.2 * Math.sin(t * 0.0005 + bi);
      ctx.beginPath();
      for (let xi = 0; xi <= nPts; xi++) {
        const x = (xi / nPts) * W;
        const y = yBase + Math.sin(t * 0.0006 + xi * 0.9 + bi * 1.7) * waveH * 0.5;
        xi === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      for (let xi = nPts; xi >= 0; xi--) {
        const x = (xi / nPts) * W;
        const y = yBase + Math.sin(t * 0.0006 + xi * 0.9 + bi * 1.7) * waveH * 0.5 + waveH;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, yBase - waveH * 0.2, 0, yBase + waveH * 1.2);
      cols.forEach((col, ci) => grad.addColorStop(ci / (cols.length - 1), col));
      ctx.fillStyle = grad; ctx.fill(); ctx.restore();
    }

    for (const n of nebulae) {
      const gx = n.x * W + Math.sin(t * 0.0002) * W * 0.03;
      const gy = n.y * H + Math.cos(t * 0.00025) * H * 0.03;
      const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, n.r * Math.min(W, H));
      gr.addColorStop(0, n.c); gr.addColorStop(1, 'transparent');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    }

    t++; requestAnimationFrame(draw);
  }
  draw();
})();

(function() {
  const c   = document.getElementById('particles');
  const ctx = c.getContext('2d');
  let W, H;
  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);

  const COLS = [
    '#f2b8c6','#e8c8f0','#b8d8f8','#c8f0e0',
    '#f8e0b8','#e0c8f8','#f8c8e0','#b8e8d8',
    '#d0c0f8','#f0d8c0','#c8e8f0','#f0c8d8'
  ];

  function mkPt() {
    return {
      x:  Math.random() * (W || innerWidth),
      y:  Math.random() * (H || innerHeight),
      r:  Math.random() * 2.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.14,
      vy: -(Math.random() * 0.28 + 0.06),
      a:  Math.random() * 0.45 + 0.08,
      pa: Math.random() * Math.PI * 2,
      ps: Math.random() * 0.015 + 0.003,
      c:  COLS[Math.floor(Math.random() * COLS.length)],
      t:  Math.floor(Math.random() * 4)
    };
  }
  const pts = Array.from({ length: 90 }, mkPt);
  function resetPt(p) { Object.assign(p, mkPt()); p.x = Math.random() * W; p.y = H + 12; }

  function drawHeart(x, y, r, a, col) {
    ctx.save(); ctx.globalAlpha = a * 0.5; ctx.fillStyle = col;
    ctx.translate(x, y); ctx.scale(r * 0.5, r * 0.5);
    ctx.beginPath();
    ctx.moveTo(0, -0.5);
    ctx.bezierCurveTo(0, -2, -2.5, -2, -2.5, 0);
    ctx.bezierCurveTo(-2.5, 1.5, 0, 2.5, 0, 3.5);
    ctx.bezierCurveTo(0, 2.5, 2.5, 1.5, 2.5, 0);
    ctx.bezierCurveTo(2.5, -2, 0, -2, 0, -0.5);
    ctx.fill(); ctx.restore();
  }
  function drawPetal(x, y, r, a, col) {
    ctx.save(); ctx.globalAlpha = a * 0.6; ctx.fillStyle = col;
    ctx.translate(x, y);
    ctx.beginPath(); ctx.ellipse(0, -r, r * 0.45, r * 1.25, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.restore();
  }
  function drawDiamond(x, y, r, a, col) {
    ctx.save(); ctx.globalAlpha = a * 0.55; ctx.fillStyle = col;
    ctx.translate(x, y); ctx.rotate(Math.PI / 4);
    ctx.fillRect(-r * 0.7, -r * 0.7, r * 1.4, r * 1.4); ctx.restore();
  }

  (function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy; p.pa += p.ps;
      const a = p.a * (0.5 + 0.5 * Math.sin(p.pa));
      if      (p.t === 0) { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle=p.c; ctx.globalAlpha=a; ctx.fill(); ctx.globalAlpha=1; }
      else if (p.t === 1) drawPetal(p.x, p.y, p.r * 1.4, a, p.c);
      else if (p.t === 2) drawDiamond(p.x, p.y, p.r, a, p.c);
      else                drawHeart(p.x, p.y, p.r, a, p.c);
      if (p.y < -20 || p.x < -20 || p.x > W + 20) resetPt(p);
    }
    requestAnimationFrame(tick);
  })();
})();
