window.onload = function() {
    const body1 = document.body;
    if (body1.id == "procesos") {
        iniciarProcesos();
    }
};

function iniciarProcesos() {

    //APARTADO CREAR UN PEDIDO 
    const div_crearPedidos = document.querySelector("#crear_pedido");
    console.log(div_crearPedidos);

    let h2_crearPedidos = document.createElement("h2");
    h2_crearPedidos.textContent = "CREAR UN PEDIDO";
    let div_botones = document.createElement("div");
    div_botones.id = "div_botones_crearPedido";
    let btn_pedidoCompra = document.createElement("button");
    btn_pedidoCompra.id = "btn_pedidoCompra";
    btn_pedidoCompra.textContent = "Pedido Compra";
    let btn_pedidoVenta = document.createElement("button");
    btn_pedidoVenta.id = "btn_pedidoVenta";
    btn_pedidoVenta.textContent = "Pedido Venta";
    let btn_ventaDirecta = document.createElement("button");
    btn_ventaDirecta.id = "btn_ventaDirecta";
    btn_ventaDirecta.textContent = "Venta Directa";


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

function PopUp_procesos() {
    let popUp_contenedor = document.createElement("div");
    popUp_contenedor.id = "popUp_contenedor";
    popUp_contenedor.classList.add("popUp");

    let popUp_titulo = document.createElement("div");
    popUp_titulo.id = "popUp_titulo";
    let popUp_titulo_h3 = document.createElement("h3");
    popUp_titulo_h3.textContent = "Selección Clie/Prov";

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

    let popUp_div_results = document.createElement("div");
    popUp_div_results.id = "popUp_div_results";
    let popUp_div_results_h4 = document.createElement("h4");
    popUp_div_results_h4.textContent = "Resultados..."
    let popUp_btn_crearCliente = document.createElement("button");
    popUp_btn_crearCliente.textContent = "Crear nuevo Clie/Prov"

    popUp_contenedor.appendChild(popUp_titulo);
    popUp_titulo.appendChild(popUp_titulo_h3);

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

window.addEventListener("load", function(event) {

    // ESCUCHADOR btn_pedidoCompra
    // INICIO :
    const btn_pedidoCompra = this.document.querySelector("#btn_pedidoCompra");
    const btn_pedidoVenta = this.document.querySelector("#btn_pedidoVenta");
    const btn_ventaDirecta = this.document.querySelector("#btn_ventaDirecta");
    const section_menus = this.document.querySelector("#menus_procesos");

    if (btn_pedidoCompra) {
        btn_pedidoCompra.addEventListener("click", function() {

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos());
            console.log("fin del eventListener");
        });
    }

    if (btn_pedidoVenta) {
        btn_pedidoVenta.addEventListener("click", function() {

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos());
            console.log("fin del eventListener");
        });
    }

    if (btn_ventaDirecta) {
        btn_ventaDirecta.addEventListener("click", function() {

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos());
            console.log("fin del eventListener");


        });
    }



});