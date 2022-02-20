/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let altura;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;
	let contadorDeAlumnos;

	contadorDeAlumnos = 0;

	while(contadorDeAlumnos < 5)
	{
		/*altura = prompt("Ingrese su altura en cm");
		altura = parseInt(altura);
		
		while(altura < 0 || altura > 250)
		{
			altura = prompt("Dato no valido. Ingrese su altura en cm");
		}
		
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(isNaN(edad))
		{
			edad = prompt("Dato no valido. Ingrese su edad");
		}
		
		temperatura = prompt("Ingrese su temperatura")

		while(isNaN(temperatura))
		{
			temperatura = prompt("Dato no valido. Ingrese su temperatura");
		}
		
		sexo = prompt("Ingrese su sexo f, m o nb");
		sexo = sexo.toLowerCase();

		while(sexo != "f" && sexo !="m" && sexo != "nb")
		{
			sexo = prompt("Dato no valido. Ingrese su sexo f, m o nb");
		}*/

		nota = prompt("Ingrese su nota");
		nombre = parseFloat(nota);

		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = prompt("Dato no valido. Ingrese su nota");
		}

		nombre = prompt("Ingrese su nombre");



		contadorDeAlumnos++;
	}
}
