function handleKeyPress(event){
    const keyPressed = event.key;
    const showAlphabet = document.getElementById('word').innerText;
    const showAlphabetLow = showAlphabet.toLocaleLowerCase();
    if(keyPressed === showAlphabetLow){
        removeBgColor(showAlphabetLow);
        continueGame();
    }
    else{
        console.log('you lose a life');
    }
}

document.addEventListener('keyup', handleKeyPress);

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