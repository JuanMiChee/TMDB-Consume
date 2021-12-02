


const baseImgUrl= "http://image.tmdb.org/t/p/";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const api_key = '60586031e0e21153f7f67ca901fabc85';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w154///';

const popularRuta = 'popular'
const latestRuta = 'latest'
const upcomingRuta = 'upcoming'
const topRatedRuta = 'top_rated'


function makeUrl(ruta, base){ 

const myUrlWithParams = new URL (ruta, base);
// console.log(myUrlWithParams);

myUrlWithParams.searchParams.append("language", "en-US");
myUrlWithParams.searchParams.append("api_key", api_key);
myUrlWithParams.searchParams.append("page", "1");

// console.log(myUrlWithParams.href);
return myUrlWithParams.href;
}

async function fetchMovies (url){   
    let response = await fetch(url);
    console.log(response);
    return response.json();
}

async function fetchBuscador(nameUrl){
    let response = await fetch(nameUrl);
    return response.json
}

fetchMovies(makeUrl(topRatedRuta, baseUrl)).then(jsonPopularProcessing);

function callFilter(){
fetchMovies(makeUrl(upcomingRuta, baseUrl)).then(filtrar).then();
}

function jsonPopularProcessing(jsonPopular) { 
  let movieMap = jsonPopular.results.map(mapMovie);
  movieMap.forEach(drawPopularMovie);
  let moviesFilter = movieMap.filter(papita)  
}
function papita (movie){
    return movie.original_language === 'en'
}

function getLastestMoviesButton(){
    fetchMovies(makeUrl(latestRuta, baseUrl)).then(jsonProcessing);
}

function getPopularMoviesButton(){
    fetchMovies(makeUrl(popularRuta, baseUrl)).then(jsonProcessing);
}

function getUpcommingMoviesButton(){
    fetchMovies(makeUrl(upcomingRuta, baseUrl)).then(jsonProcessing);
}

function jsonProcessing(json){
    let moviesFilter = json.results.filter(function(result){
        return result.original_language === 'en'
    })   
    let movieMap = json.results.map(mapMovie);
    movieMap.forEach(drawAllMovie);
    console.log(moviesFilter); 
  }

function mapMovie(movieJson) {
    // console.log(movieJson.poster_path);
    let path = '/t/p/w154///';
    let makingUrl = makeUrl(path + movieJson.poster_path, imgBaseUrl);
   
    return {
        title: movieJson.title,
        imgUrl: makingUrl,
        overview: movieJson.overview,            
    }
}

var htmlPopularId = 'popular-movies-box';
const htmlContainerId = 'movies-container';

function eraseContent(container){
        container.innerHTML = '';
}

function drawMovie(movie, htmlId) {
    let moviesContainer = document.getElementById(htmlId);
    
    let moviesImgBox = document.createElement('div');

    let movieTitleElement = document.createElement('h4');
    movieTitleElement.innerHTML = movie.title;

    let movieImageElement = document.createElement('img');                                    
    movieImageElement.src = movie.imgUrl;                                 
    
    moviesContainer.appendChild(moviesImgBox); 
    moviesImgBox.appendChild(movieImageElement);  
    moviesImgBox.appendChild(movieTitleElement);
}

function drawPopularMovie(movie) {
    drawMovie(movie, htmlPopularId);   
} 

function drawAllMovie(movie) {
    drawMovie(movie, htmlContainerId);  
} 


function toggleMenu(){
    document.getElementById('toggle-bar').classList.toggle('active');
    // document.getElementById('movies-container').classList.toggle('hide');
} 

function filtrar(json){   
    let formulario = document.getElementById('formulario');
    const texto = formulario.value.toLowerCase(); 
    console.log(formulario.value);         
    const movieMap = json.results.map(mapMovie);
    const resultado = document.getElementById(htmlContainerId);

      
    let movieMapFiltered = movieMap.filter(function(movie){       
        let lowerTitleApi = movie.title.toLowerCase();
        let comparacion = lowerTitleApi.indexOf(texto) !== -1; 
        return comparacion;
    });    
    eraseContent(resultado);
    movieMapFiltered.forEach(drawAllMovie);
}





    
