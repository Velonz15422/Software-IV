var usuarios =  JSON.parse(localStorage.getItem("usuarios")) || [];;

		function registrar() {
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

			alert("Registro exitoso. Por favor, inicie sesión.");

			document.getElementById("nombre").value = "";
			document.getElementById("apellido").value = "";
			document.getElementById("email").value = "";
			document.getElementById("reg-username").value = "";
			document.getElementById("reg-password").value = "";

            
		}

		function login() {
			event.preventDefault();
			var username = document.getElementById("login-username").value;
			var password = document.getElementById("login-password").value;

			var usuarioEncontrado = usuarios.find(function (usuario) {
				return usuario.username === username && usuario.password === password;
			});

			if (usuarioEncontrado) {
				alert("Inicio de sesión exitoso. Bienvenido " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido + "!");
				window.location.href = "hola.html"; // Redirigir a la página "hola.html"
			} else {
				alert("Nombre de usuario o contraseña incorrectos.");
			}

			document.getElementById("login-username").value = "";
			document.getElementById("login-password").value = "";
		}
        console.log(usuarios);