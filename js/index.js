const buttonElem = document.querySelector('#get-button');

async function getTodos() {
    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();

    console.log(data);
}

buttonElem.addEventListener('click', () => {
    getTodos();
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../service-worker.js')
        .then(() => { console.log('Registered service worker') })
        .catch(() => { console.log('Could not register service worker') });
    }
}

