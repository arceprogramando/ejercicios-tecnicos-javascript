class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (this.products.some(product => product.code === code)) {
            throw new Error("Error el producto code ya existe");
        }

        const id = Date.now().toString();

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (!product) {
            throw new Error(`Error: El producto :  ${id} no funciona`);
        }

        return product;
    }
}

const productManager = new ProductManager();

// Agregar un producto
const newProduct = {
    title: "Producto1",
    description: "Producto de muestra",
    price: 1200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
};

const addedProduct = productManager.addProduct(newProduct);
console.log(addedProduct);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log(allProducts);


try {
    const repeatedProduct = {
        title: "producto repetido",
        description: "Este es un producto repetido",
        price: 100,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 10
    };

    productManager.addProduct(repeatedProduct);
} catch (error) {
    console.error(error);
}


const foundProduct = productManager.getProductById(addedProduct.id);
console.log(foundProduct);


try {
    const nonexistentProduct = productManager.getProductById("invalidId");
    console.log(nonexistentProduct);
} catch (error) {
    console.error(error);
}