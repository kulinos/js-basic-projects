const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let int = setInterval(loadPercentage, 30);
let count = 0;

function loadPercentage() {
    count++;

    if (count > 99) {
        clearInterval(int);
    }
    loadingText.innerText = `${count}%`;
    loadingText.style.opacity = scale(count, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

    console.log(scale(count, 0, 100, 1, 0));

}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


/* https://stackoverflow.com/questions/10756313/
javascript-jquery-map-a-range-of-numbers-to-another-
range-of-numbers?answertab=votes#tab-top */