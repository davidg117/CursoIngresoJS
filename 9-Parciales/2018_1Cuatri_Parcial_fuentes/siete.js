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
	var edadMaxima;
	var sexoPasajeroMasViejo;
	var cantidadMujeresTotal;
	var promedioEdadMujeres;
	var promedioEdadHombresSolteros;
	var edadMujeres;
	var edadHombres;
	var cantidadMujeresCyV;

	respuesta="si";
	contador=0;
	cantidadMujeresCyV=0;
	cantidadMujeresTotal=0;
	edadMaxima=0;
	contadorHombresSolteros=0;
	edadHombres=0;
	edadMujeres=0;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre");

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);

		while(isNaN(edad) || edad>0 && edad<18 )
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

		while(!isNaN(estadoCivil) || estadoCivil!="casado" && estadoCivil!="divorciado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese estadoCivil");

		}


		if(contador==0 || sexo=="m" && estadoCivil=="casado" && edad<edadPasajeroMasJoven )
		{
			edadPasajeroMasJoven=edad;
			nombrePasajeroMasJoven=nombre;
			
		}
		if(contador==0)
		{
			edad=edadPasajeroMasViejo;
			sexo=sexoPasajeroMasViejo;
			nombre=nombrePasajeroMasViejo;

		}
	
			if(sexo=="f" && (estadoCivil=="casado" && estadoCivil=="viudo"))
			{
				cantidadMujeresCyV++;
			}

		console.log(nombre);
		contador++;
		respuesta=prompt("¿quiere seguir?");

	}

	promedioEdadMujeres=edadMujeres/cantidadMujeresTotal;
	promedioEdadHombresSolteros=edadHombres/contadorHombresSolteros;

	document.write("<br> el hombre casado más joven. "+nombrePasajeroMasJoven);
	document.write("<br> el sexo y nombre del pasajero/a más viejo. "+nombrePasajeroMasViejo+"y"+sexoPasajeroMasViejo);
	document.write("<br> la cantidad de mujeres que hay casadas o viudas."+cantidadMujeresCyV);
	document.write("<br> el promedio de edad entre las mujeres. "+promedioEdadMujeres);
	document.write("<br> El promedio de edad entre los hombres solteros. "+promedioEdadHombresSolteros);








}
