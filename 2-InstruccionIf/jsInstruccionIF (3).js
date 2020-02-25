function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>"17")
	{
		alert("mayores");
	}
	else
	{
		alert("menor");
	}

}//FIN DE LA FUNCIÓN