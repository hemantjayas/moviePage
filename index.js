// console.log('hemant');

let btn = document.getElementById('btn')
btn.addEventListener('click', moviesAdda)


let parent = document.getElementById('parent')
async function moviesAdda() {

    let inp = document.getElementById('inp').value

    if (inp.length === 0) return


    let info = await fetch(`http://www.omdbapi.com/?apikey=4089b9a4&t=${inp}`);
    let data = await info.json();
    console.log(data);
    if (data.Response === 'False') {
        document.write(`<h1>could not found your movie</h1>`)
        return
    }

    showMovies(data)

}





function showMovies(movie) {
    parent.innerHTML = null

    let div = document.createElement('div');


    div.setAttribute('id', 'main')


    let poster = document.createElement('div');
    poster.setAttribute('id', 'poster')
    let details = document.createElement('div');
    details.setAttribute('id', 'detail')

    let img = document.createElement('img');
    img.src = movie.Poster;
    img.setAttribute('id', 'img')


    let title = document.createElement('p');
    title.textContent = 'Title: ' + movie.Title;


    let year = document.createElement('p');
    year.textContent = 'Year: ' + movie.Year;

    // let language = document.createElement('p');
    // language.textContent =movie.Language;

    let genre = document.createElement('p');
    genre.textContent = 'Genre: ' + movie.Genre;

    let imdbR = document.createElement('p');
    imdbR.textContent ='IMDB Rating '+ movie.imdbRating;
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

    poster.append(img)
    details.append(title, runtime, type, year, imdbR, genre, cast, director, plot)
    div.append(poster, details)
    parent.append(div)


}