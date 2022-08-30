Enunciado:
/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	let nombre;
	let nacionalidad; 
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let banderaTemperatura;
	let maximaTemperatura;
	let nacionalidadMaxima;

	respuesta = true;
	banderaTemperatura = false;
    
    while (respuesta == true)
    {		
		nombre = prompt("Ingrese nombre");

		nacionalidad = prompt("Ingrese nacionalidad");

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
	
		sexo = prompt("Ingrese sexo");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese sexo")
		}

		estadoCivil = prompt("Ingrese estado civil")
		
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese estado civil")
		}
		
		temperaturaCorporal = prompt("Ingrese temperatura corporal ");
		temperaturaCorporal = parseFloat(temperaturaCorporal);
		while(temperaturaCorporal < 33 || temperaturaCorporal > 42)
		{
			temperaturaCorporal = prompt("Ingrese ");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if(temperaturaCorporal > maximaTemperatura || banderaTemperatura == false)
		{
			maximaTemperatura = temperaturaCorporal;
			nacionalidadMaxima = nacionalidad;
			banderaTemperatura = true;
	
		}

		switch(estadoCivil)
		{
			case "casado":
			break;

			case "soltero":
			break;

			case "viudo":
			break;
		}


	


        respuesta = confirm("Desea continuar?");    
    }

}
