function handleKeyPress(event){
    const keyPressed = event.key;
    const showAlphabet = document.getElementById('word').innerText;
    const showAlphabetLow = showAlphabet.toLocaleLowerCase();
    if(keyPressed === showAlphabetLow){
        const score = getValueById("current-score");
        const newScore = score + 1;
        setTheTextElementValueById("current-score", newScore);

        removeBgColor(showAlphabetLow);
        continueGame();
    }
    else{
        const life = getValueById("current-life");
        const newLife = life - 1;
        setTheTextElementValueById("current-life", newLife);

        if(life <= 0){
            gameEnds();
        }
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
    hideElementById("score");
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
    setTheTextElementValueById("current-score", 0);
    setTheTextElementValueById('current-life', 5);
}
function gameEnds(){
    showElementById("score");
    hideElementById("play-ground")
}