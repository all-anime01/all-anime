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

//Buscador nuevo BD

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
    name: "Avatar: la leyenda de Aang",
    link: "https://all-anime.net/ver/Avatar-la-leyenda-de-Aang/tv",
    image:
      "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w370-q80/show_asset/37/84/44/show_asset_53bb5de4-aa5f-4f85-bed3-c098f143c13f.jpg",
    type: "ANIME",
  },
  {
    name: "Ao Ashi",
    link: "https://all-anime.net/ver/Ao-ashi/tv",
    image: "/image/Ao-Ashi/p.jpe",
    type: "ANIME",
  },
  {
    name: "Ao No Exorcist",
    link: "https://all-anime.net/ver/Ao-no-exorcist/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/ff18ec2d3a400d17921ad9b3a03045ce.jpe",
    type: "ANIME",
  },
  {
    name: "Beyblade X",
    link: "https://all-anime.net/ver/Beyblade-x/tv",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmJhNGQ4MjItMTBhMC00OWIxLTg5NjAtYjM5ZjE3NWM2ZjMzXkEyXkFqcGdeQXVyMTY2MjYzNzE2._V1_.jpg",
    type: "ANIME",
  },
  {
    name: "Bungo stray dogs",
    link: "https://all-anime.net/ver/Bungo-stray-dogs/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe",
    type: "ANIME",
  },
  {
    name: "Black Clover",
    link: "https://all-anime.net/ver/Black-clover/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe",
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
    image: "/image/Bleach-thousand-year-blood-war/T3/p.jpg",
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
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b5621ff1277ed6ad1006b0c6f14900bb.jpg",
    type: "ANIME",
  },
  {
    name: "Captain Tsubasa",
    link: "https://all-anime.net/ver/Captain-Tsubasa/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f18cc7982a918da38a3b8e47c4ab6295.jpg",
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
    name: "Dandadan",
    link: "https://all-anime.net/ver/Dandadan/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/13839ea2b48b0323417b23813a090c93.jpg",
    type: "ANIME",
  },
  {
    name: "Dragon Ball Z",
    link: "https://all-anime.net/ver/Dragon-ball-z/tv",
    image: "/image/Dragon-ball-Z/p.jpe",
    type: "ANIME",
  },
  {
    name: "Dragon Ball: Daima",
    link: "https://all-anime.net/ver/Dragon-Ball-Daima/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/298acc932735d9a731ea39a3db6a613c.jpg",
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
    name: "Fairy Tail 100 Years Quest",
    link: "https://all-anime.net/ver/Fairy-tail-100-years-quest/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6c66ccc8929c10b5deb599c4d1a6d5e1.jpg",
    type: "ANIME",
  },
  {
    name: "Fire Force",
    link: "https://all-anime.net/ver/Fire-force/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/da1db9f24b365129646e8b4508858217.jpg",
    type: "ANIME",
  },
  {
    name: "Firefighter Daigo Rescuer in Orange",
    link: "https://all-anime.net/ver/Firefighter-Daigo-Rescuer-in-Orange/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/52e6e1fa11290f2b78df02bd694f89a4.jpe",
    type: "ANIME",
  },
  {
    name: "Haikyu!!",
    link: "https://all-anime.net/ver/Haikyu/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/be304f43b41b60ce2f04c2f9629b0adf.jpg",
    type: "ANIME",
  },
  {
    name: "Hanma Baki: Son of Ogre",
    link: "https://all-anime.net/ver/Hanma-Baki-Son-of-Ogre/tv",
    image:
      "https://i3.wp.com/animeyt.es/wp-content/uploads/2023/07/gBOcSBvzRZfx.jpg",
    type: "ANIME",
  },
  {
    name: "Hells Paradise",
    link: "https://all-anime.net/ver/Hells-paradise/tv",
    image: "/image/Hells-paradise/p.jpe",
    type: "ANIME",
  },
  {
    name: "Hunter x Hunter",
    link: "https://all-anime.net/ver/Hunter-x-hunter/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe",
    type: "ANIME",
  },
  {
    name: "Isekai Suicide Squad",
    link: "https://all-anime.net/ver/Isekai-Suicide-Squad/tv",
    image: "/image/Isekai-Suicide-Squad/p.jpg",
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
    name: "Kaiju No.8",
    link: "https://all-anime.net/ver/Kaiju-No-8/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/bb5785a9fe043b8331b7842068bfcb05.jpe",
    type: "ANIME",
  },
  {
    name: "Kinnikuman Perfect Origin Arc",
    link: "https://all-anime.net/ver/Kinnikuman-Perfect-Origin-Arc/tv",
    image: "/image/Kinnikuman-Perfect-Origin-Arc/T1/p.jpg",
    type: "ANIME",
  },
  {
    name: "Kimetsu no Yaiba",
    link: "https://all-anime.net/ver/Kimetsu-no-yaiba/tv",
    image: "/image/Kimetsu-no-yaiba-katanakaji-no-sato-T3/p.jpe",
    type: "ANIME",
  },
  {
    name: "La isla de las sombras",
    link: "https://all-anime.net/ver/Summer-time-render/tv",
    image:
      "https://i0.wp.com/animeyt.es/wp-content/uploads/2022/04/ZWHsrVSyVHzr.jpg?resize=247,350",
    type: "ANIME",
  },
  {
    name: "Link Click",
    link: "https://all-anime.net/ver/Link-click/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/7d142e198546b9a0758754479a43c649.jpe",
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
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpe",
    type: "ANIME",
  },
  {
    name: "Mecha-Ude: Mechanical Arms",
    link: "https://all-anime.net/ver/Mecha-ude/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/36f48f5b71c56f980df00e86be0874fc.jpg",
    type: "ANIME",
  },
  {
    name: "Mf Ghost",
    link: "https://all-anime.net/ver/MF-GHOST/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/00c8ed6414e0ef37dbacf36bec86565a.jpe",
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
    name: "Nanatsu no Taizai: Mokushiroku no Yonkishi",
    link: "https://all-anime.net/ver/Nanatsu-no-taizai-mokushiroku-no-yonkishi/tv",
    image: "/image/Nanatsu-no-taizai-mokushiroku-no-yonkishi/T2/p.jpg",
    type: "ANIME",
  },
  {
    name: "Nier: Automata ver1.1a",
    link: "https://all-anime.net/ver/Nier-automata-ver-1-1a/tv",
    image: "/image/Nier-automata-ver-1-1a/p.webp",
    type: "ANIME",
  },
  {
    name: "Ninja Kamui",
    link: "https://all-anime.net/ver/Ninja-kamui/tv",
    image: "/image/Ninja-kamui/T1/p.jpg",
    type: "ANIME",
  },
  {
    name: "One Piece",
    link: "https://all-anime.net/ver/One-piece/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpe",
    type: "ANIME",
  },
  {
    name: "One Piece: Live Action",
    link: "https://all-anime.net/ver/One-piece-netflix-live-action/tv",
    image:
      "https://i2.wp.com/animeyt.es/wp-content/uploads/2023/08/tcSwvmIgrRcH.jpg",
    type: "ANIME",
  },
  {
    name: "Ousama ranking",
    link: "https://all-anime.net/ver/Ousama-ranking/tv",
    image: "/image/Ousama-Ranking/p.jpg",
    type: "ANIME",
  },
  {
    name: "Pluto",
    link: "https://all-anime.net/ver/Pluto/tv",
    image:
      "https://images.ctfassets.net/4cd45et68cgf/4ESSpHx4iyHhdk6GEMhRjO/6b0f609919df286437ffa98c7e51a428/en-US_pluto_main_main_vertical_27x40_rgb_pre_1.jpg",
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
    name: "Quality Assurance in Another World",
    link: "https://all-anime.net/ver/Quality-Assurance-in-Another-World/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4e20adfbae580632399ac5e7196929e6.jpg",
    type: "ANIME",
  },
  {
    name: "Ranma 1/2 (2024)",
    link: "https://all-anime.net/ver/Ranma-1-2-2024/tv",
    image: "/image/Ranma-1-2-2024/T1/p.jpg",
    type: "ANIME",
  },
  {
    name: "Ranking of king",
    link: "https://all-anime.net/ver/Ousama-ranking/tv",
    image: "/image/Ousama-Ranking/p.jpg",
    type: "ANIME",
  },
  {
    name: "Ragna Crimson",
    link: "https://all-anime.net/ver/Ragna-Crimson/tv",
    image:
      "https://cdn.anisabi.com/assets/anime/ragna-crimson/ragna-crimson-1696133427.jpg?t=4.0.11",
    type: "ANIME",
  },
  {
    name: "Ranger Reject",
    link: "https://all-anime.net/ver/Ranger-reject/tv",
    image: "/image/Ranger-reject/p.webp",
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
    name: "Rurouni Kenshin (2023)",
    link: "https://all-anime.net/ver/Rurouni-Kenshin-2023/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/c88f035c1ebb9922410bcf04e073a3d9.jpg",
    type: "ANIME",
  },
  {
    name: "Sakamoto Days",
    link: "https://all-anime.net/ver/Sakamoto-days/tv",
    image:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTA0WH6Znc8it-5EP5hduuMVjwyhhGlAt6E33RgLTxjpJDShUnvsirIEq9-fjG1G0Fnf95nVmpDSNZTjLnIrEHwYzwb-wx453ISGixLcJjo_oC5v3Obk8y1n_HhX7Zka8eXqLW5YewPssqDcN2LlEyXX.jpg?r=1f3",
    type: "ANIME",
  },
  {
    name: "Sand Land: The series",
    link: "https://all-anime.net/ver/Sand-Land/tv",
    image: "/image/Sand-Land/p.jpg",
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
    name: "Shaman king: Flowers",
    link: "https://all-anime.net/ver/Shaman-king-flowers/tv",
    image:
      "https://hanapop.com.co/wp-content/uploads/2023/10/POSTER-Shaman-King-Flowers-731x1024.jpg",
    type: "ANIME",
  },
  {
    name: "Shangri-La Frontier",
    link: "https://all-anime.net/ver/Shangri-La-Frontier/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2995bef133df4020b3acbfe7a694cbdf.jpe",
    type: "ANIME",
  },
  {
    name: "Saint Seiya: Lost Canvas",
    link: "https://all-anime.net/Naruto-Shippuden-tv",
    image: "/image/Saint-seiya-lost-canvas/p.jpg",
    type: "ANIME",
  },
  {
    name: "Soul Eater",
    link: "https://all-anime.net/ver/Soul-Eater/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1b083a97efcac96d6f3f6c3880321f93.jpe",
    type: "ANIME",
  },
  {
    name: "Solo Leveling",
    link: "https://all-anime.net/ver/Solo-Leveling/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/5e7f533c3b4f46244ca228af62e83dfa.jpe",
    type: "ANIME",
  },
  {
    name: "Summer time render",
    link: "https://all-anime.net/ver/Summer-time-render/tv",
    image:
      "https://i0.wp.com/animeyt.es/wp-content/uploads/2022/04/ZWHsrVSyVHzr.jpg?resize=247,350",
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
    name: "Tragones y Mazmorras",
    link: "https://all-anime.net/ver/Tragones-y-mazmorras/tv",
    image: "/image/Tragones-y-mazmorras/T1/p.webp",
    type: "ANIME",
  },
  {
    name: "Tower of God",
    link: "https://all-anime.net/ver/Tower-of-god/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/5d5e5f5263126fcaa27c63c5306dbdcc.jpg",
    type: "ANIME",
  },
  {
    name: "Tokyo magnitude 8.0",
    link: "https://all-anime.net/ver/Tokyo-Magnitude-8-0/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/cd003902aeb5c7439e5e9b5f52fbe33a.jpe",
    type: "ANIME",
  },
  {
    name: "Tokyo revengers",
    link: "https://all-anime.net/ver/Tokyo-revengers/tv",
    image: "/image/Tokyo-Revengers/T3/p.jpg",
    type: "ANIME",
  },
  {
    name: "Undead Murder Farce",
    link: "https://all-anime.net/ver/Undead-Murder-Farce/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e02ff0b76c447cbd0e512545bdf71e51.jpe",
    type: "ANIME",
  },
  {
    name: "Undead Unluck",
    link: "https://all-anime.net/ver/Undead-unluck/tv",
    image: "/image/Undead-unluck/p.jpg",
    type: "ANIME",
  },
  {
    name: "Under Ninja",
    link: "https://all-anime.net/ver/Under-ninja/tv",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/39201a3e092424769aac68d0b8211dce.jpe",
    type: "ANIME",
  },
  {
    name: "Uzumakli",
    link: "https://all-anime.net/ver/Uzumaki/tv",
    image: "/image/Uzumaki/T1/p.jpg",
    type: "ANIME",
  },
  {
    name: "Vinland saga",
    link: "https://all-anime.net/ver/Vinland-saga/tv",
    image: "/image/Vinland-Saga/T2/p.jpe",
    type: "ANIME",
  },
  {
    name: "Viral Hit",
    link: "https://all-anime.net/ver/Viral-Hit/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/a0ad4900ae610de44eb49dfc0881cc6a.jpe",
    type: "ANIME",
  },
  {
    name: "Wind Breaker",
    link: "https://all-anime.net/ver/Wind-Breaker/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/16d570ff136955438a3a5bfadbb66eb5.jpe",
    type: "ANIME",
  },
  {
    name: "Wistoria: Wand of Sword",
    link: "https://all-anime.net/ver/Wistoria-Wand-and-Sword/tv",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/22ff4b731a5696364dc65d8d4a4627df.jpg",
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
    name: "Boruto: Naruto the Movie",
    link: "https://all-anime.net/peliculas/Boruto-naruto-the-movie/movie",
    image:
      "https://gatonplayseries.com/wp-content/uploads/2020/08/9GB2iXCPVP6bgyQXXPUchX8CD7p.jpg",
    type: "PELICULA",
  },
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
    name: "Digimon Adventure 02: The beginning",
    link: "https://all-anime.net/peliculas/Digimon-adventure-the-beginning-2/1",
    image:
      "https://a.storyblok.com/f/178900/900x1272/c465eca008/digimon-adventure-02-the-beginning-character-poster.jpg/m/filters:quality(95)format(webp)",
    type: "ANIME",
  },
  {
    name: "Haikyu!! La Batalla del Basurero",
    link: "https://all-anime.net/ver/Haikyu/tv",
    image: "/image/Haikyu/La-batalla-del-basurero/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Hanma Baki vs Kengan Ashura",
    link: "https://all-anime.net/peliculas/Hanma-baki-vs-Kengan-ashura/movie",
    image: "/image/Hanma-baki-vs-Kengan-ashura/p.webp",
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
    name: "Slam Dunk: The First Slam Dunk",
    link: "https://all-anime.net/peliculas/Slam-dunk-the-first-slam-dunk/movie",
    image: "/image/Slam-dunk-the-first-slam-dunk/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Spy x Family: Código Blanco",
    link: "https://all-anime.net/peliculas/Spy-x-Family-Código-Blanco/movie",
    image: "/image/Spy-X-Family/Codigo-blanco/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Super Mario Bros La pelìcula",
    link: "https://all-anime.net/peliculas/Super-mario-la-pelicula-2023/1",
    image: "/image/Super-mario/p.jpg",
    type: "PELICULA",
  },
  {
    name: "Nausicaa del valle del viento",
    link: "https://all-anime.net/peliculas/Nausicaa-del-valle-del-viento/movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0VTwEpDc4fcJg_xj4ujt-0nLw8igNL0sU97WeYGFaK_-qI3j4-1lWN7C-dHNUogQaUw&usqp=CAU",
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

//Contador de vistas

// Obtiene el elemento enlace y el contador de vistas
var enlace = document.getElementById("con-view");
var contadorVistas = document.getElementById("vistas");

// Inicializa el contador
var contador = 0;

// Función para aumentar el contador y actualizar el contador de vistas
function aumentarContador() {
  contador++;
  contadorVistas.textContent = contador;
  // Deshabilita el evento de clic para que no se pueda hacer clic nuevamente
  enlace.removeEventListener("click", aumentarContador);
}

// Agrega un evento de clic al enlace para aumentar el contador
enlace.addEventListener("click", aumentarContador);

//carouser slick
$(document).ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    autoplay: true,
    infinite: true,
    centerPadding: "60px",
    autoplaySpeed: 5100,
    slidesToShow: 6,
    slidesToScroll: 2,
  });
  $(".slick-carousel").slick("slickGoTo", 0);

  $(".slick-carousel").on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === 0) {
      // Reiniciar el carrusel cuando se vuelve al principio
      $(".slick-carousel").slick("slickGoTo", 0);
    }
  });
});

//Accordion, Expandable o Popout

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $(".collapsible").collapsible();
});
var instance = M.Collapsible.getInstance(elem);

/* jQuery Method Calls
  You can still use the old jQuery plugin method calls.
  But you won't be able to access instance properties.

  $('.collapsible').collapsible('methodName');
  $('.collapsible').collapsible('methodName', paramName);
*/
var elem = document.querySelector(".collapsible.expandable");
var instance = M.Collapsible.init(elem, {
  accordion: false,
});
