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
/*	b)Para la gestión de un hotel,
	ingresar los siguientes datos validados de una reserva
	nombre del huésped
	cantidad de personas 
	cantidad de dia de estadia 
	forma de pago(efectivo , tarjeta o QR)

	informar el huésped que trajo más personas en
	una sola reserva.

	la cantidad de personas que se quedaron más días
	la forma de pago más utilizada.
	el promedio de cantidad de días por reserva*/
}
