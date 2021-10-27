var nombre;
var errorNombre;
var errorPrecio;
var sumaPrecios;
var sumaTotal=0;
var precio;
var unidades;
var artCarrito;
var precioTot;
var botonAnadir;
var pago;
var capaTarjeta;
var capaEfectivo;
var imprimir;
var restablecer;


function iniciaVariables(){
    nombre = document.formulario.nombre;
    errorNombre = document.getElementById("errorNombre");
    errorNombre.style.display="none";
    errorPrecio = document.getElementById("errorPrecio");
    errorPrecio.style.display="none";
    precio = document.formulario.precio;
    unidades = document.formulario.unidades;
    artCarrito = document.formulario.artCarrito;
    precioTot = document.formulario.precioTot;
    botonAnadir = document.getElementById("botonAnadir");
    pago = document.formulario.formaPago;
    capaTarjeta = document.getElementById("capaTarjeta");
    capaEfectivo = document.getElementById("capaEfectivo");
    capaTarjeta.style.display="none";
    capaEfectivo.style.display="none";
    imprimir = document.getElementById("imprimir");
    restablecer = document.getElementById("restablecer");

  }

function eventos(){
    botonAnadir.addEventListener("click",anadir);
    pago.addEventListener("change", cargarPago);
    restablecer.addEventListener("click", rest);
    

}    

function rest (){
    nombre.value="";
    precio.value="";
    unidades.value=1;
    artCarrito.value="";
    precioTot.value="";
    pago.value="SEL";
    capaTarjeta.style.display="none";
    capaEfectivo.style.display="none";
}

function anadir() {

    validaNombre(nombre,precio,errorNombre,errorPrecio,artCarrito);

    if (!isNaN(precio.value)){
        sumaPrecios;
        sumaTotal;
        sumaPrecios = precio.value*unidades.value;
        sumaTotal += sumaPrecios;
        precioTot.value = sumaTotal;
        nombre.value="";
        precio.value="";
        unidades.value=1; 
    }
        
           
}  

function validaNombre(nombre,precio,errorNombre,errorPrecio,artCarrito){
    
    if (nombre.value=="" && precio.value==""){
        errorNombre.style.display="inline";
        errorPrecio.style.display="inline";
        nombre.focus();

    }if (precio.value=="" && nombre.value!=""){
        errorPrecio.style.display="inline";
        errorNombre.style.display="none";
        precio.focus();

    }if (nombre.value=="" && precio.value!=""){
        errorPrecio.style.display="none";
        errorNombre.style.display="inline";
        precio.value=0;
        precio.focus();
    
    }if (nombre.value!="" && precio.value!="" && (!isNaN(precio.value)) ){
        errorPrecio.style.display="none";
        errorNombre.style.display="none";
        artCarrito.value += nombre.value + " ,";
                   
    }
    if (isNaN(precio.value)){
        errorPrecio.style.display="inline";
        errorPrecio.innerHTML = "Tipo de datos incorrecto";
        precio.focus();
        }
        
     
}   


function cargarPago (){
    if (pago.value=="SEL"){
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="none";
    }if (pago.value=="TAR"){
        capaTarjeta.style.display="block";
        capaEfectivo.style.display="none";
    }if (pago.value=="EFE"){
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="block";
    } 
}


window.onload=function(){
    iniciaVariables();
    eventos();
    
}
