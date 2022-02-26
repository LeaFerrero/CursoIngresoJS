/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let respuesta;

	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	
	contadorPares = 0;
	respuesta = true;
	
	const name = new type(arguments);
	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado > 0)
		{
			acumuladorPositivos += numeroIngresado;
			contadorPositivos ++;
		}
		else
		{
			if(numeroIngresado == 0)
			{
				contadorCeros ++;
			}
			else
			{
				acumuladorNegativos += numeroIngresado;
				contadorNegativos ++;
			}
		} 
	
		switch(numeroIngresado % 2)
		{
			case 0:
			contadorPares ++;
			break
		}
				
		respuesta = confirm("Desea continuar?");
	}

	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;

	diferencia = acumuladorPositivos - acumuladorNegativos;

	mensaje = "La suma de los negativos es " + acumuladorNegativos;
	mensaje = mensaje + "<br> La suma de los positivos es ";
	mensaje = mensaje + acumuladorPositivos; 
	mensaje = mensaje + "<br> La cantidad de pisitivos es ";
	mensaje = mensaje + contadorPositivos;
	mensaje = mensaje + "<br> La cantidad de negativos es ";
	mensaje = mensaje + contadorNegativos;
	mensaje = mensaje + "<br> La cantidad de ceros es "
	mensaje = mensaje + contadorCeros;
	mensaje = mensaje + "<br> La cantidad de numeros pares es ";
	mensaje = mensaje + contadorPares;
	mensaje = mensaje + "<br> El promedio de numeros positivos es ";
	mensaje = mensaje + promedioPositivos;
	mensaje = mensaje + "<br> El promedio de numeros negativos es ";
	mensaje = mensaje + promedioNegativos;
	mensaje = mensaje + "<br> La diferencia entre los numeros positivos y negativos es "
	mensaje = mensaje + diferencia;

	document.write(mensaje);
}