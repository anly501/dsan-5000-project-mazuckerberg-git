document.addEventListener("DOMContentLoaded", function () {
    const showAButton = document.getElementById("showA");
    const showBButton = document.getElementById("showB");
    const visualizationA = document.getElementById("visualizationA");
    const visualizationB = document.getElementById("visualizationB");

    showAButton.addEventListener("click", function () {
        visualizationA.style.display = "block";
        visualizationB.style.display = "none";
    });

    showBButton.addEventListener("click", function () {
        visualizationA.style.display = "none";
        visualizationB.style.display = "block";
    });
});