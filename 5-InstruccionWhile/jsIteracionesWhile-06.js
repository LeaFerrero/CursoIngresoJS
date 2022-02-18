function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let promedio;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{	
		console.log(acumulador);
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador += numero;
		contador ++;
	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}