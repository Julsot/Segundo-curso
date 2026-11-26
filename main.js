/*
Requisitos Técnicos:
Estructura de archivos: Crea una carpeta para tu proyecto con un archivo index.html y un archivo main.js en su correspondiente carpeta. Vincula el script en la etiqueta head del HTML con el atributo defer.
Captura de datos:
Usa prompt() para solicitarle mínimo tres datos diferentes al usuario.
Almacenar los datos en variables o constantes según lo solicitado.
Procesamiento:
Conviertelos numeros solicitados vía prompt a tipo number.
Concatena strings con la información solicitada al usuario.
Realiza operaciones matemáticas con los números solicitados.
Salida de datos:
Usa console.log()/alert() para mostrar los diferentes mensajes.
Entrega:
Sube tus archivos a un repositorio de GitHub y comparte la URL. Asegúrate de que el repositorio sea público para que pueda ser revisado.
*/

// Solicitud de datos al usuario
const nombre = prompt("Como te llamas?");
const dni = prompt("Hola " + nombre + ", para comprar deberas confirmar tu DNI:");
const telefono = prompt("Y tú número telefonico?");
//convertir a tipo number
const cantidadGaseosas = parseInt(prompt("Cada gaseosa cuesta $6.050, ¿cuantas queres comprar?"));
//operacion matematica
const total = 6050 * cantidadGaseosas;
//mensaje concatenado
const mensaje = "Estas a punto de comprar " + cantidadGaseosas + " gaseosas, por lo que deberas abonar $" + total;
console.log(mensaje);
alert(mensaje);

