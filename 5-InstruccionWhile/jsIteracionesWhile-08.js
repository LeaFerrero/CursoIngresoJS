/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contadorDenumeros;
	let acumuladorDePositivos;
	let multiplicadorDeNegatvos;
	let numero;
	let respuesta;

	respuesta = "si"
	acumuladorDePositivos = 0;
	multiplicadorDeNegatvos = 1;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseFloat(numero);
		
		switch(Math.sign(numero))
		{
			case 1:
				acumuladorDePositivos += numero;
			break;

			case -1:
				multiplicadorDeNegatvos *= numero;
			break;
		}	
		
		respuesta = prompt("Quiere ingresar otro numero?");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById("txtIdSuma").value = acumuladorDePositivos;
	document.getElementById("txtIdProducto").value = multiplicadorDeNegatvos;

}//FIN DE LA FUNCIÓN