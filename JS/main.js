//select Element
const btnRight = document.querySelector(".righr-arrow");
const btnLeft = document.querySelector(".left-arrow");
const slider = document.querySelector(".container-slider");

//Starting Condition
const imagesCatagoriOne = [0, 1, 2, 3, 4];
const imagesCatagoriTwo = [4, 3, 2, 1, 0];
const images = `images/contBcg-${imagesCatagoriOne[0]}.jpeg`;
slider.style.backgroundImage = `url(${images})`;
let count = 0;
let countSecend = 5;

//change  picture in slider

btnRight.addEventListener("click", function() {
    if (count < imagesCatagoriOne.length - 1) {
        count = count + 1;
        const images = `images/contBcg-${imagesCatagoriOne[count]}.jpeg`;
        slider.style.backgroundImage = `url(${images})`;
    } else {
        count = -1;
        count = count + 1;
        const images = `images/contBcg-${imagesCatagoriOne[count]}.jpeg`;
        slider.style.backgroundImage = `url(${images})`;
    }
});

btnLeft.addEventListener("click", function() {
    if (countSecend >= 1) {
        countSecend = countSecend - 1;
        const images = `images/contBcg-${imagesCatagoriOne[countSecend]}.jpeg`;
        slider.style.backgroundImage = `url(${images})`;
    } else {
        countSecend = 5;
        countSecend = countSecend - 1;
        const images = `images/contBcg-${imagesCatagoriOne[countSecend]}.jpeg`;
        console.log(images);
        slider.style.backgroundImage = `url(${images})`;
    }
});