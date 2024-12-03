// Seleciona o botão e o elemento body
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se o modo escuro está salvo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Adiciona um evento de clique para alternar entre os modos
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
});
// Adicionando funcionalidade ao botão de envio
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado!');
    });
});

