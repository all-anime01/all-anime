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

//Funcion Busqueda tabla dapage2

var buscador = $("#table").DataTable();
$(".search-table").keyup(function(){
    
  buscador.search($(this).val()).draw();
    
  if ($(".search-table").val() == ""){
        $(".content-search").fadeOut(300);
  }else{
        $(".content-search").fadeIn(300);
  }
});


