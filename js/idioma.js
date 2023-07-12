//Cambio de idioma

$("ul.tabs li a:first").addClass("active");
$(".secciones article").hide();
$(".secciones article:first").show();

$("ul.tabs li a").click(function () {
  $("ul.tabs li a").removeClass("active");
  $(this).addClass("active");
  $(".secciones article").hide();

  var activeTab = $(this).attr("href");
  $(activeTab).show();
  return false;
});

// //Funcion Busqueda tabla dapage2

// var buscador = $("#table").DataTable();
// $(".search-table").keyup(function(){

//   buscador.search($(this).val()).draw();

//   if ($(".search-table").val() == ""){
//         $(".content-search").fadeOut(300);
//   }else{
//         $(".content-search").fadeIn(300);
//   }
// });

//Buscador nuevo

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", searchAnime);
searchInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // 13 es el código de la tecla Enter
    window.location.href = searchResults.children[0].children[0].href; // Redirecciona a la primera opción de búsqueda
  }
});

function searchAnime() {
  const searchValue = searchInput.value;
  searchResults.innerHTML = "";
  const filteredAnime = animes.filter((anime) =>
    anime.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (filteredAnime.length === 0) {
    const noResults = document.createElement("div");
    noResults.innerHTML = "Sin resultados";
    searchResults.appendChild(noResults);
  } else {
    filteredAnime.forEach((anime) => {
      // Código para crear los elementos de resultados
    });
  }
  filteredAnime.forEach((anime) => {
    const animeElement = document.createElement("div");
    const animeLink = document.createElement("a");
    animeLink.href = anime.link;
    const animeImage = document.createElement("img");
    animeImage.src = anime.image;
    animeImage.id = "image-min";
    const animeTitle = document.createElement("span");
    animeTitle.innerHTML = anime.name;
    animeTitle.classList.add("title");
    const animeType = document.createElement("span");
    animeType.innerHTML = anime.type;
    animeType.classList.add("Type", "tv");
    animeLink.appendChild(animeImage);
    animeLink.appendChild(animeTitle);
    animeElement.appendChild(animeLink);
    animeElement.appendChild(animeType);
    searchResults.appendChild(animeElement);
  });
}

const animes = [
  {
    name: "Ao Ashi",
    link: "https://all-anime.net/ver/Ao-ashi/tv",
    image: "/image/Ao-Ashi/p.jpe",
    type: "ANIME",
  },
  {
    name: "Bungo stray dogs",
    link: "https://all-anime.net/ver/Bungo-stray-dogs/tv",
    image: "https://jcrcomicarts.files.wordpress.com/2023/06/image-530.png",
    type: "ANIME",
  },
  {
    name: "Bleach",
    link: "https://all-anime.net/ver/Bleach/tv",
    image: "/image/Bleach/p.jpg",
    type: "ANIME",
  },
  {
    name: "Bleach: Sennen Kessen-hen",
    link: "https://all-anime.net/ver/Bleach-sennen-kessen-hen/tv",
    image: "/image/Bleach-thousand-year-blood-war/P2/p.webp",
    type: "ANIME",
  },
  {
    name: "Bleach: Thousand-Year-blood-war",
    link: "https://all-anime.net/ver/Bleach-sennen-kessen-hen/tv",
    image: "/image/Bleach-thousand-year-blood-war/P2/p.webp",
    type: "ANIME",
  },
  {
    name: "Boku no hero academia",
    link: "https://all-anime.net/ver/My-hero-academia/tv",
    image: "/image/Boku-no-hero-academia-season-6/p.jpe",
    type: "ANIME",
  },
  {
    name: "Blue lock",
    link: "https://all-anime.net/ver/Blue-lock/tv",
    image: "/image/Blue-lock/p.jpe",
    type: "ANIME",
  },
  {
    name: "Cyberpunk edge runners",
    link: "https://all-anime.net/ver/Cyberpunk-edge-runners/tv",
    image: "/image/Cyber-Punk-EdgeRunners/poster.jpg",
    type: "ANIME",
  },
  {
    name: "Chainsaw man",
    link: "https://all-anime.net/ver/Chainsaw-man/tv",
    image: "/image/chainsaw-man/poster.png",
    type: "ANIME",
  },
  {
    name: "Dark Gathering",
    link: "https://all-anime.net/ver/Dark-gathering/tv",
    image: "https://cdn.myanimelist.net/images/anime/1748/136736l.jpg",
    type: "ANIME",
  },
  {
    name: "Demon slayer",
    link: "https://all-anime.net/ver/Kimetsu-no-yaiba/tv",
    image: "/image/Kimetsu-no-yaiba-katanakaji-no-sato-T3/p.jpe",
    type: "ANIME",
  },
  {
    name: "Death note",
    link: "https://all-anime.net/ver/Death-note/tv",
    image: "/image/Death-Note/p.jpg",
    type: "ANIME",
  },
  {
    name: "Dead Mount Death Play",
    link: "https://all-anime.net/ver/Dead-mount-death-play/tv",
    image: "/image/Dead-mount-death-play/p.jpe",
    type: "ANIME",
  },
  {
    name: "Dragon Ball Z",
    link: "https://all-anime.net/ver/Dragon-ball-z/tv",
    image: "/image/Dragon-ball-Z/p.jpe",
    type: "ANIME",
  },
  {
    name: "Dragon Quest: Dai no Daibouken",
    link: "https://all-anime.net/ver/Dragon-quest-dai-no-daibouken/tv",
    image: "/image/Dragon-quest/p.jpg",
    type: "ANIME",
  },
  {
    name: "Dr stone",
    link: "https://all-anime.net/ver/Dr-stone/tv",
    image: "/image/Dr-stone-new-world/p.webp",
    type: "ANIME",
  },
  {
    name: "Edens Zero",
    link: "https://all-anime.net/ver/Edens-zero/tv",
    image: "/image/Eden-zero/T2/p.webp",
    type: "ANIME",
  },
  {
    name: "Hells Paradise",
    link: "https://all-anime.net/ver/Hells-paradise/tv",
    image: "/image/Hells-paradise/p.jpe",
    type: "ANIME",
  },
  {
    name: "Jujutsu kaisen",
    link: "https://all-anime.net/ver/Jujutsu-kaisen/tv",
    image: "/image/jujutsu-k/T2/p.webp",
    type: "ANIME",
  },
  {
    name: "Jigokuraku",
    link: "https://all-anime.net/ver/Hells-paradise/tv",
    image: "/image/Hells-paradise/p.jpe",
    type: "ANIME",
  },
  {
    name: "Kimetsu no Yaiba",
    link: "https://all-anime.net/ver/Kimetsu-no-yaiba/tv",
    image: "/image/Kimetsu-no-yaiba-katanakaji-no-sato-T3/p.jpe",
    type: "ANIME",
  },
  {
    name: "My Home Hero",
    link: "https://all-anime.net/ver/My-home-hero/tv",
    image: "/image/My-home-hero/p.webp",
    type: "ANIME",
  },
  {
    name: "My hero academia",
    link: "https://all-anime.net/ver/My-hero-academia/tv",
    image: "/image/Boku-no-hero-academia-season-6/p.jpe",
    type: "ANIME",
  },
  {
    name: "Mashle: magic and muscles",
    link: "https://all-anime.net/ver/Mashle-magic-and-muscles/tv",
    image: "/image/Mashle-magic-and-muscles/p.jpe",
    type: "ANIME",
  },
  {
    name: "Mob Psycho",
    link: "https://all-anime.net/ver/Mob-Psycho-100/tv",
    image: "/image/Mob-psycho-III/poster.jpg",
    type: "ANIME",
  },
  {
    name: "Mushoku Tensei",
    link: "https://all-anime.net/ver/Mushoku-tensei/tv",
    image: "/image/Mushoku-Tensei/T2/P.jpg",
    type: "ANIME",
  },
  {
    name: "Malevolent Spirits: Mononogatari",
    link: "https://all-anime.net/ver/Mononogatari/tv",
    image: "/image/Monogatari/T2/p.webp",
    type: "ANIME",
  },
  {
    name: "Naruto",
    link: "https://all-anime.net/Naruto-tv",
    image: "/image/Naruto/poster.jpeg",
    type: "ANIME",
  },
  {
    name: "Naruto shippuden",
    link: "https://all-anime.net/Naruto-Shippuden-tv",
    image: "/image/Naruto-Shippuden/p.jpe",
    type: "ANIME",
  },
  {
    name: "Nier: Automata ver1.1a",
    link: "https://all-anime.net/ver/Nier-automata-ver-1-1a/tv",
    image: "/image/Nier-automata-ver-1-1a/p.webp",
    type: "ANIME",
  },
  {
    name: "Pokemon: Viajes",
    link: "https://all-anime.net/ver/Pokemon-viajes/tv",
    image: "/image/Pokemon-mezase-pokemon-master/p.jpg",
    type: "ANIME",
  },
  {
    name: "Pokemon: Horizons",
    link: "https://all-anime.net/ver/Pokemon-horizons/tv",
    image: "/image/Pokemon-Horizons/p.jpg",
    type: "ANIME",
  },
  {
    name: "Pokemon: Mezase Pokemon master",
    link: "https://all-anime.net/ver/Pokemon-viajes/tv",
    image: "/image/Pokemon-mezase-pokemon-master/p.jpg",
    type: "ANIME",
  },
  {
    name: "One Piece",
    link: "https://all-anime.net/ver/One-piece/tv",
    image: "/image/One-Piece-cap/One-Piece-poster.jpg",
    type: "ANIME",
  },
  {
    name: "Ousama ranking",
    link: "https://all-anime.net/ver/Ousama-ranking/tv",
    image: "/image/Ousama-Ranking/p.jpg",
    type: "ANIME",
  },
  {
    name: "Record of Ragnarok",
    link: "https://all-anime.net/ver/Shuumatsu-no-valkyrie/tv",
    image:
      "https://i3.wp.com/animeyt.es/wp-content/uploads/2023/01/0xkN3SB0azUg.jpg",
    type: "ANIME",
  },
  {
    name: "Ranking of king",
    link: "https://all-anime.net/ver/Ousama-ranking/tv",
    image: "/image/Ousama-Ranking/p.jpg",
    type: "ANIME",
  },
  {
    name: "Rurouni Kenshin (2023)",
    link: "https://all-anime.net/ver/Rurouni-Kenshin-2023/tv",
    image: "/image/Rurouni-kenshin-meiji-kenkaku-romantan-2023/p.jpe",
    type: "ANIME",
  },
  {
    name: "Shingeki no kyojin",
    link: "https://all-anime.net/ver/Shingeki-no-kyojin/tv",
    image: "/image/Snk-season-4-parte3/p.webp",
    type: "ANIME",
  },
  {
    name: "Shumatsu no Valkyrie",
    link: "https://all-anime.net/ver/Shuumatsu-no-valkyrie/tv",
    image:
      "https://i3.wp.com/animeyt.es/wp-content/uploads/2023/01/0xkN3SB0azUg.jpg",
    type: "ANIME",
  },
  {
    name: "Shaman king: 2021",
    link: "https://all-anime.net/Shaman-king(2021)-tv",
    image: "/image/shamanking.jpg",
    type: "ANIME",
  },
  {
    name: "Saint Seiya: Lost Canvas",
    link: "https://all-anime.net/Naruto-Shippuden-tv",
    image: "/image/Saint-seiya-lost-canvas/p.jpg",
    type: "ANIME",
  },
  {
    name: "Spy x Family",
    link: "https://all-anime.net/ver/Spy-x-family/tv",
    image: "/image/Spy-X-Family/p.webp",
    type: "ANIME",
  },
  {
    name: "Tengoku Daimakyou",
    link: "https://all-anime.net/ver/Tengoku-daimakyou/tv",
    image: "/image/Tengoku-daimakyou/p.webp",
    type: "ANIME",
  },
  {
    name: "The Marginal Service",
    link: "https://all-anime.net/ver/The-marginal-service/tv",
    image: "/image/The-marginal-service/p.jpe",
    type: "ANIME",
  },
  {
    name: "Trigun Stampede",
    link: "https://all-anime.net/ver/Trigun-stampede/tv",
    image: "/image/Trigun-stampede/p.jpe",
    type: "ANIME",
  },
  {
    name: "Tokyo revengers",
    link: "https://all-anime.net/ver/Tokyo-revengers/tv",
    image: "/image/Tokyo-revengers-seiya-kessen-hen/p.jpg",
    type: "ANIME",
  },
  {
    name: "Vinland saga",
    link: "https://all-anime.net/ver/Vinland-saga/tv",
    image: "/image/Vinland-Saga/T2/p.jpe",
    type: "ANIME",
  },
  {
    name: "Zom 100: The Bucket List of the Dead",
    link: "https://all-anime.net/ver/Zom-100-The-Bucket-List-of-the-Dead/tv",
    image: "/image/Zom-100-The-Bucket-List-of-the-Dead/p.jpe",
    type: "ANIME",
  },
  //PELICULAS
  {
    name: "Black clover: La espada del Rey mago",
    link: "https://all-anime.net/peliculas/Black-clover-la-espada-del-rey-mago/movie",
    image: "/image/Black-clover-La-espada-del-rey-mago/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Digimon adventure: Last evolution kizuna",
    link: "https://all-anime.net/peliculas/Digimon-last-evolution-kizuna/movie",
    image: "/image/Digimon-last-evolution-kizuna/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Dragon ball super: super hero",
    link: "https://all-anime.net/peliculas/Dragon-ball-Super-super-hero/movie",
    image: "/image/Dragon-ball-super-Super-Hero/poster.png",
    type: "PELICULA",
  },
  {
    name: "Dragon ball: La resurrección de Freezer",
    link: "https://all-anime.net/peliculas/Dragon-ball-la-resurreccion-de-freezer/movie",
    image: "/image/Dragon-ball-la-resurreccion-de-freezer/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Dragon ball: Super Broly",
    link: "https://all-anime.net/peliculas/Dragon-ball-super-broly/movie",
    image: "/image/dragon-ball-super-super-broly/poster.png",
    type: "PELICULA",
  },
  {
    name: "Jujutsu Kaisen: 0",
    link: "https://all-anime.net/peliculas/Jujutsu-kaisen-0/movie",
    image: "/image/Jujutsu-Kaisen-0/poster.jpg",
    type: "PELICULA",
  },
  {
    name: "Kimetsu no Yaiba: Jougen Shuuketsu",
    link: "https://all-anime.net/peliculas/kimetsu-no-yaiba-Jougen-Shuuketsu-Soshite-Katanakaji-no-Sato-e/movie",
    image: "/image/Kimetsu-no-yaiba-pelicula-2/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Kimetsu No Yaiba: Mugen Train",
    link: "https://all-anime.net/Kimetsu-no-yaiba-mugen-train-movie",
    image: "/image/Kimetsu-No-Yaiba-Mugen-Train-Pelicula/poster.jpg",
    type: "PELICULA",
  },
  {
    name: "Kuroko no basket: Movie 4 Last game",
    link: "https://all-anime.net/peliculas/Kuroko-no-basket-movie-4-last-game/movie",
    image: "/image/Kuroko-no-basket-last-game/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Super Mario Bros La pelìcula",
    link: "https://all-anime.net/peliculas/Super-mario-la-pelicula-2023/1",
    image: "/image/Super-mario/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Nanatsu no taizai: El rencor de edimburgo",
    link: "https://all-anime.net/peliculas/Nanatsu-no-taizai-el-rencor-de-edimburgo/movie",
    image: "/image/Nanatsu-no-taizai-el-rencor-de-edimburgo/poster.jpg",
    type: "PELICULA",
  },
  {
    name: "One piece: Film red",
    link: "https://all-anime.net/peliculas/One-piece-film-red/movie",
    image: "/image/One-piece-Film-red/p.jpg",
    type: "PELICULA",
  },
  {
    name: "One piece: Film gold",
    link: "https://all-anime.net/peliculas/One-piece-film-gold/movie",
    image: "/image/One-piece-Film-gold/p.jpg",
    type: "PELICULA",
  },
  {
    name: "One piece: Stampede",
    link: "https://all-anime.net/peliculas/One-piece-stampede/movie",
    image: "/image/One-piece-estampida/p.webp",
    type: "PELICULA",
  },
  {
    name: "Pokemon: Koko secretos de la jungla",
    link: "https://all-anime.net/peliculas/Pokemon-movie-23-koko/movie",
    image: "/image/Pokemon-koko/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Yu-Gi-Oh!: pirámide de la luz",
    link: "https://all-anime.net/peliculas/Yu-gi-oh!-pirámide-de-la-luz/movie",
    image: "/image/Yu-gi-oh-la-piramide-de-la-luz/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Yu-Gi-Oh!: Lazos mas alla del tiempo",
    link: "https://all-anime.net/peliculas/Yu-gi-oh!-lazos-mas-alla-del-tiempo/movie",
    image: "/image/Yu-gi-oh-lazos-mas-alla-del-tiempo/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Yu-Gi-Oh!: El lado oscuro de las dimensiones",
    link: "https://all-anime.net/peliculas/Yu-gi-oh!-el-lado-oscuro-de-las-dimensiones/movie",
    image: "/image/Yu-gi-oh-El-lado-oscuro-de-las-dimensiones/poster.jpg",
    type: "PELICULA",
  },
];

function hideResults() {
  if (searchInput.value === "") {
    searchResults.style.display = "none";
  } else {
    searchResults.style.display = "block";
  }
}

//mostrar, ocultar

function ver1(linea, boton, select) {
  if (document.getElementById("linea1").style.display == "block") {
    document.getElementById("linea1").style.display = "none";
  } else {
    document.getElementById("linea1").style.display = "block";
  }
}
function ver2(linea, boton) {
  if (document.getElementById("linea2").style.display == "block") {
    document.getElementById("linea2").style.display = "none";
  } else {
    document.getElementById("linea2").style.display = "block";
  }
}
function ver3(linea, boton) {
  if (document.getElementById("linea3").style.display == "block") {
    document.getElementById("linea3").style.display = "none";
  } else {
    document.getElementById("linea3").style.display = "block";
  }
}
function ver4(linea, boton) {
  if (document.getElementById("linea4").style.display == "block") {
    document.getElementById("linea4").style.display = "none";
  } else {
    document.getElementById("linea4").style.display = "block";
  }
}
