const movies = [
    { name: "Filme 1", image: "filme1.jpg", tickets: 100, category: "Terror" },
    // Adicione informações para os outros 19 filmes
];

const itemsPerPage = 10;
let currentPage = 1;

function renderMovies(page, filterName, filterCategory) {
    const moviesContainer = document.getElementById("movies");
    moviesContainer.innerHTML = "";

    const filteredMovies = movies.filter(movie => 
        (filterName === "" || movie.name.toLowerCase().includes(filterName.toLowerCase())) &&
        (filterCategory === "" || movie.category === filterCategory)
    );

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const moviesToDisplay = filteredMovies.slice(startIndex, endIndex);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <h2>${movie.name}</h2>
            <img src="${movie.image}" alt="${movie.name}">
            <p>Tickets disponíveis: ${movie.tickets}</p>
            <p>Categoria: ${movie.category}</p>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

function renderPagination() {
    const totalPages = Math.ceil(movies.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.addEventListener("click", () => {
            currentPage = i;
            renderMovies(currentPage, searchInput.value, categorySelect.value);
        });
        pagination.appendChild(pageButton);
    }
}

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

searchInput.addEventListener("input", () => {
    renderMovies(1, searchInput.value, categorySelect.value);
    renderPagination();
});

categorySelect.addEventListener("change", () => {
    renderMovies(1, searchInput.value, categorySelect.value);
    renderPagination();
});

renderMovies(currentPage, "", "");
renderPagination();
