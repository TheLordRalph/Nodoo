window.addEventListener("load", function() {

    nuevoProducto();

})

function nuevoProducto() {

    let nuevoProducto = document.getElementById("producto_nuevo");



    let form = document.createElement("form");


    let arrayEtiquetas = ["Nombre", "Categoría", "Precio Compra", "Precio Venta", "Stock"];

    let arrayPlaceHolder = ["Nombre Producto", "Alimentación", "40€", "50€", "100"];



    for (let i = 0; i < 5; i++) {

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

    let svg = document.createElement("div");
    svg.innerHTML = "<svg id='nuevo' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-plus-circle-fill' viewBox='0 0 16 16'>  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'/></svg>";
    svg.setAttribute("class", "div_svg");

    let categoria = form.getElementsByClassName("div_input");


    let texto1 = categoria[1].getElementsByTagName("input")[0];
    categoria[1].insertBefore(svg, texto1);


    let div_text_area = document.createElement("div");
    let label_area = document.createElement("label");
    label_area.innerText = "Descripción";
    let text_area = document.createElement("textarea");
    text_area.placeholder = "Descripción";
    div_text_area.setAttribute("class", "div_textarea");
    div_text_area.append(label_area, text_area);

    form.append(div_text_area);


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

    nuevoProducto.append(form, div_cambiar);
    let respuesta = document.createElement("p");
    respuesta.setAttribute("class", "div_respuesta");
    document.getElementById("producto_nuevo").append(respuesta);


    document.getElementById("nuevo").addEventListener("click", function() {

        document.querySelector("#insertar h2").innerHTML = "Nueva categoría";
        nuevaCategoria();
        nuevoProducto.remove();

    });
}


function nuevaCategoria() {


    let nuevaCategoria = document.getElementById("categoria_nueva");
    nuevaCategoria.setAttribute("class", "caja");


    let form = document.createElement("form");
    form.setAttribute("id", "form_categoria");




    let div_input = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = "Nombre Categoría";
    let texto = document.createElement("input");
    texto.setAttribute("type", "text");
    texto.placeholder = "Nombre producto";
    div_input.append(label, texto);
    div_input.setAttribute("class", "div_input_categoria");


    let div_text_area = document.createElement("div");
    let label_area = document.createElement("label");
    label_area.innerText = "Descripción";
    let text_area = document.createElement("textarea");
    text_area.placeholder = "Descripción";
    div_text_area.setAttribute("class", "div_textarea_categoria");
    div_text_area.append(label_area, text_area);

    form.append(div_input, div_text_area);


    let guardar = document.createElement("h5");
    let descartar = document.createElement("h5");

    guardar.innerText = "Guardar";
    descartar.innerText = "Descartar";


    let div_cambiar = document.createElement("div");
    div_cambiar.append(guardar, descartar);
    div_cambiar.setAttribute("class", "div_cambiar");

    guardar.setAttribute("id", "guardar_datos");
    descartar.setAttribute("id", "descartar_datos");


    nuevaCategoria.append(form, div_cambiar);
    let respuesta = document.createElement("p");
    respuesta.setAttribute("class", "div_respuesta");
    document.getElementById("categoria_nueva").append(respuesta);

}