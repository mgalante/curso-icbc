var x = 5;

console.group();
console.log("estoy");
console.log("dentro");
console.log("del grupo", x);
console.groupEnd();
debugger;
console.warn("warning!");
console.error("esto es un error");

console.count("hizo click");
console.count("hizo click");
console.count("hizo click");
console.count("hizo click");
console.count("hizo click");

if("6" === 6)
{

}

    console.log("Paso por aca")



debugger;
var afuera = 10;
console.log("afuera", afuera); //10

function pruebaScope(param){
    var adentro = 5;
    console.log("afuera", afuera);//10
    console.log("param", param);//10
    param = 88;
}

pruebaScope(afuera);

//console.log("adentro", adentro); //undefined
//console.log("param", param); //null //88  //undefined
console.log("afuera", afuera); //10  //88




debugger;
var afuera = ["hola"];
console.log("afuera", afuera); //10

function pruebaScope2(param){
  param.push("mundo");
  param = [];
}

pruebaScope2(afuera);

//console.log("adentro", adentro); //undefined
//console.log("param", param); //null //88  //undefined
console.log("afuera", afuera); //10  //88

function crearSumador(cuanto){
    var sumador = function(x){
        return x + cuanto;
    }
    return sumador;
}

var sumar88 = crearSumador(88);
var sumar20 = crearSumador(20);
console.log("sumar20",sumar20(10));
console.log("sumar88", sumar88(10));

var numeros = [17,92,13,42,51,61];
var numerosMasUno = 
    numeros.map(function(value){
        return value+1;
    });

    numeros.filter(function(num){
        return true //deja todos!
    });
