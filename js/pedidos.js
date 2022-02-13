 window.onload = function() {

     miAjax_tipoPedido = new XMLHttpRequest();
     miAjax_tipoPedido.onreadystatechange = function() { /*le decimos "estate preparado cuando cambié"*/
         if (this.readyState == 4 && this.status == 200) {

             var tipo_pedido = miAjax_tipoPedido.responseText;
             console.log(tipo_pedido);
             //console.log(tipo_pedido[btn_tipo_pedido]);
             //console.log(tipo_pedido.ide_clie_prov);


             //console.log(btn_tipo_pedido + " y el id : " + tipo_pedido.id_clie_prov);

             let titular_pedidos = document.querySelector("#titular");

             if (tipo_pedido == "compra") {
                 titular_pedidos.textContent = "PEDIDO DE COMPRA";
             } else if (tipo_pedido == "venta") {
                 titular_pedidos.textContent = "PEDIDO DE VENTA";
             } else {
                 titular_pedidos.textContent = "VENTA DIRECTA";
             }
         }

     };
     miAjax_tipoPedido.open("GET", "./PHP/tipo_pedido.php", true); // Elegimos el metodo por el que se enviaran los datos . GET = rapido pero poco seguro , POST  = mas lento pero mas seguro


 };

 function inciar_pedidos(tipo_pedido) {

 }