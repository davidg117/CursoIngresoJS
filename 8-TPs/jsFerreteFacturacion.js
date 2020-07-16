/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*///promedio=(A+B+C)/3

function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;

	precio1=PrecioUno.value;//profe despues cuando pueda me explica para atualizar
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	var suma;

	suma=precio1+precio2+precio3;

	alert("El total: "+suma);

}
function Promedio () 
{	
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1=PrecioUno.value;
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	promedio=(precio1+precio2+precio3)/3;

	alert("El promedio es: "+promedio);

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var aumento;

	precio1=PrecioUno.value;
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	suma=precio1+precio3+precio3;

	aumento=suma*1.21;

	alert("El total es: "+aumento);

	
}