window.onload = function() {
    let body1 = document.body;
    if (body1.id == "productos") {
        lista_productos();
    }
}


function lista_productos() {
    let columnas_producto = ["Id Producto", "Nombre Producto", "Categoria", "Precio Compra", "Precio Venta", "Stock", "IVA"];

    let lista_productos = document.getElementById("lista_productos");

    columnas_producto.forEach(element => {
        let columna_producto = document.createElement("div");
        let nombre_columna_producto = document.createElement("h4");

        nombre_columna_producto.innerHTML = element;
        columna_producto.appendChild(nombre_columna_producto);
        lista_productos.appendChild(columna_producto);
    });

    let productos;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let tabla_productos = document.getElementById("tabla_productos");
            let fila_producto;
            let contador = 0;

            productos = JSON.parse(this.responseText);

            productos.forEach(i => {
                fila_producto = document.createElement("div");
                fila_producto.id = "producto" + contador;

                for (let j = 0; j < i.length; j++) {
                    let valor_fila_producto = document.createElement("h4");
                    valor_fila_producto.innerHTML = i[j];
                    fila_producto.appendChild(valor_fila_producto);
                }
                tabla_productos.appendChild(fila_producto);
                contador++;
            });
        }
    };
    xhttp.open("GET", "./PHP/productos.php", true);
    xhttp.send();
}

window.addEventListener("click", (event) => {
    if (event.path[1].id.startsWith("producto")) {
        let unselectable_producto = document.getElementById("unselectable_producto");
        let popUp_productos = document.getElementById("popUp_productos");

        unselectable_producto.setAttribute("class", "unselectable");
        popUp_productos.setAttribute("class", "popUp_productos");
    }
});