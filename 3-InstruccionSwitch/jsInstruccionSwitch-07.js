function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra al Oeste.";
		break;

		case "Cataratas":
			mensaje = "Se encuentra al Norte.";
		break;

		case "Mar del plata":
			mensaje = "Se encuentra al Este.";
		break;

		case "Ushuaia":
			mensaje = "Se encuentra al Sur.";
		break;
	}

	alert(mensaje);
}