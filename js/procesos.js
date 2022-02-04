window.onload = iniciar();

function iniciar() {
    const div_titular = document.querySelector("#titular");
    let h2_titular = document.createElement("h2");
    h2_titular.textContent = "Procesos";
    console.log(h2_titular);

    //APARTADO CREAR UN PEDIDO 
    const div_crearPedidos = document.querySelector("#crear_pedido");
    console.log(div_crearPedidos);

    let h2_crearPedidos = document.createElement("h2");
    h2_crearPedidos.textContent = "CREAR UN PEDIDO";
    let div_botones = document.createElement("div");
    div_botones.id = "div_botones_crearPedido";
    let btn_pedidoCompra = document.createElement("button");
    btn_pedidoCompra.id = "pedidoCompra";
    btn_pedidoCompra.textContent = "Pedido Compra";
    let btn_pedidoVenta = document.createElement("button");
    btn_pedidoVenta.id = "pedidoVenta";
    btn_pedidoVenta.textContent = "Pedido Compra";
    let btn_ventaDirecta = document.createElement("button");
    btn_ventaDirecta.id = "ventaDirecta";
    btn_ventaDirecta.textContent = "Pedido Compra";


    div_crearPedidos.appendChild(h2_crearPedidos);
    div_crearPedidos.appendChild(div_botones);
    div_botones.appendChild(btn_pedidoCompra);
    div_botones.appendChild(btn_pedidoVenta);
    div_botones.appendChild(btn_ventaDirecta);

    //


}

/*
let miAjax_procesos = new XMLHttpRequest;
    miAjax_procesos.onreadystatechange = function() {
        if(miAjax_procesos.readyState==4 && miAjax_procesos.status == 200){

        }
    }
    miAjax_procesos.open();
    miAjax_procesos.send();
*/