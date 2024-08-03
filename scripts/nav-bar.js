document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.nav-bar');
    const hamburger = document.querySelector(".nav-x");
    const navMenu = document.querySelector(".nav-links");
    const navButton = document.querySelector(".nav-button");

    function onScroll() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
            navMenu.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navMenu.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll);

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            navButton.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-link").forEach(n => 
        n.addEventListener("click", () => {
            navMenu.classList.remove("active");
        })
    );
});
