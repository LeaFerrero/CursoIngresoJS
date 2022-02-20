/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let numeroMayor;
	let numeroMenor;
	let respuesta;

	respuesta = "si";

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseFloat(numero);
		respuesta = prompt("Desea continuar?");
	
	}

	document.getElementById("txtIdMinimo").value = Math.min(numero);
	document.getElementById("txtIdMaximo").value = Math.max(numero);

}