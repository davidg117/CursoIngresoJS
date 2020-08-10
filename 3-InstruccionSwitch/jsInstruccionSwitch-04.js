function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño);
	{
		case "Febrero":
			alert("tiene 28 dias");
			break;
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("tiene 30 dias");
			break;
		default:
			alert("teine 31 dias");
			break;	
	}
	

	
	



}//FIN DE LA FUNCIÓN