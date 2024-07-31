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