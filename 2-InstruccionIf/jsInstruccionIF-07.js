//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.

function mostrar ()
{
	let edad;
	let nombre;
	let estadoCivil;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	nombre = prompt("Ingrese su nombre");

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 1 || document.getElementById("txtIdEdad").value.length == 0)
	{
		mensaje = "Ingrese un numero valido";
	}
	else
	{
		if(edad < 13)
		{
			mensaje = "Feliz día";

			if(nombre == "Ricardo")
			{
				mensaje = mensaje + " muy chiquito para ese nombre";
			}
		}
		else
		{	
			if(edad < 18)
			{
				mensaje = "Usted es adolescente";

				if(edad == 17)
				{
					mensaje = mensaje + " ultimo año!!!";
				}

				if(nombre == "Violeta")
				{
					mensaje = mensaje + " como el color";
				}

				if(estadoCivil == "Divorciado");
				{
					mensaje = mensaje + " toda una vida por delante";
				}
			}
			else
			{
				if(edad < 61)
				{
					mensaje = "Tienes edad de laburar";

					if(edad == 33)
					{
						mensaje = mensaje + " como cristo";
					}

					if(estadoCivil == "Soltero")
					{
						mensaje = mensaje + " a salir";
					}

				}
				else
				{
					mensaje = "A jubilarse";

					if(edad == 88)
					{
						mensaje = mensaje + " linda edad";
					}

					if(nombre == "Alfredo")
					{
						mensaje = mensaje + " como el de Queen";
					}
				}
			}
		
			if(estadoCivil == "Casado")
			{
				mensaje = mensaje + " casada quiere casa";
			}
		}
		
		if(edad % 2 == 0)
		{
			mensaje = mensaje + " es par!!";
		}
	}
	
	alert(mensaje);
}

