var nombre;
var precio;
var unidades;
var artCarrito;
var precioTot;
var pago;

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
    nombre = document.getElementsByName("nombre");
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
    cargarPago();
    eventos();
}

}