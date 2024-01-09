
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function () {
    efectoHabilidades();
};

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
    }, 500); 
});

// Inicialización de Email.js
emailjs.init("XEb4a7dbcOMsPFYTi"); 
function enviar(e) {

    e.preventDefault()
        emailjs.sendForm('service_51557fb', 'template_w447iqd', e.target).then((result) => {
            console.log(result.text)
            alert("Mensaje enviado con éxito")
        }, (error) => {
            console.log(error.text)
            alert("Ocurrió un error al enviar el mensaje")
        })
    
}

