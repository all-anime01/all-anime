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


// //indexof
// const listados = [
//   {nombre: 'Bleach', valor: 500},
//   {nombre: 'Naruto', valor: 500},
//   {nombre: 'Naruto Shippuden', valor: 500},
//   {nombre: 'Kimetsu no Yaiba', valor: 500},
//   {nombre: 'Shingeki no Kyojin', valor: 500},
//   {nombre: 'Ousama Ranking', valor: 500},
//   {nombre: 'Jujutsu Kaisen', valor: 500},
//   {nombre: 'Shaman King (2021)', valor: 500},
//   {nombre: 'Saint Seiya Lost Canvas', valor: 500},
//   {nombre: 'Death note', valor: 500},
//   {nombre: 'One piece', valor: 500},
//   {nombre: 'Boku no Hero Academy', valor: 500},
//   {nombre: 'Chainsaw man', valor: 500},
// ]
// const formulario = document.querySelector('#mysearch');
// const btnBusqueda = document.querySelector('#btn-busqueda')
// const resultado = document.querySelector('#resultado');

// const filtrar = ()=>{
//   // console.log(formulario.value);
//   resultado.innerHTML = '';
//   const texto = formulario.value.toLowerCase();
//   for(let listado of listados){
//       let nombre = listado.nombre.toLowerCase();
//       if(nombre.indexOf !== -1){
//           resultado.innerHTML += `
//           <h3>${listados.nombre} - Valor: ${listados.valor}</h3>
//           `
//       }
//   }

//   if(resultado.innerHTML === ''){
//       resultado.innerHTML += `
//           <h3>no se encontró el resultado...</h3>
//       `
//   }
// }
// btnBusqueda.addEventListener('click', filtrar)
// formulario.addEventListener('Keyup', filtrar)

// filtrar();

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





