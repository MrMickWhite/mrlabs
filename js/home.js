
import { essences, values } from './catalog-data.js';
import { bootBase, formatWhatsAppLink, initReveal } from './common.js';

const $ = (selector, parent = document) => parent.querySelector(selector);

function thumbFor(product) {
  if (product.labelImage) return `<img src="${product.labelImage}" alt="Etiqueta de ${product.name}" loading="lazy" />`;
  return `<div class="catalog-thumb placeholder" style="color:${product.accent}">${product.icon}</div>`;
}

function renderStrip() {
  const track = $('[data-home-strip]');
  if (!track) return;
  track.innerHTML = essences.map(product => `
    <article class="product-mini reveal">
      <div class="thumb">${product.labelImage ? `<img src="${product.labelImage}" alt="Etiqueta de ${product.name}" loading="lazy" />` : `<span style="font-size:2rem">${product.icon}</span>`}</div>
      <div>
        <h4 style="color:${product.accent}">${product.name}</h4>
        <p>${product.subtitle}</p>
        <a class="text-link" href="producto.html?id=${product.id}">Ver esencia →</a>
      </div>
    </article>
  `).join('');
}

function renderValues() {
  const grid = $('[data-value-grid]');
  if (!grid) return;
  const gradients = [
    ['var(--gold)', 'var(--terracotta)'],
    ['var(--olive-2)', 'var(--olive-vivid)'],
    ['var(--terracotta)', 'var(--berry)'],
    ['var(--lavender)', 'var(--olive-2)'],
  ];
  grid.innerHTML = values.map((value, index) => {
    const [a, b] = gradients[index % gradients.length];
    return `
    <article class="card badge-card reveal" style="--badge-a:${a}; --badge-b:${b}">
      <div class="badge-icon">${value.icon}</div>
      <strong>${value.title}</strong>
      <p>${value.text}</p>
    </article>
  `;
  }).join('');
}

function initContactButtons() {
  document.querySelectorAll('[data-wa-link]').forEach(link => {
    link.href = formatWhatsAppLink(link.dataset.message || undefined);
  });
}

bootBase();
renderStrip();
renderValues();
initContactButtons();
initReveal();
