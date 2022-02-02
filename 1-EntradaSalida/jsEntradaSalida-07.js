/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma; 
	var mensaje;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt(primerNumero) + parseInt(segundoNumero);

	mensaje = "La suma es " + suma;

	alert(mensaje);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	var mensaje;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	resta = parseInt(primerNumero) - parseInt(segundoNumero);

	mensaje = "La resta es " + resta;

	alert(mensaje);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;
	var mensaje;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	multiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);
	
	mensaje = "La multiplicación es " + multiplicacion;

	alert(mensaje);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;
	var mensaje;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	division = parseInt(primerNumero) / parseInt(segundoNumero);

	mensaje = "La división es " + division;

	alert(mensaje);
}

