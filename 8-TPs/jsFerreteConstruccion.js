/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var cantidAlambre;
	var rectLargo;
	var rectAncho;
	var perimetro;
	var totalAlambre

	rectLargo=Largo.value;
	rectAncho=Ancho.value;

	rectLargo=parseInt(rectLargo);
	rectAncho=parseInt(rectAncho);

	perimetro= (rectLargo*2)+(rectAncho*2)

	totalAlambre=perimetro*3;


	alert("la cantidad necesaria es: "+totalAlambre);

}
function Circulo () 
{
	var circRadio;
	var perimetro;
	var totalAlambre;

	circRadio=Radio.value;
	circRadio=parseInt(circRadio);

	perimetro=2*circRadio*Math.PI;

	//perimetro=Math.ceil(perimetro)
	//console.log(perimetro);
	/*console.log(perimetro.toFixed(3));
	/*console.log(Math.round(perimetro));
	console.log(Math.floor(perimetro));*/

	totalAlambre=perimetro*3;

	alert("eL TOTAL es: "+totalAlambre);

	console.log()



}
function Materiales () 
{
	var matLargo;
	var matAncho;
	var bolsasCemento;
	var bolsasCal;
	var area;

	matLargo=Largo.value;
	matAncho=Ancho.value;

	matAncho=parseInt(matAncho);
	matLargo=parseInt(matLargo);

	area=matLargo*matAncho

	bolsasCemento=area*2;
	bolsasCal=area*3;

	alert("Se requieren "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal");


}