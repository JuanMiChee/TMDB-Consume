
<<<<<<< HEAD
//secound pull request cuarto pushdmdaagjkjk
=======
>>>>>>> 7391f526320901a0dac33b7fe5fd482f426c525f
const baseImgUrl= "http://image.tmdb.org/t/p/";
const baseUrl = "https://api.themoviedb.org/3/movie/"
const getLastestApiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=60586031e0e21153f7f67ca901fabc85&language=en-US&page=1'
const getPopularApiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=60586031e0e21153f7f67ca901fabc85&language=en-US&page=1';
const api_key = '?api_key=60586031e0e21153f7f67ca901fabc85';


function PopularMoviesGetter(){
async function getPopularMovies (){   
    let response = await fetch(getPopularApiUrl);
    console.log(response);
    return response.json();
}

getPopularMovies().then(jsonOneProcessing);
function jsonOneProcessing(json) {
    let moviesFilter = json.results.filter(function(result){
        return result.original_language === 'en'
    })   
    let movieMap = json.results.map(mapMovie);
    
    movieMap.forEach(drawMovie);
    console.log(moviesFilter);
}

function mapMovie(movieJson) {
    return {
        title: movieJson.title,
        imgUrl: 'https://image.tmdb.org/t/p/w154//' + movieJson.poster_path + api_key,
        overview: movieJson.overview,      
    }
}

function drawMovie(movie) {
    let div = document.createElement('div');

    let movieTitleElement = document.createElement('h1');
    movieTitleElement.innerHTML = movie.title;

    let movieDescriptionElement = document.createElement('h2');
    movieDescriptionElement.innerHTML = movie.overview;

    let movieImageElement = document.createElement('img');                                    
    movieImageElement.src = movie.imgUrl;                                 

    div.appendChild(movieTitleElement); 
    div.appendChild(movieDescriptionElement); 
    div.appendChild(movieImageElement);  

    document.body.appendChild(div);
  }
}



function lastestMoviesGetter(){
async function getLastestMovies (){   
    let responseTwo = await fetch(getLastestApiUrl);
    console.log(responseTwo);
    return responseTwo.json();   
}

getLastestMovies().then(jsonTwoProcessing);
function jsonTwoProcessing(json) {
    let moviesTwo = json.results.map(mapMovieTwo);
    console.log(moviesTwo);
    moviesTwo.forEach(drawMovieTwo);
}

function mapMovieTwo(movieJsonTwo) {
    return {
        title: movieJsonTwo.title,
        imgUrl: 'https://image.tmdb.org/t/p/w154//' + movieJsonTwo.poster_path + api_key,
        overview: movieJsonTwo.overview,      
    }
}

function drawMovieTwo(movieTwo) {
    let div = document.createElement('div');

    let movieTitleElement = document.createElement('h1');
    movieTitleElement.innerHTML = movieTwo.title;

    let movieDescriptionElement = document.createElement('h2');
    movieDescriptionElement.innerHTML = movieTwo.overview;

    let movieImageElement = document.createElement('img');                                    
    movieImageElement.src = movieTwo.imgUrl;                                 

    div.appendChild(movieTitleElement); 
    div.appendChild(movieDescriptionElement); 
    div.appendChild(movieImageElement);  

    document.body.appendChild(div);
  }  
}

function toggleMenu(){
        document.getElementById('toggle-bar').classList.toggle('active')
    } 


// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
//https://api.themoviedb.org/3/movie/15/videos?api_key=60586031e0e21153f7f67ca901fabc85&language=en-US