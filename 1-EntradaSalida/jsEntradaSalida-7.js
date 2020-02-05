/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var primernumero;
    var segundonumero;
    var resultado;

    primernumero=document.getElementById('numeroUno').value;
    segundonumero=document.getElementById('numeroDos').value;
   
    primernumero=parseInt(primernumero);
    segundonumero=parseInt(segundonumero);
    resultado=primernumero+segundonumero;
    console.log(resultado);
    
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

