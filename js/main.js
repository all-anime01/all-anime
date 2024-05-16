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

//Carousel inicial
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".sliderAni");
let sliderList = slider.querySelector(".sliderAni .listAni");
let thumbnail = document.querySelector(".sliderAni .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".itemAni");

thumbnail.appendChild(thumbnailItems[0]);
// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
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
