# Suma de Tres Números

## Descripción del problema

Dado un arreglo de n números enteros y un valor entero x, encuentra tres números en el 
arreglo cuya suma es igual a x. Si hay varias soluciones, muestra cualquiera de ellas.

### Entrada:
La primera línea de entrada contendrá un número entero n (3 ≤ n ≤ 10^3), que indica 
el tamaño del arreglo.
La segunda línea de entrada contendrá n números enteros ai (-10^3 ≤ ai ≤ 10^3), separados por un espacio, que representan los elementos del arreglo.
La tercera línea de entrada contendrá un número entero x (-10^3 ≤ x ≤ 10^3), que representa el valor a encontrar.

### Salida:
Si existen tres números en el arreglo cuya suma es igual a x, imprime los índices (1-based) de estos números separados por un espacio en una sola línea. En caso contrario, imprime "IMPOSIBLE" sin comillas.

### Ejemplo de entrada:
6
-1 0 1 2 -1 4
2

### Ejemplo de salida:
2 3 5

### Explicación:
En este ejemplo, los números 1, 1 y 0 suman 2, por lo que la salida es 2 3 5.