/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var operacion;
	var importeFinal;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = 25;

	operacion = (100 - descuento) / 100;
	
	importeFinal = importe * operacion;	

	document.getElementById("txtIdResultado").value = importeFinal;
}
