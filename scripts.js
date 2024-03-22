const totalMovies = document.querySelector("#total-movies");

const moviesCount = Math.floor(Math.random() * 1000) + 1;

let count = 0;

let timerId = setInterval(() => {
  totalMovies.innerHTML = count;
  if (count >= moviesCount) {
    clearInterval(timerId);
  }

  count += Math.floor(Math.random() * 100) + 1;
}, 30);
