function getARandomAlphabet(){
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const alphabets = alphabetString.split("");

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


function hideElementById(elementID){
    const element = document.getElementById(elementID);
    element.classList.add("hidden");
}
function showElementById(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove("hidden");
}
function setBgColorById(element){   
    const theWord = document.getElementById(element);
    theWord.classList.add("bg-amber-400");
}
function removeBgColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove("bg-amber-400")
}

function getValueById(element){
    const getTheElement = document.getElementById(element);
    const elementValue = getTheElement.innerText;
    const value = parseInt(elementValue);
    return value;
}
function setTheTextElementValueById(element, value){
    const theElement = document.getElementById(element);
    theElement.innerText = value;
}