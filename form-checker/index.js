const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password, confirm;
const progressBar = document.getElementById("progress-bar");
cont form =s document.querySelector('form');

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if(!valid){
        container.classList.add('error');
        span.textContent = message;
    } else {
        container.classList.remove('error');
        span.textContent = message;
    }
}

const pseudoCheck = (value) => {
    if(value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay("pseudo", "veuillez rentrer un pseudo entre 3 et 20 caractères");
        pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("pseudo", "le pseudo ne doit pas contenir de caractères spéciaux");
        pseudo = null;
    } else {
        errorDisplay("pseudo", "", true);
        pseudo = value;
    }
}

const emailCheck = (value) => {
    if(!value.match(/^[\w_-]+@[\w]+\.[a-z]{2,4}$/i)){
        errorDisplay("email", "veuillez rentrer un mail valide");
        email = null;
    } else {
        errorDisplay("email", '', true);
        email = value;
    }
}

const passwordCheck = (value) => {
    progressBar.classList = "";
    if(!value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/)){
        errorDisplay("password", "il faut au moin une Maj, un caractère spécial, et un chiffre, d'une longueur entre 8 et 24");
        password = null;
        progressBar.classList.add("progressRed")
    } else if (value.length < 12) {
        progressBar.classList.add("progressOrange"); 
    } else {
        errorDisplay("password", "", true);
        progressBar.classList.add("progressGreen"); 
        password = value;
    }
    if(confirm) confirmCheck(confirm);
}

const confirmCheck = (value) => {
    if(value !== password) {
        errorDisplay('confirm', "les mots de passe ne correspondent pas");
        confirm = false; 
    } else {
        errorDisplay('confirm', "", true);
        confirm = true;
    }
}


inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch(e.target.id) {
            case "pseudo":
                pseudoCheck(e.target.value);
                break;
            case "email":
                emailCheck(e.target.value);
                break;
            case "password":
                passwordCheck(e.target.value);
                break;
            case "confirm":
                confirmCheck(e.target.value);
                break;
            default:
                nul;
        }
    })
});


form.addEventListener('submit', (e) => {
    if(pseudo && email && password && confirm) {
        const data = {
            pseudo,
            email,
            password,
        }

        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";

        pseudo = null;
        email = null;
        password = null;
        confirm = null;
        alert('inscription validée !')

    } else console.log('remplie tous les champs khey');
    e.preventDefault();    
})