function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>"18")
	{
		alert("adulto");

	}
	if(edad<"17"&&edad>"13")
	{
		alert("adolescente");

	}
	if(edad<"13")
	{
		alert("niño");

	}

//tomo la edad  




}//FIN DE LA FUNCIÓN

