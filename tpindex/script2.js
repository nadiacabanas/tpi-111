function validarRegistro() {
    // Obtener los valores de los campos
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;
    var division = document.getElementById("division").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validar que todos los campos requeridos estén llenos
    if(dni === ""|| nombre === "" || apellido === ""  || curso === "" || division === "" ||
        usuario === "" || contrasena === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Si todo es válido, se permite el envío del formulario
    alert("Registro exitoso.");
    return true;
}
