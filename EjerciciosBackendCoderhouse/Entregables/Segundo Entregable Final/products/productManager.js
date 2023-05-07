import fs from 'fs';

const path = './files/Products.json'

//1. Se creara una instancia de la clase "ProductManager"
export default class ProductManager { //.1 Listo
    // 2.Se llamara "GetProducts" recien creada la instancia debe devolver un arreglo vacio []

    getProducts = async () => {
        const data = await fs.promises.readFile(path, 'utf-8');
        return JSON.parse(data);
    };

    /*
    3.Se llamará al método “addProduct” con los campos:
       title: “producto prueba”
       description:”Este es un producto prueba”
       price:200,
       thumbnail:”Sin imagen”
       code:”abc123”,
       stock:25

       A esto se lo voy a pasar desde el index
    */
    addProducts = async (title, description, price, thumbnail, code, stock) => {
        const products = await this.showProduct();
        const newProduct = {
            id: this.generateId(products),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        products.push(newProduct);
        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
        return newProduct;
    }
    //4.El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
    generateId = (products) => { //4.Listo
        let newId = 1;
        if (products.length > 0) {
            const ids = products.map((p) => p.id);
            newId = Math.max(...ids) + 1;
        }
        return newId;
    };

    // Revision de si existen productos en el path ,Lee el path y trae la informacion
    // en la constante users sino va a retornar un array vacio que es lo que requiere un Products.json
    showProduct = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8')
            const users = JSON.parse(data);
            return users;
        } else {
            return [];
        }
    }
    // 6.Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado,
    //en caso de no existir, debe arrojar un error.
    getProductById = async (id) => { //6.Creacion
        const products = await this.showProduct();
        const product = products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            throw new Error(`El producto con el id: ${id} no existe.`);
        }
    };
    //7.Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto,
    //se evaluará que no se elimine el id y que sí se haya hecho la actualización.
    updateProduct = async (id, updatedFields) => {
        const products = await this.showProduct();
        const productIndex = products.findIndex((p) => p.id === id);

        if (productIndex === -1) {
            throw new Error(`El producto con el id: ${id} no existe.`);
        }

        // Se copia el producto existente y se actualizan los campos especificados
        const updatedProduct = { ...products[productIndex], ...updatedFields };

        // Se reemplaza el producto anterior con el producto actualizado en el array de productos
        products.splice(productIndex, 1, updatedProduct);

        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));

        return updatedProduct;
    };

    // 8.Crear el método “deleteProduct” , se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
    deleteProduct = async (id) => {
        const products = await this.showProduct();
        const productIndex = products.findIndex((p) => p.id === id);

        if (productIndex === -1) {
            throw new Error(`El producto con el id: ${id} no existe.`);
        }

        // Se elimina el producto del array de productos
        products.splice(productIndex, 1);

        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));

        return { message: `El producto con el id: ${id} fue eliminado correctamente.` };
    };

}