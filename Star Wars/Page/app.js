//Evento para mover las peliculas
let Right = document.getElementById('Right');
let Left = document.getElementById('Left');
let Peliculas = document.getElementById('Peliculas');
Right.addEventListener('click',()=>{
    Peliculas.scrollLeft += 430;
})
Left.addEventListener('click',()=>{
    Peliculas.scrollLeft -= 430;
})
//Evento para mover los personajes
let Right_person = document.getElementById('Right--personajes');
let Left_person = document.getElementById('Left--personajes');
let Personajes = document.getElementsByClassName('Person')[0];
Right_person.addEventListener('click',()=>{
    Personajes.scrollLeft += 430;
})
Left_person.addEventListener('click',()=>{
    Personajes.scrollLeft -= 430;
})