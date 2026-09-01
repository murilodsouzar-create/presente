/* =========================================================================
   ARQUIVO DE CONTEÚDO — EDITE AQUI COM A HISTÓRIA DE VOCÊS
   Tudo que precisa ser trocado está nesta primeira parte do arquivo.
   Não precisa mexer em nada depois do aviso "LÓGICA DO SITE".
   ========================================================================= */

// -------- HERO (topo da página) --------
const HERO = {
  date: "26 . 04 . 2026",                 // data de vocês
  title: "Seis meses<br>com Você",        // pode usar <br> para quebrar linha
  subtitle: "um site pequeno pra guardar coisas grandes.",
  photo: "imagens/capa-principal.jpg",    // coloque a foto nesse caminho
};

// -------- LINHA DO TEMPO --------
// Adicione, remova ou edite quantos momentos quiser.
// "image" é opcional — se não quiser foto num momento, apague a linha "image".
const MOMENTS = [
  {
    date: "01.05.2026",
    title: "Primeira foto juntos",
    text: "Aqui foi a primeira vez que saimos juntos.fomos no maionese dog e dps tomamos um sorvete no milk ronald.foi o dia que marcou nosso começo.",
    image: "img/02.jpeg",
  },
  {
    date: "16.05.2026",
    title: "Primeira apresentação juntos",
    text: "Aqui foi a nossa primeira apresentaçao juntos e quando assumimos pra todo mundo que estavamos juntos,foi o dia que mostramos ao mundo que estavamos juntos naquilo que nos apresentou.",
    image: "img/05.jpeg",
  },
  {
    date: "02.06.2026",
    title: "O pedido de Namoro",
    text: "O pedido de Namoro chegou e foi o sim mais lindo que ja ouvi em toda a minha vida,foi o dia que mais fiquei com cagaço tambem por medo de você não aceitar.",
    image: "img/04.jpeg",
  },
  {
    date: "30.05.2026",
    title: "O primeiro Beijo",
    text: "Finalmente foi o nosso primeiro beijo e foi o dia que mais fiquei nervoso na minha vida,foi o dia que estavamos tão ansioso pra chegar e finalmente chegou.",
    image: "img/03.jpeg",
  },
 {
    date: "30.05.2026",
    title: "O primeiro Beijo",
    text: "Enfim chegou o tão esperado 6 meses de nosso relacionamento.",
    image: "img/01.jpeg",
  },
];

// -------- MÚSICAS --------
// Coloque os arquivos .mp3 na pasta /musicas e ajuste "src" para o nome do arquivo.
// "cover" é a capa mostrada no player (pode repetir uma foto de vocês).
const SONGS = [
  {
    title: "Só Nós Dois",
    artist: "Tim Bernardes",
    src: "music/SoNosDois.mp3",
    cover: "img/02.jpeg",
  },
  {
    title: "Bem",
    artist: "Chapéu de Palha",
    src: "music/ChapeuPalha.mp3",
    cover: "img/05.jpeg",
  },
  {
    title: "Tô Com a Moral no Céu",
    artist: "Matheus e Kauan",
      src: "music/tocomamoralnoceu.mp3",
    cover: "img/04.jpeg",
  },
  {
    title: "A Nossa Praia",
    artist: "Matheus e Kauan",
    src: "music/anossapraia.mp3",
    cover: "img/03.jpeg",
  },
];

// -------- CARTA FINAL --------
// Cada string do array vira um parágrafo separado.
const LETTER_TEXT = [
  "Meu amor,nos estamos completando seis meses de namoro e eu queria te dizer que tudo oque vivemos e ainda vamos viver,tem sido muito bom e hoje poder te dar esse presente e muito especial pra mim pois nosso amor so tem crecido e isso e o minimo que eu poderia fazer pra você.",
  "Mesmo com todos os problemas,brigas e desentendimentos que tivemos, eu sei que juntos iremos conquistar o mundo juntos e nada pode nos separar.",
  "Eu poderia dizer     eu te amo mas hoje em dia isso e pouco comparado com tudo que eu tenho pra demonstrar então...EU TE VIVO MINHA PRINCESA",
];
const LETTER_SIGNATURE = "com amor,\nMurilo...";

const FOOTER_TEXT = "feito à mão para os nossos seis meses.";


/* =========================================================================
   LÓGICA DO SITE — normalmente não precisa editar daqui pra baixo
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderTimeline();
  renderPlaylist();
  renderLetter();
  setupEnvelope();
  setupScrollCue();
  setupPlayer();
});

function renderHero() {
  document.getElementById("hero-date").textContent = HERO.date;
  document.getElementById("hero-title").innerHTML = HERO.title;
  document.getElementById("hero-subtitle").textContent = HERO.subtitle;
  const img = document.getElementById("hero-photo");
  img.src = ('img/01.jpeg');
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = MOMENTS.map((m) => `
    <div class="timeline-item">
      <p class="timeline-date">${escapeHTML(m.date)}</p>
      <h3 class="timeline-title">${escapeHTML(m.title)}</h3>
      <p class="timeline-text">${escapeHTML(m.text)}</p>
      ${m.image ? `
        <div class="timeline-image">
          <img src="${m.image}" alt="${escapeHTML(m.title)}" loading="lazy"
               onerror="this.parentElement.style.display='none'">
        </div>` : ""}
    </div>
  `).join("");
}

function renderLetter() {
  document.getElementById("letter").innerHTML =
    LETTER_TEXT.map((p) => `<p>${escapeHTML(p)}</p>`).join("");
  document.getElementById("letter-signature").innerHTML =
    escapeHTML(LETTER_SIGNATURE).replace(/\n/g, "<br>");
  document.getElementById("footer-text").textContent = FOOTER_TEXT;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Envelope de abertura ---------- */
function setupEnvelope() {
  const screen = document.getElementById("envelope-screen");
  const envelope = document.getElementById("envelope");
  const main = document.getElementById("main-content");
  const playerBar = document.getElementById("player-bar");

  const open = () => {
    envelope.classList.add("open");
    setTimeout(() => {
      screen.classList.add("hidden-envelope");
      main.hidden = false;
      playerBar.hidden = false;
    }, 500);
  };

  envelope.addEventListener("click", open);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") open();
  });
  envelope.setAttribute("tabindex", "0");
  envelope.setAttribute("role", "button");
  envelope.setAttribute("aria-label", "Abrir o presente");
}

function setupScrollCue() {
  document.getElementById("scroll-cue").addEventListener("click", () => {
    document.querySelector(".timeline-section").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- Player de música ---------- */
function renderPlaylist() {
  const list = document.getElementById("playlist");
  list.innerHTML = SONGS.map((song, i) => `
    <li class="playlist-item" data-index="${i}">
      <button class="playlist-item-btn" data-play="${i}">
        <span class="playlist-index">${i + 1}</span>
        <img class="playlist-cover" src="${song.cover}" alt=""
             onerror="this.style.visibility='hidden'">
        <span class="playlist-info">
          <p class="playlist-song-title">${escapeHTML(song.title)}</p>
          <p class="playlist-song-artist">${escapeHTML(song.artist)}</p>
        </span>
      </button>
    </li>
  `).join("");
}

function setupPlayer() {
  const audio = document.getElementById("audio");
  const btnPlay = document.getElementById("btn-play");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const progress = document.getElementById("progress");
  const volume = document.getElementById("volume");
  const timeCurrent = document.getElementById("time-current");
  const timeTotal = document.getElementById("time-total");
  const playerCover = document.getElementById("player-cover");
  const playerTitle = document.getElementById("player-song-title");
  const playerArtist = document.getElementById("player-song-artist");
  const playlistEl = document.getElementById("playlist");

  let currentIndex = 0;
  let isPlaying = false;

  audio.volume = volume.value / 100;

  function loadSong(index, autoplay) {
    currentIndex = (index + SONGS.length) % SONGS.length;
    const song = SONGS[currentIndex];
    audio.src = song.src;
    playerCover.src = song.cover;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;

    document.querySelectorAll(".playlist-item").forEach((el) => {
      el.classList.toggle("active", Number(el.dataset.index) === currentIndex);
    });

    if (autoplay) {
      audio.play().catch(() => {});
    }
  }

  function togglePlay() {
    if (!audio.src) loadSong(0, false);
    if (audio.paused) {
      audio.play().catch(() => {
        alert("Coloque os arquivos .mp3 na pasta /musicas para tocar as músicas.");
      });
    } else {
      audio.pause();
    }
  }

  audio.addEventListener("play", () => {
    isPlaying = true;
    iconPlay.hidden = true;
    iconPause.hidden = false;
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    iconPlay.hidden = false;
    iconPause.hidden = true;
  });

  audio.addEventListener("timeupdate", () => {
    if (!isFinite(audio.duration)) return;
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    timeCurrent.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("loadedmetadata", () => {
    timeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("ended", () => {
    loadSong(currentIndex + 1, true);
  });

  progress.addEventListener("input", () => {
    if (!isFinite(audio.duration)) return;
    audio.currentTime = (progress.value / 100) * audio.duration;
  });

  volume.addEventListener("input", () => {
    audio.volume = volume.value / 100;
  });

  btnPlay.addEventListener("click", togglePlay);
  btnNext.addEventListener("click", () => loadSong(currentIndex + 1, true));
  btnPrev.addEventListener("click", () => {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      loadSong(currentIndex - 1, true);
    }
  });

  playlistEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-play]");
    if (!btn) return;
    loadSong(Number(btn.dataset.play), true);
  });

  function formatTime(seconds) {
    if (!isFinite(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  // carrega a primeira música (sem tocar) para já mostrar as infos no player
  loadSong(0, false);
}