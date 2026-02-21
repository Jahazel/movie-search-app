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
