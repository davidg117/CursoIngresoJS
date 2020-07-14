//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
//sin asteristiscos en aert entre parentesis
function mostrar()
{
	/*var nombre="drake"
	alert(nombre);*/

	var contador;
	var acumulador;
	var maximo;
	var minimo;
	var numeroIngresado;
	var contadorPares;
	var nombre;
	var sexo;
	var maximoSexo;
	var maximoNombre;

	contador=0;
	acumulador=0;


	while(contador<10)
	{

		contador=contador+1;
		numeroIngresado=prompt("ingrese el "+contador+" numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado<0 ||numeroIngresado>10 )
		{
			numeroIngresado=prompt("Error, ingrese el "+contador+" numero");
			numeroIngresado=parseInt(numeroIngresado);

		}

		sexo=prompt("ingrese el "+contador+" sexo");
		while(isNaN(numeroIngresado) || sexo!="f" ||sexo!="m" )
		{

			sexo=prompt("Error, ingrese el "+contador+" sexo");

		}

		acumulador= acumulador+ numeroIngresado;

		if(numeroIngresado% 2==0)
		{
			contadorPares=contadorPares+1;

		}

		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(maximo<numeroIngresado || contador==1)
			{
				maximo=numeroIngresado;
				maximoSexo=sexo;
				maximoNombre=nombre;
			}
			else
			{

			}
		}
	}
}

/*HOTEL EJERCICIO
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
/*RECUPERATORIO 09
var nombreAlumno;
	var sexoAlumno;
	var edadAlumno;
	var notaFinal;
	var respuesta;
	var contador;
	var acumulador;
	var alumnoHombre;
	var alumnoMujer;


	respuesta="si";
	contador=0;
	acumulador=0;


	while(respuesta=="si")
	{
		nombreAlumno=prompt("Identificar alumno");

		sexoAlumno=prompt("Ingrese sexo del alumno");

		while(!isNaN(sexoAlumno) || sexoAlumno!="M" && sexoAlumno!="F" )
		{
			sexoAlumno=prompt("Ingrese M o F: ");
		}
		edadAlumno=prompt("Ingrese edad del alumno");
		edadAlumno=parseInt(edadAlumno);

		while(isNaN(edadAlumno)||edadAlumno<0 || edadAlumno>100)
		{
			edadAlumno=prompt("Ingrese edad del alumno");
			edadAlumno=parseInt(edadAlumno);

		}
		notaFinal=prompt("Ingrese nota del alumno");
		notaFinal=parseInt(notaFinal);

		while(isNaN(notaFinal)|| notaFinal<0 || notaFinal>10)
		{
			notaFinal=prompt("Ingrese nota del alumno");
			notaFinal=parseInt(notaFinal);

		}

		if(contador==0)
		{


		}






		respuesta=prompt("¿Quiere pasar a la siguiente persona?");
	}