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
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un Jedi que se convierte en el villano Darth Vader. Es interpretado por el actor Hayden Christensen en los episodios II y III de la saga.se predice que Anakin es el Elegido, aquel que traerá el equilibrio a la Fuerza. Sin embargo, Anakin se convierte en Darth Vader, el aprendiz de Darth Sidious, y ayuda a los Sith a destruir a los Jedi.",
        "Imagen": "https://i.pinimg.com/736x/fe/a3/de/fea3dedad7541a906ea10f29ded6c55c.jpg"
    },
    {
        "Name": "Luke Skywalker",
        "Content": "Es un personaje ficticio y el protagonista de la trilogía original de Star Wars. Es hijo de Anakin Skywalker y Padmé Amidala, hermano gemelo de Leia Organa y padre de Ben Solo.",
        "Imagen": "https://i.pinimg.com/736x/df/83/f3/df83f32c0f31e87171db7d711f8f169f.jpg"
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
const Jedis = document.getElementsByClassName('Personajes--imagen');
const Ventana = document.getElementById('Ventana');
Array.from(Jedis).forEach((Jedi,index)=>{
    Jedi.addEventListener('click',()=>{
        if(Ventana){
            Ventana.show();
            const Name = document.getElementById('Title');
            const Content = document.getElementById('content');
            const Imagen = document.getElementById('Imagen--personaje');
            if(Name && Content && Imagen){
                Name.textContent = Person[index].Name;
                Content.textContent = Person[index].Content;
                Imagen.src = Person[index].Imagen;
            }else{
                console.log('No se encontro el contenido ${index}');
            }
        }else{
            console.log('No se encontro la ventana');
        }
    })
})
//Evento para cerrar la ventana
let Cerrar = document.getElementById('Cerrar');
Cerrar.addEventListener('click',()=>{
    Ventana.close();
})
    