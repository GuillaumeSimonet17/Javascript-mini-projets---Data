const target = document.getElementById("target");

let array = ["développeur", "artiste", "cuisiner", "photographe", "voyageur", "niké dans ma tête"];

let wordIndex = 0;
let letterIndex = 0;

    const createLetter = () => {
        const letter = document.createElement('span');
        target.appendChild(letter);
        letter.textContent = array[wordIndex][letterIndex];
        setTimeout(() => {
            letter.remove()
        }, 2000);
        
    }

const loop = () => {
    setTimeout(() => {
        if(wordIndex >= array.length) {
            wordIndex = 0;
        }
        if(letterIndex < array[wordIndex].length){
            createLetter()
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
    
            }, 2000);
        }
    }, 60);

}
loop();
