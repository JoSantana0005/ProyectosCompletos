//Evento para mover las peliculas
let Right = document.getElementById('Right');
let Left = document.getElementById('Left');
let Peliculas = document.getElementById('Peliculas');
Right.addEventListener('click',()=>{
    Peliculas.scrollLeft += 370;
})
Left.addEventListener('click',()=>{
    Peliculas.scrollLeft -= 370;
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
        "Name": "Obi-Wan Kenobi",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un maestro Jedi y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Alec Guinness en los episodios IV, V y VI de la saga.",
        "Imagen": "https://i.pinimg.com/474x/fa/c0/ee/fac0ee58437ddc4c173e839246d086ac.jpg"
    },
    {
        "Name": "Maestro Windu",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un maestro Jedi y uno de los miembros del Alto Consejo Jedi. Es interpretado por Samuel L. Jackson en los episodios I, II y III de la saga.",
        "Imagen": "https://i.pinimg.com/originals/b7/19/62/b71962ab5e3cd8d7f81cf52c90386552.jpg"
    },
    {
        "Name": "Quin-Gon Jinn",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un maestro Jedi y uno de los personajes principales de la película Star Wars: Episodio I - La amenaza fantasma. Es interpretado por Liam Neeson.",
        "Imagen": "https://i.pinimg.com/originals/55/6a/f4/556af4241a35bb33334b5588e5b276ab.jpg"
    },
    {
        "Name": "Maestro Yoda",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un maestro Jedi y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Frank Oz.",
        "Imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE2cqVK2ySHR1J0INo6RIDYgLVqdWp8QrMA&s"
    },
    {
        "Name": "Boba Fett",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un cazarrecompensas que aparece en la trilogía original de Star Wars. Es interpretado por Jeremy Bulloch.",
        "Imagen": "https://i.pinimg.com/736x/02/4b/f9/024bf9813c89a719d55dea27e7f867cd.jpg"
    },
    {
        "Name": "Darth Vader",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un Sith que se convierte en el villano Darth Vader. Es interpretado por David Prowse en los episodios IV, V y VI de la saga.",
        "Imagen": "https://i.pinimg.com/736x/e6/6a/17/e66a1758b1338266af83f3ce02dec27e.jpg"
    },
    {
        "Name": "Han Solo",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un contrabandista y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Harrison Ford.",
        "Imagen": "https://i.pinimg.com/736x/6e/78/7d/6e787d453c22f73dbade3d5d88216e4e.jpg"
    },
    {
        "Name": "Darth Maul",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un Sith que aparece en la película Star Wars: Episodio I - La amenaza fantasma. Es interpretado por Ray Park.",
        "Imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DM-rdnY3GLWvMXzV4PnHVGImVERytfmpCQ&s"
    },
    {
        "Name": "R2-D2",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un droide astromecánico y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Kenny Baker.",
        "Imagen": "https://i.pinimg.com/474x/09/f9/83/09f9831a5d7f3b71ca7ff0235c5f29a0.jpg"
    },
    {
        "Name": "C-3PO",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un droide de protocolo y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Anthony Daniels.",
        "Imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvjM3RuWC7OPVjMFmRlCIi-BBkriNJEANlQ&s"
    },
    {
        "Name": "Rey",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es una chatarrera y una de las protagonistas de la trilogía de secuelas de Star Wars. Es interpretada por Daisy Ridley.",
        "Imagen": "https://i.pinimg.com/736x/cf/ef/3b/cfef3b6a7b6dec1f0b6dad6690c7c819.jpg"
    },
    {
        "Name": "Lando Calrissian",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un contrabandista y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Billy Dee Williams.",
        "Imagen": "https://i.pinimg.com/originals/4a/1b/61/4a1b6162af82904108efa0dce3812a6f.jpg"
    },
    {
        "Name": "Leia Organa",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es una princesa y uno de los personajes principales de la trilogía original de Star Wars. Es interpretada por Carrie Fisher.",
        "Imagen": "https://i.pinimg.com/736x/ec/a8/e0/eca8e07d5f792df2f5b0b858aac00034.jpg"
    },
    {
        "Name": "Padmé Amidala",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es una reina y senadora y uno de los personajes principales de la trilogía de precuelas de Star Wars. Es interpretada por Natalie Portman.",
        "Imagen": "https://i.pinimg.com/originals/9d/9d/bd/9d9dbd0e36188b1b66cfaf18d6bde64d.jpg"
    },
    {
        "Name": "Maestro Dooku",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un maestro Jedi que se convierte en el Sith Conde Dooku. Es interpretado por Christopher Lee en los episodios II y III de la saga.",
        "Imagen": "https://i.pinimg.com/736x/e4/ca/65/e4ca6580e50559b52eefdfc5dd4f6249.jpg"
    },
    {
        "Name": "Canciller Palpatine",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un senador que se convierte en el villano Darth Sidious. Es interpretado por Ian McDiarmid en los episodios I, II y III de la saga.",
        "Imagen": "https://i.pinimg.com/originals/86/c1/e7/86c1e7e5871357e62f8ae2a804edd1a0.jpg"
    },
    {
        "Name": "Luke Skywalker",
        "Content": "Es un personaje ficticio de la saga de Star Wars. Es un granjero y uno de los personajes principales de la trilogía original de Star Wars. Es interpretado por Mark Hamill.",
        "Imagen": "https://i.pinimg.com/736x/df/83/f3/df83f32c0f31e87171db7d711f8f169f.jpg"
    }

]
const Jedis = document.getElementsByClassName('Personajes--imagen');
let Verde = document.getElementById('Verde');
let Rojo = document.getElementById('Rojo');
const CloneVerde = Verde.cloneNode(true);
const CloneRojo = Rojo.cloneNode(true);
const Sables = document.querySelectorAll('.Sable');
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
            if(Person[index].Name == "Obi-Wan Kenobi" || Person[index].Name == "Rey"){
                Sables.forEach((sable)=>{
                    if(sable.id == "Azul"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })

            }
            else if(Person[index].Name == "Quin-Gon Jinn" || Person[index].Name == "Maestro Yoda"){
                Sables.forEach((sable)=>{
                    if(sable.id == "Verde"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            }else if(Person[index].Name == "Darth Vader" || Person[index].Name == "Maestro Dooku" || 
                Person[index].Name == "Canciller Palpatine" || Person[index].Name == "Darth Maul"){
                Sables.forEach((sable)=>{
                    if(sable.id == "Rojo"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            }else{
                Sables.forEach((sable)=>{
                    sable.style.display = 'flex';
                })
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
    