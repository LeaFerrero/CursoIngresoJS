function mostrar()
{
	let horaDelDia;
	let mensaje;
	
	horaDelDia = document.getElementById("txtIdHora").value;

	horaDelDia = parseInt(horaDelDia);

	mensaje = "No es de mañana.";
	
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
		break;
	}

	alert(mensaje);
}