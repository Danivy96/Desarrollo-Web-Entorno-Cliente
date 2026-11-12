//1.
function transformar(array, fn) {
  const arrayNuevo = [];
  for (let cont = 0; cont < array.length; cont++) {
    arrayNuevo[cont] = fn(array[cont]);
  }
  return arrayNuevo;
}

//2.
function quedarse(array, condicion) {
  const arrayNuevo = [];
  for (let cont = 0; cont < array.length; cont++) {
    if (condicion(array[cont])) {
      arrayNuevo[cont] = array[cont];
    }
  }
  return arrayNuevo;
}

//3.
const num = [3, 8, 1, 6];
const duplicar = transformar(num, (n) => n * 2);
console.log(duplicar);

const pares = quedarse(num, (n) => n % 2 === 0);
console.log(pares);

//4.
const duplicarMap = num.map((n) => n * 2);
console.log(duplicarMap);
const paresFilter = num.filter((n) => n % 2 === 0);
console.log(paresFilter);

//5.
const precios = [12, 45, 8, 99, 30];

const masIva = precios
  .filter((precio) => precio > 10)
  .map((precio) => precio * 1.21);

let total = 0;
for (let cont = 0; cont < masIva.length; cont++) {
  total = total + masIva[cont];
}
//se podría hacer con reduce pero no se si lo hemos tocado

console.log(
  "Valor total de los prodcutos de más de 10 euros = ",
  total.toFixed(2),
);
