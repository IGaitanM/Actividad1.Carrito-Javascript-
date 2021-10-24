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
    if (!nombre.value==""){
        artCarrito.value += nombre.value + " ,";
    }else{
        errorNombre.innerHTML= "Falta artículo";
        nombre.focus();
    }
    if (!precio.value==""){
        sumaPrecio= precio.value * unidades.value;
    }else{
        errorPrecio.innerHTML= "Falta precio";
        precio.focus();
    }
    sumaTotal+= sumaPrecio;
    precioTot.value= sumaTotal;


   
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



