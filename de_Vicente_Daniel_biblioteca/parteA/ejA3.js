//1.
const notas = [7.5, 4.9, 10, 5, 6.25, 3, 8.8, 11, 9];

for (let cont = 0; cont < notas.length; cont++) {
  let calificacion = "";
  const nota = notas[cont];

  if (nota < 0 || nota > 10) {
    calificacion = "Nota no válida";
  } else if (nota < 5) {
    calificacion = "Insuficiente";
  } else if (nota < 6) {
    calificacion = "Suficiente";
  } else if (nota < 7) {
    calificacion = "Bien";
  } else if (nota < 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  console.log(`Alumno ${cont + 1}: ${nota} -> ${calificacion}`);
}

//2.
let numAprobados = 0;
let sumNotasVal = 0;
let contNotasVal = 0;
let notaMax = 0;

for (const nota of notas) {
  if (nota >= 0 && nota <= 10) {
    sumNotasVal += nota;
    contNotasVal++;

    if (nota >= 5) {
      numAprobados++;
    }
    if (nota > notaMax) {
      notaMax = nota;
    }
  }
}

const mediaTot = sumNotasVal / contNotasVal;

console.log(`Aprobados: ${numAprobados}`);
console.log(`Media de notas: ${mediaTot}`);
console.log(`Nota más alta: ${notaMax}`);
