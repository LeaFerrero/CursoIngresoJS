/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let enCentigrados;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    enCentigrados = (temperatura - 32) / 1.8;
    
    mensaje = temperatura + " grados Farenheit son ";
    mensaje = mensaje + enCentigrados;
    mensaje = mensaje + " grados centigrados";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let enFarenheit;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    enFarenheit = temperatura * 1.8 + 32;

    mensaje = temperatura + " grados centigrados son ";
    mensaje = mensaje + enFarenheit;
    mensaje = mensaje + " grados Farenheit";

    alert(mensaje);
}
