function mostrar()
{
	var producto;
	var cantidad;
	var precio;
	var respuesta;

	respuesta="si";

	while(respuesta=="si")
	{
		producto=prompt("ingrese producto");
		while(producto!="arena"&&producto!="cal"&&producto!="cemento")
		{
			producto=prompt("ingrese producto");
		}

		cantidad=prompt("ingrese cantidad");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)||cantidad<0)
		{
			cantidad=prompt("ingrese cantidad");
			cantidad=parseInt(cantidad);
		}
		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(isNaN(precio)||precio<0)
		{
			precio=prompt("ingrese precio");
			precio=parseInt(precio);
		}
		


	}
}
