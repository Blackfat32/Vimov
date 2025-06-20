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
      synopsis: "Una historia inspiradora de mujeres científicas en la NASA.",
      url: "https://www.ejemplo.com/pelicula/talentos-ocultos"
    },
    {
      title: "Sully",
      year: 2016,
      poster: "images/Pelicula - Sully.jpg",
      genre: "Drama, Historia",
      duration: "1h 36min",
      rating: "7.4",
      synopsis: "El aterrizaje de emergencia del vuelo 1549 en el río Hudson.",
      url: "https://www.ejemplo.com/pelicula/sully"
    },
    {
      title: "Hotel Rwanda",
      year: 2004,
      poster: "images/Pelicula - Hotel Rwanda.jpg",
      genre: "Drama, África",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "Un hombre lucha por salvar vidas durante el genocidio en Ruanda.",
      url: "https://www.ejemplo.com/pelicula/hotel-rwanda"
    },
    {
      title: "Manos Milagrosas",
      year: 2004,
      poster: "images/Pelicula - Manos Milagrosas.jpg",
      genre: "Drama, Biografía",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "La historia real del neurocirujano Ben Carson.",
      url: "https://www.ejemplo.com/pelicula/manos-milagrosas"
    },
    {
      title: "La Verdad Oculta",
      year: 2015,
      poster: "images/Pelicula - La Verdad Oculta.jpg",
      genre: "Drama, Medicina",
      duration: "1h 50min",
      rating: "7.6",
      synopsis: "Un médico descubre una verdad incómoda sobre la NFL y conmociones cerebrales.",
      url: "https://www.ejemplo.com/pelicula/la-verdad-oculta"
    },
    {
      title: "Criadas Y Señoras",
      year: 2011,
      poster: "images/Pelicula - Criadas y Señoras.jpg",
      genre: "Drama, Racismo",
      duration: "1h 46min",
      rating: "7.5",
      synopsis: "Una escritora transforma una pequeña ciudad al entrevistar a las mujeres negras que trabajan con las familias prominentes...",
      url: "https://www.ejemplo.com/pelicula/criadas-y-senoras"
    },
    {
      title: "La Sociedad De La Nieve",
      year: 2023,
      poster: "images/Pelicula - La Sociedad de la Nueve.jpg",
      genre: "Drama, Supervivencia",
      duration: "1h 44min",
      rating: "7.6",
      synopsis: "Un avión se estrella en los Andes y los sobrevivientes luchan por vivir en condiciones extremas, tomando decisiones desgarradoras para sobrevivir.",
      url: "https://www.ejemplo.com/pelicula/la-sociedad-de-la-nieve"
    },
    {
      title: "Aguas Oscuras",
      year: 2019,
      poster: "images/Pelicula - Aguas Oscuras.jpg",
      genre: "Suspenso, Misterio",
      duration: "2h 06min",
      rating: "7.6",
      synopsis: "Un abogado descubre que una poderosa empresa química está contaminando el agua y causando enfermedades, y lucha por exponer la verdad.",
      url: "https://www.ejemplo.com/pelicula/aguas-oscuras"
    },
    {
      title: "12 Años De Esclavitud",
      year: 2013,
      poster: "images/Pelicula - 12 Años de Esclavitud.jpg",
      genre: "Drama, Historia",
      duration: "2h 14min",
      rating: "8.1",
      synopsis: "Un hombre negro libre es secuestrado y vendido como esclavo, luchando por recuperar su libertad.",
      url: "https://www.ejemplo.com/pelicula/12-anos-de-esclavitud"
    },
    {
      title: "Juego De Honor",
      year: 2005,
      poster: "images/Pelicula - Juego de Honor.jpg",
      genre: "Deporte, Drama",
      duration: "2h 16min",
      rating: "7.3",
      synopsis: "Un entrenador de baloncesto impone disciplina académica a sus jugadores para enseñarles responsabilidad y superación.",
      url: "https://www.ejemplo.com/pelicula/juego-de-honor"
    },
    {
      title: "172 Horas",
      year: 2010,
      poster: "images/Pelicula - 172 Horas.jpg",
      genre: "Aventura, Drama",
      duration: "1h 34min",
      rating: "6.8",
      synopsis: "Un alpinista queda atrapado en una grieta y debe tomar una decisión extrema para sobrevivir.",
      url: "https://www.ejemplo.com/pelicula/172-horas"
    },
    {
      title: "El Niño Que Domo El Viento",
      year: 2019,
      poster: "images/Pelicula - El Niño Que Domo el Viento.jpg",
      genre: "Historia, Drama",
      duration: "1h 53min",
      rating: "6.9",
      synopsis: "Un niño de Malawi construye un molino de viento para salvar a su aldea de la hambruna.",
      url: "https://www.ejemplo.com/pelicula/el-nino-que-domo-el-viento"
    },
    {
      title: "Rescatando Al Soldado Ryan",
      year: 1998,
      poster: "images/Pelicula - Rescatando al Soldado Ryan.jpg",
      genre: "Bélico, Acción",
      duration: "2h 49min",
      rating: "7.8",
      synopsis: "Un escuadrón de soldados es enviado a buscar y rescatar a un paracaidista cuyo hermanos han muerto en combate.",
      url: "https://www.ejemplo.com/pelicula/rescatando-al-soldado-ryan"
    },
    {
      title: "Un Amor Inquebrantable",
      year: 2019,
      poster: "images/Pelicula - Un Amor Inquebrantable.jpg",
      genre: "Drama, Melodrama",
      duration: "1h 56min",
      rating: "6.3",
      synopsis: "Una madre ora con fe para salvar a su hijo tras sufrir un accidente casi fatal.",
      url: "https://www.ejemplo.com/pelicula/un-amor-inquebrantable"
    },
    {
      title: "Snowden",
      year: 2016,
      poster: "images/Pelicula - Snowden.jpg",
      genre: "Suspenso, Acción",
      duration: "2h 14min",
      rating: "6.3",
      synopsis: "Un exanalista de la NSA filtra información secreta para exponer vigilancia masiva gubernamental.",
      url: "https://www.ejemplo.com/pelicula/snowden"
    },
    {
      title: "Me Llaman Radio",
      year: 2003,
      poster: "images/Pelicula - Me llaman Radio.jpg",
      genre: "Deporte, Comedia",
      duration: "1h 49min",
      rating: "6.9",
      synopsis: "Un joven con discapacidad intelectual, gracias a la amistad con un entrenador de fútbol americano, logra ser aceptado, respetado  y valorado en su comunidad.",
      url: "https://www.ejemplo.com/pelicula/me-llaman-radio"
    },
    {
      title: "Malcolm X",
      year: 1992,
      poster: "images/Pelicula - Malcolm X.jpg",
      genre: "Drama, Racismo",
      duration: "3h 21min",
      rating: "6.9",
      synopsis: "Relato poderoso de la transformación de Malcolm X, desde su vida criminal hasta convertirse en uno de los líderes más influyentes del movimiento por los derechos de los afroamericanos en EE. UU.",
      url: "https://ia800406.us.archive.org/33/items/mx_20250618/%CE%9A%CE%B5%CF%88%CE%B7%20MX%20%D7%A1%D6%B0%D7%92%D7%95%D6%BC%D7%A8%D6%B8%D7%94.ia.mp4"
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
      synopsis: "Un hombre que busca a su familia después de un accidente, pero descubre que algo extraño sucede en el hospital.",
      url: "https://www.ejemplo.com/pelicula/fracture"
    },
    {
      title: "Vértigo",
      year: 2022,
      poster: "./images/Pelicula - Vertigo.jpg",
      genre: "Drama, Alpinismo",
      duration: "1h 32min",
      rating: "5.8",
      synopsis: "Dos amigas quedan atrapadas en la cima de una torre de más de 600 metros en medio del desierto y deben luchar por sobrevivir sin recursos ni forma de pedir ayuda.",
      url: "https://www.ejemplo.com/pelicula/vertigo"
    },
    {
      title: "Insomnio",
      year: 2002,
      poster: "./images/Pelicula - Insomnio.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 58min",
      rating: "6.5",
      synopsis: "Un detective viaja a un pueblo de Alaska para investigar un asesinato, pero el sol de medianoche y su conciencia lo empujan al borde del colapso.",
      url: "https://www.ejemplo.com/pelicula/insomnio"
    },
    {
      title: "Memento",
      year: 2000,
      poster: "./images/Pelicula - Memento.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 55min",
      rating: "7.8",
      synopsis: "Un hombre con pérdida de memoria reciente busca al asesino de su esposa usando notas, fotos y tatuajes como pistas.",
      url: "https://www.ejemplo.com/pelicula/memento"
    },
    {
      title: "Seven",
      year: 1995,
      poster: "./images/Pelicula - Seven.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 07min",
      rating: "8.3",
      synopsis: "Dos detectives persiguen a un asesino serial que comete crímenes inspirados en los siete pecados capitales.",
      url: "https://www.ejemplo.com/pelicula/seven"
    },
    {
      title: "El Coleccionista De Huesos",
      year: 1999,
      poster: "./images/Pelicula - El Colecionista De Huesos.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 55min",
      rating: "6.2",
      synopsis: "Un detective paralizado y su asistente novata persiguen a un asesino en serie que deja pistas macabras en sus crímenes.",
      url: "https://www.ejemplo.com/pelicula/el-coleccionista-de-huesos"
    },
    {
      title: "Crimen Perfecto",
      year: 2007,
      poster: "./images/Pelicula - Fracture.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 52min",
      rating: "6.8",
      synopsis: "Un hombre planea el asesinato perfecto, pero un joven fiscal comienza a desmantelar su coartada.",
      url: "https://www.ejemplo.com/pelicula/crimen-perfecto"
    },
    {
      title: "Zodiac",
      year: 2007,
      poster: "./images/Pelicula - Zodiaco.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 38min",
      rating: "6.8",
      synopsis: "Un asesino en serie aterroriza San Francisco mientras periodistas y detectives intentan descifrar sus crípticos mensajes.",
      url: "https://www.ejemplo.com/pelicula/zodiac"
    },
    {
      title: "La Sospecha",
      year: 2013,
      poster: "./images/Pelicula - La Sospecha.jpg",
      genre: "Crimen, Intriga",
      duration: "2h 33min",
      rating: "7.6",
      synopsis: "Un padre desesperado busca a su hija desaparecida mientras la policía sigue pistas inciertas.",
      url: "https://www.ejemplo.com/pelicula/la-sospecha"
    },
    {
      title: "En La Mente Del Asesino",
      year: 2015,
      poster: "./images/Pelicula - En La Mente Del Asesino.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 31min",
      rating: "5.5",
      synopsis: "Un detective se adentra en la mente de un asesino para atraparlo antes de que vuelva a matar.",
      url: "https://www.ejemplo.com/pelicula/en-la-mente-del-asesino"
    },
    {
      title: "Enemigo",
      year: 2013,
      poster: "./images/Pelicula - Enemy.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 31min",
      rating: "6.4",
      synopsis: "Un hombre descubre a su doble exacto y su vida comienza a desmoronarse.",
      url: "https://www.ejemplo.com/pelicula/enemigo"
    },
    {
      title: "Río Místico",
      year: 2003,
      poster: "./images/Pelicula - Mistery River.jpg",
      genre: "Drama, Intriga",
      duration: "1h 37min",
      rating: "8.0",
      synopsis: "Tres amigos de infancia se ven envueltos en un crimen que reabre viejas heridas del pasado.",
      url: "https://www.ejemplo.com/pelicula/rio-mistico"
    },
    {
      title: "Contratiempo",
      year: 2016,
      poster: "./images/Pelicula - Contratiempo.jpg",
      genre: "Crimen, Intriga",
      duration: "1h 34min",
      rating: "6.7",
      synopsis: "Un empresario acusado de asesinato contrata a una experta para limpiar su nombre antes del juicio.",
      url: "https://www.ejemplo.com/pelicula/contratiempo"
    },
    {
      title: "Perdida",
      year: 2014,
      poster: "./images/Pelicula - Perdida.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 49min",
      rating: "7.3",
      synopsis: "La esposa de un hombre desaparece y todas las sospechas recaen sobre él.",
      url: "https://www.ejemplo.com/pelicula/perdida"
    },
    {
      title: "Isla Siniestra",
      year: 2010,
      poster: "./images/Pelicula - Isla Siniestra.jpg",
      genre: "Psicológico, Intriga",
      duration: "1h 38min",
      rating: "7.6",
      synopsis: "Un agente federal investiga la desaparición de una paciente en un hospital psiquiátrico aislado.",
      url: "https://www.ejemplo.com/pelicula/isla-siniestra"
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
      synopsis: "Un exasesino regresa para vengar a su perro.",
      url: "https://www.ejemplo.com/pelicula/john-wick"
    },
    {
      title: "Coco",
      year: 2017,
      poster: "./images/coco.jpg",
      genre: "Familiar",
      duration: "1h 45min",
      rating: "8.4",
      synopsis: "Un niño viaja al mundo de los muertos para descubrir su legado familiar.",
      url: "https://www.ejemplo.com/pelicula/coco"
    },
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      poster: "./images/mad-max.jpg",
      genre: "Acción",
      duration: "2h 0min",
      rating: "8.1",
      synopsis: "En un mundo postapocalíptico, Max ayuda a una rebelión.",
      url: "https://www.ejemplo.com/pelicula/mad-max-fury-road"
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
          <img src="${movie.poster}" alt="${movie.title}" data-url="${movie.url}">
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

        const poster = card.querySelector('img');
        poster.addEventListener('click', () => {
          window.location.href = poster.dataset.url;
        });
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