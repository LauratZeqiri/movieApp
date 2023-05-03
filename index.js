const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280/";


const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("search")


getMovies(APIURL);

async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();


    showMovies(respData.results)
//     respData.results.forEach((movie) =>{
//         const{poster_path,title,vote_average} = movie;
//         const movieEl = document.createElement("div");
//         movieEl.classList.add('movie')
//       movieEl.innerHTML = `
//       <main>
//     

}

function showMovies(movies){
    main.innerHTML=''
movies.forEach((movie) =>{
        const{poster_path,title,vote_average,overview} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie')
      movieEl.innerHTML = `
    
        <img src= "${IMGPATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getclassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    
    </div
    </div> `

console.log(overview)
        main.appendChild(movieEl)
    })
}
// //ktu e thirrum funksionin edhe ja bojm pass si parameter
    //vlerat e vote_average qe i morum prej api
//ktu kur ti vje funksionit vote_average si parameter bohen krahasimet me if
function getclassByRate(vote){
    if(vote >= 8){
     return "green"
    }else if(vote >=5){
        return "orange"
      
    }else{
        return "red"
    }
 
}


//Kodit i është shtuar një funksion "getclassByRate"
//që merr një vlerë votimi si argument dhe kthen një klasë CSS në varësi të votës së dhënë. Nëse vota është më e madhe se 8, kthen klasën "green"; nëse është midis 5 dhe 8, kthen klasën "orange"; dhe nëse është më e vogël se 5, kthen klasën "red".


form.addEventListener('submit', (e) =>{
    e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm){
    getMovies(SEARCHAPI + searchTerm)
   search.value= '';
  }
})