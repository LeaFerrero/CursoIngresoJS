
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	
	edad = parseInt(edad);

	if(estadoCivil == "Soltero" && edad >= 18)
	{
		mensaje = "Es soltero y no es menor";
	}
	
	alert(mensaje);
}