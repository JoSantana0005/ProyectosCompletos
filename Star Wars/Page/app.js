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
    Personajes.scrollLeft += 370;
})
Left_person.addEventListener('click',()=>{
    Personajes.scrollLeft -= 370;
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
let titulo = document.getElementById('Titulo');
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
            }
            else{
                console.log('No se encontro el contenido ${index}');
            }
            
            if(Person[index].Name == "Obi-Wan Kenobi"){
                titulo.innerHTML = "Sables de Luz";
                Sables.forEach((sable)=>{
                    if(sable.id == "Azul"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })

            }else if(Person[index].Name == "Luke Skywalker"){
                titulo.innerHTML = "Sables de Luz";
                Sables.forEach((sable)=>{
                    if(sable.id == "Verde" || sable.id == "Azul"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            
            }
            else if(Person[index].Name == "Maestro Windu"){
                titulo.innerHTML = "Sables de Luz"
                Sables.forEach((sable)=>{
                    if(sable.id == "Morado"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            }
            else if(Person[index].Name == "Anakin Skywalker"){
                titulo.innerHTML = "Sables de Luz";
                Sables.forEach((sable)=>{
                    if(sable.id == "Azul" || sable.id == "Rojo" || sable.id == "Verde"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            }
            
            else if(Person[index].Name == "Quin-Gon Jinn" || Person[index].Name == "Maestro Yoda"){
                titulo.innerHTML = "Sables de Luz";
                Sables.forEach((sable)=>{
                    if(sable.id == "Verde"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            
            }else if(Person[index].Name == "Darth Vader" || Person[index].Name == "Maestro Dooku" || 
                Person[index].Name == "Canciller Palpatine" || Person[index].Name == "Darth Maul"){
                    titulo.innerHTML = "Sables de Luz";
                    Sables.forEach((sable)=>{
                    if(sable.id == "Rojo"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
            
            }else if(Person[index].Name == "R2-D2" || Person[index].Name == "C-3PO"){
                Sables.forEach((sable)=>{
                    sable.style.display = 'none';
                })
            }else if(Person[index].Name == "Boba Fett" || Person[index].Name == "Han Solo" 
                || Person[index].Name == "Lando Calrissian" || Person[index].Name == "Leia Organa" || Person[index].Name == "Padmé Amidala"){
                titulo.innerHTML = "Armas";
                Sables.forEach((sable)=>{
                    if(sable.id == "Blaster" || sable.id == "Blaster--Largo"){
                        sable.style.display = 'flex';
                    }else{
                        sable.style.display = 'none';
                    }
                })
                if(Person[index].Name == "Boba Fett"){
                    Sables.forEach((sable)=>{
                        if(sable.id == "Rifle" || sable.id == "Blaster"){
                            sable.style.display = 'flex';
                        }else{
                            sable.style.display = 'none';
                        }
                    })
                }
            }else if(Person[index].Name == "Rey"){
                titulo.innerHTML = "Sables de luz";
                Sables.forEach((sable)=>{
                    if(sable.id == "Azul" || sable.id == "Amarillo"){
                        sable.style.display = 'flex';
                    }
                    else{
                        sable.style.display = 'none';
                    }
                })
            }
            else{
                titulo.innerHTML = "Sables de Luz";
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
//Lista de las peliculas
const Peliculas_Desc = [
    {
        "Name": "La Amenaza Fantasma",
        "Imagen": "../../Imagenes/amenaza.png",
        "Content": "Es la cuarta película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita y dirigida por George Lucas y fue estrenada el 19 de mayo de 1999. La película es la primera entrega de la trilogía de precuelas de Star Wars y se sitúa 32 años antes de los eventos de la película original de 1977, Una nueva esperanza.",
        "Characters": ["../Imagen/episodio I/1.jpg","../Imagen/episodio I/2.jpg","../Imagen/episodio I/3.jpg","../Imagen/episodio I/4.jpeg","../Imagen/episodio I/5.jpeg", "../Imagen/episodio I/6.jpg"]
    },
    {
        "Name": "El Ataque de los clones",
        "Imagen": "../../Imagenes/ataque.png",
        "Content": "Es la quinta película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita y dirigida por George Lucas y fue estrenada el 16 de mayo de 2002. La película es la segunda entrega de la trilogía de precuelas de Star Wars y se sitúa 10 años después de los eventos de La amenaza fantasma.",
        "Characters": ["../Imagen/episodio II/7.jpg","../Imagen/episodio II/8.jpg","../Imagen/episodio II/9.jpg","../Imagen/episodio II/10.jpg","../Imagen/episodio II/11.jpg", "../Imagen/episodio II/12.jpg"]
    },
    {
        "Name": "La Venganza de los Sith",
        "Imagen": "../../Imagenes/venganza.png",
        "Content": "Es la sexta película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita y dirigida por George Lucas y fue estrenada el 19 de mayo de 2005. La película es la tercera entrega de la trilogía de precuelas de Star Wars y se sitúa 19 años antes de los eventos de la película original de 1977, Una nueva esperanza.",
        "Characters": ["../Imagen/episodio III/13.jpg","../Imagen/episodio III/14.jpg","../Imagen/episodio III/15.jpg","../Imagen/episodio III/16.jpg","../Imagen/episodio III/17.jpg", "../Imagen/episodio III/18.jpg"]
    },
    {
        "Name": "Una Nueva Esperanza",
        "Imagen": "../../Imagenes/esperanza.png",
        "Content": "Es la primera película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita y dirigida por George Lucas y fue estrenada el 25 de mayo de 1977. La película es la cuarta entrega de la saga en términos de producción y fue la primera en ser estrenada. La película se sitúa 19 años después de los eventos de La venganza de los Sith.",
        "Characters": ["../Imagen/episodio IV/19.jpg","../Imagen/episodio IV/20.jpg","../Imagen/episodio IV/21.jpg","../Imagen/episodio IV/22.jpg","../Imagen/episodio IV/23.jpg", "../Imagen/episodio IV/24.jpg"]
    },  
    {
        "Name": "El Imperio Contrataca",
        "Imagen": "../../Imagenes/imperio.jpg",
        "Content": "Es la quinta película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita por Leigh Brackett y Lawrence Kasdan y dirigida por Irvin Kershner. Fue estrenada el 21 de mayo de 1980. La película es la quinta entrega de la saga en términos de producción y la segunda en ser estrenada. La película se sitúa tres años después de los eventos de Una nueva esperanza.",
        "Characters": ["../Imagen/episodio V/25.jpg","../Imagen/episodio IV/20.jpg","../Imagen/episodio IV/21.jpg","../Imagen/episodio IV/22.jpg","../Imagen/episodio II/12.jpg", "../Imagen/episodio IV/19.jpg"]
    },
    {
        "Name": "El Retorno del Jedi",
        "Imagen": "../../Imagenes/regreso.png",
        "Content": "Es la sexta película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita por Lawrence Kasdan y George Lucas y dirigida por Richard Marquand. Fue estrenada el 25 de mayo de 1983. La película es la sexta entrega de la saga en términos de producción y la tercera en ser estrenada. La película se sitúa un año después de los eventos de El Imperio Contraataca.",
        "Characters": ["../Imagen/episodio VI/31.jpg","../Imagen/episodio IV/22.jpg","../Imagen/episodio Iv/21.jpg","../Imagen/episodio VI/32.jpg","../Imagen/episodio IV/20.jpg", "../Imagen/episodio VI/33.jpg"]
    },
    {
        "Name": "El Despertar de la Fuerza",
        "Imagen": "../../Imagenes/rey.jpeg",
        "Content": "Es la séptima película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita por Lawrence Kasdan, J.J. Abrams y Michael Arndt y dirigida por J.J. Abrams. Fue estrenada el 18 de diciembre de 2015. La película es la séptima entrega de la saga en términos de producción y la primera de la trilogía de secuelas de Star Wars. La película se sitúa 30 años después de los eventos de El retorno del Jedi.",
        "Characters": ["../Imagen/episodio VII/34.jpg","../Imagen/episodio VII/35.jpg","../Imagen/episodio VII/36.jpg","../Imagen/episodio VII/37.jpg","../Imagen/episodio VII/38.jpg", "../Imagen/episodio VII/39.jpg"]
    },
    {
        "Name": "Los Ultimos Jedis",
        "Imagen": "../../Imagenes/Ultimos.png",
        "Content": "Es la octava película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita y dirigida por Rian Johnson y fue estrenada el 15 de diciembre de 2017. La película es la octava entrega de la saga en términos de producción y la segunda de la trilogía de secuelas de Star Wars. La película se sitúa inmediatamente después de los eventos de El despertar de la Fuerza.",
        "Characters": ["../Imagen/episodio VII/36.jpg","../Imagen/episodio VII/34.jpg","../Imagen/episodio VII/35.jpg","../Imagen/episodio VIII/40.jpg","../Imagen/episodio VII/37.jpg", "../Imagen/episodio VIII/41.jpg"]
    },
    {
        "Name": "El Ascenso de Skywalker",
        "Imagen": "../../Imagenes/Ascenso.jpeg",
        "Content": "Es la novena película de la saga de Star Wars en términos de la cronología interna de la serie. La película fue escrita por J.J. Abrams y Chris Terrio y dirigida por J.J. Abrams. Fue estrenada el 20 de diciembre de 2019. La película es la novena entrega de la saga en términos de producción y la tercera de la trilogía de secuelas de Star Wars. La película se sitúa un año después de los eventos de Los últimos Jedi.",
        "Characters": ["../Imagen/episodio VII/36.jpg","../Imagen/episodio III/16.jpg","../Imagen/episodio VII/37.jpg","../Imagen/episodio VII/34.jpg","../Imagen/episodio III/13.jpg", "../Imagen/episodio III/14.jpg"]
    }
]
let Peliculas_Imagen = document.getElementsByClassName('Pelicula--Imagen');
const dialog_Peliculas = document.getElementById('Dialog--Imagen')
Array.from(Peliculas_Imagen).forEach((pelicula,index) =>{
    pelicula.addEventListener('click',()=>{
        if(dialog_Peliculas){
            dialog_Peliculas.show();
            const Imagen_peliculas = document.getElementById('Imagen__peli');
            const Nombre_pelicula = document.getElementById('Nombre');
            const descripcion_pelicula = document.getElementById('Desc--peliculas');
            const Personajes = document.getElementsByClassName('Personajes--Imagen');
            if(Imagen_peliculas && Nombre_pelicula && descripcion_pelicula && Personajes){
                Imagen_peliculas.src = Peliculas_Desc[index].Imagen;
                Nombre_pelicula.textContent = Peliculas_Desc[index].Name;
                descripcion_pelicula.textContent = Peliculas_Desc[index].Content;
                Array.from(Personajes).forEach((personajes,cont)=>{
                    const personaje = personajes.querySelector('img')
                    if(personaje){
                        personaje.src = Peliculas_Desc[index].Characters[cont];
                    }else{
                        console.log("No se encontro el personaje ${charIndex}");
                    }
                })
                console.log(index);

            }else{
                console.log("No se encontro el contenido de la pelicula ${index}");
            }
        }
    })
})
//Evento para cerrar la ventana de las peliculas
const cerrar_imagen = document.getElementById('Cerrar--imagen');
cerrar_imagen.addEventListener('click',()=>{
    dialog_Peliculas.close();
    
})
//evento para mover los personajes de las peliculas del dialog
const Left_peliculas = document.getElementById('Left--peliculas');
const Right_peliculas = document.getElementById('Right--peliculas');
const Peliculas_personajes = document.getElementById('Personajes--peliculas');
Left_peliculas.addEventListener('click',()=>{
    Peliculas_personajes.scrollLeft -= 370;
})
Right_peliculas.addEventListener('click',()=>{
    Peliculas_personajes.scrollLeft += 370;
})