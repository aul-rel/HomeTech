const logo = document.getElementById('logo');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Verifica se o modo dark está ativo no <body>
    const isDarkMode = document.body.classList.toggle('dark-mode');

    // Altera a logo com base no estado do modo dark
    if (isDarkMode) {
        logo.src = '../img/logo.png'; // Logo branca
    } else {
        logo.src = '../img/logo_white_transparent.png'; // Logo preta
    }
});