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

  var botonAgregarRiesgo2 = document.createElement("button");
  botonAgregarRiesgo2.innerText = "Gestionar proyecto";

  function redirigirAInicio() {
    window.location.href = "proyecto.html";
  }

  botonAgregarRiesgo2.addEventListener("click", redirigirAInicio);

  var botonAgregarOtraCosa = document.createElement("button");
  botonAgregarOtraCosa.innerText = "Agregar otra cosa";
  botonAgregarOtraCosa.addEventListener("click", function() {
    alert("Agregando otra cosa...");
  });

  proyecto.appendChild(proyectoTitulo);
  proyecto.appendChild(proyectoDescripcion);
  proyecto.appendChild(botonAgregarRiesgo2);
  proyecto.appendChild(botonAgregarOtraCosa); // Nuevo botón agregado

  var proyectosContainer = document.getElementById("proyectos");
  proyectosContainer.appendChild(proyecto);

  var proyectoNuevo = {
    titulo: titulo,
    descripcion: descripcion,
  };
  proyectos.push(proyectoNuevo);

  localStorage.setItem("proyectos", JSON.stringify(proyectos));

  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";

  return false;
}

function mostrarProyectos() {
  var proyectosContainer = document.getElementById("proyectos");

  proyectos.forEach(function(proyecto) {
    var proyectoElement = document.createElement("div");
    proyectoElement.classList.add("proyecto");

    var proyectoTitulo = document.createElement("h2");
    proyectoTitulo.innerText = proyecto.titulo;
    var proyectoDescripcion = document.createElement("p");
    proyectoDescripcion.innerText = proyecto.descripcion;


    proyectoElement.addEventListener("click", function() {
        window.location.href = "index.html";
        });
var botonAgregarRiesgo2 = document.createElement("button");
botonAgregarRiesgo2.innerText = "Gestionar proyecto";

function redirigirAInicio() {
  window.location.href = "proyecto.html";
}

botonAgregarRiesgo2.addEventListener("click", redirigirAInicio);

var botonAgregarOtraCosa = document.createElement("button");
botonAgregarOtraCosa.innerText = "Agregar otra cosa";
botonAgregarOtraCosa.addEventListener("click", function() {
  alert("Agregando otra cosa...");
});

proyectoElement.appendChild(proyectoTitulo);
proyectoElement.appendChild(proyectoDescripcion);
proyectoElement.appendChild(botonAgregarRiesgo2);
proyectoElement.appendChild(botonAgregarOtraCosa); // Nuevo botón agregado

proyectosContainer.appendChild(proyectoElement);
});
}

console.log(proyectos)