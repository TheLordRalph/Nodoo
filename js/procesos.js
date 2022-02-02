window.onload = iniciar();

function iniciar() {
    const div_titular = document.querySelector("#titular");
    let h2_titular = document.createElement("h2");
    h2_titular.textContent = "Procesos";
    console.log(h2_titular);

    //APARTADO CREAR UN PEDIDO 
    const div_crearPedidos = document.querySelector("#crear_pedido");
    console.log(div_crearPedidos);

    let h3_crearPedidos = document.createElement("h3");
    h3_crearPedidos.textContent = "CREAR UN PEDIDO";
    let div_pedidoCompra = document.createElement("div");
    div_pedidoCompra.id = "pedidoCompra";
    let div_pedidoVenta = document.createElement("div");
    div_pedidoVenta.id = "pedidoVenta";
    let div_ventaDirecta = document.createElement("div");
    div_ventaDirecta.id = "ventaDirecta";

    div_crearPedidos.appendChild(h3_crearPedidos);
    div_crearPedidos.appendChild(div_pedidoCompra);
    div_crearPedidos.appendChild(div_pedidoVenta);
    div_crearPedidos.appendChild(div_ventaDirecta);

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