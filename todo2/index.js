const form = document.querySelector("form");
const list = document.querySelector(".list");
// input.addEventListener("input", () => {
//     console.log("yes");
// })

function storage() {
    window.localStorage.myStorage = list.innerHTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value == ""){
        alert('écrit un truc')
    } else {
        list.innerHTML += `<li>${input.value}</li>`;
        input.value = "";
        storage();
    }
})

list.addEventListener("click", (e) => {
    if(!e.target.classList.contains("checked")){
        e.target.classList.add("checked");
    } else{
        e.target.remove();
    }
    storage();
    
})

window.addEventListener("load", () => {
    if(localStorage.myStorage){
        list.innerHTML = localStorage.myStorage;
    } else {
        list.innerHTML += `<li>Cliquez pour validé, puis supprimer</li>`;
    }
})

