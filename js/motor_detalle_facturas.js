//DETALLE FACTUIRA

let div_factura = document.createElement("div");
div_factura.setAttribute("id", "div_factura");

let encabezado_factura = document.createElement("div");
encabezado_factura.setAttribute("id", "encabezado_factura");

let logotipo = document.createElement("div");
logotipo.setAttribute("id", "logotipo");

let datos_factura = document.createElement("div");
datos_factura.setAttribute("id", "datos_factura");

let datos_1 = document.createElement("div");
datos_1.setAttribute("id", "datos_1");

let datos_2 = document.createElement("div");
datos_2.setAttribute("id", "datos_2");

for (let i = 0; i < 2; i++) {
    let detalle_datos_1 = document.createElement("div");
    detalle_datos_1.setAttribute("class", "detalle_datos");
    datos_1.appendChild(datos_1);
}

for (let i = 0; i < 2; i++) {
    let detalle_datos_2 = document.createElement("div");
    detalle_datos_2.setAttribute("class", "detalle_datos");
    datos_2.appendChild(detalle_datos_2);
}

let nav_detalle_factura = document.createElement("div");
nav_detalle_factura.setAttribute("id", "nav_detalle_factura");

for (let i = 0; i < 2; i++) {
    let campo_nav_factura = document.createElement("div");
    campo_nav_factura.setAttribute("class", "campo_nav_factura")
    nav_detalle_factura.appendChild(campo_nav_factura);
}

datos_factura.appendChild(datos_1);
datos_factura.appendChild(datos_2);
encabezado_factura.appendChild(logotipo);
encabezado_factura.appendChild(datos_factura);
div_factura.appendChild(encabezado_factura);
document.querySelector("#detalle_factura").appendChild(div_factura);