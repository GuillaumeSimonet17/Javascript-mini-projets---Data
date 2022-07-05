const body = document.body;
const h3 = document.body.querySelector("h3")

const color = () => {
    
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    
    body.style.background = `rgb(${red}, ${green}, ${blue})`;
    body.style.transition = "1s";
    h3.textContent = `rgb(${red}, ${green}, ${blue})`;
}

setInterval(color, 2000)
