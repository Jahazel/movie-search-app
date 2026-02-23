export async function searchMovies(query) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=e8c34c41&s=${query}&type=movie`,
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.Search;
}
