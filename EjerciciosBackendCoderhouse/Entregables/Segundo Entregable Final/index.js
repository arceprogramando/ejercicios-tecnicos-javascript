import ProductManager from "./products/productManager.js";

const product = new ProductManager();

const env = async () => {
    let productInfo = {
        title: 'Producto Prueba',
        description: 'Este es un producto de prueba',
        price: 200,
        thumbnail: "sin Imagen",
        code: "abc123",
        stock: 25
    };

    await product.addProducts(
        productInfo.title,
        productInfo.description,
        productInfo.price,
        productInfo.thumbnail,
        productInfo.code,
        productInfo.stock
    );



    //5.Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
    let products = await product.getProducts();
    console.log(products);//5.Listo

    // 6.Se muestra el id . Listo
    let showId = await product.getProductById(2);

    // 7 Se agrega el cambio al update del producto
    await product.updateProduct(2, { title: "Nuevo título", description: "Nueva descripción" });

    // Hago el console.log aca para que me muestre el id del producto cambiado
    showId = await product.getProductById(2);
    console.log(showId)

    // await product.deleteProduct(1);
    let showDeleteProduct = await product.getProductById(2);
    console.log(showDeleteProduct)
}

env()