//1.
const inscripciones = [
  "ana@ies.es",
  "luis@ies.es",
  "ANA@ies.es",
  "marta@ies.es",
  "luis@ies.es",
  "pablo@ies.es",
  "Marta@ies.es",
];

const setInscripciones = new Set(inscripciones);
console.log(`correos sin repetir: `, setInscripciones);
console.log(`Número de correos: `, setInscripciones.size);


//2.
const setInscripcionesLower = new Set();
for (const correo of inscripciones) {
  setInscripcionesLower.add(correo.toLowerCase());
}
console.log(`correos sin repetir: `, setInscripcionesLower);
console.log(`N´´umero de correos con lowercase: `, setInscripcionesLower.size);

//3.
const contCorreos = new Map();
for (const correo of inscripciones) {
  const correoNormalizado = correo.toLowerCase();
  if (contCorreos.has(correoNormalizado)) {
    contCorreos.set(correoNormalizado, contCorreos.get(correoNormalizado) + 1);
  } else {
    contCorreos.set(correoNormalizado, 1);
  }
}
for (const [correo, cont] of contCorreos) {
  console.log(`${correo} -> ${cont}`);
}

//4
const correoOrdenado = Array.from(setInscripcionesLower).sort();
console.log("Correos ordenados alfabéticamente: ", correoOrdenado);


