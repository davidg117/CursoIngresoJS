function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var status;
	var temperatura;
	var pais;
	var respuesta;
	var contador;
	var acumulador;
	var maxTemp;
	var paisMaxTemp;
	var contadorPaisMaxTemp;

	contador=0;
	acumulador=0;
	contadorPaisMaxTemp=0;
	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre del pasajero");
		pais=prompt("ingrese nacionalidad");

		edad=prompt("ingrese edad");
		edad=parseInt(edad);

		while(isNaN(edad)||edad<0 || edad>110)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}

		sexo=prompt("ingrese sexo");

		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ingrese sexo");
		}

		status=prompt("ingrese estado civil");

		while(status!="soltero" && status!="casado"&&status!="viudo")
		{
			status=prompt("ingrese estado civil");
		}

		temperatura=prompt("ingrese temperatura del pasajero");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)||temperatura<36||temperatura>40)
		{
			temperatura=prompt("ingrese temperatura del pasajero");
			temperatura=parseInt(temperatura);
		}

		if(temperatura>maxTemp)// A)
		{
			maxTemp=temperatura;
			paisMaxTemp=nacionalidad;
			contadorPaisMaxTemp++;
		}




		console.log(nombre)
		contador++
		respuesta=prompt("¿desea seguir?");

	}
	console.log("el pais de la persona con mayor temperatura es: "+paisMaxTemp);


}



		/*if(status=="soltero")//B)
		{
			if(edad>17)
			{
				contador++;
				edad=maxEdad;
			}
			cantidadPasajerosMayorSolt++;

		}
		
		if(sexo=="f")//C)
		{
			if (status=="soltero"||status=="viudo")
			{
				status=sinMarido;
				contadorSinMaridos++;
			}
			cantidadSinMaridos++;
			acumuladorMujeresSinMaridos=acumuladorMujeresSinMaridos+sexo;
		}
		if(edad>60)
			{
				if(temperatura<38)
				{
					temperatura=pasajeroConFiebre;
					contadorDeFiebre++;
				}
				cantidadConFiebre++;
				acumuladorMayoresConFiebre=acumuladorMayoresConFiebre+edad;
			}
*/