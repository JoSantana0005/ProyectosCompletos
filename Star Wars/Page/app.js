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
//Json para las imagenes de los personajes
const Person = [
    {
        "Name": "Anakin Skywalker",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un Jedi que se convierte en el villano Darth Vader. Es interpretado por el actor Hayden Christensen en los episodios II y III de la saga.",
        "Imagen": "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20161019014713"
    },
    {
        "Name": "Luke Skywalker",
        "Content": "Es un personaje ficticio y el protagonista de la trilogía original de Star Wars. Es hijo de Anakin Skywalker y Padmé Amidala, hermano gemelo de Leia Organa y padre de Ben Solo.",
        "Imagen": "https://static.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171215195636"
    },
    {
        "Name": "Leia Organa",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es la hermana gemela de Luke Skywalker, hija de Anakin Skywalker y Padmé Amidala, y madre de Ben Solo.",
        "Imagen": "https://static.wikia.nocookie.net/starwars/images/1/1e/Leia_Organa_TROS.png/revision/latest?cb=20200118190126"
    },
    {
        "Name": "Han Solo",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un contrabandista y héroe de la Alianza Rebelde. Es interpretado por Harrison Ford en la trilogía original de Star Wars.",
    }
]