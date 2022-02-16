function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	mensaje = "No se viaja";

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja";
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
				break;
			}
		break;

		case "Otoño":
			mensaje = "Se viaja";
		break;
			
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
				break;
			}
		break;	
	}

	alert(mensaje);
}