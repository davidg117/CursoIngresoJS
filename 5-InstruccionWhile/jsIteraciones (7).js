function mostrar()
{

	var contador; 
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';
	while(respuesta=="si")
	{
		contador=contador+1;
		contador=parseInt(contador);
		acumulador=acumulador+numeroIngresado;
		acumulador=parseInt(acumulador);


	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN