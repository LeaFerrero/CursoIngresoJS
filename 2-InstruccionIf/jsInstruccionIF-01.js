//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;

	if(edad == 15)
	{
		mensaje = "Niña bonita";
	}
	else
	{
		mensaje = "No es una niña bonita";
	}


	alert(mensaje);

}
	
	
