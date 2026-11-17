
import { essences, families } from './catalog-data.js';
import { bootBase, formatWhatsAppLink, initReveal } from './common.js';

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function getProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'lima';
  return essences.find(item => item.id === id) || essences[0];
}

function familyLabel(id) {
  return families.find(f => f.id === id)?.label || id;
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function renderProduct(product) {
  document.title = `${product.name} · mrmickwhite Esencias`;
  const root = $('[data-product-root]');
  if (!root) return;

  const { r, g, b } = hexToRgb(product.accent);
  const stageA = `rgba(${r}, ${g}, ${b}, .26)`;
  const stageB = `rgba(${r}, ${g}, ${b}, .12)`;

  const preview = `
    <div class="product-visual-stage" style="--stage-a:${stageA}; --stage-b:${stageB}">
      <span class="product-badge-float" style="--accent:${product.accent}">${familyLabel(product.family)}</span>
      <img src="assets/images/hero-bottle-feature.webp" alt="Frasco de esencia ${product.name}" />
    </div>
  `;

  root.innerHTML = `
    <div class="product-hero">
      <aside class="product-sticky grid">
        <div class="card product-visual reveal">
          ${preview}
        </div>
        <div class="card product-visual reveal" style="padding:24px;">
          <h3 style="color:${product.accent}">Resumen rápido</h3>
          <div class="spec-list">
            <div class="spec-item"><span>Familia</span><strong>${familyLabel(product.family)}</strong></div>
            <div class="spec-item"><span>Tipo</span><strong>${product.type}</strong></div>
            <div class="spec-item"><span>Presentación</span><strong>${product.volume} · ${product.ounces}</strong></div>
            <div class="spec-item"><span>Contacto</span><strong>WhatsApp</strong></div>
          </div>
        </div>
      </aside>

      <article class="card product-content reveal" style="--accent:${product.accent}">
        <div class="info-top">
          <div>
            <span class="eyebrow">Esencia individual</span>
            <h1 style="color:${product.accent}; margin:16px 0 10px;">${product.name}</h1>
            <h3 style="font-family:var(--font-serif); color:var(--terracotta); font-style:italic; margin-bottom:0;">${product.subtitle}</h3>
          </div>
          <div class="product-volume" style="--accent:${product.accent}">${product.volume}<br /><span class="kicker">${product.ounces}</span></div>
        </div>

        <div class="accent-line" style="--accent:${product.accent}"></div>
        <p><strong>${product.slogan}</strong></p>
        <p>${product.overview}</p>
        <p>${product.presentation}</p>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:16px;">${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>

        <div class="cta-row">
          <a class="btn primary" href="${formatWhatsAppLink(`Hola, quiero información sobre la esencia ${product.name} de 30 ml.`)}">Pedir por WhatsApp</a>
          <a class="btn ghost" href="contacto.html">Correo y contacto</a>
          <a class="btn soft" href="esencias.html">Volver al catálogo</a>
        </div>

        <div class="info-tabs">
          <div class="tabs" data-info-tabs>
            <button class="tab-btn is-active" data-tab="descripcion">Descripción</button>
            <button class="tab-btn" data-tab="beneficios">Beneficios</button>
            <button class="tab-btn" data-tab="uso">Precauciones</button>
            <button class="tab-btn" data-tab="ingredientes">Ingredientes</button>
          </div>
          <div class="info-panels">
            <section class="info-panel" data-panel="descripcion">
              <h3>Descripción del producto</h3>
              <p>${product.overview}</p>
              <p>${product.presentation}</p>
            </section>
            <section class="info-panel hidden" data-panel="beneficios">
              <h3>Beneficios principales</h3>
              <ul>${product.benefits.map(item => `<li>${item}</li>`).join('')}</ul>
            </section>
            <section class="info-panel hidden" data-panel="uso">
              <h3>Precauciones</h3>
              <ul>${product.precautions.map(item => `<li>${item}</li>`).join('')}</ul>
            </section>
            <section class="info-panel hidden" data-panel="ingredientes">
              <h3>Ingredientes (INCI)</h3>
              <ul>${product.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
            </section>
          </div>
        </div>

        <div class="highlight-grid">
          <article class="card highlight"><strong>Presentación clara</strong><p>Formato de 30 ml para una línea coherente y profesional.</p></article>
          <article class="card highlight"><strong>Identidad visual</strong><p>Color distintivo y lenguaje botánico para reconocer cada esencia.</p></article>
          <article class="card highlight"><strong>Venta digital</strong><p>Lista para catálogo, página web y contacto directo por WhatsApp.</p></article>
        </div>
      </article>
    </div>
  `;

  const related = $('[data-related-grid]');
  if (related) {
    const others = essences.filter(item => item.id !== product.id).slice(0, 4);
    related.innerHTML = others.map(item => `
      <article class="card catalog-card">
        <div class="catalog-top">
          ${item.labelImage ? `<div class="catalog-thumb"><img src="${item.labelImage}" alt="Etiqueta de ${item.name}" loading="lazy" /></div>` : `<div class="catalog-thumb placeholder" style="color:${item.accent};">${item.icon}</div>`}
          <div>
            <h3 style="color:${item.accent}">${item.name}</h3>
            <div class="subtitle">${item.subtitle}</div>
            <p>${item.volume}</p>
          </div>
        </div>
        <div class="actions"><a class="btn ghost" href="producto.html?id=${item.id}">Ver esencia</a></div>
      </article>
    `).join('');
  }
}

function initInfoTabs() {
  const wrap = $('[data-info-tabs]');
  if (!wrap) return;
  wrap.addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    $$('.tab-btn', wrap).forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    const id = button.dataset.tab;
    document.querySelectorAll('[data-panel]').forEach(panel => panel.classList.toggle('hidden', panel.dataset.panel !== id));
  });
}

bootBase();
renderProduct(getProduct());
initInfoTabs();
initReveal();
