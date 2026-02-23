export function renderMovies(movies) {
  const movieGrid = document.getElementById("movie-grid");

  let movieCards = movies
    .map(({ Poster, Title, Year, imdbID }) => {
      return `
      <div id="${imdbID}" class="movie-card">
        <img src="${Poster !== "N/A" ? Poster : "https://placehold.co/300x445?text=No+Poster"}" alt="movie poster" onerror="this.src='https://placehold.co/300x445?text=No+Poster'">
        <div class="info-container">
            <p class="title">${Title}</p>
            <p class="release-year">${Year}</p>
            <button class="fav-btn">Favorite</button>
        </div>  
      </div>`;
    })
    .join(" ");

  movieGrid.innerHTML = movieCards;
}

export function renderFavorites(favoriteMovies) {
  const myFavoritesGrid = document.getElementById("my-favorites-grid");

  let favoriteMovieCards = favoriteMovies
    .map(({ Poster, Title, Year, imdbID }) => {
      return `
      <div id="${imdbID}" class="favorite-movie-card">
        <img src="${Poster !== "N/A" ? Poster : "https://placehold.co/300x445?text=No+Poster"}" alt="movie poster" onerror="this.src='https://placehold.co/300x445?text=No+Poster'">
        <div class="info-container">
            <p class="title">${Title}</p>
            <p class="release-year">${Year}</p>
            <button class="delete-btn">Delete</button>
        </div>  
      </div>`;
    })
    .join(" ");

  myFavoritesGrid.innerHTML = favoriteMovieCards;
}
