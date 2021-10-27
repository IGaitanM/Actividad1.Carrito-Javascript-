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
var aceptar;
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
    aceptar = document.formulario.aceptar;


  }

function eventos(){
    botonAnadir.addEventListener("click",anadir);
    pago.addEventListener("change", cargarPago);
    restablecer.addEventListener("click", rest);
    aceptar.addEventListener("change", check);
    imprimir.addEventListener("click" , print);
    

}    

function print(){
    if (pago.value=="Seleccione")
        alert("Por favor seleccione un método de pago");
    else
    alert("Los artículos de mi carrito son: " + artCarrito.value +"\n El precio total es: "
    + precioTot.value +"€" + "\n Forma de pago: "+ pago.value);
}


function check(){
    if (aceptar.checked==true)
        imprimir.disabled = false;
    else 
        imprimir.disabled = true;

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

    validaArticulos();

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

function validaArticulos(){
    
    if (nombre.value=="" && precio.value==""){
        errorNombre.style.display="inline";
        errorPrecio.innerHTML = "falta el precio";
        errorPrecio.style.display="inline";
        nombre.focus();

    }if (precio.value=="" && nombre.value!=""){
        errorPrecio.style.display="inline";
        errorPrecio.innerHTML = "falta el precio";
        errorNombre.style.display="none";
        precio.focus();

    }if (nombre.value=="" && isNaN(precio.value)){
        errorPrecio.innerHTML = "Tipo de datos incorrecto";
        errorPrecio.style.display="inline";
        errorNombre.style.display="inline";
        precio.value=0;
        precio.focus();

       
    }if (nombre.value!="" && precio.value!="" && !isNaN(precio.value) ){
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
    if (pago.value=="Seleccione"){
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="none";
    }if (pago.value=="Tarjeta"){
        capaTarjeta.style.display="block";
        capaEfectivo.style.display="none";
    }if (pago.value=="Efectivo"){
        capaTarjeta.style.display="none";
        capaEfectivo.style.display="block";
    } 
}


window.onload=function(){
    iniciaVariables();
    eventos();
    
}
