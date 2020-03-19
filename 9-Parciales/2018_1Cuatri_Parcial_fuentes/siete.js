function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta;
	var contador;
	var nombrePasajeroMasJoven;
	var edadPasajeroMasJoven;
	var edadPasajeroMasViejo;
	var nombrePasajeroMasViejo;
	var sexoPasajeroMasViejo;
	var contadorMujeresTotal;
	var contadorMujeresCyV;
	var acumuladorMujeres;
	var contadorHombresSolteros;
	var acumuladorHombresSolteros;
	var promedioMujeres;
	var promedioHombreSolteros;

	respuesta="s";
	edadPasajeroMasJoven=1000;
	nombrePasajeroMasJoven= ""
	edadPasajeroMasViejo=0;
	contador=0;
	acumuladorMujeres=0;
	contadorMujeresCyV=0;
	contadorMujeresTotal=0;
	contadorHombresSolteros=0;
	acumuladorHombresSolteros=0;

	while(respuesta=="s")
	{
		nombre=prompt("Ingrese nombre");

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);

		while(isNaN(edad) || edad < 17 || edad > 100  )
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);

		}
		sexo=prompt("Ingrese sexo");

		while(!isNaN(sexo) || sexo!="m" && sexo!="f")
		{
			sexo=prompt("Ingrese sexo");
		}

		estadoCivil=prompt("Ingrese estadoCivil");

		while(!isNaN(estadoCivil) || estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese estadoCivil");

		}


		if(edad < edadPasajeroMasJoven && estadoCivil=="casado")
		{
			edadPasajeroMasJoven=edad;
			nombrePasajeroMasJoven=nombre;
			
		}
		if(edad>edadPasajeroMasViejo)
		{
			edadPasajeroMasViejo=edad;
			sexoPasajeroMasViejo=sexo;
			nombrePasajeroMasViejo=nombre;

		}
	
		if(sexo=="f" && (estadoCivil=="casado" || estadoCivil=="viudo"))
		{
			contadorMujeresCyV++;
		}
		if(sexo=="f")
		{
			contadorMujeresTotal++;
			acumuladorMujeres=acumuladorMujeres+edad;

		}
		if(sexo=="m" && estadoCivil=="soltero")
		{
			contadorHombresSolteros++;
			acumuladorHombresSolteros=acumuladorHombresSolteros+edad;
		}

		console.log(nombre);
		contador++;
		respuesta=prompt("¿quiere seguir?");

	}
	promedioMujeres=acumuladorMujeres/contadorMujeresTotal;
	promedioHombreSolteros=acumuladorHombresSolteros/contadorHombresSolteros;

	document.write("<br> el hombre casado más joven. "+nombrePasajeroMasJoven);
	document.write("<br> el sexo y nombre del pasajero/a más viejo. "+nombrePasajeroMasViejo+" y "+sexoPasajeroMasViejo);
	document.write("<br> la cantidad de mujeres que hay casadas o viudas."+contadorMujeresCyV);
	document.write("<br> el promedio de edad entre las mujeres. "+promedioMujeres);
	document.write("<br> El promedio de edad entre los hombres solteros. "+promedioHombreSolteros);








}
