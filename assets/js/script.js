// // VALIDACIÓN FORMULARIO // //
(function validateForm(){
	document.getElementById('sendBtn').addEventListener('click', function(event) {
		event.preventDefault();
	// ELIMINAR SMALLS DE VALIDACIONES ANTERIORES
		document.querySelectorAll(".form-group p").forEach(function(p) {p.remove()});
	// VALORES VALUE
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var textarea = document.getElementById('textarea').value;
		var validaciones = true;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validName = /^[A-Za-z]*/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// NOMBRE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (name === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-group')[0].appendChild(labelErr());
			console.log("Nombre:" + name);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Nombre:" + name);
			validaciones = validaciones && true;
		}
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (email === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-group')[1].appendChild(labelErr());
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			var rellenarText = document.createTextNode("Este correo no es válido.");
			document.getElementsByClassName('form-group')[1].appendChild(labelErr());
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}
	////// MENSAJE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO	
		if (textarea === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-group')[2].appendChild(labelErr());
			console.log("Mensaje:" + textarea);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Mensaje:" + textarea);
			validaciones = validaciones && true;
		}
	////// VACIAR CAMPOS
		if (validaciones == true) {
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('textarea').value = "";
		}

		function labelErr() {
			var labelError = document.createElement('p');
			labelError.classList.add('text-danger');
			labelError.appendChild(rellenarText);
			return labelError;
		}
	////// FIN
	});
})();