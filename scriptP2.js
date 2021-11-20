
//secound pull request tastegahhhahhhffh
const baseImgUrl= "http://image.tmdb.org/t/p/";
const baseUrl = "https://api.themoviedb.org/3/movie/"
const api_key = '?api_key=60586031e0e21153f7f67ca901fabc85';
const getLastestApiUrl = baseUrl + 'top_rated'+ api_key +'&language=en-US&page=1';
const getPopularApiUrl = baseUrl + 'popular'+ api_key +'&language=en-US&page=1';


fetchMovies(getLastestApiUrl).then(jsonProcessing);
async function fetchMovies (url){   
    let response = await fetch(url);
    console.log(response);
    return response.json();
}

function getPopularMoviesButtonTouched(){
    fetchMovies(getPopularApiUrl).then(jsonProcessing);
}

function jsonProcessing(json) {
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

function toggleMenu(){
        document.getElementById('toggle-bar').classList.toggle('active')
    } 


// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
//https://api.themoviedb.org/3/movie/15/videos?api_key=60586031e0e21153f7f67ca901fabc85&language=en-US