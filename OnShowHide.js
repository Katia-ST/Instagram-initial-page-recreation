let showPassword = false;
const botao = document.getElementById('senha-btn');
const inputPassword = document.getElementById('senha-input');

const onshowhide = () => {

  if (showPassword === false) {
    botao.innerHTML = 'Ocultar';
    inputPassword.setAttribute('type', 'text');
    showPassword = true;
  }
  else if (showPassword === true) {
    botao.innerHTML = 'Mostrar';
    inputPassword.setAttribute('type', 'password');
    showPassword = false;
  }
}

botao.addEventListener("click", onshowhide);