function insertarCliente(arrayDeInputs, arrayDeInputsNuevo = "", longitud) {

    if (arrayDeInputsNuevo == "") {

        let insertar = document.getElementById("insertar");
        insertar.setAttribute("class", "");
        document.getElementById("cliente_seleccionado").innerHTML = "";
        document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");
        document.getElementById("cliente_mostrar").innerHTML = "";
        document.getElementById("cliente_mostrar").setAttribute("class", "ocultar");
        document.getElementById("cliente").setAttribute("class", "ocultar");

        document.getElementById("div_cliente_nuevo").remove();



        let cliente = document.getElementById("cliente");
        cliente.setAttribute("class", "caja");



        document.getElementById("cliente_nuevo").innerHTML = "";
        document.getElementById("cliente_nuevo").setAttribute("class", "ocultar");

        let div = document.createElement("div");
        div.setAttribute("class", "mini_caja");
        let div_img = document.createElement("div");
        div_img.setAttribute("class", "bloque_img");
        let div_info = document.createElement("div");
        div_info.setAttribute("class", "bloque_info");
        let img = document.createElement("img");
        let nombre = document.createElement("h5");
        let codigo = document.createElement("h5");
        codigo.className = "codigo";
        let direccion = document.createElement("p");
        let email = document.createElement("p");
        div_img.appendChild(img);
        div_info.append(nombre, codigo, direccion, email);
        let longitud = cliente.querySelectorAll(".mini_caja").length;
        div.setAttribute("id", "info_" + longitud);

        img.src = "images/Logo_prueba.png";
        nombre.innerText = arrayDeInputs[2];
        codigo.innerText = arrayDeInputs[3];
        direccion.innerText = arrayDeInputs[11] + ", " + arrayDeInputs[9];
        email.innerText = arrayDeInputs[6];
        div.append(div_img, div_info);


        cliente.appendChild(div);

        div.addEventListener("click", function() {


            let insertar = document.getElementById("insertar");
            insertar.setAttribute("class", "ocultar");
            document.getElementById("cliente_nuevo").innerHTML = "";
            document.getElementById("cliente_nuevo").setAttribute("class", "ocultar");
            document.getElementById("cliente").setAttribute("class", "ocultar");



            mostrarCliente(arrayDeInputs, longitud);



        });

    } else {

        let insertar = document.getElementById("insertar");
        insertar.setAttribute("class", "");
        document.getElementById("cliente_seleccionado").innerHTML = "";
        document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");
        document.getElementById("cliente_mostrar").innerHTML = "";
        document.getElementById("cliente_mostrar").setAttribute("class", "ocultar");
        document.getElementById("cliente").setAttribute("class", "ocultar");


        let cliente = document.getElementById("cliente");
        cliente.setAttribute("class", "caja");

        document.getElementById("cliente_nuevo").innerHTML = "";
        document.getElementById("cliente_nuevo").setAttribute("class", "ocultar");

        let div = document.createElement("div");
        div.setAttribute("class", "mini_caja");
        let div_img = document.createElement("div");
        div_img.setAttribute("class", "bloque_img");
        let div_info = document.createElement("div");
        div_info.setAttribute("class", "bloque_info");
        let img = document.createElement("img");
        let nombre = document.createElement("h5");
        let codigo = document.createElement("h5");
        codigo.className = "codigo";
        let direccion = document.createElement("p");
        let email = document.createElement("p");
        div_img.appendChild(img);
        div_info.append(nombre, codigo, direccion, email);



        img.src = "images/Logo_prueba.png";
        nombre.innerText = arrayDeInputsNuevo[2];
        codigo.innerText = arrayDeInputsNuevo[3];
        direccion.innerText = arrayDeInputsNuevo[11] + ", " + arrayDeInputsNuevo[9];
        email.innerText = arrayDeInputsNuevo[6];
        div.append(div_img, div_info);

        let idInfo = "info_" + longitud;
        let div_actualizar = document.getElementById(idInfo);


        cliente.replaceChild(div, div_actualizar);
        div.setAttribute("id", "info_" + longitud);

        div.addEventListener("click", function() {


            let insertar = document.getElementById("insertar");
            insertar.setAttribute("class", "ocultar");
            document.getElementById("cliente_nuevo").innerHTML = "";
            document.getElementById("cliente_nuevo").setAttribute("class", "ocultar");
            document.getElementById("cliente").setAttribute("class", "ocultar");



            mostrarCliente(arrayDeInputsNuevo, longitud);



        });
    }



}



function insertarProveedor(arrayDeInputs, arrayDeInputsNuevo = "", longitud) {

    if (arrayDeInputsNuevo == "") {

        let insertar = document.getElementById("insertar");
        insertar.setAttribute("class", "");
        document.getElementById("proveedor_seleccionado").innerHTML = "";
        document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");
        document.getElementById("proveedor_mostrar").innerHTML = "";
        document.getElementById("proveedor_mostrar").setAttribute("class", "ocultar");
        document.getElementById("proveedor").setAttribute("class", "ocultar");

        document.getElementById("div_proveedor_nuevo").remove();



        let proveedor = document.getElementById("proveedor");
        proveedor.setAttribute("class", "caja");



        document.getElementById("proveedor_nuevo").innerHTML = "";
        document.getElementById("proveedor_nuevo").setAttribute("class", "ocultar");

        let div = document.createElement("div");
        div.setAttribute("class", "mini_caja");
        let div_img = document.createElement("div");
        div_img.setAttribute("class", "bloque_img");
        let div_info = document.createElement("div");
        div_info.setAttribute("class", "bloque_info");
        let img = document.createElement("img");
        let nombre = document.createElement("h5");
        let codigo = document.createElement("h5");
        codigo.className = "codigo";
        let direccion = document.createElement("p");
        let email = document.createElement("p");
        div_img.appendChild(img);
        div_info.append(nombre, codigo, direccion, email);
        let longitud = proveedor.querySelectorAll(".mini_caja").length;
        div.setAttribute("id", "info_" + longitud);

        img.src = "images/Logo_prueba.png";
        nombre.innerText = arrayDeInputs[0];
        codigo.innerText = arrayDeInputs[1];
        direccion.innerText = arrayDeInputs[9] + ", " + arrayDeInputs[7];
        email.innerText = arrayDeInputs[4];
        div.append(div_img, div_info);


        proveedor.appendChild(div);

        div.addEventListener("click", function() {


            let insertar = document.getElementById("insertar");
            insertar.setAttribute("class", "ocultar");
            document.getElementById("proveedor_nuevo").innerHTML = "";
            document.getElementById("proveedor_nuevo").setAttribute("class", "ocultar");
            document.getElementById("proveedor").setAttribute("class", "ocultar");



            mostrarProveedor(arrayDeInputs, longitud);



        });

    } else {

        let insertar = document.getElementById("insertar");
        insertar.setAttribute("class", "");
        document.getElementById("proveedor_seleccionado").innerHTML = "";
        document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");
        document.getElementById("proveedor_mostrar").innerHTML = "";
        document.getElementById("proveedor_mostrar").setAttribute("class", "ocultar");
        document.getElementById("proveedor").setAttribute("class", "ocultar");





        let proveedor = document.getElementById("proveedor");
        proveedor.setAttribute("class", "caja");



        document.getElementById("proveedor_nuevo").innerHTML = "";
        document.getElementById("proveedor_nuevo").setAttribute("class", "ocultar");

        let div = document.createElement("div");
        div.setAttribute("class", "mini_caja");
        let div_img = document.createElement("div");
        div_img.setAttribute("class", "bloque_img");
        let div_info = document.createElement("div");
        div_info.setAttribute("class", "bloque_info");
        let img = document.createElement("img");
        let nombre = document.createElement("h5");
        let codigo = document.createElement("h5");
        codigo.className = "codigo";
        let direccion = document.createElement("p");
        let email = document.createElement("p");
        div_img.appendChild(img);
        div_info.append(nombre, codigo, direccion, email);



        img.src = "images/Logo_prueba.png";
        nombre.innerText = arrayDeInputsNuevo[0];
        codigo.innerText = arrayDeInputsNuevo[1];
        direccion.innerText = arrayDeInputsNuevo[9] + ", " + arrayDeInputsNuevo[7];
        email.innerText = arrayDeInputsNuevo[4];
        div.append(div_img, div_info);

        let idInfo = "info_" + longitud;
        let div_actualizar = document.getElementById(idInfo);


        proveedor.replaceChild(div, div_actualizar);
        div.setAttribute("id", "info_" + longitud);

        div.addEventListener("click", function() {


            let insertar = document.getElementById("insertar");
            insertar.setAttribute("class", "ocultar");
            document.getElementById("proveedor_nuevo").innerHTML = "";
            document.getElementById("proveedor_nuevo").setAttribute("class", "ocultar");
            document.getElementById("proveedor").setAttribute("class", "ocultar");



            mostrarProveedor(arrayDeInputsNuevo, longitud);



        });
    }

}


function descartarCliente() {

    let cliente = document.getElementById("cliente");
    cliente.setAttribute("class", "caja");
    document.getElementById("cliente_nuevo").innerHTML = "";
    document.getElementById("cliente_nuevo").setAttribute("class", "ocultar");



    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "");
    document.getElementById("cliente_seleccionado").innerHTML = "";
    document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("cliente_mostrar").innerHTML = "";
    document.getElementById("cliente_mostrar").setAttribute("class", "ocultar");

    try {
        document.getElementById("div_cliente_mostrar").remove();
    } catch (error) {
        try {
            document.getElementById("div_cliente_editado").remove();
        } catch (error) {
            document.getElementById("div_cliente_nuevo").remove();
        }
    }














}

function descartarProveedor() {

    let proveedor = document.getElementById("proveedor");
    proveedor.setAttribute("class", "caja");
    document.getElementById("proveedor_nuevo").innerHTML = "";
    document.getElementById("proveedor_nuevo").setAttribute("class", "ocultar");



    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "");
    document.getElementById("proveedor_seleccionado").innerHTML = "";
    document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("proveedor_mostrar").innerHTML = "";
    document.getElementById("proveedor_mostrar").setAttribute("class", "ocultar");

    try {
        document.getElementById("div_proveedor_mostrar").remove();
    } catch (error) {
        try {
            document.getElementById("div_proveedor_editado").remove();
        } catch (error) {
            document.getElementById("div_proveedor_nuevo").remove();
        }
    }
}


function nuevoCliente(longitud) {

    let section1 = document.getElementById("section1");

    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "ocultar");
    document.getElementById("cliente_seleccionado").innerHTML = "";
    document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("cliente_mostrar").innerHTML = "";
    document.getElementById("cliente_mostrar").setAttribute("class", "ocultar");
    document.getElementById("cliente").setAttribute("class", "ocultar");

    let divClienteNuevo = document.createElement("div");
    divClienteNuevo.setAttribute("id", "div_cliente_nuevo");
    divClienteNuevo.innerHTML = "<h3> Nuevo Cliente </h3>";
    divClienteNuevo.setAttribute("class", "cliente_con_seleccion");

    section1.insertBefore(divClienteNuevo, insertar);



    let cliente2 = document.getElementById("cliente_nuevo");
    cliente2.setAttribute("class", "caja");
    document.getElementById("cliente").setAttribute("class", "ocultar");

    let form = document.createElement("form");

    let radio_buttonEmpresa = document.createElement("input");
    radio_buttonEmpresa.setAttribute("type", "radio");
    radio_buttonEmpresa.setAttribute("name", "fav_language");


    radio_buttonEmpresa.setAttribute("id", "tipo_empresa");


    let radio_buttonParticular = document.createElement("input");
    radio_buttonParticular.setAttribute("type", "radio");
    radio_buttonParticular.setAttribute("id", "tipo_empresa");
    radio_buttonParticular.setAttribute("name", "fav_language");
    radio_buttonParticular.checked = true;


    let particular = document.createElement("h5");
    let empresa = document.createElement("h5");

    particular.innerText = "Particular";
    empresa.innerText = "Empresa";

    let div_empresa = document.createElement("div");
    div_empresa.append(radio_buttonEmpresa, empresa);
    div_empresa.setAttribute("class", "botones");

    let div_particular = document.createElement("div");
    div_particular.append(radio_buttonParticular, particular);
    div_particular.setAttribute("class", "botones");

    let div_opciones = document.createElement("div");
    div_opciones.append(div_particular, div_empresa);
    div_opciones.setAttribute("class", "div_opciones");

    form.append(div_opciones);

    let arrayEtiquetas = ["Nombre", "Código Cliente", "DNI", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

    let arrayPlaceHolder = ["Nombre Cliente", "0001", "12345678B", "Calle Paloma 5", "ejemplo@gmail.com", "28000", "666123456", "España", "ES12 1234 1234 12 1234567890", "Madrid"];

    for (let i = 0; i < 10; i++) {

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

    let img = document.createElement("img");
    img.src = "images/Logo_prueba.png";

    let borrar = document.createElement("div");
    borrar.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'  fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z'/></svg>";

    let editar = document.createElement("div");

    editar.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg>";

    div_imagen.append(img, editar, borrar);
    div_imagen.setAttribute("class", "div_imagen");

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

    cliente2.append(form, div_cambiar);



    radio_buttonParticular.addEventListener("click", function() {

        let form = document.createElement("form");

        arrayEtiquetas = ["Nombre", "Código Cliente", "DNI", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

        arrayPlaceHolder = ["Nombre Cliente", "0001", "12345678B", "Calle Paloma 5", "ejemplo@gmail.com", "28000", "666123456", "España", "ES12 1234 1234 12 1234567890", "Madrid"];

        form.append(div_opciones);
        for (let i = 0; i < 10; i++) {

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


        form.append(div_imagen);
        cliente2.replaceChild(form, document.getElementsByTagName("form")[0]);

    });


    radio_buttonEmpresa.addEventListener("click", function() {



        let form = document.createElement("form");
        arrayEtiquetas = ["Nombre", "Código Cliente", "CIF", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

        arrayPlaceHolder = ["Nombre Cliente", "0001", "B12345678", "Calle Paloma 5", "ejemplo@gmail.com", "28000", "666123456", "España", "ES12 1234 1234 12 1234567890", "Madrid"];

        form.append(div_opciones);

        for (let i = 0; i < 10; i++) {

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



        form.append(div_imagen);
        cliente2.replaceChild(form, document.getElementsByTagName("form")[0]);

    });






    let respuesta = document.createElement("p");
    respuesta.setAttribute("class", "div_respuesta");
    document.getElementById("cliente_nuevo").append(respuesta);

    document.getElementById("guardar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {

            let inputText = document.querySelectorAll("form input");
            let arrayDeInputs = [];

            arrayDeInputs.push(inputText[0].checked);
            arrayDeInputs.push(inputText[1].checked);
            for (let i = 2; i < inputText.length; i++) {
                arrayDeInputs.push(inputText[i].value);
            }



            if (validarFormularioCliente(arrayDeInputs, respuesta)) {
                insertarCliente(arrayDeInputs, "", longitud);
            }


        } else if (body1.id == "body_proveedor") {
            let inputText = document.querySelectorAll("form input");
            let arrayDeInputs = [];
            for (let i = 0; i < inputText.length; i++) {
                arrayDeInputs.push(inputText[i].value);
            }



            if (validarFormularioProveedor(arrayDeInputs, respuesta)) {
                insertarProveedor(arrayDeInputs, "", longitud);
            }
        }

    });


    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });







}


function nuevoProveedor(longitud) {

    let section1 = document.getElementById("section1");

    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "ocultar");
    document.getElementById("proveedor_seleccionado").innerHTML = "";
    document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("proveedor_mostrar").innerHTML = "";
    document.getElementById("proveedor_mostrar").setAttribute("class", "ocultar");
    document.getElementById("proveedor").setAttribute("class", "ocultar");

    let divProveedorNuevo = document.createElement("div");
    divProveedorNuevo.setAttribute("id", "div_proveedor_nuevo");
    divProveedorNuevo.innerHTML = "<h3> Nuevo Proveedor </h3>";
    divProveedorNuevo.setAttribute("class", "proveedor_con_seleccion");

    section1.insertBefore(divProveedorNuevo, insertar);



    let proveedor2 = document.getElementById("proveedor_nuevo");
    proveedor2.setAttribute("class", "caja");
    document.getElementById("proveedor").setAttribute("class", "ocultar");


    let form = document.createElement("form");
    form.setAttribute("class", "form_proveedor");

    let arrayEtiquetas = ["Nombre", "Código Proveedor", "CIF", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

    let arrayPlaceHolder = ["Nombre Proveedor", "0001", "B12345678", "Calle Paloma 5", "ejemplo@gmail.com", "28000", "666123456", "España", "ES12 1234 1234 12 1234567890", "Madrid"];



    for (let i = 0; i < 10; i++) {

        let div_input = document.createElement("div");
        let label = document.createElement("label");
        label.setAttribute("id", "etiqueta" + i);
        label.innerText = arrayEtiquetas[i];
        let texto = document.createElement("input");
        texto.setAttribute("type", "text");
        texto.setAttribute("id", "texto" + i);
        texto.placeholder = arrayPlaceHolder[i];
        div_input.append(label, texto);
        div_input.setAttribute("class", "div_input2");
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

    proveedor2.append(form, div_cambiar);
    let respuesta = document.createElement("p");
    respuesta.setAttribute("class", "div_respuesta");
    document.getElementById("proveedor_nuevo").append(respuesta);

    document.getElementById("guardar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {

            let inputText = document.querySelectorAll("form input");
            let arrayDeInputs = [];
            for (let i = 0; i < inputText.length; i++) {
                arrayDeInputs.push(inputText[i].value);
            }


            if (validarFormularioCliente(arrayDeInputs, respuesta)) {
                insertarCliente(arrayDeInputs, "", longitud);
            }

        } else if (body1.id == "body_proveedor") {
            let inputText = document.querySelectorAll("form input");
            let arrayDeInputs = [];
            for (let i = 0; i < inputText.length; i++) {
                arrayDeInputs.push(inputText[i].value);
            }

            if (validarFormularioProveedor(arrayDeInputs, respuesta)) {
                insertarProveedor(arrayDeInputs, "", longitud);
            }
        }

    });


    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });

}


function editarCliente(arrayDeInputs, longitud) {

    let section1 = document.getElementById("section1");
    let insertar = document.getElementById("insertar");


    document.getElementById("div_cliente_mostrar").remove();
    document.getElementById("cliente_mostrar").innerHTML = "";
    document.getElementById("cliente_mostrar").setAttribute("class", "ocultar");

    let divClienteSeleccionado = document.createElement("div");
    divClienteSeleccionado.innerHTML = "<h3> Editar Cliente </h3>";
    divClienteSeleccionado.setAttribute("id", "div_cliente_editado");
    divClienteSeleccionado.setAttribute("class", "cliente_con_seleccion");

    section1.insertBefore(divClienteSeleccionado, insertar);

    let cliente2 = document.getElementById("cliente_nuevo");
    cliente2.setAttribute("class", "caja");
    document.getElementById("cliente").setAttribute("class", "ocultar");


    let form = document.createElement("form");
    let radio_buttonEmpresa = document.createElement("input");
    radio_buttonEmpresa.setAttribute("type", "radio");
    radio_buttonEmpresa.setAttribute("name", "fav_language");

    radio_buttonEmpresa.setAttribute("id", "tipo_empresa");


    let radio_buttonParticular = document.createElement("input");
    radio_buttonParticular.setAttribute("type", "radio");
    radio_buttonParticular.setAttribute("id", "tipo_empresa");
    radio_buttonParticular.setAttribute("name", "fav_language");

    let particular = document.createElement("h5");
    let empresa = document.createElement("h5");

    particular.innerText = "Particular";
    empresa.innerText = "Empresa";

    let div_empresa = document.createElement("div");
    div_empresa.append(radio_buttonEmpresa, empresa);
    div_empresa.setAttribute("class", "botones");

    let div_particular = document.createElement("div");
    div_particular.append(radio_buttonParticular, particular);
    div_particular.setAttribute("class", "botones");

    let div_opciones = document.createElement("div");
    div_opciones.append(div_particular, div_empresa);
    div_opciones.setAttribute("class", "div_opciones");

    form.append(div_opciones);

    let arrayEtiquetas = [];

    if (arrayDeInputs[0]) {
        radio_buttonParticular.checked = true;
        arrayEtiquetas = ["Nombre", "Código Cliente", "DNI", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];
    } else {
        radio_buttonEmpresa.checked = true;
        arrayEtiquetas = ["Nombre", "Código Cliente", "CIF", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];
    }





    for (let i = 0; i < 10; i++) {

        let div_input = document.createElement("div");
        let label = document.createElement("label");
        label.setAttribute("id", "etiqueta" + i);
        label.innerText = arrayEtiquetas[i];
        let texto = document.createElement("input");
        texto.setAttribute("type", "text");
        texto.setAttribute("id", "texto" + i);
        texto.placeholder = arrayDeInputs[i + 2];
        texto.setAttribute("class", "edicion");
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

    cliente2.append(form, div_cambiar);



    radio_buttonParticular.addEventListener("click", function() {

        let form = document.createElement("form");

        arrayEtiquetas = ["Nombre", "Código Cliente", "DNI", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

        form.append(div_opciones);
        for (let i = 0; i < 10; i++) {

            let div_input = document.createElement("div");
            let label = document.createElement("label");
            label.setAttribute("id", "etiqueta" + i);
            label.innerText = arrayEtiquetas[i];
            let texto = document.createElement("input");
            texto.setAttribute("type", "text");
            texto.setAttribute("id", "texto" + i);
            texto.placeholder = arrayDeInputs[i + 2];
            texto.setAttribute("class", "edicion");
            div_input.append(label, texto);
            div_input.setAttribute("class", "div_input");
            form.append(div_input);
        }


        form.append(div_imagen);
        cliente2.replaceChild(form, document.getElementsByTagName("form")[0]);

    });


    radio_buttonEmpresa.addEventListener("click", function() {



        let form = document.createElement("form");
        arrayEtiquetas = ["Nombre", "Código Cliente", "CIF", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];

        form.append(div_opciones);

        for (let i = 0; i < 10; i++) {

            let div_input = document.createElement("div");
            let label = document.createElement("label");
            label.setAttribute("id", "etiqueta" + i);
            label.innerText = arrayEtiquetas[i];
            let texto = document.createElement("input");
            texto.setAttribute("type", "text");
            texto.setAttribute("id", "texto" + i);
            texto.placeholder = arrayDeInputs[i + 2];
            texto.setAttribute("class", "edicion");
            div_input.append(label, texto);
            div_input.setAttribute("class", "div_input");
            form.append(div_input);
        }



        form.append(div_imagen);
        cliente2.replaceChild(form, document.getElementsByTagName("form")[0]);

    });




    function comprobarCambiosCliente(arrayDeInputs, longitud) {


        let inputText = document.querySelectorAll("form input");




        let arrayDeInputsCopia = [inputText[0].checked, inputText[1].checked];
        let contador = 0;
        for (let i = 2; i < inputText.length; i++) {

            if (inputText[i].value == "") {
                arrayDeInputsCopia.push(inputText[i].placeholder);

            } else {
                arrayDeInputsCopia.push(inputText[i].value);
                contador++;
            }


        }

        if (contador > 0) {
            arrayDeInputs = arrayDeInputsCopia;
        }



        return arrayDeInputs;


    }

    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });



    document.getElementById("guardar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {

            let respuesta = document.createElement("p");
            respuesta.setAttribute("class", "div_respuesta");
            document.getElementById("cliente_nuevo").append(respuesta);


            if (validarFormularioCliente(comprobarCambiosCliente(arrayDeInputs), respuesta)) {
                insertarCliente(arrayDeInputs, comprobarCambiosCliente(arrayDeInputs), longitud);
                descartarCliente();
            }




        } else if (body1.id == "body_proveedor") {
            let respuesta = document.createElement("p");
            respuesta.setAttribute("class", "div_respuesta");
            document.getElementById("proveedor_nuevo").append(respuesta);


            if (validarFormularioProveedor(comprobarCambiosProveedor(arrayDeInputs), respuesta)) {
                insertarProveedor(arrayDeInputs, comprobarCambiosProveedor(arrayDeInputs), longitud);
                descartarProveedor();
            }
        }

    });


}

function editarProveedor(arrayDeInputs, longitud) {
    let section1 = document.getElementById("section1");
    let insertar = document.getElementById("insertar");


    document.getElementById("div_proveedor_mostrar").remove();
    document.getElementById("proveedor_mostrar").innerHTML = "";
    document.getElementById("proveedor_mostrar").setAttribute("class", "ocultar");

    let divProveedorSeleccionado = document.createElement("div");
    divProveedorSeleccionado.innerHTML = "<h3> Editar Proveedor </h3>";
    divProveedorSeleccionado.setAttribute("id", "div_proveedor_editado");
    divProveedorSeleccionado.setAttribute("class", "proveedor_con_seleccion");

    section1.insertBefore(divProveedorSeleccionado, insertar);

    let proveedor2 = document.getElementById("proveedor_nuevo");
    proveedor2.setAttribute("class", "caja");
    document.getElementById("proveedor").setAttribute("class", "ocultar");


    let form = document.createElement("form");
    form.setAttribute("class", "form_proveedor");


    let arrayEtiquetas = ["Nombre", "Código Proveedor", "CIF", "Dirección", "Correo electrónico", "C.P.", "Télefono", "País", "Número de cuenta", "Cuidad"];



    for (let i = 0; i < 10; i++) {

        let div_input = document.createElement("div");
        let label = document.createElement("label");
        label.setAttribute("id", "etiqueta" + i);
        label.innerText = arrayEtiquetas[i];
        let texto = document.createElement("input");
        texto.setAttribute("type", "text");
        texto.setAttribute("id", "texto" + i);
        texto.placeholder = arrayDeInputs[i];
        texto.setAttribute("class", "edicion");
        div_input.append(label, texto);
        div_input.setAttribute("class", "div_input2");
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

    proveedor2.append(form, div_cambiar);



    function comprobarCambiosProveedor(arrayDeInputs, longitud) {


        let inputText = document.querySelectorAll("form input");




        let arrayDeInputsCopia = [];
        let contador = 0;
        for (let i = 0; i < inputText.length; i++) {

            if (inputText[i].value == "") {
                arrayDeInputsCopia.push(inputText[i].placeholder);

            } else {
                arrayDeInputsCopia.push(inputText[i].value);
                contador++;
            }


        }

        if (contador > 0) {
            arrayDeInputs = arrayDeInputsCopia;
        }



        return arrayDeInputs;


    }

    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });



    document.getElementById("guardar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {


            let respuesta = document.createElement("p");
            respuesta.setAttribute("class", "div_respuesta");
            document.getElementById("cliente_nuevo").append(respuesta);


            if (validarFormularioCliente(comprobarCambiosCliente(arrayDeInputs), respuesta)) {
                insertarCliente(arrayDeInputs, comprobarCambiosCliente(arrayDeInputs), longitud);
                descartarCliente();
            }

        } else if (body1.id == "body_proveedor") {

            let respuesta = document.createElement("p");
            respuesta.setAttribute("class", "div_respuesta");
            document.getElementById("proveedor_nuevo").append(respuesta);


            if (validarFormularioProveedor(comprobarCambiosProveedor(arrayDeInputs), respuesta)) {
                insertarProveedor(arrayDeInputs, comprobarCambiosProveedor(arrayDeInputs), longitud);
                descartarProveedor();
            }
        }

    });

}


function mostrarCliente(arrayDeInputs, longitud) {


    let section1 = document.getElementById("section1");

    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "ocultar");
    document.getElementById("cliente_seleccionado").innerHTML = "";
    document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("cliente").setAttribute("class", "ocultar");

    let divClienteMostrar = document.createElement("div");
    divClienteMostrar.setAttribute("id", "div_cliente_mostrar");
    divClienteMostrar.innerHTML = "<h3> Cliente </h3>";
    divClienteMostrar.setAttribute("class", "div_cliente_editado");


    section1.insertBefore(divClienteMostrar, insertar);



    let cliente2 = document.getElementById("cliente_mostrar");
    cliente2.setAttribute("class", "caja");
    document.getElementById("cliente").setAttribute("class", "ocultar");
    document.getElementById("cliente_seleccionado").setAttribute("class", "ocultar");


    let arrayEtiquetas = [];

    if (arrayDeInputs[1]) {
        arrayEtiquetas = ["Código Cliente", "CIF", "Contacto", "Dirección", "Cuenta"];
    } else {
        arrayEtiquetas = ["Código Cliente", "DNI", "Contacto", "Dirección", "Cuenta"];
    }







    let nombreCliente = document.createElement("h3");
    nombreCliente.innerText = arrayDeInputs[2];
    let div_nombre = document.createElement("div");
    div_nombre.appendChild(nombreCliente);
    div_nombre.setAttribute("class", "div_nombre");
    let div_completo = document.createElement("div");
    div_completo.appendChild(div_nombre);

    for (let i = 0; i < 5; i++) {

        let div_datos = document.createElement("div");
        div_datos.setAttribute("class", "datos");
        let titulos = document.createElement("h4");
        titulos.setAttribute("id", "datos" + i);
        titulos.innerText = arrayEtiquetas[i];
        titulos.setAttribute("class", "titulos");
        let div_bloque = document.createElement("div");
        div_bloque.append(titulos, div_datos);
        div_completo.appendChild(div_bloque);
        div_bloque.setAttribute("class", "div_mostrar");

    }


    let datos_cliente = div_completo.querySelectorAll(".div_mostrar");



    let datos_codigo = datos_cliente[0].querySelector("div");
    datos_codigo.innerHTML = "<p></p>";
    datos_codigo.querySelector("p").innerText = arrayDeInputs[3];

    let datos_cif = datos_cliente[1].querySelector("div");
    datos_cif.innerHTML = "<p></p>";
    datos_cif.querySelector("p").innerText = arrayDeInputs[4];

    let datos_contacto = datos_cliente[2].querySelector("div");
    datos_contacto.innerHTML = "<p></p> <p></p>";
    datos_contacto.querySelectorAll("p")[0].innerText = arrayDeInputs[8];
    datos_contacto.querySelectorAll("p")[1].innerText = arrayDeInputs[6];

    let datos_direccion = datos_cliente[3].querySelector("div");
    datos_direccion.innerHTML = "<p></p> <p></p> <p></p>";
    datos_direccion.querySelectorAll("p")[0].innerText = arrayDeInputs[5];
    datos_direccion.querySelectorAll("p")[1].innerText = arrayDeInputs[11] + " " + arrayDeInputs[7];
    datos_direccion.querySelectorAll("p")[2].innerText = arrayDeInputs[9];

    let datos_cuenta = datos_cliente[4].querySelector("div");
    datos_cuenta.innerHTML = "<p></p>";
    let numero = arrayDeInputs[10].length;
    let corte = arrayDeInputs[10].slice(numero - 4);
    let asteriscos = "";


    for (let i = 0; i < (numero - 4); i++) {
        asteriscos += "*";


    }
    datos_cuenta.querySelector("p").innerText = asteriscos + corte;






    let div_imagen = document.createElement("div");

    let img = document.createElement("img");
    img.src = "images/Logo_prueba.png";


    div_imagen.append(img);
    div_imagen.setAttribute("class", "div_imagen_mostrar");

    let guardar = document.createElement("h5");
    let descartar = document.createElement("h5");

    guardar.innerText = "Editar";
    descartar.innerText = "Descartar";


    let div_cambiar = document.createElement("div");
    div_cambiar.append(guardar, descartar);
    div_cambiar.setAttribute("class", "div_cambiar");

    guardar.setAttribute("id", "editar_datos");
    descartar.setAttribute("id", "descartar_datos");


    div_completo.appendChild(div_cambiar);
    div_completo.setAttribute("class", "div_completo");

    div_completo.insertBefore(div_imagen, datos_cliente[1]);

    cliente2.append(div_completo);





    document.getElementById("editar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {


            editarCliente(arrayDeInputs, longitud);

        } else if (body1.id == "body_proveedor") {


            editarProveedor(arrayDeInputs, longitud);
        }

    });


    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });



}


function mostrarProveedor(arrayDeInputs, longitud) {

    let section1 = document.getElementById("section1");

    let insertar = document.getElementById("insertar");
    insertar.setAttribute("class", "ocultar");
    document.getElementById("proveedor_seleccionado").innerHTML = "";
    document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");
    document.getElementById("proveedor").setAttribute("class", "ocultar");

    let divProveedorMostrar = document.createElement("div");
    divProveedorMostrar.setAttribute("id", "div_proveedor_mostrar");
    divProveedorMostrar.innerHTML = "<h3> Proveedor </h3>";
    divProveedorMostrar.setAttribute("class", "div_proveedor_editado");


    section1.insertBefore(divProveedorMostrar, insertar);



    let proveedor2 = document.getElementById("proveedor_mostrar");
    proveedor2.setAttribute("class", "caja");
    document.getElementById("proveedor").setAttribute("class", "ocultar");
    document.getElementById("proveedor_seleccionado").setAttribute("class", "ocultar");





    let arrayEtiquetas = ["Código Proveedor", "CIF", "Contacto", "Dirección", "Cuenta"];



    let nombreProveedor = document.createElement("h3");
    nombreProveedor.innerText = arrayDeInputs[0];
    let div_nombre = document.createElement("div");
    div_nombre.appendChild(nombreProveedor);
    div_nombre.setAttribute("class", "div_nombre");
    let div_completo = document.createElement("div");
    div_completo.appendChild(div_nombre);

    for (let i = 0; i < 5; i++) {

        let div_datos = document.createElement("div");
        div_datos.setAttribute("class", "datos");
        let titulos = document.createElement("h4");
        titulos.setAttribute("class", "titulos");
        titulos.setAttribute("id", "datos" + i);
        titulos.innerText = arrayEtiquetas[i];
        let div_bloque = document.createElement("div");
        div_bloque.append(titulos, div_datos);
        div_completo.appendChild(div_bloque);
        div_bloque.setAttribute("class", "div_mostrar");

    }


    let datos_proveedor = div_completo.querySelectorAll(".div_mostrar");

    let datos_codigo = datos_proveedor[0].querySelector("div");
    datos_codigo.innerHTML = "<p></p>";
    datos_codigo.querySelector("p").innerText = arrayDeInputs[1];

    let datos_cif = datos_proveedor[1].querySelector("div");
    datos_cif.innerHTML = "<p></p>";
    datos_cif.querySelector("p").innerText = arrayDeInputs[2];

    let datos_contacto = datos_proveedor[2].querySelector("div");
    datos_contacto.innerHTML = "<p></p> <p></p>";
    datos_contacto.querySelectorAll("p")[0].innerText = arrayDeInputs[6];
    datos_contacto.querySelectorAll("p")[1].innerText = arrayDeInputs[4];

    let datos_direccion = datos_proveedor[3].querySelector("div");
    datos_direccion.innerHTML = "<p></p> <p></p> <p></p>";
    datos_direccion.querySelectorAll("p")[0].innerText = arrayDeInputs[3];
    datos_direccion.querySelectorAll("p")[1].innerText = arrayDeInputs[9] + " " + arrayDeInputs[5];
    datos_direccion.querySelectorAll("p")[2].innerText = arrayDeInputs[7];

    let datos_cuenta = datos_proveedor[4].querySelector("div");
    datos_cuenta.innerHTML = "<p></p>";
    let numero = arrayDeInputs[8].length;
    let corte = arrayDeInputs[8].slice(numero - 4);
    let asteriscos = "";

    for (let i = 0; i < (numero - 4); i++) {
        asteriscos += "*";

    }
    datos_cuenta.querySelector("p").innerText = asteriscos + corte;






    let div_imagen = document.createElement("div");

    let img = document.createElement("img");
    img.src = "images/Logo_prueba.png";


    div_imagen.append(img);
    div_imagen.setAttribute("class", "div_imagen_mostrar");

    let guardar = document.createElement("h5");
    let descartar = document.createElement("h5");

    guardar.innerText = "Editar";
    descartar.innerText = "Descartar";


    let div_cambiar = document.createElement("div");
    div_cambiar.append(guardar, descartar);
    div_cambiar.setAttribute("class", "div_cambiar");

    guardar.setAttribute("id", "editar_datos");
    descartar.setAttribute("id", "descartar_datos");

    div_completo.appendChild(div_cambiar);
    div_completo.setAttribute("class", "div_completo");

    div_completo.insertBefore(div_imagen, datos_proveedor[1]);

    proveedor2.append(div_completo);




    document.getElementById("editar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {


            editarCliente(arrayDeInputs, longitud);

        } else if (body1.id == "body_proveedor") {


            editarProveedor(arrayDeInputs, longitud);
        }

    });


    document.getElementById("descartar_datos").addEventListener("click", function() {

        const body1 = document.body;

        if (body1.id == "body_cliente") {
            descartarCliente();
        } else if (body1.id == "body_proveedor") {
            descartarProveedor();
        }

    });
}


document.getElementById("nuevo").addEventListener("click", function() {

    const body1 = document.body;

    if (body1.id == "body_cliente") {


        nuevoCliente(cliente.querySelectorAll(".mini_caja").length);
    } else if (body1.id == "body_proveedor") {
        nuevoProveedor(proveedor.querySelectorAll(".mini_caja").length);
    }

});


function validarFormularioCliente(arrayDeInputsNuevo, respuesta) {

    let referencia = 1;
    let regular = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


    function cleanStr(str) {
        let str2 = "";

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == " ") {

                str2 += "";

            } else {
                str2 += str.charAt(i);
            }
        }

        return str2;
    }

    function startsWithCapital(word) {
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }


    function startsWithCapitals(word) {
        return word.charAt(0) === word.charAt(0).toUpperCase() && word.charAt(1) === word.charAt(1).toUpperCase()
    }

    let cuenta = cleanStr(arrayDeInputsNuevo[10]);



    if (arrayDeInputsNuevo[2] == "" || arrayDeInputsNuevo[2].length <= 2) {

        respuesta.innerHTML = "Introduzca un nombre de cliente correcto";

    } else if (arrayDeInputsNuevo[3] == "") {
        respuesta.innerHTML = "Introduzca un código de cliente correcto";
    } else if (arrayDeInputsNuevo[0] && (arrayDeInputsNuevo[4].length != 9 || isNaN(Number(arrayDeInputsNuevo[4].slice(0, 7))) || !isNaN(Number(arrayDeInputsNuevo[4].slice(8)))) || !startsWithCapital(arrayDeInputsNuevo[4].slice(8))) {
        respuesta.innerHTML = "Introduzca un dni correcto";
    } else if (arrayDeInputsNuevo[1] && (arrayDeInputsNuevo[4].length != 9 || !isNaN(Number(arrayDeInputsNuevo[4].slice(0, 1))) || !startsWithCapital(arrayDeInputsNuevo[4].slice(0, 1)) || isNaN(Number(arrayDeInputsNuevo[4].slice(1, 8))))) {
        respuesta.innerHTML = "Introduzca un cif correcto";
    } else if (arrayDeInputsNuevo[5] == "" || arrayDeInputsNuevo[5].length < 7) {
        respuesta.innerHTML = "Introduzca una dirección correcta";
    } else if (arrayDeInputsNuevo[6] == "") {
        respuesta.innerHTML = "Introduzca un valor en el campo email";
    } else if (regular.test(arrayDeInputsNuevo[6]) == false) {
        respuesta.innerHTML = "Introduzca una estructura correcta en el campo email";
    } else if (arrayDeInputsNuevo[7].length != 5 || isNaN(Number(arrayDeInputsNuevo[7]))) {
        respuesta.innerHTML = "Introduzca un código postal correcto";
    } else if (arrayDeInputsNuevo[8].length != 9 || isNaN(Number(arrayDeInputsNuevo[8]))) {
        respuesta.innerHTML = "Introduzca un télefono correcto";
    } else if (arrayDeInputsNuevo[9] == "" || arrayDeInputsNuevo[9].length <= 3 || !isNaN(Number(arrayDeInputsNuevo[9]))) {
        respuesta.innerHTML = "Introduzca un país correcto";
    } else if (arrayDeInputsNuevo[10] == "" || cuenta.slice(2).length != 22 || isNaN(Number(cuenta.slice(2))) || (!isNaN(Number(cuenta.slice(0, 1))) || !isNaN(Number(cuenta.slice(1, 2)))) || !startsWithCapitals(cuenta.slice(0, 2))) {
        respuesta.innerHTML = "Introduzca un número de cuenta correcto";

    } else if (arrayDeInputsNuevo[11] == "" || !isNaN(Number(arrayDeInputsNuevo[11]))) {
        respuesta.innerHTML = "Introduzca una ciudad correcta";
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

function validarFormularioProveedor(arrayDeInputsNuevo, respuesta) {

    let referencia = 1;
    let regular = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    function cleanStr(str) {
        let str2 = "";

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == " ") {

                str2 += "";

            } else {
                str2 += str.charAt(i);
            }
        }

        return str2;
    }


    function startsWithCapital(word) {
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }

    function startsWithCapitals(word) {
        return word.charAt(0) === word.charAt(0).toUpperCase() && word.charAt(1) === word.charAt(1).toUpperCase()
    }



    let cuenta = cleanStr(arrayDeInputsNuevo[8]);



    if (arrayDeInputsNuevo[0] == "" || arrayDeInputsNuevo[0].length <= 2) {

        respuesta.innerHTML = "Introduzca un nombre de proveedor correcto";

    } else if (arrayDeInputsNuevo[1] == "") {
        respuesta.innerHTML = "Introduzca un código de proveedor correcto";
    } else if (arrayDeInputsNuevo[2].length != 9 || !isNaN(Number(arrayDeInputsNuevo[2].slice(0, 1))) || isNaN(Number(arrayDeInputsNuevo[2].slice(1, 8))) || !startsWithCapital(arrayDeInputsNuevo[2].slice(0, 1))) {
        respuesta.innerHTML = "Introduzca un cif correcto";

    } else if (arrayDeInputsNuevo[3] == "" || arrayDeInputsNuevo[3].length < 7) {
        respuesta.innerHTML = "Introduzca una dirección correcta";
    } else if (arrayDeInputsNuevo[4] == "") {
        respuesta.innerHTML = "Introduzca un valor en el campo email";
    } else if (regular.test(arrayDeInputsNuevo[4]) == false) {
        respuesta.innerHTML = "Introduzca una estructura correcta en el campo email";
    } else if (arrayDeInputsNuevo[5].length != 5 || isNaN(Number(arrayDeInputsNuevo[5]))) {
        respuesta.innerHTML = "Introduzca un código postal correcto";
    } else if (arrayDeInputsNuevo[6].length != 9 || isNaN(Number(arrayDeInputsNuevo[6]))) {
        respuesta.innerHTML = "Introduzca un télefono correcto";
    } else if (arrayDeInputsNuevo[7] == "" || arrayDeInputsNuevo[7].length <= 3 || !isNaN(Number(arrayDeInputsNuevo[7]))) {
        respuesta.innerHTML = "Introduzca un país correcto";
    } else if (arrayDeInputsNuevo[8] == "" || cuenta.slice(2).length != 22 || isNaN(Number(cuenta.slice(2))) || (!isNaN(Number(cuenta.slice(0, 1))) || !isNaN(Number(cuenta.slice(1, 2)))) || !startsWithCapitals(cuenta.slice(0, 2))) {
        respuesta.innerHTML = "Introduzca un número de cuenta correcto";
    } else if (arrayDeInputsNuevo[9] == "" || !isNaN(Number(arrayDeInputsNuevo[9]))) {
        respuesta.innerHTML = "Introduzca una ciudad correcta";
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