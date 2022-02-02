/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

