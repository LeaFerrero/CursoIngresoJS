/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorDePositivos;
	let multiplicadorDeNegatvos;
	let respuesta;

	respuesta = true
	acumuladorDePositivos = 0;
	multiplicadorDeNegatvos = 1;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		
		if(numeroIngresado > 0)
		{
			acumuladorDePositivos += numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicadorDeNegatvos *= numeroIngresado;
			}
		}	
	
		respuesta = confirm("Desea contunuar?")
	}

	document.getElementById("txtIdSuma").value = acumuladorDePositivos;
	document.getElementById("txtIdProducto").value = multiplicadorDeNegatvos;
}