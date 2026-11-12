Parte A: Calentamiento
1.  
    EXPRESIÓN                   MI PREDICCIÓN               RESULTADO REAL          TIPO        EXPLICACIÓN
    "5" + 3                     53                          53                      string      Combina los dós numeros, añadiendo el 3 después del 5 
    "5" * 3                     15                          15                      number      Prioriza el operador, por lo que los multiplica      
    "5" - "2"                   3                           3                       number      Lo mismo, pero con resta
    Number("")                  0                           0                       number      Al estar vacío se considera que hay un 0 
    Number("12px")              Null                        NaN                     number      No acepta carácteres que no sean números
    parseInt("12px")            12                          12                      number      Extrae los números de la cadena
    parseFloat("3.75€")         3.75                        3.75                    number      Lo mismo pero con decimales al ser float
    "10" == 10                  True                        True                    boolean     No compara el tipo de dato así que igual el string con el int 
    "10" === 10                 False                       False                   boolean     Si que compara el tipo, siendo distintos en este caso
    null + 1                    Null                        1                       number      Null se considera +, se le suma 1
    undefined + 1               1                           Not a Number            number      Undefined se considera Not a Number
    typeof NaN                  Number                      Number                  string      NaN se considera un string
    Boolean("0")                True                        True                    boolean     Al tener cualquier valor dentro, ya lo considera true
    0 || "valor por defecto"    valor por defecto           valor por defecto       string      Al ser un OR, coge la segunda condición
    0 ?? "valor por defecto"    no lo se                    0                       number      Solo evalúa el lado derecho en caso de que el izquierdo sea null o undefined


2.  
    1.  
        console.log("Dentro:", total); Da 55, ejecuta la función calcularTotal y realiza la operación que es total = (20 * 3 + 5) -10
        console.log("Fuera:", total); Da 0 ya que coge el valor de la variable total de fuera, que se había inizializado con 0
        console.log(descuento); Error, está fuera de la función así que lo considera undefined

    2.    
        Porque el total de fuera ya está inicializado a 0 (variable global), y no tiene en cuenta el resultado que hay dentro de la función (variable local)

    3.  
        la última linea de error ya que descuento es una variable que solo se encuentra dentro de la función, al intentar llamarlo desde fuera el programa no lo encuentra

    4.  
        No se consideraría una variable local, en cambio, modificaría la variable global declarada fuera de la función.

    5.  
        Dará error, ya que está declarada dentro de la función como const, por lo que no se le puede modificar/reasignar el valor.



4.  
    1.  
        Salen 6 resultados
        No es el resultado esperado ya que marta y Marta los considera como dos elementos distintos debido a la mayúscula
        Solo obvia a luis ya que su nombre sale idéntco dos veces, por lo que el Set lo guarda una sola vez

    2.  
        Al convertir todos en lowercase, el set considera que hay más correos con nombres duplicados.
        Ahora solo 4 valores son considerados únicos

5.  
    4.  
        Todos devuelven un array nuevo, pero en el caso de transformar y de map, usan valores nuevos
        al estar duplicando dichos valores, mientras que quedarse y filter, conservan valores ya existentes


6.  
    2.  
        Linea 4     |   i <= notas.length   |  se pasa del array y da undefined    |   i < notas.length
        Linea 5     |   notas[i] > 5    |   no tiene en cuenta el 5 |   notas[i] >= 5
        Linea 6 (12)|   notas[i]        |   considera "7" de la linea 12 como string en el primer bucle, concatena 0 con 7 y los números posteriores también son afectados  |   Number(notas[i])   
        Linea 10    |   suma / notas.length  |   divide entre el numero total de posiciones del array, ignora el contador    |   suma / contador


Parte B:  Reto integrador: Biblioteca del IES

1.  
    Defer espera a que el documento sea analizado, y los scripts se ejecutan de manera ordenada según como aparecen en el documento HTML.
    Async hace que el script se ejecute después de realizar la descarga, pero no sigue el mismo orden de ejecución como el defer.

2.  
    TypeError: Cannot set properties of null (setting 'innerHTML')
    sin defer, los scripts se ejecutan solo si el programa los encuentra en el HEAD del HTML, antes de cargar cualquier otra elemento de la página. 
    Al no encontrarlos, no los ejecuta y devuelve null

3.  
    defer siempre ejecuta los scripts en el orden que se establece en el HEAD, por lo que ejecutará primero app.js antes que datos.js. Debido a ésto, dará error

4.  
    app.js depende de datos.js ya que sin Libros no puede cargar, así que se tiene que ejecutar el script en ese órden. async no asegura el órden de ejecución establecido en el head, asi que es mejor no usarlo