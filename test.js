let myElement = document.querySelector(".header");
myElement.style.backgroundColor = "#00008B";

var size = document.getElementById("title");
size.style.fontSize = "30px";

let addClass = document.querySelector("h3");
addClass.setAttribute('style', 'color:blue');

const toyArray =["rope", "bone", "yarn", "ball"]
const toyDisplay = documentt.querySelector("#toys")
toyDisplay.innerHTML= "Here are some of their favorite toys: " + toyArray.join(" , ")

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
    if (!event.target.closest('.modal')) {
        document.body.classList.remove('modal-is-open')
    }
})

$("#addClass").html("I've been replaced!");