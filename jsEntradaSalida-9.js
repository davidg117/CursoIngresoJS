/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
//sueldo+sueldo*(descuento/100)
//formau
function mostrarAumento()
{//aumento=descuento
	var sueldo;
	var porcentaje;
	var formulaporcentaje;
	var aumento;
	var total;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	
	porcentaje=10;
	formulaporcentaje=porcentaje/100;
	aumento=sueldo*formulaporcentaje;
	total=sueldo+aumento;

	alert("resultado"+total);



	
}
