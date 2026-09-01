# gloriapresent

# seis meses — site presente

Site de uma página só, feito com HTML, CSS e JavaScript puros (sem
frameworks, sem build, sem instalação — abre direto no navegador).

## 1. Estrutura do projeto

```
site-presente/
├── index.html      → estrutura da página (não edite conteúdo aqui)
├── style.css        → todo o visual (cores, fontes, layout)
├── script.js         → TODO O CONTEÚDO fica aqui (ver seção 2)
├── imagens/          → fotos do site (já com os nomes certos, ver tabela)
└── musicas/          → músicas do site (já com os nomes certos, ver tabela)
```

Cada arquivo tem uma responsabilidade só — você nunca precisa editar dois
arquivos para mudar uma coisa:

| Quero mudar...              | Edito...      |
|------------------------------|---------------|
| Texto, data, título, carta   | `script.js`   |
| Cor, fonte, espaçamento      | `style.css`   |
| Ordem das seções da página   | `index.html`  |

## 2. Conteúdo — tudo em um único lugar

Abra **`script.js`**. Logo no topo, bem separado do resto, tem o bloco
"ARQUIVO DE CONTEÚDO" com estas variáveis:

- `HERO` → data, título e foto do topo
- `MOMENTS` → a linha do tempo (adicione/remova quantos momentos quiser)
- `SONGS` → a playlist
- `LETTER_TEXT` / `LETTER_SIGNATURE` → a carta final
- `FOOTER_TEXT` → rodapé

Não precisa mexer em nada abaixo do aviso "LÓGICA DO SITE".

## 3. Checklist de arquivos a substituir

As pastas `imagens/` e `musicas/` já vêm com arquivos **vazios** com o
nome exato que o `script.js` espera. Basta substituir o conteúdo de cada
um pela foto/música real, **mantendo o mesmo nome** — assim você não
precisa editar o código.

### `imagens/`

| Arquivo (já criado, vazio) | Usado em            |
|------------------------------|---------------------|
| `capa-principal.jpg`         | Foto do topo (HERO) |
| `momento-1.jpg`               | 1º momento da linha do tempo |
| `momento-2.jpg`               | 2º momento da linha do tempo |
| `momento-3.jpg`               | 3º momento da linha do tempo |
| `momento-4.jpg`               | 4º momento da linha do tempo |
| `capa1.jpg`                    | Capa de "Só Nós Dois" |
| `capa2.jpg`                    | Capa de "Bem" |
| `capa3.jpg`                    | Capa de "Tô Com a Moral no Céu" |
| `capa4.jpg`                    | Capa de "A Nossa Praia" |

### `musicas/`

| Arquivo (já criado, vazio) | Música                              |
|------------------------------|--------------------------------------|
| `so-nos-dois.mp3`             | Só Nós Dois — Tim Bernardes         |
| `bem.mp3`                      | Bem — Chapéu de Palha               |
| `moral-no-ceu.mp3`             | Tô Com a Moral no Céu — Matheus e Kauan |
| `a-nossa-praia.mp3`            | A Nossa Praia — Matheus e Kauan     |

> Se quiser mais ou menos momentos/músicas, adicione ou apague itens dos
> arrays `MOMENTS` e `SONGS` no `script.js` — e crie/apague os arquivos
> correspondentes nas pastas, com os nomes que você escrever em `image`,
> `src` e `cover`.

> Use apenas músicas cujos arquivos vocês já possuam legalmente
> (compradas, baixadas de um serviço que permite isso, ou gravadas por
> vocês). O player toca qualquer `.mp3` colocado na pasta.

## 4. Como visualizar no VS Code

1. Instale a extensão **Live Server** (Ritwick Dey).
2. Clique com o botão direito em `index.html` → **"Open with Live Server"**.
3. O site abre no navegador e atualiza sozinho a cada alteração salva.

## 5. Como publicar no GitHub Pages

1. Crie um repositório novo e suba a pasta inteira (`index.html`,
   `style.css`, `script.js`, `imagens/`, `musicas/`).
2. Vá em **Settings → Pages**.
3. Em "Branch", selecione `main` (ou `master`) e a pasta `/root`, clique
   em **Save**.
4. Em alguns minutos você recebe um link do tipo
   `https://seu-usuario.github.io/nome-do-repositorio/` — é esse link
   que você manda pra ela.

> Repositório **público** = qualquer um com o link vê as fotos e
> músicas. Para mais privacidade, use um repositório **privado** (Pages
> funciona em contas Pro) ou outro host gratuito como Netlify, que
> permite deploy privado no plano grátis.

## 6. O que já funciona

- Envelope de abertura clicável na entrada do site
- Linha do tempo com data, título, texto e foto de cada momento
- Player fixo embaixo da tela: tocar, pausar, avançar, voltar, barra de
  progresso arrastável e controle de volume
- Lista de músicas clicável (clique em qualquer faixa pra tocar ela)
- Carta final em parágrafos
- Totalmente responsivo (funciona bem no celular dela também)