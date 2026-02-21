import { searchMovies } from "./api.js";
import { renderMovies } from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchViewH2El = document.getElementById("search-view-h2-el");
const favoritesH2El = document.getElementById("favorites-h2-el");

searchBtn.addEventListener("click", async () => {
  let inputValue = searchInput.value;
  let moviesArray = await searchMovies(inputValue);

  renderMovies(moviesArray);
  searchInput.value = "";
  searchViewH2El.style.display = "block";
});
