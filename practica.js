var nombre = prompt("Bienvenido a nuestro cuestionario sobre las Olimpíadas \nEscribe tu nombre:");
var res1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas? \nA: Lunes 02 de octubre \nB: Viernes 29 de setiembre \nC: Jueves 28 de setiembre");
if (res1 == "B"){
    res1 = 25;
}else if(res1 == "A"){
    res1 = 0;
}else if(res1 == "C"){
    res1 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res2 = prompt("¿De qué color es la prompoción de 2do de secundaria? \nA: Celeste o Turquesa \nB: Rojo \nC: Morado");
if (res2 == "A"){
    res2 = 25;
}else if(res2 == "B"){
    res2 = 0;
}else if(res2 == "C"){
    res2 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res3 = prompt("Nuevo deporte incluido este año \nA: Futsal femenino \nB: Balonmano \nC: Marcha atlética");
if (res3 == "C"){
    res3 = 25;
}else if(res3 == "B"){
    res3 = 0;
}else if(res3 == "A"){
    res3 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

document.write("Lo has hecho bien")