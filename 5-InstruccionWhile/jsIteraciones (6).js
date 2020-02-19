function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0; 
	acumulador=0;
	numeroIngresado=prompt("Ingrese el numero");
	numeroIngresado=parseInt(numeroIngresado);

	while(contador<5)
	{
		contador=contador+1;
		contador=prompt("Por favor ingresar el numero");
		contador=parseInt(contador);
		acumulador=acumulador+numeroIngresado;
		acumulador=parseInt(acumulador);

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN