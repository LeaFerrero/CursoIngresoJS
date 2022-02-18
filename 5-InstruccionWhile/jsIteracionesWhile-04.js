/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let mensaje;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	
	mensaje = numeroIngresado + " es valido"
	
	document.getElementById("txtIdNumero").value = mensaje;
}