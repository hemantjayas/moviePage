

let parent = document.getElementById('parent')
async function movieData() {
    let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c69ba7ccef2dce029abdb736f29f9ecd&language=en-US&page=1`);

    let data = await res.json();
    // console.log(data.results);
    appendMovies(data.results)
}




function appendMovies(movies) {
    if (movies === undefined) {
        return false
    }
    console.log(movies);
    movies.forEach(function (movie) {

        let div = document.createElement('div')
        div.setAttribute('class', 'movie')
        div.onclick = function () {
            localStorage.setItem('title', JSON.stringify(movie.title))
            window.location.href = 'search.html'
        }
        let img = document.createElement('img')
        img.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path



        div.append(img)
        parent.append(div)
        // console.log(movie.title);
    });
}


// search movies //  




async function searchmovies(movieName) {
    try {

        let res = await fetch(`http://www.omdbapi.com/?apikey=4089b9a4&s=${movieName}`);

        let data = await res.json();
        return data
    } catch (e) {
        console.log(e, 'e');
    }
}

// searchmovies('kick')




//  append movies / /   
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
   
    

    
}


async function main() {
    let input = document.getElementById('inp').value

    let res = await searchmovies(input);

    


    searching(res.Search)

    if(input.length>3){
        search.style.display = 'block'

    }
    else{
        search.style.display = 'none'

    }
    

}


















