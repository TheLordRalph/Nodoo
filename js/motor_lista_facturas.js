//LISTA DOCUMENTOS NODOO

let nav_facturas = document.createElement("div");
nav_facturas.setAttribute("id", "nav_facturas");


let campo_facturas_id = document.createElement("div");
let campo_facturas_empresa = document.createElement("div");
let campo_facturas_fecha = document.createElement("div");
let campo_facturas_pago = document.createElement("div");
let campo_facturas_cantidad = document.createElement("div");
let campo_facturas_importe = document.createElement("div");


campo_facturas_id.setAttribute("class", "campos_facturas");
campo_facturas_id.textContent = "Numero Factura";
campo_facturas_empresa.setAttribute("class", "campos_facturas");
campo_facturas_empresa.textContent = "Empresa";
campo_facturas_fecha.setAttribute("class", "campos_facturas");
campo_facturas_fecha.textContent = "Fecha";
campo_facturas_pago.setAttribute("class", "campos_facturas");
campo_facturas_pago.textContent = "Tipo de Pago";
campo_facturas_cantidad.setAttribute("class", "campos_facturas");
campo_facturas_cantidad.textContent = "Cant. Prod.";
campo_facturas_importe.setAttribute("class", "campos_facturas");
campo_facturas_importe.textContent = "Importe";

nav_facturas.appendChild(campo_facturas_id);
nav_facturas.appendChild(campo_facturas_empresa);
nav_facturas.appendChild(campo_facturas_fecha);
nav_facturas.appendChild(campo_facturas_pago);
nav_facturas.appendChild(campo_facturas_cantidad);
nav_facturas.appendChild(campo_facturas_importe);

cuerpo_facturas.appendChild(nav_facturas);

let lista_facturas = document.createElement("div");
lista_facturas.setAttribute("id", "lista_facturas");


//CREACION TEMPORAL DE ELEMENTOS DE LA LISTA

for (let i = 0; i < 5; i++) {

    let div_factura_blanco = document.createElement("div");
    div_factura_blanco.setAttribute("class", "blanco");


    let div_factura_rojo = document.createElement("div");
    div_factura_rojo.setAttribute("class", "rojo");

    lista_facturas.appendChild(div_factura_blanco);
    lista_facturas.appendChild(div_factura_rojo)

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
    div_campo_factura_importe_1.setAttribute("class", "parametro_factura_3");

    div_factura_blanco.appendChild(div_campo_factura_id_1);
    div_factura_blanco.appendChild(div_campo_factura_empresa_1);
    div_factura_blanco.appendChild(div_campo_factura_fecha_1);
    div_factura_blanco.appendChild(div_campo_factura_pago_1);
    div_factura_blanco.appendChild(div_campo_factura_cantidad_1);
    div_factura_blanco.appendChild(div_campo_factura_importe_1);

    div_campo_factura_id_1.textContent = "00000001";
    div_campo_factura_empresa_1.textContent = "AGRA S.L.";
    div_campo_factura_fecha_1.textContent = "18/01/2022";
    div_campo_factura_pago_1.textContent = "01";
    div_campo_factura_cantidad_1.textContent = "364";
    div_campo_factura_importe_1.textContent = "1610,45€";

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
    div_campo_factura_importe_2.setAttribute("class", "parametro_factura_3");

    div_factura_rojo.appendChild(div_campo_factura_id_2);
    div_factura_rojo.appendChild(div_campo_factura_empresa_2);
    div_factura_rojo.appendChild(div_campo_factura_fecha_2);
    div_factura_rojo.appendChild(div_campo_factura_pago_2);
    div_factura_rojo.appendChild(div_campo_factura_cantidad_2);
    div_factura_rojo.appendChild(div_campo_factura_importe_2);

    div_campo_factura_id_2.textContent = "00000002";
    div_campo_factura_empresa_2.textContent = "AGISA S.L.";
    div_campo_factura_fecha_2.textContent = "22/01/2022";
    div_campo_factura_pago_2.textContent = "01";
    div_campo_factura_cantidad_2.textContent = "451";
    div_campo_factura_importe_2.textContent = "2815,60€";

}

document.querySelector("#cuerpo_facturas").appendChild(nav_facturas);
document.querySelector("#cuerpo_facturas").appendChild(lista_facturas);