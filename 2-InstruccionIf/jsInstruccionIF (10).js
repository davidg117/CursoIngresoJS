function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1;

	if(numeroRandom>8)
	{
		console.log("EXCELENTE "+numeroRandom);
	}else
	{
		if(numeroRandom>4)
		{
			console.log("APROBÓ "+numeroRandom);
		}else
		{
			console.log("Vamos, la proxima se puede "+numeroRandom);
		}
	}

}//FIN DE LA FUNCIÓN