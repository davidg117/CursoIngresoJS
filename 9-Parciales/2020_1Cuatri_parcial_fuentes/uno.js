
function mostrar()
{
	var product;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador;
	var contadorAlcohol;
	var alcoholBarato;
	var todosLosAlcoholesBaratos;
	var quienHaceAlcoholBarato;
	var promedioCompra;
	var cantidadMayor;
	var acumuladorProduct;

	contador=0;
	contadorAlcohol=0;
	acumuladorProduct=0;

	while(contador<5)
	{
		contador++
		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese al fabricante");

		product=prompt("¿Que producto es?");
		while(product!="barbijo"&& product!="jabón"&& product!="alcohol")
		{
			product=prompt("¿Que producto es?");
		}

		precio=prompt("Ingrese el precio");
		precio=parseInt(precio);
		while(isNaN(precio)||precio<100 || precio>300)
		{
			precio=prompt("Ingrese el precio");
			precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese el cantidad");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)||cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Ingrese el cantidad");
			cantidad=parseInt(cantidad);
		}

		if(product=="alcohol"&&precio<alcoholBarato)// A)
		{
			contadorAlcohol++;
			alcoholBarato=precio;
			todosLosAlcoholesBaratos=cantidad;
			quienHaceAlcoholBarato=fabricante;
		}

		if(cantidadMayor>900)// B)
		{
			contador++;
			cantidadMayor=cantidad;
			acumuladorProduct=producto+acumuladorProduct;
			promedioCompra=acumuladorProduct/contador;
		}

		if()
		{

		}





	}



}
