/*
//R1
console.log(valoracionMedia(LIBROS[0]));

//R2
console.log(librosDisponibles(LIBROS));

//R3
console.log(librosEntre(LIBROS, "1950", "2000"));

//R4
console.log(generos(LIBROS));

//R5
console.log(librosPorAutor(LIBROS));

//R6
console.log(ranking(LIBROS));

//R7
console.log(resumen(LIBROS));
*/

// R10. pruebas de console.assert

// R1 valoracionMedia
console.assert(valoracionMedia(LIBROS[0]) === 4.7, "R1: Don Quijote");
console.assert(
  valoracionMedia({ valoraciones: [3] }) === 3,
  "R1: una sola valoración",
);
console.assert(
  valoracionMedia({ valoraciones: [] }) === null,
  "R1: el libro no tiene ninguna valoración",
);

// R2 librosDisponibles
console.assert(
  librosDisponibles(LIBROS).every((libro) => libro.prestado === false),
  "R2: no hay ningún libro prestado",
);
console.assert(
  librosDisponibles([{ prestado: true }]).length === 0,
  "R2: todos prestados",
);
console.assert(
  librosDisponibles(LIBROS).length === 8,
  "Error R2: hay 8 libros disponibles",
);
console.assert(
  !librosDisponibles(LIBROS).some((libro) => libro.titulo === "La Celestina"),
  "R2: La Celestina está prestada",
);

// R3 librosEntre
console.assert(
  librosEntre(LIBROS, 1000, 1400).length === 0,
  "R3: No existen libros entre 1000 y 1400",
);
console.assert(
  librosEntre(LIBROS, 1950, "xyz").length === 0,
  "R3: valor no válido",
);
console.assert(
  librosEntre(LIBROS, "1960", "1950").length === 0,
  "R3: los años es´tan invertidos",
);
console.assert(librosEntre([]).length === 0, "R3: el array está vacío");

// R4 generos
console.assert(
  generos(LIBROS).join() ===
    "Ciencia ficción,Clásico,Informática,Juvenil,Misterio",
  "R4: La lista no está ordenada",
);
console.assert(
  generos(LIBROS).join() ===
    "Ciencia ficción,Clásico,Informática,Juvenil,Misterio",
  "R4: La lista no está completa de géenros",
);
console.assert(generos([]).length === 0, "R4: El array está vacío");
console.assert(generos([LIBROS[0]]).join() === "Clásico", "R4: un solo libro");
console.assert(
  generos([LIBROS[0], LIBROS[2]]).length === 1,
  "R4: mismo género en dos libros",
);

// R5 librosPorAutor
console.assert(
  librosPorAutor(LIBROS).get("Miguel de Cervantes") === 2,
  "R5: Cervantes tiene 2 libros",
);
console.assert(
  librosPorAutor(LIBROS).get("Roald Dahl") === 1,
  "R5: Roald Dahl tiene 1 libro",
);
console.assert(
  librosPorAutor(LIBROS).size === 10,
  "R5: hay 10 autores únicos en ésta lista",
);

console.assert(
  librosPorAutor(LIBROS).get("Nadie") === undefined,
  "R5: el autor no existe",
);

// R6 ranking
console.assert(
  ranking(LIBROS)
    .map((libro) => libro.titulo)
    .join() === "Matilda,Don Quijote de la Mancha,El nombre de la rosa",
  "R6: top 3 con desempate por título",
);
console.assert(ranking(LIBROS, 1).length === 1, "R6: n = 1");
console.assert(ranking(LIBROS, 0).length === 0, "R6: n = 0");
console.assert(
  ranking(LIBROS, 13).length === 12,
  "R6: hay 12 libros valorados",
);
console.assert(
  ranking([LIBROS[2]]).length === 0,
  "R6: Novelas Ejemplares no puede estar en el ranking",
);
console.assert(ranking([]).length=== 0, "R6: el array está vacío");
console.assert(
  ranking(LIBROS)[0].valoraciones.length === 4,
  "R6: no tiene el número correcto de valoraciones",
);
console.assert(ranking(LIBROS)[0].titulo === "Matilda", "R6: Matilda es el primero del ranking");
console.assert(ranking(LIBROS)[0].valoraciones.length === 4, "R6: Matilda tiene 4 valoraciones");



// R7 resumen
console.assert(
  Object.keys(resumen(LIBROS)).join() ===
    "total,prestados,disponibles,mediaGlobal,masAntiguo",
  "R7: las claves no están ordenadas correctamente",
);
console.assert(resumen(LIBROS).total === 13, "R7: Hay 13 libros en la lista");
console.assert(
  resumen(LIBROS).mediaGlobal === 4.4,
  "R7: La media total es 4.4",
);
console.assert(
  resumen(LIBROS).prestados === 5,
  "R7: Hay 5 libros de la lista prestados",
);
console.assert(
  resumen(LIBROS).masAntiguo === "La Celestina",
  "R7: La Celestina es el libro más antíguo",
);
console.assert(
  resumen([LIBROS[2]]).mediaGlobal === null,
  "R7: el libro no tiene valoraciones",
);
console.assert(resumen([]).masAntiguo === null, "R7: array vacío");
console.assert(
  resumen(LIBROS.filter((libro) => libro.prestado)).disponibles === 0,
  "R7: solo libros prestados",
);

//  Tabla
console.table(librosDisponibles(LIBROS));
