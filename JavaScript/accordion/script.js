const accord = document.getElementsByClassName("accordion");

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        // Use getComputedStyle to check the actual display value
        if (window.getComputedStyle(panel).display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}

