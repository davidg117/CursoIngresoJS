/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numeroSueldo;
	var elResultado;
	var aumento;

	numeroSueldo=sueldo.value;
	numeroSueldo=parseInt(numeroSueldo);
	//aumento=1.1
	//esResultado=numeroSueldo*aumento;
	aumento=(numeroSueldo*10)/100

	elResultado=numeroSueldo+aumento;

	resultado.value=elResultado;

	





	
}
