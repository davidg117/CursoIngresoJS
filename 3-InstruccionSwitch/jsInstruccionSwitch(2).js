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