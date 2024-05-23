const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});

fila.addEventListener("mouseleave", () => {
  peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
});
//carousel body

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".sliderAni");
let sliderList = slider.querySelector(".sliderAni .listAni");
let thumbnail = document.querySelector(".sliderAni .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".itemAni");
let currentIndex = 0;
let interval;

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
  resetAutoplay();
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
  resetAutoplay();
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".itemAni");
  let thumbnailItems = document.querySelectorAll(".thumbnail .itemAni");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}

function startAutoplay() {
  interval = setInterval(() => {
    moveSlider("next");
  }, 9000); // Cambia el valor a la cantidad de milisegundos que desees para el intervalo
}

function resetAutoplay() {
  clearInterval(interval);
  startAutoplay();
}

// Iniciar autoplay cuando se carga la página
window.onload = function () {
  startAutoplay();
};

//Carousel lista anime
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const carouselInner = document.querySelector(".carousel-inner");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
const visibleSlides = 5; // Número de imágenes visibles al mismo tiempo

function showSlide(index) {
  const totalSlides = slides.length;
  const maxSlideIndex = totalSlides - visibleSlides;

  currentSlide = Math.max(0, Math.min(index, maxSlideIndex));
  const newTransform = -currentSlide * (100 / visibleSlides) + "%";
  carouselInner.style.transform = `translateX(${newTransform})`;

  // Mostrar/ocultar botones según el índice actual
  document.querySelector(".carousel-control-prev").style.display =
    currentSlide === 0 ? "none" : "block";
  document.querySelector(".carousel-control-next").style.display =
    currentSlide === maxSlideIndex ? "none" : "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

carouselInner.addEventListener("touchstart", touchStart);
carouselInner.addEventListener("touchend", touchEnd);
carouselInner.addEventListener("touchmove", touchMove);

carouselInner.addEventListener("mousedown", touchStart);
carouselInner.addEventListener("mouseup", touchEnd);
carouselInner.addEventListener("mouseleave", touchEnd);
carouselInner.addEventListener("mousemove", touchMove);

function touchStart(event) {
  isDragging = true;
  startPos = getPositionX(event);
  carouselInner.style.cursor = "grabbing";
  animationID = requestAnimationFrame(animation);
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100) nextSlide();
  if (movedBy > 100) prevSlide();

  carouselInner.style.cursor = "grab";
  prevTranslate = currentTranslate;
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  carouselInner.style.transform = `translateX(${currentTranslate}px)`;
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    visibleSlides = 2; // Cambiar número de imágenes visibles en pantallas pequeñas
  } else {
    visibleSlides = 5; // Número de imágenes visibles en pantallas grandes
  }
  showSlide(currentSlide);
});

showSlide(currentSlide); // Inicializar la visualización de las diapositivas
