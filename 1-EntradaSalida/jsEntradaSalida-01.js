/*
Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S

Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas. Tener en cuenta que los valores de entrada están expresados en Cms.
"*/
function mostrar()
{
	let diametroMayorCm;
	let diametroMenorCm;
	let diametroMayorMts;
	let diametroMenorMts;
	let area;
	let cometasAConstruir;
	let papel;
	let papelExtra;
	let papelTotal;
	let perimetro;

	diametroMayorCm = prompt("Ingres el diametro mayor en centimetros");
	diametroMenorCm = prompt("Ingrese el diametro menor en centimetros");

	diametroMayorCm = parseFloat(diametroMayorCm);
	diametroMenorCm = parseFloat(diametroMenorCm);

	diametroMayorMts = diametroMayorCm / 100;
	diametroMenorMts = diametroMenorCm / 100;

	area = diametroMayorMts * diametroMenorMts / 2

	cometasAConstruir = 10;

	papel = area * cometasAConstruir;

	papelExtra = papel * 0.10;

	papelTotal = papel + papelExtra;

	alert(papelTotal);



}

