// Les bouttons et checkbox sont déjà connu du JS donc pas besoin de les déclarer.


const dataLower = "azertyuiopqsdfghjklmwxcvbn";
const dataUpper = dataLower.toUpperCase();
const dataNum = "0123456789";
const dataSymb = "!$ù^¨`+=:-<_>;,§('?\"'()";
const rangeValue = document.getElementById("password-length")
const mdp = document.getElementById("password-output")

function generatepassword() {
    let data = [];
    let password = "";

    if (uppercase.checked) data.push(...dataUpper)
    if (lowercase.checked) data.push(...dataLower)
    if (number.checked) data.push(...dataNum)
    if (symbols.checked) data.push(...dataSymb)
    if (data.length === 0) {
        alert("selectionne des critères couzin");
        return;
    }

    for(i=0; i<rangeValue.value; i++) {
        password += data[Math.floor(Math.random()*data.length)];
    }
    
    mdp.value = password;
    mdp.select();
    document.execCommand("copy");
    
    generateButton.textContent = "C'est copié !";
    generateButton.style.background = "white";
    generateButton.style.color = "green";
    
    setTimeout(() => {
        generateButton.textContent = "Générer le password";
        generateButton.style.background = "black";
        generateButton.style.color = "white";

    }, 3000)


}


generateButton.addEventListener('click', generatepassword) 