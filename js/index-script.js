const categories = [
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Misterio",
  "Romance",
  "Ciencia ficción",
];

// Función para crear una tarjeta de anime
function createAnimeCard(anime) {
  return `
      <div class="anime-card">
          <img src="${anime.image}" alt="${anime.title}">
          <h3>${anime.title}</h3>
      </div>
  `;
}

// Función para crear una tarjeta de categoría
function createCategoryCard(category) {
  return `
      <div class="category-card">
          <h3>${category}</h3>
      </div>
  `;
}

// Función para mostrar animes destacados
function displayFeaturedAnime() {
  const featuredContainer = document.getElementById("featured-anime");
  featuredContainer.innerHTML = animeData.map(createAnimeCard).join("");
}

// Función para mostrar categorías
function displayCategories() {
  const categoryContainer = document.getElementById("category-list");
  categoryContainer.innerHTML = categories.map(createCategoryCard).join("");
}

// Función para buscar animes
function searchAnime() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const searchResults = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm)
  );
  // Aquí puedes implementar la lógica para mostrar los resultados de búsqueda
  console.log(searchResults);
}

// Event listeners
document.getElementById("search-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchAnime();
  }
});

// Inicialización
displayFeaturedAnime();
displayCategories();

// Datos de ejemplo para el carrusel hero (en una aplicación real, estos datos vendrían de una API)
const heroData = [
  {
    id: 1,
    title: "Spy x Family Código Blanco",
    description:
      "Después de recibir una orden para ser reemplazado en la Operación Strix, Loid decide ayudar a Anya a ganar una competencia de cocina en la Academia Edén...",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1350/cr/landscape_large/7124141b-c5a9-4c32-bdc9-9053cde87f26.png",
  },
  {
    id: 2,
    title: "My Hero Academia",
    description: "Nuevos héroes se levantan",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1350/cr/landscape_large/adf8b7f0-13fc-462e-890b-57ebd58f8e92.png",
  },
  {
    id: 3,
    title: "Demon Slayer",
    description: "La lucha contra los demonios continúa",
    image: "https://example.com/demonslayer.jpg",
  },
  // Añade más animes aquí
];

let currentSlide = 0;

// Función para crear un slide del carrusel
function createHeroSlide(anime) {
  return `
      <div class="hero-slide" style="background-image: url('${anime.image}')">
          <div class="hero-content">
              <h1>${anime.title}</h1>
              <p>${anime.description}</p>
              <button class="cta-button" onclick="redirectToAnime(${anime.id})">Ver ahora</button>
          </div>
      </div>
  `;
}

// Función para mostrar el carrusel hero
function displayHeroCarousel() {
  const carouselContainer = document.getElementById("hero-carousel");
  carouselContainer.innerHTML = heroData.map(createHeroSlide).join("");
  updateCarouselPosition();
}

// Función para actualizar la posición del carrusel
function updateCarouselPosition() {
  const carousel = document.getElementById("hero-carousel");
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Función para ir al siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % heroData.length;
  updateCarouselPosition();
}

// Función para ir al slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + heroData.length) % heroData.length;
  updateCarouselPosition();
}

// Función para redireccionar al contenido del anime (simulada)
function redirectToAnime(animeId) {
  console.log(`Redirigiendo al anime con ID: ${animeId}`);
  // Aquí implementarías la redirección real
}

// Event listeners para los botones del carrusel
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Inicialización
displayHeroCarousel();

// Cambio automático de slide cada 5 segundos
setInterval(nextSlide, 5000);
