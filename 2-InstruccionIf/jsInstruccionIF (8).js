function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!=="Soltero")
	{
		alert("No hacer nada");

	}else
	{
		alert("Es Soltero y no es menor");
	}

	


}//FIN DE LA FUNCIÓN