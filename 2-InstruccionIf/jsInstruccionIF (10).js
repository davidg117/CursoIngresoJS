function mostrar()
{
	var numeroRandom;
	var max;
	var min;

	max=11;
	min=1;

	numeroRandom=Math.floor(Math.random() * (max - min) ) + min;
	
	if(numeroRandom>8)
	{
		alert("EXCELENTE");
	}else
	{
		if(numeroRandom>4)
		{
			alert("APROBÓ");
		}else
		{
			alert("Vamos, la proxima se puede");
		}
	}
	console.log(numeroRandom);
	

}//FIN DE LA FUNCIÓN