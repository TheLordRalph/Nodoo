 window.onload = inciar_pedidos();

 function inciar_pedidos(tipo_pedido) {
     let titular_pedidos = document.querySelector("#titular");

     if (tipo_pedido == "compra") {
         titular_pedidos.textContent = "PEDIDO DE COMPRA";
     } else if (tipo_pedido == "venta") {
         titular_pedidos.textContent = "PEDIDO DE VENTA";
     } else {
         titular_pedidos.textContent = "VENTA DIRECTA";
     }

 }