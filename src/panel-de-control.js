let lista_productos = []

let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})

let agregar_producto = document.getElementById("agregar")
agregar_producto.addEventListener("click", function () {

    let talle = document.getElementById("talles")
    talle.addEventListener("change", function (){
        talle.value
    })

    let categoria = document.getElementById("categoria").value;
        let color = document.getElementById("color").value;
        let nombre = document.getElementById("nombre").value;
        let precio = document.getElementById("precio").value;
        let stock = document.getElementById("stock").value;
        let descripcion = document.getElementById("descripcion").value;
        let imagen = document.getElementById("imagen").value;

    if ((nombre != "") || (talle != "") || (precio != 0) || (stock != 0) || (descripcion != "") || (imagen != 0)) {
        let lista = document.getElementById("lista")

        let tr = document.createElement("tr")

        tr.innerHTML =`<td>${categoria}</td>
        <td>${color}</td>
        <td>${nombre}</td>
        <td>${talle}</td>
        <td>${precio}</td>
        <td>${stock}</td>
        <td>${descripcion}</td>
        <td>${imagen}</td>`;

        lista.append(tr)

        const producto = { categoria: `${categoria}`,
                            color:`${color}`, 
                            nombre:`${nombre}`,
                            talle:`${talle}`,
                            precio:`${precio}`,
                            stock:`${stock}`,
                            descripcion:`${descripcion}`,
                            imagen:`${imagen}`} ;

        console.log(producto);
        lista_productos.push(producto);
        console.log(lista_productos);
    }else ((nombre === "") || (talle=== "") || (precio === 0) || (stock === 0) || (descripcion === "") || (imagen === ""));{
        return alert("campos incompletos")
    }
})