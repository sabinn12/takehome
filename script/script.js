document.addEventListener("DOMContentLoaded", function () {
    const imageInteractions = document.querySelectorAll(".image-interaction");

    imageInteractions.forEach(function (interaction) {
        const image = interaction.querySelector("img");
        const overlays = interaction.querySelector(".overlays");
        const learnMore = interaction.querySelector(".learnmore");

        interaction.addEventListener("mouseover", function () {
            image.style.filter = "blur(10px)";
            learnMore.style.display = "flex";
            
        });

        interaction.addEventListener("mouseout", function () {
            image.style.filter = "none";
            overlays.style.transform = "translateY(0)";
            learnMore.style.display = "none";
        });
    });
});
