var nombre;
var precio;
var unidades;
var botonAñadir;
var artCarrito;
var precioTot;
var pago;

function inicializa(){
    nombre = document.formulario.nombre;
    precio = document.formulario.precio;
    unidades = document.formulario.unidades;
    botonAñadir = document.formulario.anadir;
    artCarrito = document.formulario.artCarrito;
    precioTot = document.formulario.precioTot;
    pago = document.formulario.formaPago;

  }

function eventos(){
    botonAñadir.addEventListener("click",anadir)

}    

function anadir() {
    if (!nombre.value=="" && !precio.value=="" && !unidades.value=="" ){
        artCarrito.value += nombre.value + " ,";
        precioTot.value += precio.value * unidades.value;
        nombre.value = "";
        precio.value = "";
        unidades.value = 1;
    }else
        alert("Falta información del producto")
}  

function cargarPago (){
    if (pago.value=="Seleccione"){
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="none";
    }else if (pago.value=="Tarjeta"){
        capaTarjeta.style.display="block";
        capaEfectivo.style.display="none";
    }else{
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="block";
    } 
}


window.onload=function(){
    inicializa();
    anadir();
    cargarPago();
    eventos();
}



