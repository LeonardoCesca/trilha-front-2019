const users = [{
        nome: 'Leonardo',
        foto: 'assets/img/perfil.jpg',
        ultimaMensagem: 'oi!'
    },
    {
        nome: 'Thiago',
        foto: 'assets/img/perfil.jpg',
        ultimaMensagem: 'oi tbm!'
    },
    {
        nome: 'Vic',
        foto: 'assets/img/perfil.jpg',
        ultimaMensagem: 'oie!'
    }
]

let html = ''

users.forEach(function (user) {
    html += `
        <div class="c-peoples__talk">
            <div class="c-i">
                <img src="${user.foto}" alt="" class="c-peoples__img">
            </div>
            <div class="c-talk-content">
            <div class="c-talk">${user.nome}</div>
            <span class="c-talk__subtitle">${user.ultimaMensagem}</span>
            </div>
        </div>    
    `
})

document.getElementById('users-list').innerHTML = html