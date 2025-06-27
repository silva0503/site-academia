document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para o formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Aqui você pode adicionar lógica para:
        // 1. Validar os campos (ex: verificar se o email é válido)
        // 2. Enviar os dados para um servidor (usando Fetch API ou XMLHttpRequest)
        //    Para um site estático, você pode simular o envio ou usar serviços como Formspree/Netlify Forms.

        // Simulação de envio bem-sucedido
        console.log('Dados do formulário:', { nome, email, mensagem });
        formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        formMessage.style.color = 'green';

        // Limpa o formulário
        contactForm.reset();

        // Você pode limpar a mensagem após alguns segundos
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });

    // Exemplo de interatividade: Mudar a cor do botão ao clicar (apenas para demonstração)
    const heroButton = document.querySelector('.hero .btn');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            console.log('Botão "Comece Agora!" clicado!');
            // Você poderia adicionar uma animação ou redirecionar aqui
        });
    }

    // Exemplo: Animação simples ao rolar (pode ser mais complexo com Intersection Observer)
    const sections = document.querySelectorAll('.section-padding');
    const options = {
        threshold: 0.1 // Quando 10% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0; // Começa invisível
        section.style.transform = 'translateY(20px)'; // Começa um pouco abaixo
        observer.observe(section);
    });
});