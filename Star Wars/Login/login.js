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