// script.js

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const status = document.getElementById('mensagemStatus');

    if (nome && email && mensagem) {
        status.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        status.style.color = 'green';

        // Limpa os campos após o envio simulado
        document.getElementById('formulario').reset();
    } else {
        status.textContent = 'Por favor, preencha todos os campos.';
        status.style.color = 'red';
    }
});
