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
	var precioFinal
	var total;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;

	precioFinal=(precio1+precio2+precio3)*1,21;
	alert("el precioFinal es="+precioFinal);


	
	
}