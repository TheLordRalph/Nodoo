window.addEventListener("load", function() {

    nuevaEmpresa();

})

function nuevaEmpresa() {




    let empresa = document.getElementById("empresa_nueva");



    let form = document.createElement("form");


    let arrayEtiquetas = ["Empresa", "CIF", "Correo electrónico", "Sitio web", "Dirección", "C.P.", "Télefono", "País"];

    let arrayPlaceHolder = ["Nombre Empresa S.L.", "P12345678", "ejemplo@gmail.com", "www.mipaginaweb.com", "Calle Paloma 5", "28000", "666123456", "España"];



    for (let i = 0; i < 8; i++) {

        let div_input = document.createElement("div");
        let label = document.createElement("label");
        label.setAttribute("id", "etiqueta" + i);
        label.innerText = arrayEtiquetas[i];
        let texto = document.createElement("input");
        texto.setAttribute("type", "text");
        texto.setAttribute("id", "texto" + i);
        texto.placeholder = arrayPlaceHolder[i];
        div_input.append(label, texto);
        div_input.setAttribute("class", "div_input");
        form.append(div_input);


    }




    let div_imagen = document.createElement("div");
    div_imagen.setAttribute("class", "div_imagen");


    let img = document.createElement("img");
    img.src = "images/Logo_prueba.png";

    let borrar = document.createElement("div");
    borrar.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'  fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z'/></svg>";

    let editar = document.createElement("div");

    editar.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg>";

    div_imagen.append(img, editar, borrar);

    let guardar = document.createElement("h5");
    let descartar = document.createElement("h5");

    guardar.innerText = "Guardar";
    descartar.innerText = "Descartar";


    let div_cambiar = document.createElement("div");
    div_cambiar.append(guardar, descartar);
    div_cambiar.setAttribute("class", "div_cambiar");

    guardar.setAttribute("id", "guardar_datos");
    descartar.setAttribute("id", "descartar_datos");


    form.append(div_imagen);

    empresa.append(form, div_cambiar);
    let respuesta = document.createElement("p");
    respuesta.setAttribute("class", "div_respuesta");
    document.getElementById("empresa_nueva").append(respuesta);

    document.getElementById("guardar_datos").addEventListener("click", function() {

        function comprobarCambiosEmpresa() {



            let inputText = document.querySelectorAll("form input");

            let arrayDeInputs = [];

            for (let i = 0; i < inputText.length; i++) {


                if (inputText[i].value == "") {
                    arrayDeInputs.push(inputText[i].placeholder);


                } else {
                    arrayDeInputs.push(inputText[i].value);


                }


            }


            return arrayDeInputs;


        }


        let inputText = document.querySelectorAll("form input");
        let arrayDeInputs = [];
        for (let i = 0; i < inputText.length; i++) {
            arrayDeInputs.push(inputText[i].value);
        }

        let contador = 0;
        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i].getAttribute("class") != "edicion") {
                contador++;
            }

        }



        if (contador > 0) {
            if (validarFormularioEmpresa(arrayDeInputs, respuesta)) {
                crearEmpresa(arrayDeInputs, inputText);
            }
        } else {
            if (validarFormularioEmpresa(comprobarCambiosEmpresa(), respuesta)) {
                crearEmpresa(comprobarCambiosEmpresa(), inputText);
            }
        }


    });


    document.getElementById("descartar_datos").addEventListener("click", function() {
        let inputText = document.querySelectorAll("form input");

        descartarCambios(inputText);

    });

}



function validarFormularioEmpresa(arrayDeInputsNuevo, respuesta) {

    let referencia = 1;
    let regular = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    let regular_web = /^[w]+[w]+[w]+[.]+([_a-z0-9-]+)+[.a-z0-9-]*.[a-z0-9-]*(.[a-z]{2,15})+[.]+[a-z]{2,4}$/;


    function startsWithCapital(word) {
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }


    if (arrayDeInputsNuevo[0] == "" || arrayDeInputsNuevo[0].length <= 2) {

        respuesta.innerHTML = "Introduzca un nombre de empresa correcto";

    } else if (arrayDeInputsNuevo[1].length != 9 || !isNaN(Number(arrayDeInputsNuevo[1].slice(0, 1))) || isNaN(Number(arrayDeInputsNuevo[1].slice(1, 8))) || !startsWithCapital(arrayDeInputsNuevo[1].slice(0, 1))) {
        respuesta.innerHTML = "Introduzca un cif correcto";

    } else if (arrayDeInputsNuevo[2] == "") {
        respuesta.innerHTML = "Introduzca un valor en el campo email";
    } else if (regular.test(arrayDeInputsNuevo[2]) == false) {
        respuesta.innerHTML = "Introduzca una estructura correcta en el campo email";
    } else if (arrayDeInputsNuevo[3] == "") {
        respuesta.innerHTML = "Introduzca un valor en el campo sitio web";
    } else if (regular_web.test(arrayDeInputsNuevo[3]) == false) {
        respuesta.innerHTML = "Introduzca una estructura correcta en el campo sito web";
    } else if (arrayDeInputsNuevo[4] == "" || arrayDeInputsNuevo[4].length < 7) {
        respuesta.innerHTML = "Introduzca una dirección correcta";
    } else if (arrayDeInputsNuevo[5].length != 5 || isNaN(Number(arrayDeInputsNuevo[5]))) {
        respuesta.innerHTML = "Introduzca un código postal correcto";
    } else if (arrayDeInputsNuevo[6].length != 9 || isNaN(Number(arrayDeInputsNuevo[6]))) {
        respuesta.innerHTML = "Introduzca un télefono correcto";
    } else if (arrayDeInputsNuevo[7] == "" || arrayDeInputsNuevo[7].length <= 3 || !isNaN(Number(arrayDeInputsNuevo[7]))) {
        respuesta.innerHTML = "Introduzca un país correcto";
    } else {
        respuesta.innerHTML = "";
        referencia = 0;
    }

    if (referencia == 0) {
        return true;
    } else {
        return false;
    }
}

function descartarCambios(inputText) {
    for (let i = 0; i < inputText.length; i++) {
        inputText[i].value = "";
    }


}


function crearEmpresa(arrayDeInputs, inputText) {

    for (let i = 0; i < inputText.length; i++) {
        inputText[i].placeholder = arrayDeInputs[i];
        inputText[i].setAttribute("class", "edicion");
        inputText[i].value = "";
    }



}