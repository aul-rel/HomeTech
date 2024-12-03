const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Save the user's preference in localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = '☀️'; // Change icon to sun
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = '🌙'; // Change icon to moon
        }
    });
    