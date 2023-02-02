const ManagerProducts = require ('./productmanager.js')

const manager = new ManagerProducts ('productos.json')

const main = async () => {
    
}
let lista_productos = []

let form = document.getElementById("form")
form.addEventListener("submit", function (e){
    e.preventDefault
})


let agregar_producto = document.getElementById("agregar")
agregar_producto.addEventListener("click", function () {

    let categoria = document.getElementById("categoria").value;
        let nombre = document.getElementById("nombre").value;
        let precio = document.getElementById("precio").value;
        let codigo = document.getElementById("codigo").value
        const talle = []
        let talles = document.getElementsByClassName("talle");
        for (const element of talles) 
        {
            if(element.checked){
                talle.push(element.value)
            }
        }
        let stock = document.getElementById("stock").value;
        let descripcion = document.getElementById("descripcion").value;
        let imagen = document.getElementById("imagen").value;

    if ((nombre != "") || (talle.length == 0) || (precio != 0) || (stock != 0) || (descripcion != "")) 
    {
        console.log(...talle);
        let talles = ''
        talle.forEach(element => {
            talles += element + ' '
        });
        let lista = document.getElementById("lista")
        let tr = document.createElement("tr")
        tr.innerHTML =`<td>${categoria}</td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${codigo}</td>
        <td>${talles}</td>
        <td>${stock}</td>
        <td>${descripcion}</td>
        <td>${imagen}</td>
        <button id="editar">Editar</button>
        <button id="borrar"><i class="fa-solid fa-trash"></i></button>`;

        lista.append(tr)

        const producto = { 
            categoria: `${categoria}`, 
            nombre:`${nombre}`,
            talle: `${talles}`,
            precio:`${precio}`,
            codigo:`${codigo}`,
            stock:`${stock}`,
            descripcion:`${descripcion}`,
            imagen:`${imagen}`
        } ;

        console.log(producto);
        lista_productos.push(producto);
        console.log(lista_productos);

    }
    else if ((nombre === "") || (talle=== "") || (precio === 0) || (stock === 0) || (descripcion === ""))
    {
        return alert("campos incompletos");
    }
})