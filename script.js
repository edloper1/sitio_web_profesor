document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    const cursos = document.querySelectorAll(".curso");

    // Función para mostrar la sección seleccionada
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === sectionId) {
                section.classList.add("active");
            }
        });
    }

    // Manejador de clics para la navegación de la barra lateral
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);  // Obtiene el id de la sección
            showSection(targetId);
        });
    });

    // Manejador de clics para los cursos en el mosaico
    cursos.forEach(curso => {
        curso.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");  // Obtiene el id del curso
            showSection(targetId);
        });
    });

    // Función para regresar a la sección de cursos
    window.regresarACursos = function() {
        showSection("cursos");
    };
    
    // Inicializa la sección activa (por defecto, mostrar la sección de cursos)
    showSection("cursos");
});

