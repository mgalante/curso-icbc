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
    $.ajax({
        url: "/api/products",
        data: product,
        method: "post"
    });
}

ProducList.prototype.list = function () {
    return $.ajax({
        url: "/api/products",
        method: "get"
    });
}

ProducList.prototype.remove = function (id) {
    return $.ajax({
        url: "/api/products/" + id,
        method: "delete"
    });
}

ProducList.prototype.update = function (product) {
    return $.ajax({
        url: "/api/products",
        method: "put",
        data: product
    });
}

ProducList.prototype.get = function (id) {
    var product = this.products.find(function (p) {
        return p.id === id;
    });
    return product;
}

var productList = new ProducList();

function mostrarProductos() {
    var productsPromise = productList.list();
    productsPromise.then(function (products) {
        var $ul = $("#products");
        $ul.empty();
        for (var i in products) {
            var $li = $("<li>" + products[i].id + " " + products[i].nombre + "<button data-productid='" + products[i].id + "' class='js-borrar'>Borrar</button></li>");
            $ul.append($li);
        };
    },
    function(error){
        console.error("error en ajax", error)
    });
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

    $("#products").on("click", ".js-borrar", function () {
        //$(this).closest("li").remove(); 
        //$(this).attr("data-productid")
        var id = $(this).data("productid");
        id = parseInt(id);
        
        var removePromise = productList.remove(id);

        removePromise.then(function(){
            mostrarProductos();
        });
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
