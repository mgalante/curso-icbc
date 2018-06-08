var x = 5;

console.group();
console.log("estoy");
console.log("dentro");
console.log("del grupo", x);
console.groupEnd();
console.warn("warning!");
console.error("esto es un error");

console.count("hizo click");
console.count("hizo click");
console.count("hizo click");
console.count("hizo click");
console.count("hizo click");

if ("6" === 6) {

}

console.log("Paso por aca")



var afuera = 10;
console.log("afuera", afuera); //10

function pruebaScope(param) {
    var adentro = 5;
    console.log("afuera", afuera);//10
    console.log("param", param);//10
    param = 88;
}

pruebaScope(afuera);

//console.log("adentro", adentro); //undefined
//console.log("param", param); //null //88  //undefined
console.log("afuera", afuera); //10  //88




var afuera = ["hola"];
console.log("afuera", afuera); //10

function pruebaScope2(param) {
    param.push("mundo");
    param = [];
}

pruebaScope2(afuera);

//console.log("adentro", adentro); //undefined
//console.log("param", param); //null //88  //undefined
console.log("afuera", afuera); //10  //88

function crearSumador(cuanto) {
    var sumador = function (x) {
        return x + cuanto;
    }
    return sumador;
}

var sumar88 = crearSumador(88);
var sumar20 = crearSumador(20);
console.log("sumar20", sumar20(10));
console.log("sumar88", sumar88(10));

var numeros = [17, 92, 13, 42, 51, 61];
var numerosMasUno =
    numeros.map(function (value) {
        return value + 1;
    });

numeros.filter(function (num) {
    return true //deja todos!
});



var num = 5;
var arrayNum = [];

var persona = {
    nombre: "Juan",
    edad: 22
};

persona.nombre = "Roberto";
persona.peso = 250;
var key;
for (key in persona) {
    console.log("key", key);
    console.log("persona[key]", persona[key]);
}



/*
## Ejercicio 2
1. Generar un array con 101 numeros enteros random
1. Implementar las funciones shift y unshift usando for y modifcando el `length` manualmente
1. Ordenarlo de mayor a menor
1. Eliminar todos los numeros pares
1. Agregar al array de numeros un método para obtener el promedio de los numeros
1. Generar un nuevo array con los numeros multiplicados por 2
*/

function forEach(array, callback) {

    console.log(arguments);
    for (var i in array) {
        callback(array[i], i, array);
    }
}

var numeros = [1, 2, 3, 4, 5];


forEach(numeros, function (item) {
    console.log(item);
});

numeros.forEach(function (item) {
    console.log(item);
});
//polyfills

var numerosNuevos = numeros
    .map(function (item) {
        return item * 2;
    })
    .filter(function (item) { 
        return item > 3 })
    .concat([4, 3, 5])
    .find(function(item){
        return item%4===0;
    });


function Auto(modelo){
    this.modelo = modelo;
    this.velocidad = 0;
}

Auto.prototype.acelerar = function(v){
    this.velocidad = v;
}

Auto.prototype.frenar = function(){
    this.velocidad = 0;
}

Auto.prototype.mostrarVelocidad = function(){
    console.log("velocidad",this.velocidad);
}

var auto = new Auto("Ford Fiesta");
var auto2 = new Auto("BMW i180");


function hacerAlgo(callback){
    callback();
}

auto.mostrarVelocidad();
hacerAlgo(function(){
    auto.mostrarVelocidad();
});

;(function(){
    var x = 10;
    console.log("hola");
})();


