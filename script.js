document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.getElementById("navigation");

    // Change navigation style on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navigation.style.backgroundColor = "#ff4500";
            navigation.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        } else {
            navigation.style.backgroundColor = "#32cd32";
            navigation.style.boxShadow = "none";
        }
    });
});
