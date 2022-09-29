'use strict';

let numberOfFims;

function start() {
    numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFims == '' || numberOfFims == null || isNaN(numberOfFims))  {
        numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 //Создали базу данных personalMovieDB

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", ""); 

  if  (a != null && b != null && a != "" && b != "" && a != a.length < 50) {
      personalMovieDB.movies [a] = b;
      console.log("done");
      }
  else {
      console.log("error");
      i--;
       }
    }
}
    
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотренодавольно мало фильмов");
    }
  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
  }
  else if (personalMovieDB.count >= 30) {
      console.log("вы - киноман");
  }  else {
      console.log("Произошла ошибка"); 
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
       console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// Добавили новый вопрос о жанрах и сохранили его в баз
  
      
       
 


      


