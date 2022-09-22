function alumno () {
    let nombreAlumno = prompt("Ingresar nombre de alumno");
    if (nombreAlumno == "") {
        alert("No ingresaste tu nombre");
    }
    else {
        alert("Alumno " + nombreAlumno);
    }
}

function calculo(notaUno, notaDos, notaTres) {
    const suma = notaUno + notaDos + notaTres;
    const promedio = parseInt(suma / 3);
    alert("Su nota final es de "+ promedio);
}

function calculadora () {
    alumno();
    let notaUno = parseFloat(prompt("Ingrese la primer nota"));
    let notaDos = parseFloat(prompt("Ingrese la segunda nota"));
    let notaTres = parseFloat(prompt("Ingrese la tercer nota"));
    calculo(notaUno, notaDos, notaTres);
}

calculadora();