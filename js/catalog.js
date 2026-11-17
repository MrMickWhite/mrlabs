
import { essences, families } from './catalog-data.js';
import { bootBase, initReveal } from './common.js';

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function cardThumb(product) {
  if (product.labelImage) {
    return `<div class="catalog-thumb"><img src="${product.labelImage}" alt="Etiqueta de ${product.name}" loading="lazy" /></div>`;
  }
  return `<div class="catalog-thumb placeholder" style="color:${product.accent};">${product.icon}</div>`;
}

function renderTabs() {
  const tabs = $('[data-family-tabs]');
  if (!tabs) return;
  tabs.innerHTML = families.map((family, index) => `<button class="tab-btn ${index === 0 ? 'is-active' : ''}" data-family="${family.id}">${family.label}</button>`).join('');
}

function renderGrid(filter = 'todos') {
  const grid = $('[data-product-grid]');
  if (!grid) return;
  const list = filter === 'todos' ? essences : essences.filter(item => item.family === filter);
  grid.innerHTML = list.map(product => `
    <article class="card catalog-card reveal">
      <div class="catalog-top">
        ${cardThumb(product)}
        <div>
          <h3 style="color:${product.accent}">${product.name}</h3>
          <div class="subtitle">${product.subtitle}</div>
          <p>${product.type} · ${product.volume}</p>
        </div>
      </div>
      <p>${product.overview}</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <div class="actions">
        <a class="btn primary" href="producto.html?id=${product.id}">Ver presentación</a>
        <a class="btn ghost" href="contacto.html">Consultar</a>
      </div>
    </article>
  `).join('');
  initReveal();
}

function initTabs() {
  const tabs = $('[data-family-tabs]');
  tabs?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-family]');
    if (!button) return;
    $$('.tab-btn', tabs).forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    renderGrid(button.dataset.family);
  });
}

bootBase();
renderTabs();
renderGrid();
initTabs();
