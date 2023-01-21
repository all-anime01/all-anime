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





