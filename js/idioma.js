//Cambio de idioma

$('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
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
          name: "Kimetsu no Yaiba",
          link: "https://www.all-anime.ga/ver/Kimetsu-no-yaiba/tv",
          image: "/image/Kimetsu-no-yaiba-yuukaku-hen-Temporada2/p.jpe",
          type: "ANIME",
        },
        {
          name: "Demon slayer",
          link: "https://www.all-anime.ga/ver/Kimetsu-no-yaiba/tv",
          image: "/image/Kimetsu-no-Yaiba-Temporada-1/poster.jpg",
          type: "ANIME",
        },
        {
          name: "One Piece",
          link: "https://www.all-anime.ga/ver/One-piece/tv",
          image: "/image/One-Piece-cap/One-Piece-poster.jpg",
          type: "ANIME",
        },
        {
          name: "Blue lock",
          link: "https://www.all-anime.ga/ver/Blue-lock/tv",
          image: "/image/Blue-lock/p.jpe",
          type: "ANIME",
        },
        {
          name: "Dragon Quest: Dai no Daibouken",
          link: "https://www.all-anime.ga/ver/Dragon-quest/tv",
          image: "/image/Dragon-quest/p.jpg",
          type: "ANIME",
        },
        {
          name: "Dr stone",
          link: "https://www.all-anime.ga/ver/Dr-stone/tv",
          image: "/image/Dr-Stone-Ryusui/poster.png",
          type: "ANIME",
        },
        {
          name: "Ousama ranking",
          link: "https://www.all-anime.ga/ver/Ousama-ranking/tv",
          image: "/image/Ousama-Ranking/p.jpg",
          type: "ANIME",
        },
        {
          name: "Shumatsu no Valkyrie",
          link: "https://www.all-anime.ga/ver/Shuumatsu-no-valkyrie/tv",
          image: "/image/Record-of-ragnarok/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Record of Ragnarok",
          link: "https://www.all-anime.ga/ver/Shuumatsu-no-valkyrie/tv",
          image: "/image/Record-of-ragnarok/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Ranking of king",
          link: "https://www.all-anime.ga/ver/Ousama-ranking/tv",
          image: "/image/Ousama-Ranking/p.jpg",
          type: "ANIME",
        },
        {
          name: "Shingeki no kyojin",
          link: "https://www.all-anime.ga/ver/Shingeki-no-kyojin/tv",
          image: "/image/SNK-season-4-part2/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Jujutsu kaien",
          link: "https://www.all-anime.ga/Jujutsu-Kaisen-tv",
          image: "/image/Jujutsu-Kaisen/poster.png",
          type: "ANIME",
        },
        {
          name: "Shaman king: 2021",
          link: "https://www.all-anime.ga/Shaman-king(2021)-tv",
          image: "/image/shamanking.jpg",
          type: "ANIME",
        },
        {
          name: "Naruto",
          link: "https://www.all-anime.ga/Naruto-tv",
          image: "/image/Naruto/poster.jpeg",
          type: "ANIME",
        },
        {
          name: "Naruto shippuden",
          link: "https://www.all-anime.ga/Naruto-Shippuden-tv.html",
          image: "/image/Naruto-Shippuden/p.jpe",
          type: "ANIME",
        },
        {
          name: "Saint Seiya: Lost Canvas",
          link: "https://www.all-anime.ga/Naruto-Shippuden-tv.html",
          image: "/image/Saint-seiya-lost-canvas/p.jpg",
          type: "ANIME",
        },
        {
          name: "Nier: Automata ver1.1a",
          link: "https://www.all-anime.ga/ver/Nier-automata-ver-1-1a/tv",
          image: "/image/Nier-automata-ver-1-1a/p.webp",
          type: "ANIME",
        },
        {
          name: "Pokemon: Viajes",
          link: "https://www.all-anime.ga/ver/Pokemon-viajes/tv",
          image: "/image/Pokemon-mezase-pokemon-master/p.jpg",
          type: "ANIME",
        },
        {
          name: "Pokemon: Mezase Pokemon master",
          link: "https://www.all-anime.ga/ver/Pokemon-viajes/tv",
          image: "/image/Pokemon-mezase-pokemon-master/p.jpg",
          type: "ANIME",
        },
        {
          name: "Trigun Stampede",
          link: "https://www.all-anime.ga/ver/Trigun-stampede/tv",
          image: "/image/Trigun-stampede/p.jpe",
          type: "ANIME",
        },
        {
          name: "Mob Psycho",
          link: "https://www.all-anime.ga/ver/Mob-Psycho-100/tv",
          image: "/image/Mob-psycho-III/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Spy x Family",
          link: "https://www.all-anime.ga/ver/Spy-x-family/tv",
          image: "/image/Spy-X-Family/p.jpg",
          type: "ANIME",
        },
        {
          name: "Bleach",
          link: "https://www.all-anime.ga/ver/Bleach/tv",
          image: "/image/Bleach/p.jpg",
          type: "ANIME",
        },
        {
          name: "Bleach: Sennen Kessen-hen",
          link: "https://www.all-anime.ga/ver/Bleach-sennen-kessen-hen/tv",
          image: "/image/Bleach-thousand-year-blood-war/poster.jpg",
          type: "ANIME",
        },
        {
          name: "My hero academia",
          link: "https://www.all-anime.ga/ver/My-hero-academia/tv",
          image: "/image/Boku-no-hero-academia-season-6/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Boku no hero academia",
          link: "https://www.all-anime.ga/ver/My-hero-academia/tv",
          image: "/image/Boku-no-hero-academia-season-6/poster.jpg",
          type: "ANIME",
        },
        {
          name: "Tokyo revengers",
          link: "https://www.all-anime.ga/ver/Tokyo-revengers/tv",
          image: "/image/Tokyo-revengers-seiya-kessen-hen/p.jpg",
          type: "ANIME",
        },
        {
          name: "Vinland saga",
          link: "https://www.all-anime.ga/ver/Vinland-saga/tv",
          image: "/image/Vinland-Saga/T2/p.jpg",
          type: "ANIME",
        },
        {
          name: "Dragon ball super: super hero",
          link: "https://www.all-anime.ga/peliculas/Dragon-ball-Super-super-hero/movie",
          image: "/image/Dragon-ball-super-Super-Hero/poster.png",
          type: "PELICULA",
        },
        {
          name: "One piece: Film red",
          link: "https://www.all-anime.ga/peliculas/One-piece-film-red/movie",
          image: "/image/One-piece-Film-red/p.jpg",
          type: "PELICULA",
        },
        {
          name: "One piece: Film gold",
          link: "https://www.all-anime.ga/peliculas/One-piece-film-gold/movie",
          image: "/image/One-piece-Film-gold/p.jpg",
          type: "PELICULA",
        },
        {
          name: "Kimetsu No Yaiba: Mugen Train",
          link: "https://www.all-anime.ga/Kimetsu-no-yaiba-mugen-train-movie.html",
          image: "/image/Kimetsu-No-Yaiba-Mugen-Train-Pelicula/poster.jpg",
          type: "PELICULA",
        },
        {
          name: "Nanatsu no taizai: El rencor de edimburgo",
          link: "https://www.all-anime.ga/peliculas/Nanatsu-no-taizai-el-rencor-de-edimburgo/movie",
          image: "/image/Nanatsu-no-taizai-el-rencor-de-edimburgo/poster.jpg",
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

function ver1(linea, boton,select){
  if(document.getElementById('linea1').style.display=='block'){
    document.getElementById('linea1').style.display = 'none';
  }else{
    document.getElementById('linea1').style.display = 'block';
  }
}
function ver2(linea, boton){
  if(document.getElementById('linea2').style.display=='block'){
    document.getElementById('linea2').style.display = 'none';
  }else{
    document.getElementById('linea2').style.display = 'block';
  }
}
function ver3(linea, boton){
  if(document.getElementById('linea3').style.display=='block'){
    document.getElementById('linea3').style.display = 'none';
  }else{
    document.getElementById('linea3').style.display = 'block';
  }
}
function ver4(linea, boton){
  if(document.getElementById('linea4').style.display=='block'){
    document.getElementById('linea4').style.display = 'none';
  }else{
    document.getElementById('linea4').style.display = 'block';
  }
}





