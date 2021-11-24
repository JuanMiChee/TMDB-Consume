


const baseImgUrl= "http://image.tmdb.org/t/p/";
const baseUrl = "https://api.themoviedb.org/3/movie/"
const api_key = '60586031e0e21153f7f67ca901fabc85';

const popularRuta = 'popular'
const latestRuta = 'latest'
const upcomingRuta = 'upcoming'
const topRatedRuta = 'top_rated'

makeUrl(popularRuta);
makeUrl(latestRuta);
makeUrl(upcomingRuta);
makeUrl(topRatedRuta);

function makeUrl(ruta){
const myUrlWithParams = new URL(ruta, baseUrl); 

myUrlWithParams.searchParams.append("language", "en-US");
myUrlWithParams.searchParams.append("api_key", api_key);
myUrlWithParams.searchParams.append("page", "1");

console.log(myUrlWithParams.href);
return myUrlWithParams.href;
}

async function fetchMovies (url){   
    let response = await fetch(url);
    console.log(response);
    return response.json();
}

//dibujo de las peliculas populares del main

fetchMovies(makeUrl(topRatedRuta)).then(jsonPopularProcessing);


function jsonPopularProcessing(jsonPopular) {
  let moviesFilter = jsonPopular.results.filter(function(result){
      return result.original_language === 'en'
  })   
  let movieMap = jsonPopular.results.map(mapMovie);
  
  movieMap.forEach(drawPopularMovie);
  console.log(moviesFilter);
}

function drawPopularMovie(movie) {
  let moviesContainer = document.getElementById('popular-movies-box');
  let moviesImgBox = document.createElement('div');
  
  let movieImageElement = document.createElement('img');                                    
  movieImageElement.src = movie.imgUrl;                                 

  let movieTitleElement = document.createElement('h3');
  movieTitleElement.innerHTML = movie.title;


  
  document.body.appendChild(moviesContainer);
  moviesContainer.appendChild(moviesImgBox)
  moviesImgBox.appendChild(movieImageElement);  
  moviesImgBox.appendChild(movieTitleElement); 
  
}
//dibujo de las peliculas populares del main

function getLastestMoviesButton(){
    fetchMovies(makeUrl(latestRuta)).then(jsonProcessing);
}

function getPopularMoviesButton(){
    fetchMovies(makeUrl(popularRuta)).then(jsonProcessing);
}

function getUpcommingMoviesButton(){
    fetchMovies(makeUrl(upcomingRuta)).then(jsonProcessing);
}

function jsonProcessing(json) {
    let moviesFilter = json.results.filter(function(result){
        return result.original_language === 'en'
    })   
    let movieMap = json.results.map(mapMovie);
    console.log(moviesFilter)
    movieMap.forEach(drawMovie);
  }

function mapMovie(movieJson) {
    return {
        title: movieJson.title,
        imgUrl: 'https://image.tmdb.org/t/p/w154//' + movieJson.poster_path +'?'+ api_key,
        overview: movieJson.overview,      
    }
}

function drawMovie(movie) {
    let moviesContainer = document.getElementById('movies-container');
    let moviesImgBox = document.createElement('div');

    let movieTitleElement = document.createElement('h3');
    movieTitleElement.innerHTML = movie.title;

    let movieImageElement = document.createElement('img');                                    
    movieImageElement.src = movie.imgUrl;                                 
    
    moviesContainer.appendChild(moviesImgBox); 
    moviesImgBox.appendChild(movieImageElement);  
    moviesImgBox.appendChild(movieTitleElement);
    
    document.body.appendChild(moviesContainer);
  }

function toggleMenu(){
    document.getElementById('toggle-bar').classList.toggle('active');
} 





 