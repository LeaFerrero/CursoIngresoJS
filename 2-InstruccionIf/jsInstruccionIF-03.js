// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	
	if(edad >= 18)
	{
		mensaje = "Es mayor de edad";
	}
	else
	{
		mensaje = "Es menor de edad";
	}

	alert(mensaje);
}