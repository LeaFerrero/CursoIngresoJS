//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;

	
	if( edad < 13 || edad > 17)
	{
		mensaje = "No es adolescente";
	}
	else
	{
		mensaje = "Es adolescente";
	}
	
	alert(mensaje);
}