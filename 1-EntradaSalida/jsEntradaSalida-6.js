/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=numeroUno.value;
	numero2=numeroDos.value;

	//suma=parseInt(numeroUno+numeroDos); <N0
	//suma=parseInt(numeroUno)+parseInt(numeroDos)<NO
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
 //hice algo mal
	suma=numero1+numero2;

	alert("la suma es "+suma);
}

