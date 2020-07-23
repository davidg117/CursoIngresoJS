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
	var cantidadLamparas;
	var lasMarcas;
	var precioBruto;
	var descuento1;
	var descuento2;
	var descuento3;
	var descuento4;
	var descuento5;
	var descuento6;
	var descuento7;
	var descuento8;

	cantidadLamparas=Cantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);

	lasMarcas=Marca.value;

	precioBruto=cantidadLamparas*35;

	descuento1=precioBruto*1.5;
	descuento2=precioBruto*1.4;
	descuento3=precioBruto*1.3;
	descuento4=precioBruto*1.25;
	descuento5=precioBruto*1.2;
	descuento6=precioBruto*1.15;
	descuento7=precioBruto*1.1;
	descuento8=precioBruto*1.05;


	if(cantidadLamparas>=6)
	{
		alert("el precio es:"+descuento1);
	}if(cantidadLamparas==5&&lasMarcas=="ArgentinaLuz")
	{
		else if()
		{
			
		}
	}


}//FIN DE LA FUNCION
/*var cantidadLamparas;
	var lasMarcas;
	var precioBruto;
	var descuento1;
	var descuento2;
	var descuento3;
	var descuento4;
	var descuento5;
	var descuento6;
	var descuento7;
	var descuento8;

	cantidadLamparas=Cantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);

	lasMarcas=Marca.value;

	precioBruto=cantidadLamparas*35;

	descuento1=precioBruto*1.5;
	descuento2=precioBruto*1.4;
	descuento3=precioBruto*1.3;
	descuento4=precioBruto*1.25;
	descuento5=precioBruto*1.2;
	descuento6=precioBruto*1.15;
	descuento7=precioBruto*1.1;
	descuento8=precioBruto*1.05;


	if(cantidadLamparas>=6)
	{
		alert("el precio es:"+descuento1);
	}
	if(cantidadLamparas==5&&lasMarcas=="ArgentinaLuz")
	{
		alert("el precio es:"+descuento2);
	}else
	{
		alert("el precio es:"+descuento3);
	}
	if(cantidadLamparas==4)
	{
		if(asMarcas=="ArgentinaLuz"||"FelipeLamparas")
		{
			alert("el precio es:"+descuento4);
		}else
		{
			alert("el precio es:"+descuento5);
		}
	}
	if(cantidadLamparas==3)
	{
		if(lasMarcas="ArgentinaLuz")
		{
			alert("el precio es:"+descuento6);
		}
	}

*/

