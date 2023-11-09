const movies = [
    { name: "A noiva cadaver", image: "https://br.web.img2.acsta.net/medias/nmedia/18/91/33/59/20140728.jpg", tickets: 100, category: "Romance" },
    { name: "Como eu era antes de voce", image: "https://play-lh.googleusercontent.com/JQKfopRtWqyD1cUXjx4V00qLnKecgKlSTS6sL0YX1T0H4bzyOK8SxdQIUbZ6NTsKfkBm", tickets: 100, category: "Romance" },
    { name: "Gente Grande", image: "https://ds0.cds.nowonline.com.br/assets/p7937506_v_v8_ao.jpg", tickets: 100, category: "Comédia" },
    { name: "Gente Grande 2", image: "https://br.web.img3.acsta.net/pictures/210/049/21004903_20130510170049514.jpg", tickets: 100, category: "Comédia" },
    { name: "Quando as luzes se apagam", image: "https://cinepop.com.br/wp-content/uploads/2016/06/lights_out_ver2_xlg-1.jpg", tickets: 100, category: "Terror" },
    { name: "Nós", image: "https://cinepop.com.br/wp-content/uploads/2019/01/nos_3.jpg", tickets: 100, category: "Terror" },
    { name: "IT a coisa", image: "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg", tickets: 100, category: "Terror" },
    { name: "IT a coisa 2", image: "https://br.web.img2.acsta.net/pictures/19/08/14/16/00/5320567.jpg", tickets: 100, category: "Terror" },
    { name: "Corra", image: "https://static.wikia.nocookie.net/dublagem/images/f/f6/Corra_%21.jpeg/revision/latest?cb=20230803193933&path-prefix=pt-br", tickets: 100, category: "Terror" },
    { name: "A Morte do Demônio: A Ascensão", image: "https://musicart.xboxlive.com/7/be7d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", tickets: 100, category: "Terror" },
    { name: "A Lenda de Candyman", image: "https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2023/07/candyman.jpg?fit=1350%2C2000&ssl=1", tickets: 100, category: "Terror" },
    { name: "Continência ao Amor", image: " https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg", tickets: 100, category: "Romance" },
    { name: "A Morte Te Dá Parabéns", image: "https://br.web.img3.acsta.net/pictures/17/07/13/21/40/079851.jpg", tickets: 100, category: "Terror" },
    { name: "A Morte Te Dá Parabéns 2", image: "https://play-lh.googleusercontent.com/pIt9FgTm5fc75k9L6fwvOZ9Quoc9_OMPstgDV2KZrnRqFieufn7-bJcaPMB5tj-UqPk", tickets: 100, category: "Terror" },
  { name: "A Culpa É das Estrelas", image: "https://br.web.img3.acsta.net/pictures/14/01/23/14/12/101764.jpg", tickets: 100, category: "Romance" },
 { name: "As Branquelas", image: "https://cinepop.com.br/wp-content/uploads/2021/07/as-branquelas-cartaz.jpg", tickets: 100, category: "Comédia" },
 { name: "O pequenino", image: "https://play-lh.googleusercontent.com/OUCFuj69yMJoPq2T3gyN0zOv4XoR_EosPahR-NxYlQZuLgMPG6EnZ0msuUSyVVfdRGuBnA=w240-h480-rw", tickets: 100, category: "Comédia" },
  { name: "Jóias Brutas", image: "https://static.wikia.nocookie.net/dublagempedia/images/c/ce/Joias.jpg/revision/latest?cb=20201012001106&path-prefix=pt-br", tickets: 100, category: "Drama" },
  { name: "A Cinco Passos de Você", image: "https://br.web.img3.acsta.net/pictures/19/02/19/15/31/1517190.jpg", tickets: 100, category: "Drama" },
  { name: "Ilha do Medo", image: "https://musicart.xboxlive.com/7/b4541100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", tickets: 100, category: "Drama" },
]

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
