function mostrar()
{
	let tarifaBase;
	let descuento;
	let tarifaFinal;
	let estacionIngresada; 
	let destinoIngresado;
	let mensaje;
	
	tarifaBase = 15000;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 1.20;
				break;
				
				case "Mar del plata":
					descuento = 0.80;
				break;

				default:
					descuento = 0.90;
				break;
			}
		break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 0.80;
				break;
				
				case "Mar del plata":
					descuento = 1.20;
				break;

				default:
					descuento = 1.10;
				break; 
			}
		break;

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Cordoba":
					descuento = 1;
				break
					
				default:
					descuento = 1.10;
				break;
			}
		break;
	}
		
	tarifaFinal = tarifaBase * descuento;
	
	mensaje = "El precio es " + tarifaFinal;
	
	alert(mensaje);
}
	
	