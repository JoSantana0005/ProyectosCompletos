//Evento que valida el correo y la contraseña
function validarCorreo(Gmail){
    const regex = /^[a-zA-Z0-9_.+-]+@gmail.com$/;
    return regex.test(gmail)
}
let correo = document.getElementById('Correo');
