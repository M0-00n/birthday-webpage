document.addEventListener("DOMContentLoaded", function() {
    const flames = document.querySelectorAll(".flame, .flame2, .flame3");
    const birthdayText = document.querySelector(".text");

    document.querySelector(".candles").addEventListener("click", function() {
        flames.forEach(flame => {
            flame.style.transition = "opacity 0.3s";
            flame.style.opacity = 0;
        });

        birthdayText.style.transition = "opacity 0.3s, top 0.3s";
        birthdayText.style.opacity = 1;
        birthdayText.style.top = "-90px";
    });
});
