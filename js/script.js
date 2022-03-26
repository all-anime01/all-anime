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

//Funcion para ocultar buscador
const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  inputsearch.value = "";
});


//Fucion Busqueda tabla
var buscador = $("#table").DataTable();

$(".input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($(".input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
});


