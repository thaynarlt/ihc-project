$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});



function enviarDados() {
    // Exibe o pop-up específico para "Enviar dados"
    document.getElementById("popupDados").style.display = "block";
}

function fecharPopupDados() {
    // Esconde o pop-up específico para "Enviar dados"
    document.getElementById("popupDados").style.display = "none";
}


// Função para verificar se o campo está vazio e exibir a mensagem de erro
function validarCampoVazio(campo, erro) {
    if (campo.value.trim() === "") {
        erro.style.display = 'inline';
    } else {
        erro.style.display = 'none';
    }
}

// Adiciona o evento "blur" para cada campo de texto
document.getElementById('nome').addEventListener('blur', function() {
    validarCampoVazio(this, document.getElementById('nomeError'));
});

document.getElementById('telefone').addEventListener('blur', function() {
    validarCampoVazio(this, document.getElementById('telefoneError'));
});

document.getElementById('email').addEventListener('blur', function() {
    validarCampoVazio(this, document.getElementById('emailError'));
});

// Adiciona o evento "blur" para o campo de seleção de estado
document.getElementById('estado').addEventListener('blur', function() {
    validarCampoVazio(this, document.getElementById('estadoError'));
});

// Validação no envio do formulário
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    let valid = true;

    // Validação do campo "nome"
    const nome = document.getElementById('nome');
    const nomeError = document.getElementById('nomeError');
    if (nome.value.trim() === "") {
        nomeError.style.display = 'inline';
        valid = false;
    }

    // Validação do campo "telefone"
    const telefone = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefoneError');
    if (telefone.value.trim() === "") {
        telefoneError.style.display = 'inline';
        valid = false;
    }

    // Validação do campo "email"
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (email.value.trim() === "") {
        emailError.style.display = 'inline';
        valid = false;
    }

    // Validação do campo "estado"
    const estado = document.getElementById('estado');
    const estadoError = document.getElementById('estadoError');
    if (estado.value === "") {
        estadoError.style.display = 'inline';
        valid = false;
    }

    // Se houver algum erro, prevenir o envio do formulário
    if (!valid) {
        event.preventDefault();
    }
});


function lerLivro() {
    // Exibe o pop-up específico para "Leia um livro"
    document.getElementById("popupLivro").style.display = "block";
}

function fecharPopupLivro() {
    // Esconde o pop-up específico para "Leia um livro"
    document.getElementById("popupLivro").style.display = "none";
}