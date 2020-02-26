function mostrar()
{
	var i;
	var numeroPrimo;
	var bandera=0;

	numeroPrimo=prompt("Ingrese numero primo");
	numeroPrimo=parseInt(numeroPrimo);

	for(i=2;i<numeroPrimo;i+1)
	{
		console.log(i);
		if(numeroPrimo%i==0)
		{
			bandera=1;
		}

	}
	if(bandera==0)
	{
		alert("Es primo "+numeroPrimo);
	}


}//FIN DE LA FUNCIÓN