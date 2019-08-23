import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

// let movies = [
//   {
//     id: 0,
//     name: "John Wick 1",
//     score: 99
//   },
//   {
//     id: 1,
//     name: "Aladin",
//     score: 100
//   },
//   {
//     id: 2,
//     name: "UBD",
//     score: 3
//   },
//   {
//     id: 3,
//     name: "Parasite",
//     score: 44
//   },
//   {
//     id: 4,
//     name: "Godfather Part 1",
//     score: 79
//   }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
