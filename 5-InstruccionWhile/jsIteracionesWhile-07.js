/*

Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)


3-Enunciado
   Llegan vuelos con vacunas de distintos lugares del mundo
            Mientras el usuario quiera se debe registrar de cada vuelo
            -Origen (“Oriente”, “Occidente”, “Secreto”)
            -Cantidad de vacunas (entre 500000 y 2500000
            -Costo del vuelo (entre 1 millón y 5 millones de pesos)
            Informar:
            a- El origen que envió menor cantidad de vacunas
            b- El promedio por vuelo de vacunas llegadas de Occidente
            c- El total sin descuentos a pagar por los gastos de los viajes
            d- Si en total se recibieron mas de 10 millones de vacunas se hace
            un descuento de 25%, Si se recibieron entre 5 y 8 millones el
            descuento es del 15% con menor cantidad no hay descuento.
            Informar si hubo descuento de cuanto fue y el importe final con
            descuento

*/

function mostrar()
{
  let origen;
  let cantidadVacunas;
  let costoVuelo;
  let respuesta;
  let mensaje;
  let acumuladorOriente;
  let acumuladorOccidente;
  let acumuladorSecreto;
  let menorVacunas;
  let contadorOccidente;
  let promedioOccidente;
  let acumuladorPrecio;
  let descuento;
  let montoConDescuento;
  let montoDescontado;
  let acumuladorVacunas;
  
  
  respuesta = true;

  acumuladorOriente = 0;
  acumuladorSecreto = 0;
  acumuladorOccidente = 0;
  contadorOccidente = 0;
  acumuladorPrecio = 0;
  acumuladorVacunas = 0;


  while (respuesta == true) 
    {
        origen = prompt("Ingrese su origen");

        while(origen != "oriente" && origen != "occidente" && origen !="secreto")
        {
          origen = prompt("Error. Ingrese su origen");
        }

        cantidadVacunas = prompt("Ingrese la cantidad de vacunas");
        cantidadVacunas = parseInt(cantidadVacunas);

        while(cantidadVacunas < 50 || cantidadVacunas > 250)
        {
          cantidadVacunas = prompt("Error. Ingrese la cantidad de vacunas");
          cantidadVacunas = parseInt(cantidadVacunas);
        }

        costoVuelo = prompt("Ingrese el costo de vuelo");
        costoVuelo = parseInt(costoVuelo);

        while(costoVuelo < 100 || costoVuelo > 500)
        {
          costoVuelo = prompt("Error. Ingrese el costo de vuelo");
          costoVuelo = parseInt(costoVuelo);
        }

        switch(origen)
        {
          case "occidente":
            acumuladorOccidente += cantidadVacunas;
            contadorOccidente ++;
          break;
         
          case "oriente":
            acumuladorOriente += cantidadVacunas;
          break;
          
          case "secreto":
            acumuladorSecreto += cantidadVacunas;
          break;
        }

        acumuladorPrecio += costoVuelo;

        acumuladorVacunas += cantidadVacunas;

        respuesta = confirm("Desea continuar?");    
    }

  if(acumuladorOccidente < acumuladorOriente && acumuladorOccidente < acumuladorSecreto)  
  {
    menorVacunas = "Occidente";
  }
  else
  {
    if(acumuladorOriente < acumuladorOccidente && acumuladorOriente < acumuladorSecreto)
    {
      menorVacunas = "Oriente";
    }
    else
    {
      menorVacunas = "Secreto";
    }
  }

  mensaje = "El origen que envió menor cantidad de vacunas es " + menorVacunas;
  
  if(contadorOccidente > 0)
  {
    promedioOccidente = cantidadVacunas / contadorOccidente;
    mensaje += "<br> El promedio por vuelo de vacunas llegadas de Occidente es " + promedioOccidente;
  }
  
  
  mensaje += "<br> El total sin descuentos a pagar por los gastos de los viajes " + acumuladorPrecio;
  
  if(acumuladorVacunas > 100)
  {
    descuento = 25;
  }
  else
  {
    if(acumuladorVacunas > 50 && acumuladorVacunas < 80)
    {
      descuento = 15;   
    }
  }
  
  if(descuento > 0)
  {
    montoDescontado = acumuladorPrecio * descuento / 100;
    montoConDescuento = acumuladorPrecio - montoDescontado;
    
    mensaje += "<br> El precio final con descuento es de " + montoConDescuento + "se aplico un descuento de " + descuento;
  }
  
  document.write(mensaje);
}