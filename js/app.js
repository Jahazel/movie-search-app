import { searchMovies } from "./api.js";
import { renderMovies } from "./ui.js";
import { SaveFavorite } from "./storage.js";
import { getFavorites } from "./storage.js";
import { renderFavorites } from "./ui.js";
import { renderError } from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchViewContainer = document.getElementById("search-view-container");
const searchViewHeader = document.getElementById("search-view-header");
const myFavoritesHeader = document.getElementById("my-favorites-header");
const movieGrid = document.getElementById("movie-grid");
const myFavoritesBtn = document.getElementById("my-favorites-btn");
const myFavoritesContainer = document.getElementById("my-favorites-container");
let currentMovies = [];

searchBtn.addEventListener("click", async () => {
  try {
    const inputValue = searchInput.value;
    const movies = await searchMovies(inputValue);

    currentMovies = movies;
    renderMovies(movies);
    searchInput.value = "";
    searchViewContainer.style.display = "block";
    searchViewHeader.style.display = "block";
    myFavoritesContainer.style.display = "none";
  } catch (error) {
    searchViewHeader.style.display = "none";
    movieGrid.innerHTML = "";
    renderError(error.message);
  }
});

movieGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("fav-btn")) {
    let movieId = e.target.closest(".movie-card").id;
    let movie = currentMovies.find(({ imdbID }) => imdbID === movieId);

    SaveFavorite(movie);
  }
});

myFavoritesBtn.addEventListener("click", () => {
  searchViewContainer.style.display = "none";
  myFavoritesHeader.style.display = "block";

  renderFavorites(getFavorites());
});

// localStorage.clear();
