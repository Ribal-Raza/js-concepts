/* 'filter' methode is a higher order array or functional loop. Basic idea behind filter is that it 
returns the array of values which statisfy certain condition, and ruturned values can be held in a varibale.*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = array.filter((item) => item > 4); // implicit return
// filter values which are greater than 4, and store them in variable
console.log(result); // filtered values will be stored in result as an array

// filter on array of objects
const films = [
  { title: "Film 1", genere: "Sci-Fi", releaseYear: "2002", rating: "4.0" },
  {
    title: "Film 2",
    genere: "Romance",
    releaseYear: "2001",
    rating: "4.2",
  },
  { title: "Film 3", genere: "Mystry", releaseYear: "2007", rating: "4.5" },
  { title: "Film 4", genere: "Sci-Fi", releaseYear: "2002", rating: "4.2" },
  {
    title: "Film 5",
    genere: "History",
    releaseYear: "2012",
    rating: "4.8",
  },
  { title: "Film 6", genere: "Comedy", releaseYear: "2010", rating: "3.7" },
  { title: "Film 7", genere: "Comedy", releaseYear: "1998", rating: "4.2" },
  {
    title: "Film 8",
    genere: "History",
    releaseYear: "2011",
    rating: "4.8",
  },
];

// filtering 'sci-fi' films
const myFilms = films.filter((film) => film.genere === "Sci-Fi");
console.log(myFilms);

// using logical operators in filter
const someFilms = films.filter((film) => {
  return film.genere === "Sci-Fi" || film.genere === "Comedy";
});
console.log(someFilms);
