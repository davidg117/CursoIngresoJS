/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
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
	

	precioDescuento=precioBruto-precioBruto*descuento/100;
	console.log(precioDescuento);
	precioDescuento=parseInt(precioDescuento);
	document.getElementById('precioDescuento').value=precioDescuento



 	
}//FIN DE LA FUNCION

