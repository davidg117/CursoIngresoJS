function mostrar()
{
	var laEdad;
	laEdad=edad.value;

	if(laEdad>18)
	{
		alert("mayor");
	}
	if(laEdad<18&&laEdad>12)
	{
		alert("adolescente");
	}else
	{
		alert("niño");
	}

}//FIN DE LA FUNCIÓN