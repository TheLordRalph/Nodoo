window.onload = function() {
    let body1 = document.body;
    if (body1.id == "procesos") {
        iniciarProcesos();
    } else if (body1.id == "pedidos") {
        iniciarPedidos();
    }

};
//-----------------------------------------------------------------------------------------------------------------------------
// ------------------------------------ PINTAR EL HTML DE LA PAGINA DE PROCESOS -----------------------------------------------

let tipo_pedido;

function iniciarProcesos() {

    //APARTADO CREAR UN PEDIDO 
    const section_menus = document.querySelector("#menus_procesos");
    const div_crearPedidos = document.querySelector("#crear_pedido");
    console.log(div_crearPedidos);

    let h2_crearPedidos = document.createElement("h2");
    h2_crearPedidos.textContent = "CREAR UN PEDIDO";
    let div_botones = document.createElement("div");
    div_botones.id = "div_botones_crearPedido";
    //btn_pedidoCompra
    let btn_pedidoCompra = document.createElement("button");
    btn_pedidoCompra.id = "btn_pedidoCompra";
    btn_pedidoCompra.textContent = "Pedido Compra";
    if (btn_pedidoCompra) {
        btn_pedidoCompra.addEventListener("click", function() {

            tipo_pedido = "compra";
            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", popUp_procesos(section_menus, tipo_pedido));
            console.log("fin del eventListener");
            //consultaBD(1);
        });
    }

    //btn_pedidoVenta
    let btn_pedidoVenta = document.createElement("button");
    btn_pedidoVenta.id = "btn_pedidoVenta";
    btn_pedidoVenta.textContent = "Pedido Venta";
    if (btn_pedidoVenta) {
        btn_pedidoVenta.addEventListener("click", function() {

            tipo_pedido = "venta";
            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", popUp_procesos(section_menus, tipo_pedido));
            console.log("fin del eventListener");
        });
    }

    //btn_ventaDirecta
    let btn_ventaDirecta = document.createElement("button");
    btn_ventaDirecta.id = "btn_ventaDirecta";
    btn_ventaDirecta.textContent = "Venta Directa";
    if (btn_ventaDirecta) {
        btn_ventaDirecta.addEventListener("click", function() {

            tipo_pedido = "ventaDirecta";

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", popUp_procesos(section_menus, tipo_pedido));
            console.log("fin del eventListener");


        });
    }

    //appendChilds crearPedidos
    div_crearPedidos.appendChild(h2_crearPedidos);
    div_crearPedidos.appendChild(div_botones);
    div_botones.appendChild(btn_pedidoCompra);
    div_botones.appendChild(btn_pedidoVenta);
    div_botones.appendChild(btn_ventaDirecta);

    //APARTADO GESTIÓN DE PEDIDO 
    const div_gestionPedidos = document.querySelector("#gestion_pedido");
    console.log(div_crearPedidos);

    let h2_gestionPedidos = document.createElement("h2");
    h2_gestionPedidos.textContent = "GESTIÓN DE PEDIDOS";

    //DIV2
    let div1_gestionP = document.createElement("div");

    //DIV codigo Pedido
    let div1_div1_gestionP = document.createElement("div");
    let div1_div1_gestionP_h4 = document.createElement("h4");
    div1_div1_gestionP_h4.textContent = "Código Pedido :";
    let div1_div1_gestionP_input = document.createElement("input");
    div1_div1_gestionP_input.type = "number";

    div1_gestionP.appendChild(div1_div1_gestionP);
    div1_div1_gestionP.appendChild(div1_div1_gestionP_h4);
    div1_div1_gestionP.appendChild(div1_div1_gestionP_input);

    //DIV Fecha Pedido
    let div1_div2_gestionP = document.createElement("div");
    let div1_div2_gestionP_h4 = document.createElement("h4");
    div1_div2_gestionP_h4.textContent = "Fecha de Pedido :";
    let div1_div2_gestionP_input = document.createElement("input");
    div1_div2_gestionP_input.type = "text";

    div1_gestionP.appendChild(div1_div2_gestionP);
    div1_div2_gestionP.appendChild(div1_div2_gestionP_h4);
    div1_div2_gestionP.appendChild(div1_div2_gestionP_input);

    //DIV2
    let div2_gestionP = document.createElement("div");

    //DIV codigo Clie/Prov
    let div2_div1_gestionP = document.createElement("div");
    let div2_div1_gestionP_h4 = document.createElement("h4");
    div2_div1_gestionP_h4.textContent = "Código Clie/Prov :";
    let div2_div1_gestionP_input = document.createElement("input");
    div2_div1_gestionP_input.type = "number";

    div2_gestionP.appendChild(div2_div1_gestionP);
    div2_div1_gestionP.appendChild(div2_div1_gestionP_h4);
    div2_div1_gestionP.appendChild(div2_div1_gestionP_input);

    //DIV nombre Clie/Prov
    let div2_div2_gestionP = document.createElement("div");
    let div2_div2_gestionP_h4 = document.createElement("h4");
    div2_div2_gestionP_h4.textContent = "Nombre Clie/Prov :";
    let div2_div2_gestionP_input = document.createElement("input");
    div2_div2_gestionP_input.type = "text";

    div2_gestionP.appendChild(div2_div2_gestionP);
    div2_div2_gestionP.appendChild(div2_div2_gestionP_h4);
    div2_div2_gestionP.appendChild(div2_div2_gestionP_input);

    //DIV Tipo de Pedido
    let div3_gestionP = document.createElement("div");
    div3_gestionP.id = "filtro_tipo_pedido";
    let div3_gestionP_h4 = document.createElement("h4");
    div3_gestionP_h4.textContent = "Tipo de Pedido";
    let div3_gestionP_input = document.createElement("input");
    div3_gestionP_input.type = "text";

    div3_gestionP.appendChild(div3_gestionP_h4);
    div3_gestionP.appendChild(div3_gestionP_input);

    //DIV resultados de Busqueda
    let div_results_gestionP = document.createElement("div");
    div_results_gestionP.id = "results_gestionP";
    let div_results_gestionP_h4 = document.createElement("h4");
    div_results_gestionP_h4.textContent = "Resultados ... "

    div_results_gestionP.appendChild(div_results_gestionP_h4);

    //BOTON buscar pedido
    let btn_buscar_gestionP = document.createElement("button");
    btn_buscar_gestionP.id = "btn_buscar_gestionP";
    btn_buscar_gestionP.textContent = "Buscar";

    div_gestionPedidos.appendChild(h2_gestionPedidos);
    div_gestionPedidos.appendChild(div1_gestionP);
    div_gestionPedidos.appendChild(div2_gestionP);
    div_gestionPedidos.appendChild(div3_gestionP);
    div_gestionPedidos.appendChild(div_results_gestionP);
    div_gestionPedidos.appendChild(btn_buscar_gestionP);

}
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------- CREACION DEL POP-UP DE PROCESOS --------------------------------------------------

let id_clie_prov;

function popUp_procesos(section_menus, tipo_pedido) {

    let popUp_contenedor = document.createElement("div");
    popUp_contenedor.id = "popUp_contenedor";
    popUp_contenedor.classList.add("popUp");

    //titulo
    let popUp_titulo = document.createElement("div");
    popUp_titulo.id = "popUp_titulo";
    let popUp_titulo_h4 = document.createElement("h4");
    popUp_titulo_h4.textContent = "Selección Clie/Prov";

    //volver atrás
    let img_cerrar = document.createElement("img");
    img_cerrar.id = "img_cerrar_popUp";
    img_cerrar.src = "images/x_cerrar.svg";
    img_cerrar.addEventListener("click", function() {
        section_menus.classList.remove("unselectable");
        popUp_contenedor.remove();
        console.log("pulso cerrar.")
    });

    //inputs para filtrar
    let popUp_div_cod = document.createElement("div");
    let popUp_div_cod_h4 = document.createElement("h4");
    popUp_div_cod_h4.textContent = "Código Clie/Prov :";
    let popUp_div_cod_input = document.createElement("input");
    popUp_div_cod_input.type = "number";

    let popUp_div_nombre = document.createElement("div");
    let popUp_div_nombre_h4 = document.createElement("h4");
    popUp_div_nombre_h4.textContent = "Nombre Clie/Prov :";
    let popUp_div_nombre_input = document.createElement("input");
    popUp_div_nombre_input.type = "text";

    let popUp_div_cif = document.createElement("div");
    let popUp_div_cif_h4 = document.createElement("h4");
    popUp_div_cif_h4.textContent = "CIF/DNI :";
    let popUp_div_cif_input = document.createElement("input");
    popUp_div_cif_input.type = "text";

    let popUp_btn_buscar = document.createElement("button");
    popUp_btn_buscar.textContent = "Buscar";


    popUp_btn_buscar.addEventListener("click", function() {
        let cod_clieProv = popUp_div_cod_input.value;
        let nombre_clieProv = popUp_div_nombre_input.value;
        let cif_clieProv = popUp_div_cif_input.value;

        console.log("Buscar pulsado: codCliente es = " + cod_clieProv + " nombre : " + nombre_clieProv + " cif : " + cif_clieProv);

        arrayDeClientesFiltrados = filtrar_clientes(cod_clieProv, nombre_clieProv, cif_clieProv);


    });

    //DIV RESULTS
    let popUp_div_results = document.createElement("div");
    popUp_div_results.id = "popUp_div_results";
    let popUp_div_results_h4 = document.createElement("h4");
    popUp_div_results_h4.textContent = "Resultados...";
    //DIV DE CADA CLIENTE DE DIV RESULTS 
    let popUp_div_results_cliente = document.createElement("div");
    popUp_div_results_cliente.id = "div_result_cliente";
    let popUp_results_cliente_cod = document.createElement("h4");
    //popUp_results_cliente_cod.textContent = //resultado de consulta del codClie. ;
    let popUp_results_cliente_nombre = document.createElement("h4");
    //popUp_results_cliente_nombre.textContent = //resultado de consulta del nombre del Cliente. ;




    let popUp_btn_crearCliente = document.createElement("button");
    popUp_btn_crearCliente.textContent = "Crear nuevo Clie/Prov"


    popUp_contenedor.appendChild(img_cerrar);

    popUp_contenedor.appendChild(popUp_titulo);
    popUp_titulo.appendChild(popUp_titulo_h4);

    popUp_contenedor.appendChild(popUp_div_cod);
    popUp_div_cod.appendChild(popUp_div_cod_h4);
    popUp_div_cod.appendChild(popUp_div_cod_input);

    popUp_contenedor.appendChild(popUp_div_nombre);
    popUp_div_nombre.appendChild(popUp_div_nombre_h4);
    popUp_div_nombre.appendChild(popUp_div_nombre_input);

    popUp_contenedor.appendChild(popUp_div_cif);
    popUp_div_cif.appendChild(popUp_div_cif_h4);
    popUp_div_cif.appendChild(popUp_div_cif_input);

    popUp_contenedor.appendChild(popUp_btn_buscar);

    popUp_contenedor.appendChild(popUp_div_results);
    popUp_div_results.appendChild(popUp_div_results_h4);

    popUp_contenedor.appendChild(popUp_btn_crearCliente);

    return popUp_contenedor;



}

//---------------------------------------------------------------------------------------------------------------------------------
//------------------------------------- CREAR FUNCION MANDAR PEDIDO ---------------------------------------------------------------

function mandarDatosDePedido(_tipo_pedido, _id_clie_prov) {

    miAjax_pedidos = new XMLHttpRequest();
    miAjax_pedidos.onreadystatechange = function() { /*le decimos "estate preparado cuando cambié"*/
        if (this.readyState == 4 && this.status == 200) {

            tipo_pedido = _tipo_pedido;
            id_clie_prov = _id_clie_prov;

            location.href = 'pedidos_nodoo.html';
        }

    };
    miAjax_pedidos.open("GET", "./PHP/tipo_pedido.php?tipo_pedido=" + tipo_pedido + "&id_clie_prov=" + id_clie_prov, true)
    miAjax_pedidos.send();
}

//-------------------------------------------------------------------------------------------------------------------------------
//------------------------------------- CREAR FUNCION FILTRAR_CLIENTES-----------------------------------------------------------

function filtrar_clientes(cod_clieProv, nombre_clieProv, cif_clieProv) {
    let respuestaPHP;
    if (cod_clieProv == "") {
        cod_clieProv = null;
    }
    if (nombre_clieProv == "") {
        nombre_clieProv = null;
    }
    if (cif_clieProv == "") {
        cif_clieProv = null;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("FILTRARCLIENTES() : cod :" + cod_clieProv + " nombre: " + nombre_clieProv + " cif: " + cif_clieProv);
            respuestaPHP = this.responseText;
            //arrayRespuesta = JSON.parse(respuestaPHP);
            console.log(respuestaPHP);
            // Devolvemos el array de clientes
            return respuestaPHP;
        }
    };
    xhttp.open("GET", "./PHP/filtrar_clientes.php?cod_clieProv=" + cod_clieProv + "&nombre_clieProv=" + nombre_clieProv + "&cif_clieProv=" + cif_clieProv);
    xhttp.send();
}

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------- PINTAR HTML PAGINA DE PEDIDOS ----------------------------------------------------

function iniciarPedidos() {

    console.log("Entramos en IniciarPedidos");

    const section_pedidos = document.querySelector("#section_pedidos");
    const titular_pedidos = document.querySelector("#titular_pedidos");
    let h3_titular_pedidos = document.createElement("h3");

    if (tipo_pedido == "compra") {
        h3_titular_pedidos.textContent = "PEDIDO DE COMPRA";
        titular_pedidos.appendChild(h3_titular_pedidos);

    } else if (tipo_pedido == "venta") {
        h3_titular_pedidos.textContent = "PEDIDO DE VENTA";
        titular_pedidos.appendChild(h3_titular_pedidos);

    } else {
        h3_titular_pedidos.textContent = "VENTA DIRECTA";
        titular_pedidos.appendChild(h3_titular_pedidos);

    }

    //---- INICIO : CAJA DE PEDIDOS
    const caja_pedido = document.querySelector("#caja_de_pedido");


    //Div contenedor_img_datos
    let div_contenedor_img_datos = document.createElement("div");
    div_contenedor_img_datos.id = "div_contenedor_img_datos";
    caja_pedido.appendChild(div_contenedor_img_datos);

    let div_img_caja = document.createElement("div");
    let img_caja = document.createElement("img");
    img_caja.src = "./images/noddo_blanco.png"
    div_contenedor_img_datos.appendChild(div_img_caja);
    div_img_caja.appendChild(img_caja);

    let div_colum1_datos = document.createElement("div");
    div_contenedor_img_datos.appendChild(div_colum1_datos);
    let div_colum2_datos = document.createElement("div");
    div_contenedor_img_datos.appendChild(div_colum2_datos);

    for (let i = 0; i < 8; i++) {
        let titulo_contenido_dato = document.createElement("div");
        titulo_contenido_dato.id = "titulo_contenido_dato" + i;

        let titulo_dato = document.createElement("h5");
        titulo_dato.id = "titulo_dato" + i;
        titulo_dato.className = "fondo_rojo";
        titulo_contenido_dato.appendChild(titulo_dato);

        let contenido_dato = document.createElement("h5");
        contenido_dato.id = "contenido_dato" + i;
        titulo_contenido_dato.appendChild(contenido_dato);


        if (i < 4) {
            div_colum1_datos.appendChild(titulo_contenido_dato);
        } else {
            div_colum2_datos.appendChild(titulo_contenido_dato);
        }

        switch (i) {
            case 0:
                titulo_dato.textContent = "Nº Pedido";
                contenido_dato.textContent = "Contenido";
                break;
            case 1:
                titulo_dato.textContent = "Cliente/Proveedor";
                contenido_dato.textContent = "Contenido";
                break;
            case 2:
                titulo_dato.textContent = "Tipo Pedido";
                contenido_dato.textContent = "Contenido";
                break;
            case 3:
                titulo_dato.textContent = "Descuento";
                contenido_dato.textContent = "Contenido";
                break;
            case 4:
                titulo_dato.textContent = "Fecha Presup.";
                contenido_dato.textContent = "Contenido";

                break;
            case 5:
                titulo_dato.textContent = "Fecha Pedido";
                contenido_dato.textContent = "Contenido";
                break;
            case 6:
                titulo_dato.textContent = "Fecha Prevista";
                contenido_dato.textContent = "Contenido";
                break;
            case 7:
                titulo_dato.textContent = "Fecha Final";
                contenido_dato.textContent = "Contenido";
                break;
            default:

        }

    }


    //Div campos de tabla de productos
    let div_contenedor_nombre_de_campos = document.createElement("div");
    div_contenedor_nombre_de_campos.id = "div_contenedor_nombre_de_campos";
    caja_pedido.appendChild(div_contenedor_nombre_de_campos);

    for (let i = 0; i < 7; i++) {
        let campo = document.createElement("div");
        campo.id = "campo" + i;
        let campo_h5 = document.createElement("h5");
        div_contenedor_nombre_de_campos.appendChild(campo);
        campo.appendChild(campo_h5);
        switch (i) {
            case 0:
                campo_h5.textContent = "Producto";
                break;
            case 1:
                campo_h5.textContent = "Nombre";
                break;
            case 2:
                campo_h5.textContent = "Precio Unitario";
                break;
            case 3:
                campo_h5.textContent = "Cantidad";
                break;
            case 4:
                campo_h5.textContent = "IVA";
                break;
            case 5:
                campo_h5.textContent = "Importe";
                break;
            case 6:
                campo_h5.textContent = "Descuento";
                break;

            default:

        }
    }

    //Div caja_productos_pedido
    let div_caja_productos_pedido = document.createElement("div");
    div_caja_productos_pedido.id = "div_caja_productos_pedido";
    caja_pedido.appendChild(div_caja_productos_pedido);

    //Div boton add producto
    let div_btn_add_producto = document.createElement("div");
    div_btn_add_producto.id = "div_btn_add_producto";

    let btn_add_producto = document.createElement("button");
    btn_add_producto.textContent = "Añadir producto";
    btn_add_producto.addEventListener("click", function() {

        section_pedidos.classList.add("unselectable");
        popUp_pedidos(section_pedidos);
        //section_pedidos.insertAdjacentElement("afterend", popUp_pedidos(section_pedidos));
        console.log("fin del eventListener");
    });

    div_btn_add_producto.appendChild(btn_add_producto);
    caja_pedido.appendChild(div_btn_add_producto);


    //----- FIN : CAJA DE PEDIDOS


    //ESTADO PRODUCTO
    const div_estado_pedido = document.querySelector("#estado_pedido");

    let estado_pedido_titulo_h4 = document.createElement("h4");
    estado_pedido_titulo_h4.textContent = "ESTADO DE PEDIDO";

    let div_estado_pedido_contenido = document.createElement("div");
    let estado_pedido_contenido_h4 = document.createElement("h4");
    estado_pedido_contenido_h4.id = "estado_pedido_contenido_h4";
    estado_pedido_contenido_h4.textContent = "estado de pedido";

    div_estado_pedido.appendChild(estado_pedido_titulo_h4);
    div_estado_pedido.appendChild(div_estado_pedido_contenido);
    div_estado_pedido_contenido.appendChild(estado_pedido_contenido_h4);


    //BOTONES DE PEDIDO

    let div_botones_gestion_pedido = document.querySelector("#botones_gestion_pedido");
    let btn_crear_presupuesto = document.createElement("button");
    btn_crear_presupuesto.textContent = "Crear Presupuesto";
    div_botones_gestion_pedido.appendChild(btn_crear_presupuesto);
    let btn_crear_pedido = document.createElement("button");
    btn_crear_pedido.textContent = "Crear Pedido";
    div_botones_gestion_pedido.appendChild(btn_crear_pedido);
    let btn_finalizar_pedido = document.createElement("button");
    btn_finalizar_pedido.textContent = "Finalizar Pedido";
    div_botones_gestion_pedido.appendChild(btn_finalizar_pedido);




    //BOTON CANCELAR PEDIDO
    let div_boton_cancelar = document.querySelector("#boton_cancelar_pedido");
    let btn_cancelar_pedido = document.createElement("button");
    btn_cancelar_pedido.textContent = "Cancelar Pedido";
    div_boton_cancelar.appendChild(btn_cancelar_pedido);

}

function popUp_pedidos(section_pedidos) {

    let div_popUp_pedidos = document.createElement("div");
    div_popUp_pedidos.id = "div_popUp_pedidos";
    section_pedidos.insertAdjacentElement("afterend", div_popUp_pedidos);

    //Div btn_cerrar
    let img_cerrar = document.createElement("img");
    img_cerrar.id = "img_cerrar_popUp";
    img_cerrar.src = "images/x_cerrar.svg";
    img_cerrar.addEventListener("click", function() {

        section_pedidos.classList.remove("unselectable");
        div_popUp_pedidos.remove();
        console.log("pulso cerrar.")

    });
    div_popUp_pedidos.appendChild(img_cerrar);

    //Div caja_tabla
    let section_caja_tabla = document.createElement("section");
    section_caja_tabla.id = "section_caja_tabla";
    div_popUp_pedidos.appendChild(section_caja_tabla);



    let section_lista_productos = document.createElement("section");
    section_lista_productos.id = "lista_productos";
    let section_tabla_productos = document.createElement("section");
    section_tabla_productos.id = "tabla_productos";
    section_caja_tabla.appendChild(section_lista_productos);
    section_caja_tabla.appendChild(section_tabla_productos);

    lista_productos();



}