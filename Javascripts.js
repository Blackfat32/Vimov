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
      url: "https://ia600907.us.archive.org/9/items/elmda/%CE%BA%CE%B5%CF%88%CE%B7%20ELMDA%20%D7%A1%D6%B0%D7%92%D7%95%D6%BC%D7%A8%D6%B8%D7%94.ia.mp4"
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
      poster: "./images/Pelicula - Fracture.jpg",
      genre: "Suspenso, Misterio",
      duration: "1h 48min",
      rating: "7.3",
      synopsis: "Un ingeniero con problemas de salud mental está convencido de que su esposa intentó matarlo.",
      url: "https://www.ejemplo.com/pelicula/fracture"
    },
    {
      title: "Por siempre a mi lado",
      year: 2020,
      poster: "./images/Pelicula - Por siempre a mi lado.jpg",
      genre: "Drama, Romance",
      duration: "1h 40min",
      rating: "7.2",
      synopsis: "Una historia emotiva sobre el amor y la pérdida.",
      url: "https://www.ejemplo.com/pelicula/por-siempre-a-mi-lado"
    },
    {
      title: "Conociendo A Missy",
      year: 2020,
      poster: "./images/Pelicula - Conociendo a Missy.jpg",
      genre: "Comedia, Romance",
      duration: "1h 35min",
      rating: "6.5",
      synopsis: "Un hombre tiene la oportunidad de revivir la misma cita romántica una y otra vez.",
      url: "https://www.ejemplo.com/pelicula/conociendo-a-missy"
    }
  ]
};

const container = document.getElementById('container');

for (const [category, movies] of Object.entries(moviesByCategory)) {
  const section = document.createElement('section');
  section.className = 'movies-section';
  
  const h2 = document.createElement('h2');
  h2.textContent = category;
  section.appendChild(h2);

  const moviesContainer = document.createElement('div');
  moviesContainer.className = 'movies-container';

  movies.forEach(movie => {
    const poster = document.createElement('img');
    poster.src = movie.poster;
    poster.alt = movie.title;
    poster.className = 'poster';
    poster.dataset.url = movie.url;

    poster.addEventListener('click', () => {
      window.open(poster.dataset.url, '_blank');
    });

    moviesContainer.appendChild(poster);
  });

  section.appendChild(moviesContainer);
  container.appendChild(section);
}
