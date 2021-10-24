var nombre;
var precio;
var unidades;
var artCarrito;
var precioTot;
var pago;


function anadir() {
    if (!nombre.value=="" || precio.value=="" || unidades.value=="" ){
        precio.value=parseFloat.precio.value;
        unidades.value=parseInt.unidades.value;
        precioTot.value=precio.value*unidades.value;
        artCarrito.value+=nombre.value + " ,";
    }else
        alert("Falta información del producto")
}  


function cargarPago (){
    if (pago.value=="Seleccione"){
        capaTarjeta.tarjeta.style.display="none";
        capaEfectivo.tarjeta.style.display="none";
    }else if (pago.value=="Tarjeta"){
        capaTarjeta.tarjeta.style.display="block";
        capaEfectivo.tarjeta.style.display="none";
    }else{
        capaTarjeta.tarjeta.style.display="none";
        capaEfectivo.tarjeta.style.display="block";
    } 
}

function inicializa(){
    nombre = document.formulario.nombre
    precio = document.formulario.precio;
    unidades = document.formulario.unidades;
    artCarrito = document.formulario.artCarrito;
    precioTot = document.formulario.precioTot;
    pago = document.formulario.formaPago;

  

function eventos(){
    document.formulario.anadir.addEventListener("click",anadir);

}    

window.onload=function(){
    inicializa();
    anadir();
    cargarPago();
    eventos();
}

}