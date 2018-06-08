# Ejercicios JS clase 1

## Ejercicio 1
1. Crear una función que obtenga el siguiente numero al ingresado
2. Crear una functionFactory que cree una funcion de validacion de largo minimo.
```javascript 
var minLength8 = createMinLength(8);
minLength8("hoy") // Debe false;
minLength8("pescaderia") // Debe devolver true;
```

## Ejercicio 2
1. Generar un array con 101 numeros enteros random
1. Implementar las funciones shift y unshift usando for y modifcando el `length` manualmente
1. Ordenarlo de mayor a menor
1. Eliminar todos los numeros pares
1. Agregar al array de numeros un método para obtener el promedio de los numeros
1. Generar un nuevo array con los numeros multiplicados por 2

## Ejercicio 3
1. Generar un listado de productos (al menos 3) con los siguientes datos: 
name, price, expirationDate, ingredients (array de strings)
1. Listar por consola cada una de las propiedades de cada objeto usando 2 ciclo (for, forEach, etc)
1. Duplicar el precio de todos los productos y pasar a mayusuculas el nombre
1. Agregar un nuevo producto
1. Al primer producto agregarle una propiedad `soldOut` en `true`. A los demas agregarla en `false`.


## Ejercicio 4
1. Encapsular el ejercicio 3 en la clase ProductList (con los metodos publicos `list`, `get`, `add`, `remove`, `update`  que manejan el array de productos. Usar el minLength del ejericio anterior para validar que al realizar un alta o modificacion de un producto tenga al menos 8 caracteres. Ademas validar que todos los datos esten completos.
*Importante:* Las funciones list y get deben devolver una copia de los datos para que permanezcan privados.
Ejemplo de caso de uso

```javascript
var productList = new ProductList();
var product = {
    id: 5, 
    name: "Alfajor Jorgelín",
    price: 20,
    expirationDate: new Date("2018-08-05");
}
productList.add(product);

//Actualizo el nombre
product.name  = "Alfajor Jorgelín Triple";
productList.update(product.name);

//Borro el producto 5 
productList.remove(5);
```

## Ejercicio 7
1. Mostrar en pantalla el array de productos del ejercicio 5

## Ejercicio 8
1. Realizar la UI completa para manejar la clase 
(Solo agregar productos)

