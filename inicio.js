var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function registrar(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;

    var usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        username: username,
        password: password
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarMensaje("Registro exitoso. Por favor, inicie sesión.", "success");

    limpiarFormulario("registro-form");
}

function login(event) {
    event.preventDefault();

    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.username === username && usuario.password === password;
    });

    if (usuarioEncontrado) {
        mostrarMensaje("Inicio de sesión exitoso. Bienvenido " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido + "!", "success");
        setTimeout(function() {
            window.location.href = "hola.html"; // Redirigir a la página "hola.html"
        }, 2000); // Esperar 2 segundos antes de redirigir
    } else {
        mostrarMensaje("Nombre de usuario o contraseña incorrectos.", "error");
    }

    limpiarFormulario("login-form");
}

function mostrarMensaje(mensaje, tipo) {
    var mensajeElement = document.getElementById("message");
    mensajeElement.textContent = mensaje;

    if (tipo === "success") {
        mensajeElement.classList.add("success-message");
        mensajeElement.classList.remove("error-message");
    } else if (tipo === "error") {
        mensajeElement.classList.add("error-message");
        mensajeElement.classList.remove("success-message");
    }
}

function limpiarFormulario(formId) {
    var form = document.getElementById(formId);
    form.reset();
}

console.log(usuarios);
