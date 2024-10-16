//Evento que valida el correo y la contraseña
function validarCorreo(Gmail){
    const regex = /^[a-zA-Z0-9_.+-]+@gmail.com$/;
    return regex.test(Gmail)
}
let correo = document.getElementById('Correo');
correo.addEventListener('input',()=>{
    if(correo.value == 0){
        correo.style = "border-right: 2px solid ##ffe81f; border-bottom: 2px solid ##ffe81f;"
    }else{
        if(validarCorreo(correo.value)){
            correo.style = "border-right: 2px solid #0f0; border-bottom: 2px solid #0f0;";
        }else{
            correo.style = "border-right: 2px solid #f00; border-bottom: 2px solid #f00";
        }
    }
})
let contraseña = document.getElementById('Contraseña');
contraseña.addEventListener('input',()=>{
    if(contraseña.value == 0){
        contraseña.style = "border-right: 2px solid ##ffe81f; border-bottom: 2px solid ##ffe81f;"
    }else{
        if((contraseña.value.length >= 8 && contraseña.value.length <= 16)){
            contraseña.style = "border-right: 2px solid #0f0; border-bottom: 2px solid #0f0;";
        }else{
            contraseña.style = "border-right: 2px solid #f00; border-bottom: 2px solid #f00";
        }
    }
})
//Evento de los botones
const enlace = '../Page/Index.html';
let Ingresar = document.getElementById('Ingresar');
let CrearCuenta = document.getElementById('Cuenta');
let lista = [];
const ListaUsario = {
    Correo: '',
    Contraseña: ''
};
Ingresar.addEventListener('click',()=>{
    if(validarCorreo(correo.value) && contraseña.value.length >= 8 && contraseña.value.length <= 16){
        ListaUsario.Correo = correo.value;
        ListaUsario.Contraseña = contraseña.value;
        if(enlace){
            alert('Ingreso con exito')
            window.location.href = enlace
        }else{
            console.log('No se encontro la pagina');
        }
        
    }else if(correo.value == 0 && contraseña.value == 0){
        alert('Complete los campos para poder ingresar')
    }else if(correo.value == 0 || contraseña.value == 0){
        alert('Hay algunos campos vacios, por favor complete todos los campos para poder continuar');
    }
})
CrearCuenta.addEventListener('click',()=>{
    const enlace = '../Registro/Registro.html';
    if(enlace){
        window.location.href = enlace
    }else{
        alert('No se encontro la pagina');
    }
})
