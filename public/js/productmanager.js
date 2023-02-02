const { json } = require('express');
const fs = require('fs')

class ManagerProducts {

    productos;
    constructor(file) {
        this.productos = file;
    }

    static id = 0
    static status = true

    async getProducts() {
        let productos = await fs.promises.readFile(this.productos, 'utf-8')
        let objProducto = JSON.parse(usuarios)
        return objProducto
    }
    getProductById() { }

    async addProducts(producto) {
        let productos = await this.getProducts()
        productos.push(producto)
        await fs.promises.writeFile(this.productos, JSON.stringify(productos))
    }

    updateProduct() { }

    deleteProduct() { }
}

module.exports = Products;