function continueGame(){
    const alphabet = getARandomAlphabet();
    const word = document.getElementById('word');
    word.innerText = alphabet;

    const alphabetLow = alphabet.toLocaleLowerCase(); 

    setBgColorById(alphabetLow);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}