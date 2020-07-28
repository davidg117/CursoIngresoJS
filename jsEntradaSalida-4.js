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
/*function mostrar()
{1
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
2
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
3
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

*/
