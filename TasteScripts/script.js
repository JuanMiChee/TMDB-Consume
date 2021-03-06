

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
        img: 'https://image.tmdb.org/t/p/w92//' + fristMovie.poster_path + api_key,
        overview: fristMovie.overview,      
    }
    let movieTwo = {
        title: secoundMovie.title,
        img: 'https://image.tmdb.org/t/p/w92//' + secoundMovie.poster_path + api_key,
        overview: secoundMovie.overview,      
    }
    let movieThree = {
        title: tirthMovie.title,
        img: 'https://image.tmdb.org/t/p/w92//' + tirthMovie.poster_path + api_key,
        overview: tirthMovie.overview,      
    }
    let movieFour = {
        title: fourthMovie.title,
        img: 'https://image.tmdb.org/t/p/w92//' + fourthMovie.poster_path + api_key,
        overview: fourthMovie.overview,      
    }


    function addImage(imgUrlPocessed) {                            //=> esta caja esta vacia hasta que 
        var img = new Image();                                     //= <img></img>
        img.src = imgUrlPocessed;                                  // <img src = imgUrlProcessed (se pasa como parametro) >
        var imgElement = document.getElementById("img-container"); // traer la caja desde html
        imgElement.appendChild(img);                               //asignarle como hijo un <img> a la caja de html
    }    
    function addImagetwo(imgUrlPocessedTwo) {                           
        var img2 = new Image();                                    
        img2.src = imgUrlPocessedTwo;                                 
        var imgElement2 = document.getElementById("img-containertwo");
        imgElement2.appendChild(img2);                              
    }    
    function addImagethree(imgUrlPocessedThree) {                           
        var img3 = new Image();                                    
        img3.src = imgUrlPocessedThree;                                 
        var imgElement3 = document.getElementById("img-containerthree");
        imgElement3.appendChild(img3);                              
    }

   
    function addImagefour(imgUrlPocessedFourth) {                           
        var img4 = new Image();                                    
        img4.src = imgUrlPocessedFourth;                                 
        var imgElement4 = document.getElementById("img-containerfour");
        imgElement4.appendChild(img4);                              
    } 


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
    
    addImage(movieOne.img); // este valor se meter?? en la funci??n de abajo ( como un parametro ) es decir imUrlProcessed = movie.img
    addImagetwo(movieTwo.img);
    addImagethree(movieThree.img);
    addImagefour(movieFour.img);
}