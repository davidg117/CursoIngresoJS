function mostrar(){
    var nombre;
    var edad;
    var sexo;
    var estadoCivil;
    var respuesta;
    //Casado más joven
    var edadCasadoJoven;
    var nombreCasadoJoven;
    //Pasajero más viejo
    var edadMasViejo;
    var sexoMasViejo;
    var nombreMasViejo;
    //Cantiadad mujeres casadas o viudas
    var contadorMujeresCasoViu;
    //Promedio edad mujeres
    var contadorMujeres;
    var sumadorMujeres;
    var promedioMujeres;
    //Promedio edad hombres solteros
    var contadorHombresSolteros;
    var sumadorHombresSolteros;
    var promedioHombresSolteros;

    edadCasadoJoven = 1000;
    nombreCasadoJoven = ""
    edadMasViejo = 0;
    contadorMujeresCasoViu = 0;
    contadorMujeres = 0;
    sumadorMujeres = 0;
    contadorHombresSolteros = 0;
    sumadorHombresSolteros = 0;

    do {
        do {
            nombre=prompt("Ingrese nombre del pasajero:");
        } while(nombre=="")

        do {
            edad=parseInt(prompt("Ingrese edad:"));
        } while(isNaN(edad) || edad < 18 || edad > 100)

        do {
            sexo=prompt("Ingrese sexo [F|M]:");
        } while(sexo != "F" && sexo != "M")
        
        do {
            estadoCivil=prompt("Ingrese estado civil [soltero|casado|viudo]:");
        } while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")

        //a) Guardar casado más joven
        if(edad < edadCasadoJoven && estadoCivil == "casado"){
            edadCasadoJoven = edad;
            nombreCasadoJoven = nombre;
        }
        //b) Persona mas vieja
        if(edad > edadMasViejo){
            edadMasViejo = edad;
            sexoMasViejo = sexo;
            nombreMasViejo = nombre;
        }
        //c) cantidad mujeres casadas o viudad
        if( sexo == "F" && (estadoCivil=="casado" || estadoCivil=="viudo") ){
            contadorMujeresCasoViu++;
        }
        //d) Promedio edad mujeres
        if(sexo == "F"){
            contadorMujeres++;
            sumadorMujeres = sumadorMujeres + edad;
        }
        //e) Promedio edad hombres solteros
        if(sexo=="M" && estadoCivil == "soltero"){
            contadorHombresSolteros++;
            sumadorHombresSolteros = sumadorHombresSolteros + edad;
        }
        
        respuesta=prompt("Cargar otra persona? [si|no]")

    } while (respuesta=="si")

    //a)
    if(nombreCasadoJoven==""){
        document.write("<br> a) No hay ningún hombre casado")
    }else{
        document.write("<br> a) El nombre del hombre casado más joven: "+nombreCasadoJoven)
    }
    //b)
    document.write("<br> b) El pasajero mas viejo es "+nombreMasViejo+" de sexo "+sexoMasViejo)
    //c)
    if(contadorMujeresCasoViu==0){
        document.write("<br> c) No mujeres casadas o viudas")
    }else{
        document.write("<br> Cantidad de mujeres casadas o viudas: "+contadorMujeresCasoViu)
    }
    //d)
    if(contadorMujeres==0){
        document.write("<br> d) No hay mujeres")
    }else{
        promedioMujeres=sumadorMujeres/contadorMujeres
        document.write("<br> d) Promedio de edad entre muejres:" + promedioMujeres)
    }
    //e)
    if(contadorHombresSolteros==0){
        document.write("<br> d) No hay hombres solteros")
    }else{
        promedioHombresSolteros=sumadorHombresSolteros/contadorHombresSolteros
        document.write("<br> d) Promedio de edad de hombres solteros:" + promedioHombresSolteros)
    }

}