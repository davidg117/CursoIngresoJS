function mostrar()
{
	var sexo;
	sexo = prompt("ingrese f ó m .");

	while(sexo  ! ="f" && sexo ! ="m")
	{
		sexo=prompt("no forma parte del genero establecido, por favor ingreso f o m ")

	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN