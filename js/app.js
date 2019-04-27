//paso 1. 
//recupera la plantilla en formato string y guarda en la variable
let plantilla = $(".row").html();

//vacia el contenido del elemento con la clase .row
 $(".row").html( '' );


$.get('https://3a8i3.github.io/libros/', function (datos) {
	mostrarDatos(datos);

});

function mostrarDatos(d){
//console.log(d);



for (let i = 0; i < d.length; i++) {
let plantJQ = $(plantilla);
	
	plantJQ.find('.Titulo1').text(d[i].titulo);
	plantJQ.find('.Nombre_autor').text(d[i].autor.nombre);
	plantJQ.find('.bio_autor').text(d[i].autor.biografia);
	plantJQ.find('.Anho1').text(d[i].anho);
	plantJQ.find('.Editorial1').text(d[i].editorial);
	plantJQ.find('.Autor_fecha').text(d[i].autor.nacimiento.fecha);
	plantJQ.find('.Temas').text(d[i].temas);
	plantJQ.find('.Resumen').text(d[i].resumen);
	plantJQ.find('.pais_autor').text(d[i].autor.nacimiento.ciudad);
	plantJQ.find('.ciudad_autor').text(d[i].autor.nacimiento.pais);

	plantJQ.find('.portada').attr("src", d[i].portada);
	plantJQ.find('.foto').attr("src", d[i].autor.foto);













	


	$('.row').append(plantJQ);

	}

}