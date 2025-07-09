// Lógica para menú hamburguesa
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('active');
});

// Lógica para búsqueda
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.toLowerCase();
        if (query) {
            const found = document.body.innerText.toLowerCase().includes(query);
            if (found) {
                alert('Texto encontrado en la página.');
            } else {
                alert('No se encontró el texto.');
            }
        }
    }
});