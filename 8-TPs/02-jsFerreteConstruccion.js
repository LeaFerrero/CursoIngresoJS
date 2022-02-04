/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let alambre;
    let perimetroAlambrado;
    let mensaje;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno * 2) + (anchoTerreno * 2);

    alambre = 3;

    perimetroAlambrado = perimetro * alambre;

    mensaje = "Se necesitan " + perimetroAlambrado;
    mensaje = mensaje + " metros de alambre";

    alert(mensaje);
}

function Circulo () 
{
   let radioTerreno;
   let perimetro;
   let alambre;
   let perimetroAlambrado;
   let mensaje;

   radioTerreno = document.getElementById("txtIdRadio").value;

   radioTerreno = parseFloat(radioTerreno);

   perimetro = 2 * Math.PI * radioTerreno;

   alambre = 3;

   perimetroAlambrado = perimetro * alambre;

   mensaje = "Se necesitan " + perimetroAlambrado;
   mensaje = mensaje + " metros de alambre";

   alert(mensaje);
}

function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let area;
    let cemento;
    let cal;
    let totalCemento;
    let totalCal;
    let mensaje;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    area = largoTerreno * anchoTerreno;

    cemento = 2;
    cal = 3;

    totalCemento = area * cemento;
    totalCal = area * cal;

    mensaje = "Se necesitan " + totalCemento;
    mensaje = mensaje + " bolsas de cemento, y ";
    mensaje = mensaje + totalCal;
    mensaje = mensaje + " bolsas de cal";

    alert(mensaje);
}