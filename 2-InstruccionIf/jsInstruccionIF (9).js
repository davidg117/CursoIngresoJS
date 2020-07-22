function mostrar()
{
	var numeroRandom1;
	var numeroRandom2;
	var max;
	var min;
	var multiplicar;

	max=51;
	min=1;

	numeroRandom1=Math.floor(Math.random() * (max - min) ) + min;
	numeroRandom2=Math.floor(Math.random() * (max - min) ) + min;

	if((numeroRandom1&&numeroRandom2)%2==0)
	{
		alert("se multiplica");
	}else
	{
		alert("se divide");
	}
	if(numeroRandom1)
	{
		

	}
}




/*function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor(Math.random() * 10) + 1;//Math.floor(Math.random() * (max - min) ) + min;
	console.log(numeroRandom);

}//FIN DE LA FUNCIÓN*/