// Handles all localStorage reads and writes for favorite movies

export function saveFavorite(movie) {
  const stored = localStorage.getItem("favorites");
  // If nothing is stored yet, start with an empty array
  const favoritesStorage = stored ? JSON.parse(stored) : [];

  // Prevent duplicates by checking imdbID before saving
  if (!favoritesStorage.some(({ imdbID }) => imdbID === movie.imdbID)) {
    favoritesStorage.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favoritesStorage));
  }
}

export function getFavorites() {
  // Returns null if nothing saved yet — callers should handle this case
  return JSON.parse(localStorage.getItem("favorites"));
}

export function removeFavorite(movie) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  // Filter out the removed movie and overwrite localStorage
  let filteredFavorites = favorites.filter(
    ({ imdbID }) => imdbID !== movie.imdbID,
  );

  localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
}
