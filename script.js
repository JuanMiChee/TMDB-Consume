

const base_url= "http://image.tmdb.org/t/p/";
const getPopularApiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=60586031e0e21153f7f67ca901fabc85&language=en-US&page=1';
const api_key = '?api_key=60586031e0e21153f7f67ca901fabc85';

async function getMovie (){   
    let response = await fetch(getPopularApiUrl);
    return response.json();
}

getMovie().then(jsonProcessing);

function jsonProcessing(json) {
    let fristMovie = json.results[0];
    let secoundMovie = json.results[1];
    let tirthMovie = json.results[2];
    let fourthMovie = json.results[3];
    
    let movieOne = {
        title: fristMovie.title,
        img: 'https://image.tmdb.org/t/p/original//' + fristMovie.poster_path + api_key,
        overview: fristMovie.overview,      
    }

    function addImage(imgUrlPocessed) {                            //=> esta caja esta vacia hasta que 
        var img = new Image();                                     //= <img></img>
        img.src = imgUrlPocessed;                                  // <img src = imgUrlProcessed (se pasa como parametro) >
        var imgElement = document.getElementById("img-container"); // traer la caja desde html
        imgElement.appendChild(img);                               //asignarle como hijo un <img> a la caja de html
    }

    let movieTwo = {
        title: secoundMovie.title,
        img: 'https://image.tmdb.org/t/p/original//' + secoundMovie.poster_path + api_key,
        overview: secoundMovie.overview,      
    }
    function addImage(imgUrlPocessed) {                           
        var img2 = new Image();                                    
        img2.src = imgUrlPocessed;                                 
        var imgElement2 = document.getElementById("img-container2");
        imgElement2.appendChild(img2);                              
    }

    let movieThree = {
        title: tirthMovie.title,
        img: 'https://image.tmdb.org/t/p/original//' + tirthMovie.poster_path + api_key,
        overview: tirthMovie.overview,      
    }
    function addImage(imgUrlPocessed) {                           
        var img3 = new Image();                                    
        img3.src = imgUrlPocessed;                                 
        var imgElement3 = document.getElementById("img-container");
        imgElement3.appendChild(img3);                              
    }

    let movieFour = {
        title: fourthMovie.title,
        img: 'https://image.tmdb.org/t/p/original//' + fourthMovie.poster_path + api_key,
        overview: fourthMovie.overview,      
    }
    function addImage(imgUrlPocessed) {                           
        var img4 = new Image();                                    
        img4.src = imgUrlPocessed;                                 
        var imgElement4 = document.getElementById("img-container");
        imgElement4.appendChild(img4);                              
    }

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = movieOne.title;
    let overview = document.getElementById("overview");
    overview.innerHTML = movieOne.overview;

    let titulo2 = document.getElementById("titulo2");
    titulo2.innerHTML = movieTwo.title;
    let overview2 = document.getElementById("overview2");
    overview2.innerHTML = movieTwo.overview;

    let titulo3 = document.getElementById("titulo3");
    titulo3.innerHTML = movieThree.title;
    let overview3 = document.getElementById("overview3");
    overview3.innerHTML = movieThree.overview;

    let titulo4 = document.getElementById("titulo4");
    titulo4.innerHTML = movieFour.title;
    let overview4 = document.getElementById("overview4");
    overview4.innerHTML = movieFour.overview;
    
    console.log(json.results[0]);
    console.log(movieOne.img);
    console.log(json);
    
    addImage(movieOne.img); // este valor se meterá en la función de abajo ( como un parametro ) es decir imUrlProcessed = movie.img
    addImage(movieTwo.img);
    addImage(movieThree.img);
    addImage(movieFour.img);
}