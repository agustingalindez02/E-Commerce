//alta de productos//


class Productos {

    constructor(producto, precio, stock) {

        this.producto = producto;
        this.precio = precio;
        this.stock = stock;

    }

    agregar_producto(producto, precio, stock) {
        
        if ((producto != "") || (precio != 0) || (stock != 0)) {
            let lista = document.getElementById("lista");

            let producto = document.getElementById("floatingSelectGrid");
            let precio = document.getElementById("precio");
            let stock = document.getElementById("stock");

            let li = document.createElement("li");
            li.innerHTML = `<p> Producto: ${producto.value} Precio: $${precio.value} Stock: ${stock.vlaue}U
                            <button id="editar">Editar</button>
                            <button id="borrar"><i class="fa-regular fa-trash-can"></i></button>`;
            lista.append(li);
        }
        else ((producto == "") || (precio == 0 ) || (stock == 0 )); {
            alert("Campos incompletos");
        }
    }
}

let lista_productos = [];

const productos = Productos.push(lista_productos);

let btn = document.getElementById("agregar");
btn.addEventListener("click", new Productos (producto, precio, stock))