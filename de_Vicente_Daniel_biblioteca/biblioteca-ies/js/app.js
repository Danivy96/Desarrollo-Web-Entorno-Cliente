"use strict";

// ---------------------------------------------------------------------------
// FUNCIÓN DE APOYO (ya hecha, no la modifiques)
// Inserta un texto HTML dentro del elemento indicado por su selector CSS.
// Cómo funciona por dentro se estudiará en las unidades de objetos predefinidos
// y DOM. Por ahora, úsala como una "caja negra":
//   mostrar("#catalogo", "<p>Hola</p>");
// ---------------------------------------------------------------------------
function mostrar(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

// ---------------------------------------------------------------------------
// R1 a R7: funciones de cálculo (no deben usar mostrar ni console.log)
// ---------------------------------------------------------------------------

// R1  Media de las valoraciones con un decimal, usando reduce. Si no tiene valoraciones, devuelve null
//Recibe el array de libros, devuelve la media de las valoraciones del libro, haciendo un redondeo
function valoracionMedia(libro) {
  // TODO
  if (libro.valoraciones.length === 0) {
    return null;
  }
  const suma = libro.valoraciones.reduce((total, nota) => total + nota, 0);

  return Math.round((suma / libro.valoraciones.length) * 10) / 10;
}

// R2 Array con los libros no prestados.
//recibe el array de libros y devuelve los que no están prestados
function librosDisponibles(libros) {
  // TODO
  return libros.filter((libro) => libro.prestado === false);
}

// R3 Libros publicados entre dos años, ambos incluidos.
//recibe el array de libros y los valores en numero desde y hasta, en caso de estar dentro, devuelve dichos libros
function librosEntre(libros, desde, hasta) {
  // TODO
  desde = Number(desde);
  hasta = Number(hasta);
  if (isNaN(desde) || isNaN(hasta) || desde > hasta) {
    return [];
  }
  return libros.filter((libro) => libro.anio >= desde && libro.anio <= hasta);
}

// R4 Array de géneros sin repetir (usando set), ordenado alfabéticamente
//recibe el array de libros y los devuelve como una lista ordenada en formato string
function generos(libros) {
  // TODO
  const sinRepetir = new Set(libros.map((libro) => libro.genero));
  return [...sinRepetir].sort();
}

// R5 Map con cada autor y su número de libros.
//recibe el array y devuelve el autor y un contador de sus libros
function librosPorAutor(libros) {
  // TODO
  const autores = new Map();

  libros.forEach((libro) =>
    autores.set(libro.autor, (autores.get(libro.autor) ?? 0) + 1),
  );

  return autores;
}

// R6 Array nuevo con los n libros con mejor valoración media, de mayor a menor.
//Recibe el array de libros y el valor de 3, y devuelve un array nuevo con las valoraciones de mayor a menor (siendo n el numero de libros que muestra)
// En caso de empatar, se devuelve los libros pero en órden alfabético
function ranking(libros, n = 3) {
  // TODO
  const listaComparativa = libros.filter(
    (libro) => valoracionMedia(libro) !== null,
  );

  listaComparativa.sort((libro1, libro2) => {
    const comparativa = valoracionMedia(libro2) - valoracionMedia(libro1);
    if (comparativa === 0) {
      return libro1.titulo.localeCompare(libro2.titulo);
    }
    return comparativa;
  });
  return listaComparativa.slice(0, n);
}

// R7 Objeto con total, prestados, disponibles, mediaGlobal (media de todas las valoraciones,un decimal) y masAntiguo (título).
//coge el array de libros, y luego devuelve total, prestados, disponibles, mediaGlobal y masAntiguo
function resumen(libros) {
  // TODO
  const notas = [];
  libros.forEach((libro) => notas.push(...libro.valoraciones));
  const prestados = libros.filter((libro) => libro.prestado).length;
  const media = valoracionMedia({ valoraciones: notas });
  const porAntiguedad = [...libros].sort(
    (libro1, libro2) => libro1.anio - libro2.anio,
  );

  return {
    total: libros.length,
    prestados: prestados,
    disponibles: libros.length - prestados,
    mediaGlobal: media,
    masAntiguo: porAntiguedad.length > 0 ? porAntiguedad[0].titulo : null,
  };
}

// ---------------------------------------------------------------------------
// R8: funciones que generan HTML (devuelven un string)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Programa principal
// ---------------------------------------------------------------------------
// mostrar("#catalogo", tablaLibros(LIBROS));
// ...

//Recibe la media y la devuelve para el html. en caso de que sea null, pondrá "Sin valorar"
function sinValorar(media) {
  return media === null ? "Sin valorar" : media;
}

//crea la tabla en Htaml de los libros, mostrando toda la información.
//Para ello recibe el array de libros y devuelve un string en Html
//además, en caso de estar prestado, pasará a pertenecer a clase prestado en el html
function tablaLibros(libros) {
  const filas = libros
    .map(
      (libro) => `
      <tr class="${libro.prestado ? "prestado" : ""}">
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.genero}</td>
        <td>${libro.anio}</td>
        <td>${libro.prestado ? "Prestado" : "Disponible"}</td>
        <td>${sinValorar(valoracionMedia(libro))}</td>
      </tr>`,
    )
    .join("");

  return `
  <div class="tabla-libro">
    <table>
      <thead>
        <tr>
          <th>Título</th><th>Autor</th><th>Género</th>
          <th>Año</th><th>Estado</th><th>Valoración</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
  </div>`;
}

//recibe el array de libros y genera con ella una lista en html de los géneros disponibles
function generosHtml(libros) {
  return `<ul>${generos(libros)
    .map((genero) => `<li>${genero}</li>`)
    .join("")}</ul>`;
}

//recibe el array de libros y genera una lista en html con los libros clasificados por autor
function librosPorAutorHtml(libros) {
  let autores = librosPorAutor(libros);
  let lista = Array.from(autores);

  lista.sort((a, b) => a[0].localeCompare(b[0], "es")); //a y b son los elementos a comparar. localCompare comapra los nombres alfabéticamente y "es" indica que usamos las reglas del español.

  let html = "<ul>";

  for (let [autor, cantidad] of lista) {
    if (cantidad === 1) {
      html += `<li>${autor}: ${cantidad} libro</li>`;
    } else {
      html += `<li>${autor}: ${cantidad} libros</li>`;
    }
  }
  html += "</ul>";

  return html;
}

//recibe el array de libros y devuelve una lista de los libros mejor valorados en un ranking.
//n especificaba
function rankingHtml(libros) {
  const mejorVal = ranking(libros);

  const lista = mejorVal.map(
    (libro) =>
      `<li>${libro.titulo} - ${libro.autor} (${valoracionMedia(libro)})</li>`,
  );

  const resultado = lista.join("");

  return `<ol>${resultado}</ol>`;
}

function resumenHtml(libros) {
  const info = resumen(libros);
  return `<div class="resumen-grid">
    <p><strong>Total de libros</strong><span>${info.total}</span></p>
    <p><strong>Prestados</strong><span>${info.prestados}</span></p>
    <p class><strong>Disponibles</strong><span>${info.disponibles}</span></p>
    <p><strong>Media total</strong><span>${info.mediaGlobal ?? "Sin valorar"}</span></p>
    <p><strong>Más antiguo</strong><span>${info.masAntiguo ?? "Ninguno"}</span></p>
  </div>`;
}

mostrar("#catalogo", tablaLibros(LIBROS));
mostrar("#generos", generosHtml(LIBROS));
mostrar("#autores", librosPorAutorHtml(LIBROS));
mostrar("#ranking", rankingHtml(LIBROS));
mostrar("#resumen", resumenHtml(LIBROS));
