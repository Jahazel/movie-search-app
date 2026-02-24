// Handles all communication with the OMDB API

export async function searchMovies(query) {
  const response = await fetch(
    // type=movie filters out TV series from results — intentional product decision
    `https://www.omdbapi.com/?apikey=e8c34c41&s=${query}&type=movie`,
  );
  const data = await response.json();

  // OMDB returns Response: "False" instead of an HTTP error when no results found
  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.Search;
}
