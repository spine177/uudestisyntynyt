const containers = document.querySelectorAll('.container');

// Add click event listener to each container
containers.forEach(container => {
    container.addEventListener('click', function() {
    const link = container.getAttribute('data-link'); // Get the link from the data attribute
    window.location.href = link; // Redirect to the link
    });
});

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});