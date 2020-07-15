/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var elImporte;
	var descuento;
	var elResultado;

	elImporte=importe.value;
	elImporte=parseInt(elImporte);

	descuento=(elImporte*25)/100;

	elResultado=descuento;

	resultado.value=elResultado;


	
}
