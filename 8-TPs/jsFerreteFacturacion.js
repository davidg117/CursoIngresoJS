/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var total;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	total=precio1+precio2+precio3;
	alert("total="+total);

	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var romedio;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	suma= precio1+precio2+precio3;
	promedio=suma/3;

	alert("el promedio es:"+promedio);



	
	
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var aumento;
	var suma;
	var precioFinal;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	aumento=1.21;
	suma=precio1+precio2+precio3;
	precioFinal=suma*aumento;

	alert("el precioFinal es="+precioFinal);


	
	
}