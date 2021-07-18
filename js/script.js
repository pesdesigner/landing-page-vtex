const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<img width="100px" src="assets/loading.gif" alt="loading"> <p>✋ Aguarde...</p>`

    let user = JSON.parse(localStorage.getItem('lead'));

    let pronto = `<p>👍 Prontinho, ${user.nome}. Você já está cadastrada(o)! 😚 </br> E-mail: ${user.email}</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 3000)
})