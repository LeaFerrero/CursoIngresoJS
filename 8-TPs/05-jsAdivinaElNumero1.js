/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
let numeroIngresado;
let contador;
let mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100 + 1);
  //alert(numeroSecreto );

  alert(numeroSecreto);
}

function verificar()
{ 
  numeroIngresado = document.getElementById("txtIdNumero").value;

  numeroIngresado = parseInt(numeroIngresado);

  contador = 0;

  if(numeroIngresado < 1 || numeroIngresado > 100)
  {
    mensaje = "Ingrese un numero del 1 al 100"
  }
  else
  {
    switch(numeroSecreto)
    {
      case undefined:
        mensaje = "Genere un numero";
      break;
      
      case numeroIngresado:
        contador ++;
        mensaje = "Usted es un ganador!!! y en solo " + contador + " intentos.";
      break;
      
      default:
        if(numeroIngresado < numeroSecreto)
        {
          contador ++;
          mensaje = "Falta...";
        }
        else
        {
          contador ++;
          mensaje = "Se pasó...";
        } 
      break;
    }
  } 

  document.getElementById("txtIdIntentos").value = contador;

  alert(mensaje);
}