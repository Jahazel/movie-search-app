// Handles all DOM manipulation and rendering

export function renderMovies(movies) {
  const movieGrid = document.getElementById("movie-grid");
  const searchViewContainer = document.getElementById("search-view-container");
  const errorMessageElement = document.getElementById("error-message-element");

  // Clear any existing error message before rendering new results
  if (searchViewContainer.contains(errorMessageElement)) {
    searchViewContainer.removeChild(errorMessageElement);
  }

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

  // Show empty state if no favorites saved
  if (!favoriteMovies || favoriteMovies.length === 0) {
    myFavoritesGrid.innerHTML = `<p id="empty-favorites-message">No favorites saved yet. Start saving movies! 🎬</p>`;
    return;
  }

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

export function renderError(errorMessage) {
  const searchViewContainer = document.getElementById("search-view-container");
  const errorMessageElement = document.createElement("h1");
  errorMessageElement.setAttribute("id", "error-message-element");
  // Remove any existing error before showing a new one
  const existing = document.getElementById("error-message-element");

  if (existing) {
    searchViewContainer.removeChild(existing);
  }

  errorMessageElement.textContent = errorMessage;
  searchViewContainer.appendChild(errorMessageElement);
}
