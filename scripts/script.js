document.addEventListener("scroll", function() {
    const navContainer = document.querySelector(".nav-container");
    if (window.scrollY > 0) {
        navContainer.classList.add("scrolled");
    } else {
        navContainer.classList.remove("scrolled");
    }
});