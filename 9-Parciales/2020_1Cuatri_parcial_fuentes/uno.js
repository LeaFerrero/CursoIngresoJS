/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
*/

function mostrar()
{
    let tipo;
    let precio;
    let cantiadUnidades;
    let marca;
    let fabricante;
    let iteracion;
    let banderaAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;
    let precioAlcoholBarato;
    let mensaje;
    let acumuladorBarbijo;
    let acumuladorAlcohol;
    let acumuladorJabon;
    let tipoMasUnidades;
    let promedioMasUnidades;
    

    iteracion = 0;
    banderaAlcoholBarato = false;
    acumuladorJabon = 0;
    acumuladorBarbijo = 0;
    acumuladorAlcohol = 0;
    
    while(iteracion < 2)
    {
        tipo = prompt("ingrese un tipo")

        while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
        {
            tipo = prompt("ingrese un tipo")

        }

        // precio = prompt("Ingrese un precio");
        // precio = parseFloat(precio);

        // while(precio < 100 || precio > 300)
        // {
        //     precio = prompt("Error. Ingrese un precio")
        //     precio = parseFloat(precio);
        // }
      
        cantiadUnidades = prompt("Ingrese la cantidad de unudades");
        cantiadUnidades = parseInt(cantiadUnidades);

        while(cantiadUnidades < 1 || cantiadUnidades> 100)
        {
            cantiadUnidades = prompt("Error. Ingrese la cantidad de unudades");
            cantiadUnidades = parseInt(cantiadUnidades);
        }

        // marca = prompt("ingrese la marca")
        
        // fabricante = prompt("ingrese un fabricante")

        switch(tipo)
        {
            case "barbijo":
                acumuladorBarbijo += cantiadUnidades;
            break;

            case "alcohol":
                acumuladorAlcohol += cantiadUnidades;

                if(precio < precioAlcoholBarato  || banderaAlcoholBarato == false)
                {
                    precioAlcoholBarato = precio;
                    cantidadAlcoholBarato = cantiadUnidades;
                    fabricanteAlcoholBarato = fabricante
                    banderaAlcoholBarato = true;
                }
            break;
            
            case "jabon":
                acumuladorJabon += cantiadUnidades;
            break;
        }
        
          
        iteracion ++;
    }

    if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
    {
        tipoMasUnidades = "Alcohol"
        promedioMasUnidades = acumuladorAlcohol / iteracion;
    }
    else
    {
        if(acumuladorBarbijo > acumuladorJabon)
        {   
            tipoMasUnidades = "Barbijo"
            promedioMasUnidades = acumuladorBarbijo / iteracion;
        }
        else
        {   
            tipoMasUnidades = "Jabon"
            promedioMasUnidades = acumuladorJabon / iteracion;
        }
    }

    mensaje = "La cantidad de unidades del alcohol mas barato es " + cantidadAlcoholBarato + " y su fabricante es " + fabricanteAlcoholBarato;

    mensaje += "<br> El tipo con mas unidades es " + tipoMasUnidades + " el promedio por compra es " + promedioMasUnidades;


    document.write(mensaje);
}
