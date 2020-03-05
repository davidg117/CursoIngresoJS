
function mostrar()
{
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


}

