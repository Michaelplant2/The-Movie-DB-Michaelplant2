const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d443cc02330f81935fbd017507b99041&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=d443cc02330f81935fbd017507b99041&query=";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovie(APIURL);

async function getMovie(url) {
   const resp = await fetch(url);
   const respData = await resp.json();
   console.log(respData);
   showMovies(respData.results);
}

function showMovies(movies) {
   main.innerHTML = '';
   movies.forEach(movie => {
      const { poster_path, title, vote_average, overview } = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `

                <img 
         	        src="${IMGPATH + poster_path}" 
                    alt="${title}"/>
                <div class="movie-card">
                    <h3 class="movie-title">${title}</h3>
                    <p class="movie-rate">${vote_average}/10</p>
                </div>
                <div class="movie-overview">
                    <h3>Overview:</h3>
                    ${overview}
                </div>`;
      main.appendChild(movieEl);
   });
}

function GoToHomePage() {
   window.location = '/index.html';
}

form.addEventListener('submit', e => {
   e.preventDefault();
   const searchTerm = search.value;
   if (searchTerm) {
      getMovie(SEARCHAPI + searchTerm);
      search.value = '';
   }
});