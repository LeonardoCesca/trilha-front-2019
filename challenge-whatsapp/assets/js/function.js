const users = [{
        nome: 'Leonardo',
        foto: 'assets/img/users/leonardo.jpg',
        ultimaMensagem: 'oi!',
        horario: '12:10'
    },
    {
        nome: 'Thiago',
        foto: 'assets/img/users/thiago.jpeg',
        ultimaMensagem: 'oi tbm!',
        horario: '13:00'
    },
    {
        nome: 'Vic',
        foto: 'assets/img/users/vic.jpeg',
        ultimaMensagem: 'oie!',
        horario: '14:00'
    }
]

let html = ''

function listNames() {
    users.forEach(function (user) {
        html += `
        <div class="c-peoples__talk">
        <div class="c-img">
        <img src="${user.foto}" alt="" class="c-peoples__img">
        </div>
        <div class="c-talk-content">
        <div class="c-talk">${user.nome}</div>
        <span class="c-talk__subtitle">${user.ultimaMensagem}</span>
        </div>
        <span class="c-talk__hour">${user.horario}</span>
        </div>    
        <span class="c-talk__detail"></span>
        `
    })

    document.getElementById('users-list').innerHTML = html

    document.getElementById("users-list").innerHTML;
}

function searchNames() {
    document.getElementById("c-search-label").addEventListener("keyup", function (event) {
        const value = event.target.value;
        const filterNames = (users.filter(user => user.nome.toLowerCase().includes(value)));
        let html2 = '';

        filterNames.forEach(function (user) {
            html2 += `
            <div class="c-peoples__talk">
            <div class="c-img">
            <img src="${user.foto}" alt="" class="c-peoples__img">
            </div>
            <div class="c-talk-content">
            <div class="c-talk">${user.nome}</div>
            <span class="c-talk__subtitle">${user.ultimaMensagem}</span>
            </div>
            <span class="c-talk__hour">${user.horario}</span>
            </div>    
            <span class="c-talk__detail"></span>
            `
        })

        document.getElementById('users-list').innerHTML = html2;

    });
}

listNames();
searchNames();