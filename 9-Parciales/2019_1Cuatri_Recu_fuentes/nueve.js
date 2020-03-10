
function mostrar()
{
	var nombreAlumno;
	var sexoAlumno;
	var edadAlumno;
	var notaFinal;
	var respuesta;
	var contador;
	var acumulador;
	var ChicosAprobadosEnTotal;
	var contadorDeNenes;
	var acumuladorDeNenes;
	var contadorDeGrandes;
	var acumuladorDeGrandes;
	var contadorDeJovenes;
	var acumuladorDeJovenes;
	var contadorChicas;
	var acumuladorChicas;
	var contadorChicos;
	var acumuladorChicos;


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

		if(notaFinal>4 && sexoAlumno!="M")
		{
			ChicosAprobadosEnTotal++;

		}
		if(edadAlumno<18 && notaFinal>4)
		{
			contadorDeNenes++;
			acumuladorDeNenes=acumuladorDeNenes+notaFinal;

		}else
		{
			if(edadAlumno>18)
			{
				contadorDeGrandes++;
				acumuladorDeGrandes=acumuladorDeGrandes+notaFinal;

			}
			if(edadAlumno>12 || edadAlumno<17)
			{
				contadorDeJovenes++;
				acumuladorDeJovenes=acumuladorDeGrandes+notaFinal;
			}


		}
		if(sexoAlumno= "F")
		{
			contadorChicas++;
			acumuladorChicas=acumuladorChicas+notaFinal;

		}else
		{
			contadorChicos++;
			acumuladorChicos=acumuladorChicos+notaFinal;

		}



		respuesta=prompt("¿Quiere pasar a la siguiente persona?");
	}
	





}

