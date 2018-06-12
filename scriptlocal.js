function copy(datos) {
    var text = JSON.stringify(datos);
    return JSON.parse(text);
}

function ProducList() {
    this.products = [];
}

var id = 0;
function generateId() {
    return ++id;
}

ProducList.prototype.add = function (product) {
    var newProduct = copy(product);
    if (!newProduct.id) {
        newProduct.id = generateId();
    }
    if (newProduct) {
        this.products.push(newProduct);
    }
    return copy(newProduct);
}

ProducList.prototype.list = function () {
    return copy(this.products);
}

ProducList.prototype.remove = function (id) {
    function filtro(x) {
        return x.id !== id;
    }

    this.products = this.products.filter(filtro);
}

ProducList.prototype.update = function (product) {
    var productoActualizado = copy(product);
    var index = this.products.findIndex(function (p) { return p.id === productoActualizado.id });
    this.products[index] = productoActualizado;
}

ProducList.prototype.get = function (id) {
    var product = this.products.find(function (p) {
        return p.id === id;
    });
    return product;
}

var productList = new ProducList();
productList.add({
    nombre: "Galletitas",
    precio: 20
});

productList.add({
    nombre: "Budín",
    precio: 15
});

productList.add({
    nombre: "Jugo",
    precio: 10
});

productList.remove(2)
console.log(productList.list());
var product = productList.get(1);
product.precio = 21;
productList.update(product);
console.log(productList.list());

function mostrarProductos() {

    var products = productList.list();
    var $ul = $("#products");
    $ul.empty();
    for (var i in products) {
        var $li = $("<li>" + products[i].id + " " + products[i].nombre + "<button data-productid='" + products[i].id + "' class='js-borrar'>Borrar</button></li>");
        $ul.append($li);
    };
}

jQuery(function ($) {
    mostrarProductos();
    //Eventos
    $(".js-agregar").on("click", function () {
        var $nombre = $("[name=nombre]");
        var nombre = $("[name=nombre]").val();
        if (nombre) {
            productList.add({ nombre: nombre });
            $nombre.val("");
            mostrarProductos();
        }
    });

    $("#products").on("click",".js-borrar", function(){
        //$(this).closest("li").remove(); 
        //$(this).attr("data-productid")
        var id = $(this).data("productid");
        id = parseInt(id);
        productList.remove(id);
        mostrarProductos();
    });
});

/*
Selectores
Traversing
Manipulation
Events
Effects
Forms
Ajax
*/

// $("selector de css") //busca las cosas
// $(funcion(){}) //$(document).ready(function(){
// $("<div>") // crea un div

jQuery(function ($) {
    //setter
    $(".borrar").css("background", "#f00");
    //getter
    $(".borrar").css("background");
    //encadenables: Todo metodo que no devuelva nada,
    //deuelve el array original.
    $(".borrar").css("background", "#0f0");
    $(".borrar").addClass("error");
    //  $(".borrar").removeClass("error")

    /*   .hide("slow")
    .show("slow", function(){
        $("h1").text("Hola nuevo");
    }); */

    $("h1").text("Hola nuevo");

    $(".borrar").on("click", function () {
        var valor = $("#nombre").val();
        console.log(valor);
        $("#nombre").val("")
        var $li = $("<li>").text(valor);
        $("#nombres").append($li);
        //$li.appendTo($("#nombres"))
    });
});

