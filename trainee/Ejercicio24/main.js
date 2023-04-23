function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric({ hola: 3, huevo: "hola" }));