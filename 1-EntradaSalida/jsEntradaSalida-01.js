
/* 
	3.  Debemos realizar un programa que lleve el registro de los partidos jugados por nuestro equipo.
	 No se sabe cuántos.
    Se deberá cargar en cada entrada el nombre del equipo contrario, si jugamos de local o visitante(validar) ,
	 los goles hechos por nuestro equipo y los goles hechos por el equipo contrario (validar,
		 la cantidad de goles no puede ser negativo).
    El programa deberá evaluar la cantidad de goles de cada equipo y determinará si fue empate, victoria o derrota.
    Al final se deberá mostrar:
    a) el promedio de victorias de nuestro equipo
    b) cantidad de goles hechos y recibidos.
    c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
    d) promedio de victorias como local y promedio de derrotas como visitante.
    e) nombre y cantidad de goles del equipo que nos hizo más goles.


*/

function mostrar()
{   
    let nombreContrario;
    let localVisitante;
    let cantidadGolesEquipo;
    let cantidadGolesContrario;
    let respuesta;
    let contadorVictorias;
    let contadorDerrotas;
    let contadorEmpate;
    let contadorPartidos;
    let promedioVictorias;
    let acumuladorGolesEquipo;
    let acumuladorGolesContrario;
    let banderaVictoria;
    let golesPrimeraVictoria
    let rivalPrimeraVictoria;
    

    respuesta = true;
    contadorVictorias = 0;
    contadorDerrotas = 0;
    contadorEmpate = 0;
    contadorPartidos = 0;
    acumuladorGolesEquipo = 0;
    acumuladorGolesContrario = 0;
    banderaVictoria = false;
    
    while (respuesta == true)
    {   
        nombreContrario = prompt("Ingrese equipo contrario");

        localVisitante = prompt("Ingrese local o visitante")
        
        while(localVisitante != "local" && localVisitante != "visitante")
        {
            localVisitante = prompt("Ingrese local o visitante")
        }

        cantidadGolesEquipo = prompt("Ingrese cantidad de goles del equipo");
        cantidadGolesEquipo = parseInt(cantidadGolesEquipo);
        
        while(cantidadGolesEquipo < 0) 
        {
            cantidadGolesEquipo = prompt("Ingrese cantidad de goles del equipo");
            cantidadGolesEquipo = parseInt(cantidadGolesEquipo);
        }

        cantidadGolesContrario = prompt("Ingrese la cantidad de goles del equipo contrario");
        cantidadGolesContrario = parseInt(cantidadGolesContrario);
        while(cantidadGolesContrario < 0) 
        {
            cantidadGolesContrario = prompt("Ingrese la cantidad de goles del equipo contrario");
            cantidadGolesContrario = parseInt(cantidadGolesContrario);
        }

        if(cantidadGolesEquipo > cantidadGolesContrario)
        {
            contadorVictorias ++;

            if(cantidadGolesEquipo > golesPrimeraVictoria && bandera == false)
            {
                golesPrimeraVictoria = cantidadGolesEquipo;
                rivalPrimeraVictoria = nombreContrario
                bandera = true;
        
            }
        }
        else
        {
            if(cantidadGolesContrario == cantidadGolesContrario)
            {
                contadorEmpate ++;
            }
            else
            {
                contadorEmpate ++;
            }
        }


        acumuladorGolesContrario += cantidadGolesContrario;
        acumuladorGolesEquipo += cantidadGolesEquipo;

        contadorPartidos ++;
        respuesta = confirm("Desea continuar?");    
    }

    promedioVictorias = contadorPartidos / contadorVictorias 

    mensaje = "El promedio de victorias de nuestro equipo es " + promedioVictorias;
    mensaje += " <br> Cntidad de goles hechos " + acumuladorGolesEquipo +" y recibido " + cantidadGolesContrario;
    mensaje += " <br> Lacantidad de goles realizado en nuestra primer " + golesPrimeraVictoria + " victoria y el nombre del equipo rival " + nombreContrario
        
    document.write(mensaje);
}  
