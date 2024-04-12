const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9.0,
  },
  {
    id: 4,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: 8.9,
  },
];

const likedMovies = [];

window.addEventListener("load", () => {
  const movieList = document.querySelector(".cards");

  const likedMovieElement = document.querySelector(".likedMovies");

  movies.forEach((movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("card");
    movieItem.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      <p>Duration: ${movie.duration}</p>
      <p>Genre: ${movie.genre.join(", ")}</p>
      <p>Rate: ${movie.rate}</p>
    `;

    const likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    likeButton.addEventListener("click", () => {
      likedMovies.push(movie.id);
      likeButton.disabled = true;

      console.log(likedMovies);

      likedMovieElement.innerHTML = "";

      likedMovies.forEach((likedMovieId) => {
        const movie = movies.find((movie) => movie.id === likedMovieId);

        const p = document.createElement("p");

        p.textContent = movie.title;

        likedMovieElement.appendChild(p);
      });
    });

    movieItem.appendChild(likeButton);

    movieList.appendChild(movieItem);
  });
});
