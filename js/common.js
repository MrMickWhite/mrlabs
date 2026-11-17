
import { navTabs, siteConfig } from './catalog-data.js';

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

export function formatWhatsAppLink(message = siteConfig.whatsappMessage) {
  const phone = String(siteConfig.whatsapp).replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function injectChrome() {
  const current = document.body.dataset.page || 'inicio';
  const base = document.body.dataset.base || './';

  const header = $('[data-site-header]');
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="${base}index.html" aria-label="Ir al inicio">
            <img src="${base}assets/images/logo-mw-dark.webp" alt="Logo mrmickwhite" />
            <span>
              <strong>mrmickwhite</strong>
              <small>Esencias</small>
            </span>
          </a>

          <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-nav-toggle>
            <span></span><span></span><span></span>
          </button>

          <nav class="main-nav" data-main-nav>
            ${navTabs.map(tab => `<a href="${base}${tab.href}" class="${tab.key === current ? 'is-active' : ''}">${tab.label}</a>`).join('')}
            <a class="btn primary header-cta" href="${formatWhatsAppLink('Hola, quiero comprar productos de mrmickwhite Esencias.')}">Comprar</a>
          </nav>
        </div>
      </header>
    `;
  }

  const footer = $('[data-site-footer]');
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img src="${base}assets/images/logo-mw-light.webp" alt="Logo mrmickwhite" />
            <div>
              <strong>mrmickwhite Esencias</strong>
              <div class="footer-meta">
                <p>${siteConfig.domain}</p>
                <p>${siteConfig.email}</p>
              </div>
            </div>
          </div>
          <div class="footer-meta">
            <p>WhatsApp: ${siteConfig.whatsapp}</p>
            <p>Presentaciones de 30 ml · Línea botánica</p>
            <p>© <span data-year></span> mrmickwhite Labs.</p>
          </div>
          <div class="socials">
            <a href="mailto:${siteConfig.email}" aria-label="Correo">✉</a>
            <a href="${formatWhatsAppLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">🟢</a>
            <a href="${base}contacto.html" aria-label="Contacto">☏</a>
          </div>
        </div>
      </footer>
    `;
  }
}

export function initNavToggle() {
  const toggle = $('[data-nav-toggle]');
  const nav = $('[data-main-nav]');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

export function initReveal() {
  const items = $$('.reveal:not(.is-visible)');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
  items.forEach(item => io.observe(item));
}

export function initParallax() {
  const media = document.querySelector('[data-parallax]');
  if (!media) return;

  const isHeroZoom = media.hasAttribute('data-hero-zoom');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let ticking = false;
  let lastY = 0;

  const update = () => {
    if (isHeroZoom) {
      const heroEl = media.closest('.hero') || media.parentElement;
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const progress = Math.min(Math.max(lastY / heroHeight, 0), 1);
      const scale = 1.08 + progress * 0.22;
      const translateY = progress * 36;
      media.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    } else {
      const progress = Math.min(lastY / 900, 1);
      media.style.transform = `scale(${1.04 + progress * .08}) translateY(${progress * 28}px)`;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    lastY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

export function initYear() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

export function bootBase() {
  injectChrome();
  initNavToggle();
  initReveal();
  initParallax();
  initYear();
}
