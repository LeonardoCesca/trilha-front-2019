const accordion = document.getElementsByClassName("c-accordion__btn");
let cont;

for (cont = 0; cont < accordion.length; cont++) {
    accordion[cont].addEventListener("click", function () {
        this.classList.toggle("active");

        var box = this.nextElementSibling;
        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
        }
    });
}