// Exemplo: Modo dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Adicionando funcionalidade ao botão de envio
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado!');
    });
});