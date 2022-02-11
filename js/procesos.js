window.onload = function() {
    const body1 = document.body;
    if (body1.id == "procesos") {
        iniciarProcesos();
    }
};

// PINTAR EL HTML DE LA PAGINA DE PROCESOS 
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

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos(section_menus));
            console.log("fin del eventListener");
            consultaBD(1);
        });
    }

    //btn_pedidoVenta
    let btn_pedidoVenta = document.createElement("button");
    btn_pedidoVenta.id = "btn_pedidoVenta";
    btn_pedidoVenta.textContent = "Pedido Venta";
    if (btn_pedidoVenta) {
        btn_pedidoVenta.addEventListener("click", function() {

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos(section_menus));
            console.log("fin del eventListener");
        });
    }

    //btn_ventaDirecta
    let btn_ventaDirecta = document.createElement("button");
    btn_ventaDirecta.id = "btn_ventaDirecta";
    btn_ventaDirecta.textContent = "Venta Directa";
    if (btn_ventaDirecta) {
        btn_ventaDirecta.addEventListener("click", function() {

            section_menus.classList.add("unselectable");
            section_menus.insertAdjacentElement("afterend", PopUp_procesos(section_menus));
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

// CREACION DEL POP-UP DE PROCESOS 
function PopUp_procesos(section_menus) {
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
    /*
        popUp_btn_buscar.addEventListener("click", function(
            let cod_clieProv = popUp_div_cod_input.value;
            let nombre_clieProv = popUp_div_nombre_input.value;
            let cif_clieProv = popUp_div_cif_input.value;

            consultaBBDD();
            /*
            Crear consulta 
            
        ));
    */
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

//FUNCTION CONSULTA BD
/*
function consultaBD(cod_cliente) {
    var datosRecibidos;
    cod_cliente = 1;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datosRecibidos = this.responseText;

            console.log(datosRecibidos);

        }
    };
    xhttp.open("GET", "./PHP/filtrar_clientes.php", true);
    xhttp.send();
}*/

function consultaBD() {
    var nombreEmpresa;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            nombreEmpresa = this.responseText;
            document.getElementById("nombreEmpresa").innerHTML = nombreEmpresa;
        }
    };
    xhttp.open("GET", "./PHP/select.php", true);
    xhttp.send();
}