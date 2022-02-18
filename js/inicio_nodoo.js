document.getElementById("btn").addEventListener("click", function() {

    let inputText = document.querySelectorAll("form div input");

    let respuesta = document.getElementById("respuesta");

    if (inputText[0].value == "" || inputText[0].value.length <= 3) {

        respuesta.innerHTML = "Introduzca un usuario o email correctamente";

    } else if (inputText[1].value == "" || inputText[1].value.length <= 5) {
        respuesta.innerHTML = "Introduzca una contraseña de al menos 5 dígitos";
    } else {
        respuesta.innerHTML = "";
        window.location.href = "empresa.html";

    }

});