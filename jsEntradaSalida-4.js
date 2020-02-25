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

