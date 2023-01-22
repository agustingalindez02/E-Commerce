//alta de productos//

let btn = document.getElementById("agregar");
btn.addEventListener("click", function () {

    if ((precio != 0) || (stock != 0)) {
        let lista = document.getElementById("lista");

        let producto = document.getElementById("floatingSelectGrid");
        let precio = document.getElementById("precio");
        let stock = document.getElementById("stock");

        let li = document.createElement("li");
        li.innerHTML = `<p> Producto: ${producto.value} Precio: $${precio.value} Stock: ${stock.vlaue}U
                        <button id="borrar"><i class="fa-regular fa-trash-can"></i></button>
                        <button id="editar">Editar</button>`;
        lista.append(li);
    }
    else((precio == "") || (stock == ""));{
        alert("Campos incompletos");
    }
})