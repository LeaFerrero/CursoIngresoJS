//Al ingresar una edad debemos informar solo si la persona es mayor de edad


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
		mensaje = "No es mayor de edad";
	}


	alert(mensaje);
}