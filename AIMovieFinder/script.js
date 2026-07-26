const buttons = document.querySelectorAll("button")

const moviecontainer = document.getElementById("movie-container")

buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const mood = btn.dataset.mood
        fetchmovie(mood)
    });
});

async function fetchmovie(moviename) {
    moviecontainer.innerHTML = "<h2>Loading...</h2>"
    let url = `https://www.omdbapi.com/?s=${moviename}&apikey=43e48673`;

    const response = await fetch(url)
    const data = await response.json

    displaymovie(data.Search)

    
}

function displaymovie(movies){

    moviecontainer.innerHTML = "";

    movies.forEach(movie =>{
        const card = document.createElement("div")

        card.classList.add("movie-card")

        card.innerHTML = `

        <img src="${movie.Poster}">

        <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Plot}</p>
        </div>
        
        `

        moviecontainer.appendChild(card)
    })

}
