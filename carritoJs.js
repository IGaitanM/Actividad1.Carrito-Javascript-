var nombre;
var errorNombre;
var precio;
var unidades;
var artCarrito;
var precioTot;
var pago;

function inicializa(){
    nombre = document.formulario.nombre;
    errorNombre = document.getElementById("errorNombre");
    errorPrecio = document.getElementById("errorPrecio");
    precio = document.formulario.precio;
    unidades = document.formulario.unidades;
    artCarrito = document.formulario.artCarrito;
    precioTot = document.formulario.precioTot;
    pago = document.formulario.formaPago;

  }

function eventos(){
    document.formulario.anadir.addEventListener("click",anadir);

}    

function anadir() {
    var sumaPrecio;
    var sumaTotal=0;
    if (nombre.value!="" && precio.value!=""){
        artCarrito.value += nombre.value + " ,";
        errorNombre.style.display="none";
    }else{
        errorNombre.style.display="inline";
        nombre.focus();
    }
    if (precio.value!="" && !isNaN(precio.value) ){
        errorPrecio.style.display="none";
    }else{
        errorPrecio.style.display="inline";
        precio.focus();
    }
        sumaPrecio= precio.value*unidades.value;
        sumaTotal+=sumaPrecio;
        precioTot.value = sumaTotal;
        nombre.value="";
        precio.value="";
        unidades.value=1;
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



