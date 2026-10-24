
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const campoNota1 = document.getElementById("nota1").value;
    const campoNota2 = document.getElementById("nota2").value;
    const campoNota3 = document.getElementById("nota3").value;

    mensaje.hidden = true;
    resultado.hidden = true;

    if (nombre === "" || campoNota1 === "" ||
        campoNota2 === "" || campoNota3 === "") {
        mostrarMensaje("Por favor, completa todos los campos.");
        return;
    }

    const notas = [
        Number(campoNota1),
        Number(campoNota2),
        Number(campoNota3)
    ];

    const notasValidas = notas.every(function (nota) {
        return Number.isFinite(nota) && nota >= 0 && nota <= 5;
    });

    if (!notasValidas) {
        mostrarMensaje("Las notas deben estar entre 0 y 5.");
        return;
    }

    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    const aprobado = promedio >= 3;

    document.getElementById("nombreResultado").textContent = nombre;
    document.getElementById("promedio").textContent = promedio.toFixed(2);

    const estado = document.getElementById("estado");
    estado.textContent = aprobado ? "¡Aprobó!" : "No aprobó";
    estado.className = aprobado ? "estado aprobado" : "estado no-aprobado";

    resultado.hidden = false;
});

function mostrarMensaje(texto) {
    mensaje.textContent = texto;
    mensaje.hidden = false;
}

formulario.addEventListener("reset", function () {
    resultado.hidden = true;
    mensaje.hidden = true;
});
