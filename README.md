# Movie Search App

## Description

A vanilla JavaScript app that lets users search for movies using the OMDB API,
view results, and save favorites that persist across sessions using localStorage.

## Live Demo

https://jahazel.github.io/movie-search-app/

## Features

- Search movies using the OMDB API
- Save and remove favorite movies
- Favorites persist using localStorage
- Error handling for failed searches and empty inputs
- Responsive movie grid layout
- Toggle between search and favorites view

## Technologies Used

- Vanilla JavaScript (ES Modules)
- HTML5 & CSS3
- OMDB API
- localStorage

## What I Learned

This was my first time working with a real API and async JavaScript.
The biggest thing that clicked was understanding how async/await works,
why you need to wait for data before using it, and how try/catch handles
errors from fetch calls. I also learned how to structure a project using
ES modules, keeping API logic, DOM manipulation, and localStorage in
separate files so each piece has one clear job. Building this from scratch
taught me how to think about data flow before writing code, which is
something I didn't do in my previous projects.
