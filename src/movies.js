// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");


function getAllDirectors(moviez) {
  let allDirectors = moviez.map((movie) => {
    return movie.director
  })
  return allDirectors
}

// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviez) {
  let moviesSpielberg = moviez.filter((movie) => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      return movie
    }
  })
  return moviesSpielberg.length
}

// UNCOMPLETE ALTERNATIVE METHOD
/*
function howManyMovies(moviez) {
  let movieCounter = 0
  let moviesSpielberg = moviez.forEach((movie) => {
    if (movie.director === "Steven Spielberg" && ???) {
      movieCounter++
    }
  })
  return movieCounter
}
*/


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviez) {

  if (moviez.length === 0) return 0;

  let sum = 0;

  moviez.forEach(movie => {
    if (movie.score) {
      sum += Number(movie.score)
    }
  })

  return Math.round(sum / moviez.length * 100) / 100

  /*
  let totalScores = 0
  moviez.forEach((movie) => {
    console.log(movie.score);
    if (movie.score) {
      totalScores += movie.score
    }
   // return totalScores
  })
  return Math.round(totalScores / moviez.length * 100) / 100
  */
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
