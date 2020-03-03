/*b)Para la gestión de un hotel,
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
function mostrar()
{
	var nombreDeHuesped;
	var cantidadDePersonas
	var cantidadDiaDeEstadia;
	var formaDePago;
	var respuesta;
	var maxDePersonasNombre;
	var maxDePersonas;
	var contador;
	var acumulador;
	var promedio;
	var maxDeDias;
	var maxDeDiasCantidadDePersonas;
	var contadorTarjeta;
	var contadorQR;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;


	respuesta="si";
	contador=0;
	acumulador=0;
	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;

	while(respuesta=="si")
	{
		nombreDeHuesped=prompt("Ingrese nombre:");

		cantidadDePersonas=prompt("Ingrese cantidad de personas");
		cantidadDePersonas=parseInt(cantidadDePersonas);

		while(isNaN(cantidadDePersonas) || cantidadDePersonas<1 )
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);

		}


		cantidadDiaDeEstadia=prompt("Ingrese cantidad de dias");
		cantidadDiaDeEstadia=parseInt(cantidadDiaDeEstadia);

		while(isNaN(cantidadDiaDeEstadia) || cantidadDiaDeEstadia<1 )
		{
			cantidadDiaDeEstadia=prompt("Ingrese cantidad de dias");
			cantidadDiaDeEstadia=parseInt(cantidadDiaDeEstadia);

		}


		formaDePago=prompt("Ingrese su forma de pagar");

		while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="efectivo" && formaDePago!="tarjeta" )
		{
			formaDePago=prompt("Ingrese su forma de pagar");

		}
		console.log("cantidad de persona: "+cantidadDePersonas);
		console.log("cantidad de dias: "+cantidadDiaDeEstadia);
		console.log("forma de pago: "+formaDePago);

		

		if(contador==0 || maxDePersonas<cantidadDePersonas )
		{
			maxDePersonas=cantidadDePersonas;
			maxDePersonasNombre=nombreDeHuesped;

		}

		if(contador==0 ||  maxDeDias<cantidadDiaDeEstadia )
		{
			maxDeDias=cantidadDiaDeEstadia;
			maxDeDiasCantidadDePersonas=cantidadDePersonas;

		}
		switch(formaDePago)
		{
			case "efectivo":
			contadorEfectivo++;
			break;
			case "tarjeta":
			contadorTarjeta++;
			break;
			case "qr":
			contadorQR++;
			break;

		}

		if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
		{
			formaDePagoMasUtilizada ="efectivo";
		}
		else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizada="qr";
			}else
			{
				formaDePagoMasUtilizada="tarjeta";
			}
		}


		contador++
		respuesta=prompt("¿DESEA SEGUIR?");
	}//al terminar el while

	promedio=acumulador/contador;
	console.log(maxDePersonasNombre);
	console.log(maxDeDiasCantidadDePersonas);

	document.write("<br> nombre del huesped con mas invitados "+maxDePersonasNombre);
	document.write("<br> cantidad"+cantidadDiaDeEstadia);
	document.write("<br> forma de pago"+formaDePagoMasUtilizada);
	//document.write("<br>");

}