// Start Global Rules
const shoulders = document.getElementsByClassName("shoulders");
const biceps = document.getElementsByClassName("biceps");
const chests = document.getElementsByClassName("chests");
const six = document.getElementsByClassName("six");
// Inner - Start Body Parts Arrays
// let shouldersArray = [...shoulders]; // Error Lexically name
const shouldersArr = [...shoulders];
const bicepsArr = [...biceps];
const chestsArr = [...chests];
const sixArr = [...six];
// Inner - End Body Parts Arrays
// Inner - Start Redirects Array

// Inner - End Redirects Array
// End Global Rules
// Start Functions
function colorChanger(bodyParts) {
    for (let i = 0; i < bodyParts.length; i++) {
        bodyParts[i].onmouseover = function () {
            for (let j = 0; j < bodyParts.length; j++) {
                bodyParts[j].style.fill = "#F00";
            }
        }
        bodyParts[i].onmouseleave = function () {
            for (let j = 0; j < bodyParts.length; j++) {
                bodyParts[j].style.fill = "#FFF";
            }
        }
        bodyParts[i].onclick = function () {
            // location.href= `muscles/${this.className.baseVal}.html`;
            window.open(`muscles/${this.className.baseVal}.html`, '_blank');
        }
    }
}
// End Functions
colorChanger(shouldersArr);
colorChanger(bicepsArr);
colorChanger(chestsArr);
colorChanger(sixArr);