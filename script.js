const formulario = document.getElementById('formulario');
const error = document.getElementById('error');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const passWord = document.getElementById('password').value;
    validarLogin(login, passWord);
});

function validarLogin(login, passWord) {
    if (login === 'Matheus' && passWord === '123') {
        localStorage.setItem('acessorestrito', true);
        window.location.href = 'admin/home.html';
    } else {
        error.innerHTML = 'Login inválido';
    }
}

function sair() {
    alert('Logout efetuado!');

}















