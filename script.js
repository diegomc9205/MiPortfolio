// Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Detecta el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

// Agrega un evento de clic al logo para recargar la página y llevar a la sección de inicio
document.getElementById('logo').addEventListener('click', function () {
    // Utiliza JavaScript para hacer un desplazamiento suave a la sección de inicio
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });

    // Espera un momento antes de recargar para dar tiempo al desplazamiento
    setTimeout(function () {
        // Recarga la página
        location.reload();
    }, 500); // Puedes ajustar el tiempo según sea necesario
});

// Inicialización de Email.js
emailjs.init("XEb4a7dbcOMsPFYTi"); // Reemplaza "tu_user_id" con tu ID de usuario de Email.js

// Manejo del envío del formulario con Email.js
document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.target;
    emailjs.sendForm("default_service", "template_w447iqd", new FormData(form))
        .then(function (response) {
            console.log("Correo enviado con éxito", response);
        }, function (error) {
            console.log("Error al enviar el correo", error);
        });
});
