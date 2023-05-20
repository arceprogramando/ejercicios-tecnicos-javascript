const estatusPedido = () => {
    return Math.random() < 0.8
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido exitoso')
        } else {
            reject('Ocurrio un error')
        }
    })
})

miPedidoDePizza();