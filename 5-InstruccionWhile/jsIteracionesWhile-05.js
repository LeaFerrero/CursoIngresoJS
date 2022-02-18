/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	let mensaje;

	sexo = prompt("Ingrese su sexo (m para masculino y f para femenino)");

	while(sexo != "m" && sexo != "f")
	{
		sexo = prompt("Ingrese su sexo (m para masculino y f para femenino)");
	}

	document.getElementById("txtIdSexo").value = sexo;
}
