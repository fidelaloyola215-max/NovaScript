function mostrarMensaje() {
    alert("Este proyecto estará disponible próximamente.");
}

function toggleFAQ(numero) {
    const respuesta = document.getElementById("faq" + numero);

    if (respuesta.style.display === "block") {
        respuesta.style.display = "none";
    } else {
        respuesta.style.display = "block";
    }
}
