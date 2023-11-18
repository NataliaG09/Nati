// USO DE VARIABLES
// Aceptación de cookies
confirm("Usamos cookies para mejorar tu experiencia. Al hacer clic en “Aceptar”, usted acepta que las cookies se guarden en su dispositivo para mejorar la navegación del sitio, analizar el uso del mismo, y colaborar con nuestros estudios para marketing.");

//Ubicación
let provincia = prompt("Ingrese su Provincia y descubra los descuentos disponibles en los locales de la zona.");
//console.log(provincia);

//USO DE CONSTANTES
//Provincias disponibles con descuentos
const ProvDescuentos = ["San Juan", "Buenos Aires", "La Rioja"];

//Se hablilita la detección en mínusculas
const encontrado = ProvDescuentos.find (elemento=>elemento=provincia);
//console.log(encontrado);

//USO DE CONDICIONALES
if (encontrado==undefined){
        alert("No hay descuentos disponibles en tu zona.");
} else{
        alert("Tienes el 30% de descuento en productos seleccionados.");
}

//USO DE EVENTOS Y METODOS
//Añadir al carrito de compras.
//Se hizo uso de onclick y alert en html para el primer producto

