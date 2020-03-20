function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")
	{
		respuesta=prompt("Ingrese un numero porfavor");
		if(!isNaN(respuesta))
		{
			respuesta=parseInt(respuesta);
			if(respuesta>0)
			{
				positivo=respuesta+positivo;
			}
			else
			{
				if(respuesta<0)
				{
					negativo=negativo*respuesta;
				}
			}
		}



	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}