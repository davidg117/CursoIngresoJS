function mostrar()
{


	var contador;
	// declarar variables
	var max;
	var min;
	var numeroIngresado;
	var respuesta; 
	respuesta='si';
	contador=0;

	while(respuesta!='no')
	{
		contador=contador+1
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
	
	}
	
		if(numeroIngresado>max)
		{
			max=numeroIngresado;
		}
		if(numeroIngresado<min)
		{
			min=numeroIngresado;
		}
		respuesta= prompt("Ingrese no, para salir");

	

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	




}//FIN DE LA FUNCIÓN