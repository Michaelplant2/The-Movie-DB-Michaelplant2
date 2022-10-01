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
      movieEl.classList.add('col');
      movieEl.innerHTML = `
            <div class="card">
                <img 
         	        src="${IMGPATH + poster_path}" 
                    alt="${title}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${vote_average}/10</p>
                    <h3 class="card-title">Overview:</h3>
                    <p class="card-text">${overview}</p>
                </div>
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