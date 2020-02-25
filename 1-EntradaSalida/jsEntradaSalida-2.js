/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*var nombre;
	nombre=prompt("¿Quien sos vos?");
	var lugar;
	lugar=prompt("¿Y de donde sos?");

	alert("Yo soy "+nombre+" Y vivo en "+lugar);*/
	var largo;
	var ancho;
	largo=prompt("¿Cual es el largo? ");
	largo=parseInt(largo);
	ancho=prompt("¿Cual es el ancho? ");
	ancho=parseInt(ancho);

	alert("El largo es de "+largo+" Y el ancho es de "+ancho);
	
}

