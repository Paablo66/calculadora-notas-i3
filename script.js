
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    if (nombre === "" || nota1 === "" || nota2 === "" || nota3 === "") {
        resultado.textContent = "Por favor, completa todos los campos.";
        return;
    }

    const notas = [Number(nota1), Number(nota2), Number(nota3)];

    if (notas.some(nota => nota < 0 || nota > 5)) {
        resultado.textContent = "Las notas deben estar entre 0 y 5.";
        return;
    }

    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    const estado = promedio >= 3 ? "Aprobó" : "No aprobó";

    resultado.textContent =
        nombre + ", tu promedio es " + promedio.toFixed(2) +
        ". Resultado: " + estado + ".";
});

formulario.addEventListener("reset", function () {
    resultado.textContent = "";
});
