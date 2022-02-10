//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad); 

	
	if( edad >= 13 && edad <= 17)
	{
		mensaje = "Es adolescente";
	}
	else
	{
		mensaje = "No es adolescente";
	}
	
	alert(mensaje);

}