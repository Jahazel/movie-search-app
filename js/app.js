import { searchMovies } from "./api.js";
import { saveFavorite, getFavorites, removeFavorite } from "./storage.js";
import { renderMovies, renderFavorites, renderError } from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const logo = document.getElementById("logo");
const searchInput = document.getElementById("search-input");
const searchViewContainer = document.getElementById("search-view-container");
const searchViewHeader = document.getElementById("search-view-header");
const myFavoritesHeader = document.getElementById("my-favorites-header");
const movieGrid = document.getElementById("movie-grid");
const myFavoritesBtn = document.getElementById("my-favorites-btn");
const myFavoritesContainer = document.getElementById("my-favorites-container");
const welcomeMessage = document.getElementById("welcome-message");
const myFavoritesGrid = document.getElementById("my-favorites-grid");
// const deleteBtn = document.getElementById("delete-btn");
let currentMovies = [];

searchBtn.addEventListener("click", async () => {
  const inputValue = searchInput.value;
  welcomeMessage.style.display = "none";

  if (!inputValue) {
    searchViewContainer.style.display = "block";
    searchViewHeader.style.display = "none";
    movieGrid.style.display = "none";
    myFavoritesContainer.style.display = "none";
    renderError("Search field cannot be empty.");

    return;
  }

  try {
    const movies = await searchMovies(inputValue);

    currentMovies = movies;
    renderMovies(movies);
    searchInput.value = "";
    searchViewContainer.style.display = "block";
    movieGrid.style.display = "grid";
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

    saveFavorite(movie);
  }
});

myFavoritesBtn.addEventListener("click", () => {
  let favoriteMovies = getFavorites();

  welcomeMessage.style.display = "none";
  searchViewContainer.style.display = "none";
  searchViewHeader.style.display = "none";
  myFavoritesContainer.style.display = "block";

  if (!favoriteMovies || favoriteMovies.length === 0) {
    myFavoritesHeader.style.display = "none";
  } else {
    myFavoritesHeader.style.display = "block";
  }

  renderFavorites(getFavorites());
});

logo.addEventListener("click", () => {
  welcomeMessage.style.display = "block";
  searchViewContainer.style.display = "none";
  myFavoritesContainer.style.display = "none";
});

myFavoritesGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let movieId = e.target.closest(".favorite-movie-card").id;
    let favoriteMovies = getFavorites();
    let movie = favoriteMovies.find(({ imdbID }) => imdbID === movieId);

    removeFavorite(movie);
    let updatedFavorites = getFavorites();
    renderFavorites(updatedFavorites);

    if (!updatedFavorites || updatedFavorites.length === 0) {
      myFavoritesHeader.style.display = "none";
    }
  }
});
