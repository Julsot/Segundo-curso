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

