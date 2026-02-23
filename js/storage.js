export function SaveFavorite(movie) {
  const stored = localStorage.getItem("favorites");
  const favoritesStorage = stored ? JSON.parse(stored) : [];

  if (!favoritesStorage.some(({ imdbID }) => imdbID === movie.imdbID)) {
    favoritesStorage.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favoritesStorage));
  }
}

export function getFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites"));

  return favorites;
}
