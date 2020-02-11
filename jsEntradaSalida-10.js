/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var formulaporcent;
	var descuento;
	var total;

	sueldo=document.getElementById('importe').value;
	sueldo=parseInt(sueldo);

	porcentaje=25;
	formulaporcent=porcentaje/100;
	descuento=sueldo*formulaporcent;
	total=sueldo-descuento;

	alert("el total es:"+total);
	
}
