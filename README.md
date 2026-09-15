# 🎮 Jogos

Página que reúne todos os jogos clássicos que recriei em HTML5 e JavaScript puro. Cada jogo vive no próprio repositório e roda direto no navegador.

**Acessar:** https://condedeveloper.github.io/jogos/

| Jogo | Jogar | Código |
|------|-------|--------|
| 🐦 Flappy Bird | [jogar](https://condedeveloper.github.io/flappy-bird/) | [repo](https://github.com/condeDeveloper/flappy-bird) |
| 🧱 Tetris | [jogar](https://condedeveloper.github.io/tetris/) | [repo](https://github.com/condeDeveloper/tetris) |
| 🐍 Snake | [jogar](https://condedeveloper.github.io/snake/) | [repo](https://github.com/condeDeveloper/snake) |
| 🏓 Pong | [jogar](https://condedeveloper.github.io/pong/) | [repo](https://github.com/condeDeveloper/pong) |
| 🔢 2048 | [jogar](https://condedeveloper.github.io/2048/) | [repo](https://github.com/condeDeveloper/2048) |
| 🧨 Breakout | [jogar](https://condedeveloper.github.io/breakout/) | [repo](https://github.com/condeDeveloper/breakout) |
| 💣 Campo Minado | [jogar](https://condedeveloper.github.io/campo-minado/) | [repo](https://github.com/condeDeveloper/campo-minado) |
| 🧠 Jogo da Memória | [jogar](https://condedeveloper.github.io/jogo-da-memoria/) | [repo](https://github.com/condeDeveloper/jogo-da-memoria) |
| ❌ Jogo da Velha | [jogar](https://condedeveloper.github.io/jogo-da-velha/) | [repo](https://github.com/condeDeveloper/jogo-da-velha) |
| 🟩 Termo | [jogar](https://condedeveloper.github.io/termo/) | [repo](https://github.com/condeDeveloper/termo) |
| 👾 Space Invaders | [jogar](https://condedeveloper.github.io/space-invaders/) | [repo](https://github.com/condeDeveloper/space-invaders) |
| 🎵 Genius | [jogar](https://condedeveloper.github.io/genius/) | [repo](https://github.com/condeDeveloper/genius) |
| 🧩 Sudoku | [jogar](https://condedeveloper.github.io/sudoku/) | [repo](https://github.com/condeDeveloper/sudoku) |

## Regras que todos seguem

- Zero dependências e zero build: abre o `index.html` e joga
- Lógica separada da renderização, testável no Node
- Funciona no celular (toque, swipe ou botões na tela)
- Recordes salvos no `localStorage`
- Sons sintetizados com WebAudio, sem arquivos de áudio
- Licença MIT

## Adicionar um jogo à página

Edite `js/games.js` e inclua um objeto com `slug`, `name`, `icon`, `color`, `desc` e `tags`. O card aponta para `https://condedeveloper.github.io/<slug>/`.

## Licença

MIT
