/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let numero;
	let acumulador;
	let respuesta;
	let contador;
	let promedio;

	acumulador = 0;
	contador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseFloat(numero);
		acumulador += numero;
		respuesta = prompt("Quiere ingresar otro numero?").toLocaleLowerCase();
		contador ++;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}
