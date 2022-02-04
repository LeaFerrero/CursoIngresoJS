/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
	var productoUno;
    var productoDos;
    var productoTres;
    var suma;
    var mensaje;
    
    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    suma = productoUno + productoDos + productoTres;

    mensaje = "La suma es " + suma;

    alert(mensaje);
}
function Promedio() 
{
	var productoUno;
    var productoDos;
    var productoTres;
    var suma;
    var promedio;
    var mensaje;
    
    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    suma = productoUno + productoDos + productoTres;

    promedio = suma / 3;

    mensaje = "El promedio es " + promedio;

    alert(mensaje);
}
function PrecioFinal() 
{
	var productoUno;
    var productoDos;
    var productoTres;
    var suma;
    var iva;
    var impuesto;
    var precioFinal;
    var mensaje;
       
    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    suma = productoUno + productoDos + productoTres;

    iva = 0.21;

    impuesto = suma * iva;

    precioFinal = suma + impuesto;

    mensaje = "El precio final es " + precioFinal;
    
    alert(mensaje);
}
