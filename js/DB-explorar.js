// Datos de ejemplo de anime
const animes = [
  {
    id: 1,
    name: "Naruto",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe",
    link: "https://all-anime.net/Naruto-tv",
    description:
      "Un joven ninja con el sueño de convertirse en el líder de su aldea.",
  },
  {
    id: 2,
    name: "Naruto Shippuden",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpe",
    link: "#naruto",
    description:
      "La continuación de las aventuras de Naruto en su búsqueda por salvar a su amigo Sasuke.",
  },
  {
    id: 3,
    name: "One Piece",
    category: "aventura",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpe",
    link: "https://all-anime.net/ver/One-piece/tv",
    description:
      "Las aventuras de Monkey D. Luffy y su tripulación en busca del tesoro conocido como One Piece.",
  },
  {
    id: 4,
    name: "My Hero Academia",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6e008ad5211c3998b8f3e4bc166821cd.jpg",
    link: "#konosuba",
    description:
      "En un mundo donde la mayoría de la población tiene superpoderes, un joven sin poderes lucha por convertirse en un héroe.",
  },
  {
    id: 5,
    name: "Your Lie in April",
    category: "drama",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/440aab3e234c4d93737e475620860868.jpe",
    link: "#yourlieinapril",
    description:
      "Un pianista prodigio que ha perdido la capacidad de escuchar su propia música conoce a una violinista que cambia su vida.",
  },
  {
    id: 6,
    name: "Fullmetal Alchemist",
    category: "fantasia",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe",
    link: "#fullmetalalchemist",
    description:
      "Dos hermanos alquimistas buscan la Piedra Filosofal para recuperar sus cuerpos después de un experimento fallido.",
  },
  {
    id: 7,
    name: "Tower of God",
    category: "fantasia",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/61a390333a858f438565aeb6b4c75485.jpg",
    link: "https://all-anime.net/ver/Tower-of-god/tv",
    description:
      "Un joven entra en una misteriosa torre en busca de una chica que lo abandonó.",
  },
  {
    id: 8,
    name: "Fairy Tail 100 Years Quest",
    category: "fantasia",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6c66ccc8929c10b5deb599c4d1a6d5e1.jpg",
    link: "#fullmetalalchemist",
    description:
      "Natsu y sus amigos emprenden una misión que no ha sido completada en 100 años.",
  },
  {
    id: 9,
    name: "Kaiju No.8",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/bb5785a9fe043b8331b7842068bfcb05.jpe",
    link: "#fullmetalalchemist",
    description:
      "En un mundo plagado de monstruos, un hombre obtiene la habilidad de transformarse en uno de ellos.",
  },
  {
    id: 10,
    name: "Quality Assurance in Another World",
    category: "comedia",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4e20adfbae580632399ac5e7196929e6.jpg",
    link: "#fullmetalalchemist",
    description:
      "Un ingeniero de control de calidad es transportado a un mundo de fantasía donde aplica sus habilidades.",
  },
  {
    id: 11,
    name: "Wind Breaker",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/16d570ff136955438a3a5bfadbb66eb5.jpg",
    link: "https://all-anime.net/ver/Wind-Breaker/tv",
    description:
      "Haruka Sakura, un novato en la delincuente Preparatoria Furin, busca abrirse paso luchando. La escuela ahora tiene un grupo protector llamado Wind Breaker. Comienza su leyenda.",
  },
  {
    id: 12,
    name: "Tokyo Revenger",
    category: "drama",
    image: "/image/Tokyo-Revengers/T3/p.jpg",
    link: "https://all-anime.net/ver/Tokyo-revengers/tv",
    description:
      "Un joven viaja en el tiempo para salvar a su novia y a sus amigos de un futuro trágico.",
  },
  {
    id: 13,
    name: "Shaman King: Flowers",
    category: "accion",
    image:
      "https://hanapop.com.co/wp-content/uploads/2023/10/POSTER-Shaman-King-Flowers-731x1024.jpg",
    link: "#fullmetalalchemist",
    description:
      "La continuación de Shaman King, siguiendo las aventuras de la siguiente generación de chamanes.",
  },
  {
    id: 14,
    name: "Kimetsu no Yaiba",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/765ee047befcfb677d169f5de4c82d5c.jpe",
    link: "#fullmetalalchemist",
    description:
      "Un joven se convierte en cazador de demonios para vengar a su familia y curar a su hermana.",
  },
  {
    id: 15,
    name: "Ao Ashi",
    category: "deporte",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f1540a6b98f7b986993e7d2019a62512.jpg",
    link: "https://all-anime.net/ver/Ao-ashi/tv",
    description:
      "Ashito Aoi, un talentoso estudiante de Ehime, es invitado por el entrenador Fukuda a probarse en un equipo juvenil en Tokio, iniciando su camino para revolucionar el fútbol en Japón.",
  },
  {
    id: 16,
    name: "Shingeki no Kyojin",
    category: "drama",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/323c82257b2f6567fabbb7bd55bfa753.jpe",
    link: "https://all-anime.net/ver/Shingeki-no-kyojin/tv",
    description:
      "La humanidad se refugió en una ciudad amurallada para escapar de criaturas gigantes. Ahora, esa paz se ve amenazada y se descubrirá el origen de los Titanes.",
  },
  {
    id: 17,
    name: "Captain Tsubasa",
    category: "deporte",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/f18cc7982a918da38a3b8e47c4ab6295.jpe",
    link: "https://all-anime.net/ver/Captain-Tsubasa/tv",
    description:
      "Tsubasa Oozora, un niño de 11 años amante del fútbol, se traslada a Nankatsu para mejorar sus habilidades y es desafiado por el portero Genzo Wakabayashi. Ambos competirán para demostrar quién es el mejor jugador.",
  },
  {
    id: 18,
    name: "Blue Exorcist",
    category: "accion",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ff18ec2d3a400d17921ad9b3a03045ce.jpg",
    link: "https://all-anime.net/ver/Ao-no-exorcist/tv",
    description:
      "Assiah, el mundo humano, y Gehenna, el mundo demoníaco, rara vez se cruzan. Sin embargo, algunos humanos pueden exorcizar demonios: los exorcistas.",
  },
  {
    id: 19,
    name: "Avatar: La leyenda de Aang",
    category: "aventura",
    image:
      "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w370-q80/show_asset/37/84/44/show_asset_53bb5de4-aa5f-4f85-bed3-c098f143c13f.jpg",
    link: "https://all-anime.net/ver/Avatar-la-leyenda-de-Aang/tv",
    description:
      "Aang, el nuevo Avatar, y sus amigos emprenden un viaje épico para salvar al mundo de la Nación del Fuego, que busca conquistar las demás naciones.",
  },
  {
    id: 20,
    name: "Tragones y Mazmorras",
    category: "comedia",
    image: "https://all-anime.net/image/Tragones-y-mazmorras/T1/p.webp",
    link: "https://all-anime.net/ver/Tragones-y-mazmorras/tv",
    description:
      "Mazmorras, tragones ¡y exquisitos guisos de monstruos! Nada se salva del apetito de estos aventureros cuando se adentran en un reino maldito para salvar a uno de los suyos.",
  },
  {
    id: 21,
    name: "Undead Unluck",
    category: "accion",
    image:
      "https://cdn.jkdesu.com/assets/images/animes/image/undead-unluck.jpg",
    link: "https://all-anime.net/ver/Undead-unluck/tv",
    description:
      "Fuuko Izumo, con una habilidad que causa desgracias, intenta suicidarse tras leer el final de su manga favorito. Es salvada por Andy, un inmortal que también quiere morir. Juntos buscan paz mientras una organización siniestra los persigue.",
  },
  {
    id: 22,
    name: "Jujutsu Kaisen",
    category: "accion",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/ebcd65fa9fb83580062e7052fa6ee5a5.jpe",
    link: "https://all-anime.net/ver/Undead-unluck/tv",
    description:
      "Yuji Itadori se traga un dedo maldito para salvar a alguien de su clase y ahora Ryomen Sukuna, un poderoso hechicero malvado conocido como el Rey de las Maldiciones, vive en su alma.",
  },
  {
    id: 23,
    name: "Ousama Ranking",
    category: "drama",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe",
    link: "https://all-anime.net/ver/Ousama-ranking/tv",
    description:
      "La historia se centra en Bojji, un débil y sordo príncipe que no puede sostener incluso una espada para niños. Como el primogénito, sostiene su enorme deseo de convertirse en el más poderoso rey del mundo. Bojji consigue su primer amigo, llamado Kage (sombra), literalmente una sombra en el suelo que de alguna manera puede entender a Bojji.",
  },
  {
    id: 24,
    name: "Soul Eater",
    category: "accion",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1b083a97efcac96d6f3f6c3880321f93.jpe",
    link: "https://all-anime.net/ver/Soul-Eater/tv",
    description:
      "¡Luchando con ghouls y monstruos junto con sus compañeros de clase, Maka y Soul son la última línea de defensa del mundo contra la maldad!.",
  },
  // Agrega más animes aquí
];

const animeGrid = document.getElementById("animeGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navSearchInput = document.getElementById("navSearchInput");

function renderAnimes(animesToRender) {
  animeGrid.innerHTML = "";
  animesToRender.forEach((anime) => {
    const animeCard = document.createElement("div");
    animeCard.className = "animeCard";
    animeCard.innerHTML = `
    <a href="${anime.link}" class="animeLink">
        <img src="${anime.image}" alt="${anime.name}">
        <h3>${anime.name}</h3>
        <div class="animeDescription">${anime.description}</div>
    </a>
`;
    animeGrid.appendChild(animeCard);
  });
}

function filterAnimes() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredAnimes = animes.filter(
    (anime) =>
      anime.name.toLowerCase().includes(searchTerm) &&
      (selectedCategory === "" || anime.category === selectedCategory)
  );

  renderAnimes(filteredAnimes);
}

function navSearch() {
  const searchTerm = navSearchInput.value.toLowerCase();
  const filteredAnimes = animes.filter((anime) =>
    anime.name.toLowerCase().includes(searchTerm)
  );
  renderAnimes(filteredAnimes);
}

searchInput.addEventListener("input", filterAnimes);
categoryFilter.addEventListener("change", filterAnimes);
navSearchInput.addEventListener("input", navSearch);

// Mostrar/ocultar el menú en pantallas pequeñas
menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

// Renderizar todos los animes inicialmente
renderAnimes(animes);
