// Example of api call. Get your api key from https://www.themoviedb.org/ and replace it with the one below. 
// See https://developers.themoviedb.org/3/getting-started/introduction for more info
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query=";


// Starter example of api properties.
function showMovies(movies) {
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
  });
}