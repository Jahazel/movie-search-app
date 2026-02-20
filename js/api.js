export async function searchMovies(query) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=e8c34c41&s=${query}&type=movie`,
  );
  const data = await response.json();

  return data.Search;
}

async function testSearch() {
  const result = await searchMovies("ice age");
  console.log(result);
}
testSearch();