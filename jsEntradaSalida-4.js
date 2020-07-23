/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
//";" para saber donde empieza y donde termina
function mostrar()
{
	var nombre;
	var apellido;
	nombre=prompt("Colocar el nombre",);
	apellido=prompt("Ponga apellido");
	document.getElementById('elNombre').value=nombre;

	alert("Se llama "+nombre+" Y apellido es "+apellido);

}



/*function CalcularPrecio () 
{

	var cantidaddeLamparas;
	var marca;
	var precioBruto;
	var descuento;
	var precioDescuento;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);
	marca=document.getElementById('Marca').value;
	precioBruto=cantidadLamparas*35;
	console.info("bruto" , precioBruto);


	switch(cantidadDeLamparas)
	{
		case 5:

			switch(marca)
			{
				case "ArgentinaLuz":
					descuento=40;
				break;
				default:
				descuento=30
				break;
			}

			break;
		case 4:	
			switch(marca)
			{
				case:"ArgentinaLuz"
				case:"FelipeLamparas"
					descuento=25;
				break;
				default:
					descuento=20;
				break;
			}
			break;
		case 3:
			switch(marca)
			{
				case"ArgentinaLuz"
				descuento=15
				break;
				case"FelipeLamparas"
				descuento=10
				break;
				default:
				descuento=5
				break;
			}
			break;
		case 1:   					//hasta que no se pone break; lo toma como un solo case//
		case 2:
			descuento=0;
			break;
		default:
			descuento=50;
			break;			
					

	}

/*
	descuento=0;
	
	if(cantidadLamparas>5)
	{
		descuento=50;

	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marca=="ArgentinaLuz")
				{
					descuento=40;
				}
				else
				{
					descuento=30;
				}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas" )
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}


			}
			else
			{
				if(cantidaddelamparas==3)
				{
					if(marca=="ArgentinaLuz")
					{
						descuento=15;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							descuento=10;
						}
						else
						{
							descuento=5;
						}
					}

				}
			}
		}
	}*/
	

	/*precioDescuento=precioBruto-precioBruto*descuento/100;
	console.log(precioDescuento);
	precioDescuento=parseInt(precioDescuento);
	document.getElementById('precioDescuento').value=precioDescuento



 	
}//FIN DE LA FUNCION*/
