//Menu Bar
$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
    });
});

//Reporte Episodio

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
});

//Funcion para ocultar buscador
const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  inputsearch.value = "";
});


// //Fucion Busqueda tabla
// var buscador = $("#table").DataTable();

// $(".input-search").keyup(function(){
    
//     buscador.search($(this).val()).draw();
    
//     if ($(".input-search").val() == ""){
//         $(".content-search").fadeOut(300);
//     }else{
//         $(".content-search").fadeIn(300);
//     }
// });

