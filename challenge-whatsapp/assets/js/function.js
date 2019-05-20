const users = [{
        nome: 'Leonardo',
        foto: 'assets/img/users/leonardo.jpg',
        ultimaMensagem: 'oi!'
    },
    {
        nome: 'Thiago',
        foto: 'assets/img/users/thiago.jpeg',
        ultimaMensagem: 'oi tbm!'
    },
    {
        nome: 'Vic',
        foto: 'assets/img/users/vic.jpeg',
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

document.getElementById("users-list").innerHTML;

document.getElementById("c-search-label").addEventListener("keyup", function (event) {
    const value = event.target.value;
    const aa = (users.filter(user => user.nome.toLowerCase().includes(value)));
    let html2 = '';

    aa.forEach(function (user) {
        html2 += `
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

    document.getElementById('users-list').innerHTML = html2;

});