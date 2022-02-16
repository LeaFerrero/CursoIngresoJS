function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero": 
		
			mensaje = "Que comiences bien el año!";

		break;

		case "Marzo":
			
			mensaje = "A clases!";

		break;

		case "Julio":

			mensaje = "Se vienen vacaciones!";

		break;
		
		case "Diciembre":

			mensaje = "Felices fiestas!";

		break;
	}
	
	
	alert(mensaje);
	
}


