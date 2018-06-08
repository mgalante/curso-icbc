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

jQuery(function($){
    //setter
    $(".borrar").css("background","#f00");
    //getter
    $(".borrar").css("background");
    //encadenables: Todo metodo que no devuelva nada,
    //deuelve el array original.
    $(".borrar").css("background","#0f0");
    $(".borrar").addClass("error");
  //  $(".borrar").removeClass("error")
  
    /*   .hide("slow")
    .show("slow", function(){
        $("h1").text("Hola nuevo");
    }); */
    
    $("h1").text("Hola nuevo");
    
    $(".borrar").on("click", function(){
        var valor = $("#nombre").val();
        console.log(valor);
        $("#nombre").val("")
        var $li = $("<li>").text(valor);
        $("#nombres").append($li);
        //$li.appendTo($("#nombres"))
    });
})
