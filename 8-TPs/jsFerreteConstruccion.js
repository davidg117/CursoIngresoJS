/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

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