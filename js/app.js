// Renderiza os cards e filtra pela busca
const grid = document.getElementById('grid');
const search = document.getElementById('search');
const BASE = 'https://condedeveloper.github.io/';
const REPO = 'https://github.com/condeDeveloper/';

function card(g) {
  return `
    <article class="card" data-play="${BASE}${g.slug}/" style="--c:${g.color}" tabindex="0" role="link" aria-label="Jogar ${g.name}">
      <div class="icon">${g.icon}</div>
      <h2>${g.name}</h2>
      <p>${g.desc}</p>
      <div class="tags">${g.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="links">
        <a href="${BASE}${g.slug}/" target="_blank" rel="noopener">▶ Jogar</a>
        <a href="${REPO}${g.slug}" target="_blank" rel="noopener">Código</a>
      </div>
    </article>`;
}

function render(list) {
  grid.innerHTML = list.length ? list.map(card).join('') : '<p class="empty">Nenhum jogo encontrado.</p>';
}

// Clique em qualquer parte do card abre o jogo; os links internos seguem seu próprio destino
grid.addEventListener('click', e => {
  if (e.target.closest('a')) return;
  const c = e.target.closest('.card');
  if (c) window.open(c.dataset.play, '_blank', 'noopener');
});
grid.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const c = e.target.closest('.card');
  if (c) window.open(c.dataset.play, '_blank', 'noopener');
});

function normalize(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

search.addEventListener('input', () => {
  const q = normalize(search.value.trim());
  if (!q) return render(GAMES);
  render(GAMES.filter(g => normalize(g.name + ' ' + g.desc + ' ' + g.tags.join(' ')).includes(q)));
});

render(GAMES);
