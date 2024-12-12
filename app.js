var button = document.getElementById("revealButton");
var text = document.getElementById("revealText");

function showText(){
    text.classList.remove("hiddenText");
}

button.addEventListener("click", showText);
