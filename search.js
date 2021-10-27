let movie = JSON.parse(localStorage.getItem('title'))
console.log(movie);

let parent = document.getElementById('parent');

async function movieDetails() {

    let res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=4089b9a4`);
    let data = await res.json();
    console.log(data);
    showMovies(data)


}

movieDetails()


async function searchmovies(movieName) {
    try {

        let res = await fetch(`http://www.omdbapi.com/?apikey=4089b9a4&s=${movieName}`);

        let data = await res.json();
        return data
    } catch (e) {
        console.log(e, 'e');
    }
}


let search = document.getElementById('search');

function searching(movies) {
search.innerHTML = null
    if (movies === undefined) {
        return false
    }

    movies.forEach(function (movie) {
        let div = document.createElement('div')

        let p = document.createElement('p')
        p.textContent = movie.Title
        // console.log(p.textContent);
        div.onclick = function () {
            localStorage.setItem('title', JSON.stringify(movie.Title))
            window.location.href = 'search.html'
        }

        div.append(p)
        search.append(div)
        // search.style.visibility = 'visible'

        console.log(movie);
    });
    search.style.display = 'block'
}




async function main() {
    let input = document.getElementById('inp').value

    let res = await searchmovies(input);

    let moviesData = res.Search


    searching(res.Search)
    // console.log(res);


}
function showMovies(movie) {
    parent.innerHTML = null
    
    

    let div = document.createElement('div');
    let title = document.createElement('h2');
    
    title.textContent = movie.Title

    let poster = document.createElement('div');
    
     let details = document.createElement('div');

    let img = document.createElement('img');
    img.src = movie.Poster;
    
    let year = document.createElement('p');
    year.textContent = 'Year: ' + movie.Year;

    let language = document.createElement('p');
    language.textContent =movie.Language;

    let genre = document.createElement('p');
    genre.textContent = 'Genre: ' + movie.Genre;
    

    let imdbR = document.createElement('p');
    imdbR.textContent = 'Imdb   Rating   ' + movie.imdbRating;
    let cast = document.createElement('p');
    cast.textContent = 'Cast: ' + movie.Actors;

    let runtime = document.createElement('p');
    runtime.textContent = 'Runtime: ' + movie.Runtime;

    let director = document.createElement('p');
    director.textContent = 'Director: ' + movie.Director;

    let plot = document.createElement('p');
    plot.textContent = 'Plot: ' + movie.Plot;

    let type = document.createElement('p');
    type.textContent = 'Type: ' + movie.Type;
    
    if (Number(movie.imdbRating) > 8.5) {
        let recommended = document.createElement('span');
        recommended.textContent = 'Recommended ';

        title.append(recommended)

    }
    console.log(movie);
    poster.append(img)
    details.append(year,type,language,genre,imdbR,runtime,director,plot)
    div.append(poster, details)
    parent.append(title,div)

   









}
