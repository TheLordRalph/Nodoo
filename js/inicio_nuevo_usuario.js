document.getElementById("btn").addEventListener("click", function() {

    let inputText = document.querySelectorAll("form div input");

    let respuesta = document.getElementById("respuesta");


    let regular = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (inputText[0].value == "" || inputText[0].value.length <= 3) {

        respuesta.innerHTML = "Introduzca un nombre de usuario de al menos 4 dígitos";

    } else if (inputText[1].value == "") {
        respuesta.innerHTML = "Introduzca un valor en el campo email";
    } else if (regular.test(inputText[1].value) == false) {
        respuesta.innerHTML = "Introduzca una estructura correcta en el campo email";
    } else if (inputText[2].value == "" || inputText[2].value.length <= 5) {
        respuesta.innerHTML = "Introduzca una contraseña de al menos 5 dígitos";
    } else if (inputText[3].value != inputText[2].value) {
        respuesta.innerHTML = "Las contraseñas no coinciden";
    } else {
        respuesta.innerHTML = "";
        window.location.href = "empresa.html";

    }

});