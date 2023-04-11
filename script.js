// Definir variable global para proyectos
var proyectos = [];
console.log(proyectos)

// Verificar si hay datos guardados en localStorage
if (localStorage.getItem("proyectos")) {
  proyectos = JSON.parse(localStorage.getItem("proyectos"));
  mostrarProyectos();
}

function agregarProyecto() {
  // Obtener valores de los campos de texto
  var titulo = document.getElementById("titulo").value;
  var descripcion = document.getElementById("descripcion").value;

  // Crear elemento de proyecto
  var proyecto = document.createElement("div");
  proyecto.classList.add("proyecto");

  // Crear elementos de título y descripción
  var proyectoTitulo = document.createElement("h2");
  proyectoTitulo.innerText = titulo;
  var proyectoDescripcion = document.createElement("p");
  proyectoDescripcion.innerText = descripcion;

  // Agregar manejador de eventos para abrir la ventana de proyecto
  proyecto.addEventListener("click", function() {
    window.location.href = "index.html";
  });

  // Crear botón "Agregar riesgo"
  var botonAgregarRiesgo2 = document.createElement("button");
  botonAgregarRiesgo2.innerText = "Gestionar proyecto";

  function redirigirAInicio() {
    window.location.href = "proyecto.html";
  }

  botonAgregarRiesgo2.addEventListener("click", redirigirAInicio);

  // Crear botón "Agregar otra cosa"
  var botonAgregarOtraCosa = document.createElement("button");
  botonAgregarOtraCosa.innerText = "Agregar otra cosa";
  botonAgregarOtraCosa.addEventListener("click", function() {
    alert("Agregando otra cosa...");
  });

  // agregar elementos al proyecto
  proyecto.appendChild(proyectoTitulo);
  proyecto.appendChild(proyectoDescripcion);
  proyecto.appendChild(botonAgregarRiesgo2);
  proyecto.appendChild(botonAgregarOtraCosa); // Nuevo botón agregado

  // Agregar proyecto al DOM
  var proyectosContainer = document.getElementById("proyectos");
  proyectosContainer.appendChild(proyecto);

  // Agregar proyecto al arreglo de proyectos
  var proyectoNuevo = {
    titulo: titulo,
    descripcion: descripcion,
  };
  proyectos.push(proyectoNuevo);

  // Guardar proyectos en localStorage
  localStorage.setItem("proyectos", JSON.stringify(proyectos));

  // Limpiar campos de texto
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";

  // Evitar que se envíe el formulario
  return false;
}

function mostrarProyectos() {
  var proyectosContainer = document.getElementById("proyectos");

  proyectos.forEach(function(proyecto) {
    // Crear elemento de proyecto
    var proyectoElement = document.createElement("div");
    proyectoElement.classList.add("proyecto");

    // Crear elementos de título y descripción
    var proyectoTitulo = document.createElement("h2");
    proyectoTitulo.innerText = proyecto.titulo;
    var proyectoDescripcion = document.createElement("p");
    proyectoDescripcion.innerText = proyecto.descripcion;

    // Agregar manejador

    proyectoElement.addEventListener("click", function() {
        window.location.href = "index.html";
        });
        // Crear botón "Agregar riesgo"
var botonAgregarRiesgo2 = document.createElement("button");
botonAgregarRiesgo2.innerText = "Gestionar proyecto";

function redirigirAInicio() {
  window.location.href = "proyecto.html";
}

botonAgregarRiesgo2.addEventListener("click", redirigirAInicio);

// Crear botón "Agregar otra cosa"
var botonAgregarOtraCosa = document.createElement("button");
botonAgregarOtraCosa.innerText = "Agregar otra cosa";
botonAgregarOtraCosa.addEventListener("click", function() {
  alert("Agregando otra cosa...");
});

// agregar elementos al proyecto
proyectoElement.appendChild(proyectoTitulo);
proyectoElement.appendChild(proyectoDescripcion);
proyectoElement.appendChild(botonAgregarRiesgo2);
proyectoElement.appendChild(botonAgregarOtraCosa); // Nuevo botón agregado

// Agregar proyecto al DOM
proyectosContainer.appendChild(proyectoElement);
});
}

console.log(proyectos)