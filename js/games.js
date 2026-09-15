// Catálogo dos jogos publicados
const GAMES = [
  {
    slug: 'flappy-bird', name: 'Flappy Bird', icon: '🐦', color: '#f7d51d',
    desc: 'Voe entre os canos. Medalhas por pontuação e ciclo dia/noite.',
    tags: ['canvas', 'arcade', 'toque'],
  },
  {
    slug: 'tetris', name: 'Tetris', icon: '🧱', color: '#a855f7',
    desc: 'Gerador 7-bag, hold, ghost piece, wall kicks, 4 temas e ranking.',
    tags: ['canvas', 'puzzle', 'teclado'],
  },
  {
    slug: 'snake', name: 'Snake', icon: '🐍', color: '#4ade80',
    desc: 'A cobrinha clássica com comida dourada, velocidade progressiva e swipe.',
    tags: ['canvas', 'arcade', 'toque'],
  },
  {
    slug: 'pong', name: 'Pong', icon: '🏓', color: '#f5f5f5',
    desc: 'IA com três dificuldades, modo dois jogadores e multi-touch.',
    tags: ['canvas', 'esporte', '2 jogadores'],
  },
  {
    slug: '2048', name: '2048', icon: '🔢', color: '#edc22e',
    desc: 'Junte os números. Desfazer, partida salva e animações.',
    tags: ['dom', 'puzzle', 'swipe'],
  },
  {
    slug: 'breakout', name: 'Breakout', icon: '🧨', color: '#38bdf8',
    desc: 'Cinco níveis, tijolos reforçados, power-ups e partículas.',
    tags: ['canvas', 'arcade', 'power-ups'],
  },
  {
    slug: 'campo-minado', name: 'Campo Minado', icon: '💣', color: '#ef4444',
    desc: 'Três níveis, primeiro clique seguro, chord e melhores tempos.',
    tags: ['dom', 'puzzle', 'clássico'],
  },
  {
    slug: 'jogo-da-memoria', name: 'Jogo da Memória', icon: '🧠', color: '#f472b6',
    desc: 'Cartas 3D, três temas de emojis e recorde por nível.',
    tags: ['dom', 'memória', 'família'],
  },
  {
    slug: 'jogo-da-velha', name: 'Jogo da Velha', icon: '❌', color: '#38bdf8',
    desc: 'IA minimax imbatível, três dificuldades e modo dois jogadores.',
    tags: ['dom', 'estratégia', 'IA'],
  },
  {
    slug: 'termo', name: 'Termo', icon: '🟩', color: '#3aa394',
    desc: 'Adivinhe a palavra de 5 letras. Palavra do dia, estatísticas e compartilhar.',
    tags: ['dom', 'palavras', 'diário'],
  },
  {
    slug: 'space-invaders', name: 'Space Invaders', icon: '👾', color: '#3dff6e',
    desc: 'Sprites em pixel art, barreiras destrutíveis, nave misteriosa e ondas infinitas.',
    tags: ['canvas', 'arcade', 'tiro'],
  },
  {
    slug: 'genius', name: 'Genius', icon: '🎵', color: '#f87171',
    desc: 'Repita a sequência de cores e sons. Modo rígido e 20 rodadas para vencer.',
    tags: ['dom', 'memória', 'som'],
  },
  {
    slug: 'sudoku', name: 'Sudoku', icon: '🧩', color: '#2563eb',
    desc: 'Gerador de puzzles de solução única, anotações, dicas e quatro níveis.',
    tags: ['dom', 'puzzle', 'lógica'],
  },
  {
    slug: 'asteroids', name: 'Asteroids', icon: '☄️', color: '#e5e5e5',
    desc: 'Gráficos vetoriais, inércia, hiperespaço e asteroides que se dividem.',
    tags: ['canvas', 'arcade', 'vetorial'],
  },
];
