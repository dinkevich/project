'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    // Вопрос о кол-ве фильмов
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    // Вопросы о филмах и оценка
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    // Отображает киноуровень пользователя в зависимости от кол-ва просмотренных фильмов
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    // Вопросы о жанрах
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под №${i + 1}`);


            if (genre != null && genre != '') {
                personalMovieDB.genres[i] = genre;
                console.log('done');
            } else {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр №${index + 1} - это ${item}`);
        });

    },
    // Запрещает или разрешает отображение базы данных в зависиммости от приватности.
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    // Проверяет на приватность. Если true, то меняет на false и наборот.
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);