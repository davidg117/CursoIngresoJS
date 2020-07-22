function mostrar()
{
	var laEdad;
	var civilStatus;

	laEdad=edad.value;
	civilStatus=estadoCivil.value;

	if(laEdad<18)
	{
		if (civilStatus!="Soltero")
		{
			alert("'Es muy pequeño para NO ser soltero");
		} 
		
	}

	


}//FIN DE LA FUNCIÓN

