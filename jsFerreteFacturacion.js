
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


}function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño= document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Enero":
		alert("que comiences bien el año!!!.");
		break;
	case "Marzo":
		alert("a clases!!!.");
		break;
	case "Julio":
		alert("se vienen las vacaciones!!!.");
		break;
	case"Diciembre":
		alert("Felices fiesta!!!.");
		break;


	
}
function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño=document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio.");
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	default:
		alert("Falta para el invierno.");
		break;
		



}



}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var mesDelAño; 
mesDelAño=document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;
	default:
		alert("Este mes tiene 30 o más días");
		break;


}
	
	


}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var mesDelAño; 
mesDelAño=document.getElementById('mes').value;

switch(mesDelAño)
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
function mostrar()
{
//tomo la edad  
var laHora;
laHora=document.getElementById('hora').value;

switch(laHora)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	case "12":
		alert("es de mañana");
		break;


}
	
	



}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var laHora;
laHora=document.getElementById('hora').value;

switch(laHora)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
		alert("es de mañana");
		break;
	
	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
	case "17":
	case "18":
	case "19":
		alert("es de tarde");
		break;
	case "20":
	case "21":
	case "22":
	case "23":
	case "24":
	case "0":
	case "1":
	case "2":
	case "3":
	case "4":
	case "5":
	case "6":
		alert("es de noche");
		break;
	default:
		alert("no existe esa hora");
		break;


}



}//FIN DE LA FUNCIÓN