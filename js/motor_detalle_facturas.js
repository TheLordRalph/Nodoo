//DETALLE FACTUIRA

let div_factura = document.createElement("div");
div_factura.setAttribute("id", "div_factura");

let encabezado_factura = document.createElement("div");
encabezado_factura.setAttribute("id", "encabezado_factura");

let logotipo = document.createElement("div");
logotipo.setAttribute("id", "logotipo");
let imagen_logo = document.createElement("img");
imagen_logo.setAttribute("src", "images/noddo_blanco.png");

let datos_factura = document.createElement("div");
datos_factura.setAttribute("id", "datos_factura");

let datos_1 = document.createElement("div");
datos_1.setAttribute("id", "datos_1");

let datos_2 = document.createElement("div");
datos_2.setAttribute("id", "datos_2");

let datos_3 = document.createElement("div");
datos_3.setAttribute("id", "datos_3");

let datos_4 = document.createElement("div");
datos_4.setAttribute("id", "datos_4");



let detalle_datos_1 = document.createElement("div");
detalle_datos_1.setAttribute("class", "detalle_datos");
detalle_datos_1.setAttribute("id", "detalle_datos_1");
datos_1.appendChild(detalle_datos_1);
detalle_datos_1.textContent = "Nº Factura";

let detalle_datos_2 = document.createElement("div");
detalle_datos_2.setAttribute("class", "detalle_datos");
detalle_datos_2.setAttribute("id", "detalle_datos_2");
datos_1.appendChild(detalle_datos_2);
detalle_datos_2.textContent = "Empresa";

let detalle_datos_3 = document.createElement("div");
detalle_datos_3.setAttribute("class", "detalle_datos");
detalle_datos_3.setAttribute("id", "detalle_datos_3");
datos_1.appendChild(detalle_datos_3);
detalle_datos_3.textContent = "Tipo de Pago";

let detalle_datos_4 = document.createElement("div");
detalle_datos_4.setAttribute("class", "detalle_datos");
detalle_datos_4.setAttribute("id", "detalle_datos_4");
datos_2.appendChild(detalle_datos_4);
detalle_datos_4.textContent = "00000001";

let detalle_datos_5 = document.createElement("div");
detalle_datos_5.setAttribute("class", "detalle_datos");
detalle_datos_5.setAttribute("id", "detalle_datos_5");
datos_2.appendChild(detalle_datos_5);
detalle_datos_5.textContent = "AGRA S.L.";

let detalle_datos_6 = document.createElement("div");
detalle_datos_6.setAttribute("class", "detalle_datos");
detalle_datos_6.setAttribute("id", "detalle_datos_6");
datos_2.appendChild(detalle_datos_6);
detalle_datos_6.textContent = "01";

let detalle_datos_7 = document.createElement("div");
detalle_datos_7.setAttribute("class", "detalle_datos");
detalle_datos_7.setAttribute("id", "detalle_datos_7");
datos_3.appendChild(detalle_datos_7);
detalle_datos_7.textContent = "Fecha";

let detalle_datos_8 = document.createElement("div");
detalle_datos_8.setAttribute("class", "detalle_datos");
detalle_datos_8.setAttribute("id", "detalle_datos_8");
datos_3.appendChild(detalle_datos_8);
detalle_datos_8.textContent = "Cant. Productos";

let detalle_datos_9 = document.createElement("div");
detalle_datos_9.setAttribute("class", "detalle_datos");
detalle_datos_9.setAttribute("id", "detalle_datos_9");
datos_3.appendChild(detalle_datos_9);
detalle_datos_9.textContent = "Nº Pedido";

let detalle_datos_10 = document.createElement("div");
detalle_datos_10.setAttribute("class", "detalle_datos");
detalle_datos_10.setAttribute("id", "detalle_datos_10");
datos_4.appendChild(detalle_datos_10);
detalle_datos_10.textContent = "18/01/2022";

let detalle_datos_11 = document.createElement("div");
detalle_datos_11.setAttribute("class", "detalle_datos");
detalle_datos_11.setAttribute("id", "detalle_datos_11");
datos_4.appendChild(detalle_datos_11);
detalle_datos_11.textContent = "364";

let detalle_datos_12 = document.createElement("div");
detalle_datos_12.setAttribute("class", "detalle_datos");
detalle_datos_12.setAttribute("id", "detalle_datos_12");
datos_4.appendChild(detalle_datos_12);
detalle_datos_12.textContent = "00000001";


let nav_detalle_factura = document.createElement("div");
nav_detalle_factura.setAttribute("id", "nav_detalle_factura");

for (let i = 0; i < 3; i++) {
    let campo_nav_factura = document.createElement("div");
    campo_nav_factura.setAttribute("class", "campo_nav_factura")
    nav_detalle_factura.appendChild(campo_nav_factura);
}

datos_factura.appendChild(datos_1);
datos_factura.appendChild(datos_2);
datos_factura.appendChild(datos_3);
datos_factura.appendChild(datos_4);

logotipo.appendChild(imagen_logo);
encabezado_factura.appendChild(logotipo);
encabezado_factura.appendChild(datos_factura);
div_factura.appendChild(encabezado_factura);
document.querySelector("#detalle_facturas").appendChild(div_factura);

let nav_facturas = document.createElement("div");
nav_facturas.setAttribute("id", "nav_facturas");


let campo_facturas_producto = document.createElement("div");
let campo_facturas_descripcion = document.createElement("div");
let campo_facturas_precio = document.createElement("div");
let campo_facturas_cantidad = document.createElement("div");
let campo_facturas_iva = document.createElement("div");
let campo_facturas_importe = document.createElement("div");


campo_facturas_producto.setAttribute("class", "campos_facturas");
campo_facturas_producto.textContent = "Producto";
campo_facturas_descripcion.setAttribute("class", "campos_facturas");
campo_facturas_descripcion.textContent = "Descripcion";
campo_facturas_precio.setAttribute("class", "campos_facturas");
campo_facturas_precio.textContent = "Precio Unitario";
campo_facturas_cantidad.setAttribute("class", "campos_facturas");
campo_facturas_cantidad.textContent = "Cantidad";
campo_facturas_iva.setAttribute("class", "campos_facturas");
campo_facturas_iva.textContent = "IVA";
campo_facturas_importe.setAttribute("class", "campos_facturas");
campo_facturas_importe.textContent = "Importe";

nav_facturas.appendChild(campo_facturas_producto);
nav_facturas.appendChild(campo_facturas_descripcion);
nav_facturas.appendChild(campo_facturas_precio);
nav_facturas.appendChild(campo_facturas_cantidad);
nav_facturas.appendChild(campo_facturas_iva);
nav_facturas.appendChild(campo_facturas_importe);

detalle_facturas.appendChild(nav_facturas);

let cuerpo_factura = document.createElement("div");
cuerpo_factura.setAttribute("id", "cuerpo_factura");
detalle_facturas.appendChild(cuerpo_factura);

let div_factura_blanco_1 = document.createElement("div");
div_factura_blanco_1.setAttribute("class", "blanco");

let div_campo_factura_id_1 = document.createElement("div");
div_campo_factura_id_1.setAttribute("class", "parametro_factura");
let div_campo_factura_empresa_1 = document.createElement("div");
div_campo_factura_empresa_1.setAttribute("class", "parametro_factura_2");
let div_campo_factura_fecha_1 = document.createElement("div");
div_campo_factura_fecha_1.setAttribute("class", "parametro_factura");
let div_campo_factura_pago_1 = document.createElement("div");
div_campo_factura_pago_1.setAttribute("class", "parametro_factura");
let div_campo_factura_cantidad_1 = document.createElement("div");
div_campo_factura_cantidad_1.setAttribute("class", "parametro_factura");
let div_campo_factura_importe_1 = document.createElement("div");
div_campo_factura_importe_1.setAttribute("class", "parametro_factura");

div_factura_blanco_1.appendChild(div_campo_factura_id_1);
div_factura_blanco_1.appendChild(div_campo_factura_empresa_1);
div_factura_blanco_1.appendChild(div_campo_factura_fecha_1);
div_factura_blanco_1.appendChild(div_campo_factura_pago_1);
div_factura_blanco_1.appendChild(div_campo_factura_cantidad_1);
div_factura_blanco_1.appendChild(div_campo_factura_importe_1);

div_campo_factura_id_1.textContent = "P019";
div_campo_factura_empresa_1.textContent = "Tablero Pino";
div_campo_factura_fecha_1.textContent = "15€";
div_campo_factura_pago_1.textContent = "20";
div_campo_factura_cantidad_1.textContent = "21%";
div_campo_factura_importe_1.textContent = "300€";

cuerpo_factura.appendChild(div_factura_blanco_1);

let div_factura_blanco_2 = document.createElement("div");
div_factura_blanco_2.setAttribute("class", "blanco");

let div_campo_factura_id_2 = document.createElement("div");
div_campo_factura_id_2.setAttribute("class", "parametro_factura");
let div_campo_factura_empresa_2 = document.createElement("div");
div_campo_factura_empresa_2.setAttribute("class", "parametro_factura_2");
let div_campo_factura_fecha_2 = document.createElement("div");
div_campo_factura_fecha_2.setAttribute("class", "parametro_factura");
let div_campo_factura_pago_2 = document.createElement("div");
div_campo_factura_pago_2.setAttribute("class", "parametro_factura");
let div_campo_factura_cantidad_2 = document.createElement("div");
div_campo_factura_cantidad_2.setAttribute("class", "parametro_factura");
let div_campo_factura_importe_2 = document.createElement("div");
div_campo_factura_importe_2.setAttribute("class", "parametro_factura");

div_factura_blanco_2.appendChild(div_campo_factura_id_2);
div_factura_blanco_2.appendChild(div_campo_factura_empresa_2);
div_factura_blanco_2.appendChild(div_campo_factura_fecha_2);
div_factura_blanco_2.appendChild(div_campo_factura_pago_2);
div_factura_blanco_2.appendChild(div_campo_factura_cantidad_2);
div_factura_blanco_2.appendChild(div_campo_factura_importe_2);

div_campo_factura_id_2.textContent = "P003";
div_campo_factura_empresa_2.textContent = "Malacatones";
div_campo_factura_fecha_2.textContent = "20€";
div_campo_factura_pago_2.textContent = "5";
div_campo_factura_cantidad_2.textContent = "21%";
div_campo_factura_importe_2.textContent = "100€";

cuerpo_factura.appendChild(div_factura_blanco_2);

let div_factura_blanco_3 = document.createElement("div");
div_factura_blanco_3.setAttribute("class", "blanco");

let div_campo_factura_id_3 = document.createElement("div");
div_campo_factura_id_3.setAttribute("class", "parametro_factura");
let div_campo_factura_empresa_3 = document.createElement("div");
div_campo_factura_empresa_3.setAttribute("class", "parametro_factura_2");
let div_campo_factura_fecha_3 = document.createElement("div");
div_campo_factura_fecha_3.setAttribute("class", "parametro_factura");
let div_campo_factura_pago_3 = document.createElement("div");
div_campo_factura_pago_3.setAttribute("class", "parametro_factura");
let div_campo_factura_cantidad_3 = document.createElement("div");
div_campo_factura_cantidad_3.setAttribute("class", "parametro_factura");
let div_campo_factura_importe_3 = document.createElement("div");
div_campo_factura_importe_3.setAttribute("class", "parametro_factura");

div_factura_blanco_3.appendChild(div_campo_factura_id_3);
div_factura_blanco_3.appendChild(div_campo_factura_empresa_3);
div_factura_blanco_3.appendChild(div_campo_factura_fecha_3);
div_factura_blanco_3.appendChild(div_campo_factura_pago_3);
div_factura_blanco_3.appendChild(div_campo_factura_cantidad_3);
div_factura_blanco_3.appendChild(div_campo_factura_importe_3);

div_campo_factura_id_3.textContent = "P012";
div_campo_factura_empresa_3.textContent = "Manzanas";
div_campo_factura_fecha_3.textContent = "10€";
div_campo_factura_pago_3.textContent = "15";
div_campo_factura_cantidad_3.textContent = "21%";
div_campo_factura_importe_3.textContent = "150€";

cuerpo_factura.appendChild(div_factura_blanco_3);

let div_factura_blanco_4 = document.createElement("div");
div_factura_blanco_4.setAttribute("class", "blanco");

let div_campo_factura_id_4 = document.createElement("div");
div_campo_factura_id_4.setAttribute("class", "parametro_factura");
let div_campo_factura_empresa_4 = document.createElement("div");
div_campo_factura_empresa_4.setAttribute("class", "parametro_factura_2");
let div_campo_factura_fecha_4 = document.createElement("div");
div_campo_factura_fecha_4.setAttribute("class", "parametro_factura");
let div_campo_factura_pago_4 = document.createElement("div");
div_campo_factura_pago_4.setAttribute("class", "parametro_factura");
let div_campo_factura_cantidad_4 = document.createElement("div");
div_campo_factura_cantidad_4.setAttribute("class", "parametro_factura");
let div_campo_factura_importe_4 = document.createElement("div");
div_campo_factura_importe_4.setAttribute("class", "parametro_factura");

div_factura_blanco_4.appendChild(div_campo_factura_id_4);
div_factura_blanco_4.appendChild(div_campo_factura_empresa_4);
div_factura_blanco_4.appendChild(div_campo_factura_fecha_4);
div_factura_blanco_4.appendChild(div_campo_factura_pago_4);
div_factura_blanco_4.appendChild(div_campo_factura_cantidad_4);
div_factura_blanco_4.appendChild(div_campo_factura_importe_4);

div_campo_factura_id_4.textContent = "P008";
div_campo_factura_empresa_4.textContent = "Barra Pan";
div_campo_factura_fecha_4.textContent = "1€";
div_campo_factura_pago_4.textContent = "250";
div_campo_factura_cantidad_4.textContent = "21%";
div_campo_factura_importe_4.textContent = "250€";

cuerpo_factura.appendChild(div_factura_blanco_4);

let div_factura_blanco_5 = document.createElement("div");
div_factura_blanco_5.setAttribute("class", "blanco");

let div_campo_factura_id_5 = document.createElement("div");
div_campo_factura_id_5.setAttribute("class", "parametro_factura");
let div_campo_factura_empresa_5 = document.createElement("div");
div_campo_factura_empresa_5.setAttribute("class", "parametro_factura_2");
let div_campo_factura_fecha_5 = document.createElement("div");
div_campo_factura_fecha_5.setAttribute("class", "parametro_factura");
let div_campo_factura_pago_5 = document.createElement("div");
div_campo_factura_pago_5.setAttribute("class", "parametro_factura");
let div_campo_factura_cantidad_5 = document.createElement("div");
div_campo_factura_cantidad_5.setAttribute("class", "parametro_factura");
let div_campo_factura_importe_5 = document.createElement("div");
div_campo_factura_importe_5.setAttribute("class", "parametro_factura");

div_factura_blanco_5.appendChild(div_campo_factura_id_5);
div_factura_blanco_5.appendChild(div_campo_factura_empresa_5);
div_factura_blanco_5.appendChild(div_campo_factura_fecha_5);
div_factura_blanco_5.appendChild(div_campo_factura_pago_5);
div_factura_blanco_5.appendChild(div_campo_factura_cantidad_5);
div_factura_blanco_5.appendChild(div_campo_factura_importe_5);

div_campo_factura_id_5.textContent = "P002";
div_campo_factura_empresa_5.textContent = "Cacahuetes 200gr";
div_campo_factura_fecha_5.textContent = "40€";
div_campo_factura_pago_5.textContent = "25";
div_campo_factura_cantidad_5.textContent = "21%";
div_campo_factura_importe_5.textContent = "1000€";

cuerpo_factura.appendChild(div_factura_blanco_5);

let div_factura_importe_total = document.createElement("div");
div_factura_importe_total.setAttribute("class", "blanco");
div_factura_importe_total.setAttribute("id", "importe_total");
cuerpo_factura.appendChild(div_factura_importe_total);
div_factura_importe_total.textContent = "1800€";