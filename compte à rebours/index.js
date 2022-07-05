const form = document.querySelector("form");
const div = document.getElementById("countdownDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const drapeau = document.getElementById("drapeau");
const clear = document.getElementById("clear");

start.addEventListener('click', (e) => {
    e.preventDefault();
    
    let choix = choice.value;
    let totSecond = choix * 60;
    let minutes = Math.floor(totSecond / 60);
    let secondes = totSecond % 60;

    drapeau.addEventListener('click', (e) => {
        e.preventDefault();
        timeDisplay.innerHTML += `<li>${minutes} : ${secondes+1}</li>`;
    })
    
    const myInt = setInterval(() => {
        choice.value = "";
        if (secondes == 0 && minutes == 0) {
            div.textContent = "C'est terminé !";
            return;
        } else if (secondes == 0){
            div.textContent = minutes + " : " + secondes;
            minutes--;
            secondes = 59;
        } else {
            if (secondes < 10) {
                div.textContent = minutes + " : " + "0" + secondes;
                secondes--;
            } else {
                div.textContent = minutes + " : " + secondes;
                secondes--;
            }
        }
        
    }, 100);

    clear.addEventListener('click', (e) => {
        e.preventDefault();
        timeDisplay.innerHTML = "";
    })
    
    stop.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(myInt);
        minutes = 0;
        secondes = 0;
        div.textContent = minutes + " : " + secondes;
    })


})


