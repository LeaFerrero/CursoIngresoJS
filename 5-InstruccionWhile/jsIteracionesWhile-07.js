/*

Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 

	1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el prommedio de edad por sexo.

	2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven

	3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y está  desaprobado.

*/

function mostrar()
{
	let altura;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;
	let respuesta;
	let contadorM;
	let contadorH;
	let contadorNB;
	let acumuladorM;
	let acumuladorH;
	let acumuladorNB;
	let contadorFiebre;
	let contadorNoFiebre;
	let promedioH;
	let promedioM;
	let promedioNB;
	let mensaje;



	respuesta = true;
	
	contadorFiebre = 0;
	contadorNoFiebre = 0;
	contadorM = 0; 
	contadorH = 0;
	contadorNB = 0;
	acumuladorM = 0;
	acumuladorH = 0;
	acumuladorNB = 0;

	while (respuesta == true) 
    {
		// altura = prompt("Ingrese su altura");
		// altura = parseFloat(altura);

		// while(altura < 0 || altura> 250)
		// {
		// 	altura = prompt("Error. Ingrese su altura")
		// 	altura = parseFloat(altura);
		// }

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(edad < 18)
		{
			edad = prompt("Error. Ingrese su edad");
			edad = parseInt(edad);	
		}
		
		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseFloat(temperatura);			
		
		while(temperatura < 33 || temperatura> 42)
		{
			temperatura = prompt("Ingrese su temperatura")
			temperatura = parseFloat(temperatura);		
		}

		sexo = prompt("Ingrese su sexo")

		while(sexo != "m" && sexo != "f" && sexo != "nb" )
		{
		sexo = prompt("Error. Ingrese su sexo")
		}
		
		// nota = prompt("Ingrese su nota");
		// nota = parseInt(nota);

		// while(nota < 0 || nota > 10)
		// {
		// 	nota = prompt("Error. Ingrese su nota");
		// 	nota = parseInt(nota);
		// }

		// nombre = prompt("Ingrese su nombre")

		switch(sexo)
		{
			case "m":
				acumuladorH += edad;
				contadorH ++;
			break;		

			case "f":
				acumuladorM += edad;
				contadorM ++;
			break;

			case "nb":
				acumuladorNB += edad;
				contadorNB ++;
			break;
		}
		
        respuesta = confirm("Desea continuar?");    
    }

	if(temperatura < 37)
	{
		contadorFiebre ++;
	}
	else
	{
		contadorNoFiebre ++;
	}

	mensaje = "Hay " + contadorM + " mujeres";
	mensaje += "<br> Hay " + contadorNoFiebre + " personas sin fiebre";
	mensaje += "<br> Hay " + contadorFiebre + " personas con fiebre";

	if(contadorH > 0)
	{
		promedioH = acumuladorH / contadorH;
		mensaje += "<br> El promedio de edad de hombres es de " + promedioH;
	}

	if(contadorM > 0)
	{
		promedioM =	acumuladorM	/ contadorM;
		mensaje += "<br> El promedio de edad de mujeres es de " + promedioF;
	}
	
	if(contadorNB)
	{
		promedioNB = acumuladorNB / contadorNB;
		mensaje += "<br> El promedio de edad de no binarios es de " + promedioNB;
	}

	document.write(mensaje);
}
