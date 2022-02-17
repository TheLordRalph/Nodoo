function Factura(id, empresa, fecha, pago, cantidad, importe) {
    this.id = id;
    this.empresa = empresa;
    this.fecha = fecha;
    this.pago = pago;
    this.cantidad = cantidad;
    this.importe = importe;

    this.mostrar_factura = function() {

        //CREACION DIV POR FACTURA

        let div_factura = document.createElement("div");

        lista_facturas.appendChild(div_factura);
        lista_facturas.appendChild(div_factura);

        let div_campo_factura_id = document.createElement("div");
        div_campo_factura_id.setAttribute("class", "campos_facturas");
        let div_campo_factura_empresa = document.createElement("div");
        div_campo_factura_empresa.setAttribute("class", "campos_facturas");
        let div_campo_factura_fecha = document.createElement("div");
        div_campo_factura_fecha.setAttribute("class", "campos_facturas");
        let div_campo_factura_pago = document.createElement("div");
        div_campo_factura_pago.setAttribute("class", "campos_facturas");
        let div_campo_factura_cantidad = document.createElement("div");
        div_campo_factura_cantidad.setAttribute("class", "campos_facturas");
        let div_campo_factura_importe = document.createElement("div");
        div_campo_factura_importe.setAttribute("class", "campos_facturas");

        //INJECCION DATOS FACTURAS

        div_campo_factura_id.textContent = id;
        div_campo_factura_empresa.textContent = empresa;
        div_campo_factura_fecha.textContent = fecha;
        div_campo_factura_pago.textContent = pago;
        div_campo_factura_cantidad.textContent = cantidad;
        div_campo_factura_importe.textContent = importe;

        div_factura.appendChild(div_campo_factura_id);
        div_factura.appendChild(div_campo_factura_empresa);
        div_factura.appendChild(div_campo_factura_fecha);
        div_factura.appendChild(div_campo_factura_pago);
        div_factura.appendChild(div_campo_factura_cantidad);
        div_factura.appendChild(div_campo_factura_importe);

        return div_factura;
    }
}