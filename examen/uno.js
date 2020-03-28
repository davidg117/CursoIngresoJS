function mostrar()
{
	var producto;
	var marca;
	var fabricante;
	var cantidad;
	var precio;
	var contador;

	contador=0;

	do
	{
		do
		{
			producto = prompt("Ingrese el producto."); 
		}
		while(!isNaN(producto) || producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		do
		{
			marca = prompt("Ingrese la marca del producto");
		}
		while(!isNaN(marca))
		do
		{
			fabricante = prompt("Ingrese el fabricante");
		}
		do
		{
			precio=prompt("Ingrese precio");
			precio=parseInt(precio);
		}while(isNaN(precio) || precio<100 || precio>300)
		do
		{
			cantidad=prompt("Ingrese cantidad");
			cantidad=parseInt(cantidad);
		}while(isNaN())



		contador++;
	}
	while(contador < 5);

	if()
	{
	}








}
	/*var producto;
	var marca;
	var fabricante;
	var cantidad;
	var precio;
	var contador;

	do
	{
		do
		{
			producto = prompt("Ingrese el producto.");
		}
		while(!isNaN(producto) || producto != "barbijo" && producto != "jabon" && producto != "alcohol");
		do
		{
			marca = prompt("Ingrese la marca del producto");
		}
		while(!isNaN(marca));
		do
		{
			fabricante = prompt("Ingrese el fabricante");
		}



		contador++;		
	}
	while(contador < 5);*/
