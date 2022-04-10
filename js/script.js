const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let i = 0;

while (i < 2) {

    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько вы оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }

    i++;


}

if (personalMovieDB.count <= 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);