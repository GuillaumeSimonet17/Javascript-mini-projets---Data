const form = document.querySelector('form');

function storage(){
    window.localStorage.todoList = list.innerHTML;
}

function getTodo() {
    if(window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
    }
}

getTodo();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
    storage();
})

list.addEventListener('click', (e) => {

    if(e.target.classList.contains("checked")){
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
    storage();

})