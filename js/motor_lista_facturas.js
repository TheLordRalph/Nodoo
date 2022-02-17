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

    let div_campo_factura_id = document.createElement("div");
    div_campo_factura_id.setAttribute("class", "parametro_factura");
    let div_campo_factura_empresa = document.createElement("div");
    div_campo_factura_empresa.setAttribute("class", "parametro_factura");
    let div_campo_factura_fecha = document.createElement("div");
    div_campo_factura_fecha.setAttribute("class", "parametro_factura");
    let div_campo_factura_pago = document.createElement("div");
    div_campo_factura_pago.setAttribute("class", "parametro_factura");
    let div_campo_factura_cantidad = document.createElement("div");
    div_campo_factura_cantidad.setAttribute("class", "parametro_factura");
    let div_campo_factura_importe = document.createElement("div");
    div_campo_factura_importe.setAttribute("class", "parametro_factura");

    div_factura_blanco.appendChild(div_campo_factura_id);
    div_factura_blanco.appendChild(div_campo_factura_empresa);
    div_factura_blanco.appendChild(div_campo_factura_fecha);
    div_factura_blanco.appendChild(div_campo_factura_pago);
    div_factura_blanco.appendChild(div_campo_factura_cantidad);
    div_factura_blanco.appendChild(div_campo_factura_importe);

}

document.querySelector("#cuerpo_facturas").appendChild(nav_facturas);
document.querySelector("#cuerpo_facturas").appendChild(lista_facturas);