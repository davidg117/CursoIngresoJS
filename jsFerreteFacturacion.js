
/*function Sumar () 
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
EJERCICIO 2
function Rectangulo () 
{
	var cantidadDeAlambre;
	var largo;
	var ancho;
	var perimetro;
	var totalHilos;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=2*largo+2*ancho;
	totalHilos=perimetro*3;

	alert("se debe comprar "+totalHilos+" metros de alambre");


}
function Circulo () 
{
	var cantidadDeAlambre;
	var circunferencia;
	var radio;
	var totalHilos;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	circunferencia=2*Math.PI*radio;
	circunferencia=parseInt(circunferencia);
	totalHilos=circunferencia*3;
	totalHilos=parseInt(totalHilos);

	alert("se debe comprar "+totalHilos+" metros de alambre");

}
function Materiales () 
{
	var ancho;
	var largo;
	var cantidadCemento;
	var cantidadCal;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	cantidadCemento=(largo*ancho)*2;
	cantidadCal=(largo*ancho)*3;

	alert("Se necesitan "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal");


}