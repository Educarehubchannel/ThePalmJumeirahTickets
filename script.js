// Example of toggling content on button click (if needed in the future)
document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("aboutBtn");
    const contactBtn = document.getElementById("contactBtn");

    aboutBtn.addEventListener("click", function () {
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "none";
    });

    contactBtn.addEventListener("click", function () {
        document.getElementById("contact").style.display = "block";
        document.getElementById("about").style.display = "none";
    });
});
