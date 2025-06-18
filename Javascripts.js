const sliderMovies = [
  "images/Slider 1.jpg",
  "images/Slider 2.jpg",
  "images/Slider 3.jpg",
  "images/Slider 4.jpg",
  "images/Slider 5.jpg",
  "images/Slider 6.jpg",
  "images/Slider 7.jpg",
  "images/Slider 8.jpg",
  "images/Slider 9.jpg",
  "images/Slider 10.jpg"
];

const sliderTrack = document.getElementById('sliderTrack');
const allSlides = sliderMovies.concat(sliderMovies);

allSlides.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `<img src="${src}" alt="Película">`;
  sliderTrack.appendChild(slide);
});

const moviesByCategory = {
  "Hechos reales": [
    {
      title: "Talentos Ocultos",
      year: 2016,
      poster: "images/Pelicula - Talentos Ocultos.jpg",
      genre: "Drama, Historia",
      duration: "1h 27min",
      rating: "8.5",
      synopsis: "Una historia inspiradora de mujeres científicas en la NASA."
    },
    {
      title: "Sully",
      year: 2016,
      poster: "images/Pelicula - Sully.jpg",
      genre: "Drama, Historia",
      duration: "1h 36min",
      rating: "7.4",
      synopsis: "El aterrizaje de emergencia del vuelo 1549 en el río Hudson."
    },
    {
      title: "Hotel Rwanda",
      year: 2004,
      poster: "images/Pelicula - Hotel Rwanda.jpg",
      genre: "Drama, África",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "Un hombre lucha por salvar vidas durante el genocidio en Ruanda."
    },
    {
      title: "Manos Milagrosas",
      year: 2004,
      poster: "images/Pelicula - Manos Milagrosas.jpg",
      genre: "Drama, Biografía",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "La historia real del neurocirujano Ben Carson."
    },
    {
      title: "La Verdad Oculta",
      year: 2015,
      poster: "images/Pelicula - La Verdad Oculta.jpg",
      genre: "Drama, Medicina",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "Un médico descubre una verdad incómoda sobre la NFL y conmociones cerebrales."
    },
     {
      title: "Criadas Y Señoras",
      year: 2011,
      poster: "images/Pelicula - Criadas y Señoras.jpg",
      genre: "Drama, Racismo",
      duration: "1h 46min",
      rating: "7.5",
      synopsis: "Una escritora transforma una pequeña ciudad al entrevistar a las mujeres negras que trabajan con las familias prominentes..."
    },
     {
      title: "La Sociedad De La Nieve",
      year: 2023,
      poster: "images/Pelicula - La Sociedad de la Nueve.jpg",
      genre: "Drama, Supervivencia",
      duration: "1h 44min",
      rating: "7.6",
      synopsis: "Un avión se estrella en los Andes y los sobrevivientes luchan por vivir en condiciones extremas, tomando decisiones desgarradoras para sobrevivir."
    },
     {
      title: "Aguas Oscuras",
      year: 2019,
      poster: "images/Pelicula - Aguas Oscuras.jpg",
      genre: "Suspenso, Misterio",
      duration: "2h 06min",
      rating: "7.6",
      synopsis: "Un abogado descubre que una poderosa empresa química está contaminando el agua y causando enfermedades, y lucha por exponer la verdad."
    },
     {
      title: "12 Años De Esclavitud",
      year: 2013,
      poster: "images/Pelicula - 12 Años de Esclavitud.jpg",
      genre: "Drama, Historia",
      duration: "2h 14min",
      rating: "8.1",
      synopsis: "Un hombre negro libre es secuestrado y vendido como esclavo, luchando por recuperar su libertad."
    },
     {
      title: "Juego De Honor",
      year: 2005,
      poster: "images/Pelicula - Juego de Honor.jpg",
      genre: "Deporte, Drama",
      duration: "2h 16min",
      rating: "7.3",
      synopsis: "Un entrenador de baloncesto impone disciplina académica a sus jugadores para enseñarles responsabilidad y superación."
    },
     {
      title: "172 Horas",
      year: 2010,
      poster: "images/Pelicula - 172 Horas.jpg",
      genre: "Aventura, Drama",
      duration: "1h 34min",
      rating: "6.8",
      synopsis: "Un alpinista queda atrapado en una grieta y debe tomar una decisión extrema para sobrevivir."
    },
     {
      title: "El Niño Que Domo El Viento",
      year: 2019,
      poster: "images/Pelicula - El Niño Que Domo el Viento.jpg",
      genre: "Historia, Drama",
      duration: "1h 53min",
      rating: "6.9",
      synopsis: "Un niño de Malawi construye un molino de viento para salvar a su aldea de la hambruna."
    },
     {
      title: "Rescatando Al Soldado Ryan",
      year: 1998,
      poster: "images/Pelicula - Rescatando al Soldado Ryan.jpg",
      genre: "Bélico, Acción",
      duration: "2h 49min",
      rating: "7.8",
      synopsis: "Un escuadrón de soldados es enviado a buscar y rescatar a un paracaidista cuyo hermanos han muerto en combate."
    },
     {
      title: "Un Amor Inquebrantable",
      year: 2019,
      poster: "images/Pelicula - Un Amor Inquebrantable.jpg",
      genre: "Drama, Melodrama",
      duration: "1h 56min",
      rating: "6.3",
      synopsis: "Una madre ora con fe para salvar a su hijo tras sufrir un accidente casi fatal."
    },
     {
      title: "Snowden",
      year: 2016,
      poster: "images/Pelicula - Snowden.jpg",
      genre: "Suspenso, Acción",
      duration: "2h 14min",
      rating: "6.3",
      synopsis: "Un exanalista de la NSA filtra información secreta para exponer vigilancia masiva gubernamental."
    },
     {
      title: "Me Llaman Radio",
      year: 2003,
      poster: "images/Pelicula - Me llaman Radio.jpg",
      genre: "Deporte, Comedia",
      duration: "1h 49min",
      rating: "6.9",
      synopsis: "Un joven con discapacidad intelectual, gracias a la amistad con un entrenador de fútbol americano, logra ser aceptado, respetado  y valorado en su comunidad."
    },
         {
      title: "Malcolm X",
      year: 1992,
      poster: "images/Pelicula - Malcolm X.jpg",
      genre: "Drama, Racismo",
      duration: "3h 21min",
      rating: "6.9",
      synopsis: "Relato poderoso de la transformación de Malcolm X, desde su vida criminal hasta convertirse en uno de los líderes más influyentes del movimiento por los derechos de los afroamericanos en EE. UU."
    },
  ],
  "Drama": [
    {
      title: "Fracture",
      year: 2019,
      poster: "./images/Pelicula - Fractured.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 40min",
      rating: "5.8",
      synopsis: "La historia de la esperanza y la amistad en prisión."
    },
    {
      title: "Vértigo",
      year: 2022,
      poster: "./images/Pelicula - Vertigo.jpg",
      genre: "Drama, Alpinismo",
      duration: "1h 32min",
      rating: "5.8",
      synopsis: "Dos amigas quedan atrapadas en la cima de una torre de más de 600 metros en medio del desierto y deben luchar por sobrevivir sin recursos ni forma de pedir ayuda."
    },
    {
      title: "Insomnio",
      year: 2002,
      poster: "./images/Pelicula - Insomnio.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 58min",
      rating: "6.5",
      synopsis: "Un detective viaja a un pueblo de Alaska para investigar un asesinato, pero el sol de medianoche y su conciencia lo empujan al borde del colapso."
    },
    {
      title: "Memento",
      year: 2000,
      poster: "./images/Pelicula - Memento.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 55min",
      rating: "7.8",
      synopsis: "Un hombre con pérdida de memoria reciente busca al asesino de su esposa usando notas, fotos y tatuajes como pistas."
    },
    {
      title: "Seven",
      year: 1995,
      poster: "./images/Pelicula - Seven.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 07min",
      rating: "8.3",
      synopsis: "Dos detectives persiguen a un asesino serial que comete crímenes inspirados en los siete pecados capitales."
    },
    {
      title: "El Coleccionista De Huesos",
      year: 1999,
      poster: "./images/Pelicula - El Colecionista De Huesos.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 55min",
      rating: "6.2",
      synopsis: "Un detective paralizado y su asistente novata persiguen a un asesino en serie que deja pistas macabras en sus crímenes."
    },  
    {
      title: "Crimen Perfecto",
      year: 2007,
      poster: "./images/Pelicula - Fracture.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 52min",
      rating: "6.8",
      synopsis: "Un hombre planea el asesinato perfecto, pero un joven fiscal comienza a desmantelar su coartada."
    },  
    {
      title: "Zodiac",
      year: 2007,
      poster: "./images/Pelicula - Zodiaco.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 38min",
      rating: "6.8",
      synopsis: "Un asesino en serie aterroriza San Francisco mientras periodistas y detectives intentan descifrar sus crípticos mensajes."
    },        
    {
      title: "La Sospecha",
      year: 2013,
      poster: "./images/Pelicula - La Sospecha.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 33min",
      rating: "7.6",
      synopsis: "Un padre desesperado busca a su hija desaparecida mientras la policía sigue pistas inciertas."
    },    
    {
      title: "En La Mente Del Asesino",
      year: 2015,
      poster: "./images/Pelicula - En La Mente Del Asesino.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 31min",
      rating: "5.5",
      synopsis: "Un detective se adentra en la mente de un asesino para atraparlo antes de que vuelva a matar."
    },  
    {
      title: "Enemigo",
      year: 2013,
      poster: "./images/Pelicula - Enemy.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 31min",
      rating: "6.4",
      synopsis: "Un hombre descubre a su doble exacto y su vida comienza a desmoronarse."
    },  
    {
      title: "Río Místico",
      year: 2003,
      poster: "./images/Pelicula - Mistery River.jpg",
      genre: "Drama, Intriga",
      duration: "1h 37min",
      rating: "8.0",
      synopsis: "Tres amigos de infancia se ven envueltos en un crimen que reabre viejas heridas del pasado."
    },    
    {
      title: "Contratiempo",
      year: 2016,
      poster: "./images/Pelicula - Contratiempo.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 34min",
      rating: "6.7",
      synopsis: "Un empresario acusado de asesinato contrata a una experta para limpiar su nombre antes del juicio."
    },    
    {
      title: "Perdida",
      year: 2014,
      poster: "./images/Pelicula - Perdida.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 49min",
      rating: "7.3",
      synopsis: "La esposa de un hombre desaparece y todas las sospechas recaen sobre él."
    },    
    {
      title: "Isla Siniestra",
      year: 2010,
      poster: "./images/Pelicula - Isla Siniestra.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 38min",
      rating: "7.6",
      synopsis: "Un agente federal investiga la desaparición de una paciente en un hospital psiquiátrico aislado."
    }                           
  ],
  "Acción": [
    {
      title: "John Wick",
      year: 2014,
      poster: "./images/john-wick.jpg",
      genre: "Acción",
      duration: "1h 41min",
      rating: "7.4",
      synopsis: "Un exasesino regresa para vengar a su perro."
    },
    {
      title: "Coco",
      year: 2017,
      poster: "./images/coco.jpg",
      genre: "Familiar",
      duration: "1h 45min",
      rating: "8.4",
      synopsis: "Un niño viaja al mundo de los muertos para descubrir su legado familiar."
    },
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      poster: "./images/mad-max.jpg",
      genre: "Acción",
      duration: "2h 0min",
      rating: "8.1",
      synopsis: "En un mundo postapocalíptico, Max ayuda a una rebelión."
    }
  ]
};

const mainContent = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');

function createSections(filter = "") {
  mainContent.innerHTML = "";
  for (const category in moviesByCategory) {
    const section = document.createElement('section');
    section.className = "section";
    const h2 = document.createElement('h2');
    h2.textContent = category;
    section.appendChild(h2);

    const movieGrid = document.createElement('div');
    movieGrid.className = "movie-grid";

    moviesByCategory[category].forEach(movie => {
      const matchFilter = filter.toLowerCase();
      if (
        movie.title.toLowerCase().includes(matchFilter) ||
        String(movie.year).includes(matchFilter)
      ) {
        const card = document.createElement('article');
        card.className = "movie-card";
        card.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}">
          <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <p class="movie-genre">${movie.genre}</p>
            <p class="movie-duration">${movie.duration}</p>
            <p class="movie-rating">⭐ ${movie.rating}</p>
          </div>
          <div class="movie-overlay">${movie.synopsis}</div>
        `;
        movieGrid.appendChild(card);
      }
    });

    if (movieGrid.children.length > 0) {
      section.appendChild(movieGrid);
      mainContent.appendChild(section);
    }
  }
}

searchInput.addEventListener('input', () => {
  createSections(searchInput.value);
});

createSections();
