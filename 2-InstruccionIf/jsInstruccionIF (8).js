function mostrar()
{
	var laEdad;
	var civilStatus;

	laEdad=edad.value;
	civilStatus=estadoCivil.value;
	if(laEdad>18&&civilStatus=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN