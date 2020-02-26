//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
//sin asteristiscos en aert entre parentesis
function mostrar()
{
	/*var nombre="drake"
	alert(nombre);*/

	var contador;
	var acumulador;
	var maximo;
	var minimo;
	var numeroIngresado;
	var contadorPares;
	var nombre;
	var sexo;
	var maximoSexo;
	var maximoNombre;

	contador=0;
	acumulador=0;


	while(contador<10)
	{

		contador=contador+1;
		numeroIngresado=prompt("ingrese el "+contador+" numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado<0 ||numeroIngresado>10 )
		{
			numeroIngresado=prompt("Error, ingrese el "+contador+" numero");
			numeroIngresado=parseInt(numeroIngresado);

		}

		sexo=prompt("ingrese el "+contador+" sexo");
		while(isNaN(numeroIngresado) || sexo!="f" ||sexo!="m" )
		{

			sexo=prompt("Error, ingrese el "+contador+" sexo");

		}

		acumulador= acumulador+ numeroIngresado;

		if(numeroIngresado% 2==0)
		{
			contadorPares=contadorPares+1;

		}

		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(maximo<numeroIngresado || contador==1)
			{
				maximo=numeroIngresado;
				maximoSexo=sexo;
				maximoNombre=nombre;
			}
			else
			{

			}
		}
	}
}

