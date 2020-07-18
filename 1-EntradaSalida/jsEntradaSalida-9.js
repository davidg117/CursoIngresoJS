/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{


	var producto;
	var precioProduct;
	var porcentajeMas;
	var plataAgregada;
	var resultado;

	producto=prompt("nombre del producto");

	precioProduct=parseInt(producto);

	porcentajeMas=prompt("se aumenta:");
	porcentajeMas=parseInt(porcentajeMas);

	plataAgregada=resultado-precioProduct;

	resultado=(precioProduct*porcentajeMas)/100;


	alert("el producto "+producto+" cuesta $ "+precioProduct+" sin aumento, tiene un aumento de $ "+plataAgregada+" y el precio final es: $ "+resultado+" , gracias por su compra");

}