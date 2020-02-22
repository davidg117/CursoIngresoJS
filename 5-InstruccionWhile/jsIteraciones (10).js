function mostrar()
{

	var contador;// 1)Asegurarme de la variable inicializando
	var respuesta;
	var numeroIngresado;
	var acumulador;
	var notaAlumno;
	//var sexoAlumno;//si no es numero ||(o distinto a estos)
	var buenaNota;
	var malaNota;
	var bandera;
	buenaNota
	malaNota
	acumulador=0;
	contador=0; 
	respuesta="si";
	bandera="no esta aca"

	//while(contador<5)//2)Defino la logica
	while(respuesta=="si")
	{

		contador=contador+1;//el contador nunca debe estar en el medio,puede estar en el primero o ultimo 
		numeroIngresado=prompt("Ingrese el "+contador+"º numero");
		numeroIngresado=parseInt(numeroIngresado);
		//while(numeroIngresado<0 && numeroIngresado>9)no
		//while(!(numeroIngresado<0 && numeroIngresado>9)casi
		while(numeroIngresado<0 || numeroIngresado>9)
		{

			numeroIngresado=prompt("error, reingrese "+contador);
			numeroIngresado=parseInt(numeroIngresado);



		}
		
		if(contador==1)//bandera se usa poca para guiarse
		{
	
			buenaNota=notaAlumno;
			malaNota=notaAlumno;


		}
		else
		{
			if(notaAlumno>buenaNota)
			{
				buenaNota=notaAlumno;
				buenaNota=nombre
			}
			if(notaAlumno<malaNota)
			{
				malaNota=notaAlumno;
			}

		}



		acumulador=acumulador+ numeroIngresado;//variable= valiable +(-,*,/,etc) a X
		respuesta=prompt("si para seguir");
		//acumulador y las cuentas se ponen abaj

		
	
	}
	//promediodenotas=acumulador/contador;

	console.log("contador= "+contador);
	console.log("acumulador= "+acumulador);



}//FIN DE LA FUNCIÓN