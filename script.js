const boton = document.getElementById("saludarBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "Hola papoi, recuerda beber agua.";
});
