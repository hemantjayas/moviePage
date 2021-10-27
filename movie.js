console.log('movie');

// my api key c69ba7ccef2dce029abdb736f29f9ecd
console.log(fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c69ba7ccef2dce029abdb736f29f9ecd&language=en-US&page=1`));

async function movieData() {
    let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c69ba7ccef2dce029abdb736f29f9ecd&language=en-US&page=1`);

    let data = await res.json();
    console.log(data.results);
    appendMovies(data.results)
}


let parent = document.getElementById('parent')
function appendMovies(movies) {
    if (movies === undefined) {
        return false
    }

    movies.forEach(function (movie) {

        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = "https://image.tmdb.org/t/p/w500"+ movie.poster_path

        div.append(img) 
        parent.append(div)
        console.log(movie.title);
    });
}

        


