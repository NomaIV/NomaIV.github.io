document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('navbar-toggle');
    var navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});