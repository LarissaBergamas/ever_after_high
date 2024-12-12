document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".pergunta");
    const botoesRadios = document.querySelectorAll('input[type="radio"]');
    let perguntaAtual = 0;

    // Inicialmente, oculta todas as perguntas, exceto a primeira
    perguntas.forEach((elemento, index) => {
        if (index !== 0) elemento.style.display = "none";
    });

    // Criação do botão "Próximo"
    const botaoProximo = document.createElement("button");
    botaoProximo.textContent = "Próximo";
    botaoProximo.disabled = true; // Desabilitado até a resposta ser selecionada
    botaoProximo.style.display = "block";
    botaoProximo.style.margin = "0 auto";
    botaoProximo.addEventListener("click", () => {
        if (perguntaAtual < perguntas.length - 1) {
            perguntas[perguntaAtual].style.display = "none";
            perguntaAtual++;
            perguntas[perguntaAtual].style.display = "block";
            botaoProximo.disabled = true; // Desabilita o botão até a próxima resposta
        } else {
            botaoProximo.style.display = "none"; // Oculta o botão ao final do quiz
            document.getElementById("finalizar").style.display = "block";
        }
    });

    document.body.appendChild(botaoProximo);

    // Verifica a seleção de respostas
    botoesRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.name === `p${perguntaAtual + 1}`) {
                botaoProximo.disabled = false;
            }
        });
    });

    // Função para calcular o resultado
    window.testar = function () {
        let contMadeline = 0;
        let contBriar = 0;
        let contApple = 0;
        let contRaven = 0;

        botoesRadios.forEach(e => {
            if (e.checked) {
                switch (e.value) {
                    case "madeline":
                        contMadeline++;
                        break;
                    case "briar":
                        contBriar++;
                        break;
                    case "apple":
                        contApple++;
                        break;
                    case "raven":
                        contRaven++;
                        break;
                }
            }
        });

        let resultado = `Madeline = ${contMadeline}<br>
        Briar = ${contBriar}<br>
        Apple = ${contApple}<br>
        Raven = ${contRaven}<br>`;

        document.getElementById("resultado").innerHTML = resultado;

        localStorage.setItem('madeline', contMadeline);
        localStorage.setItem('briar', contBriar);
        localStorage.setItem('apple', contApple);
        localStorage.setItem('raven', contRaven);

        let maior = Math.max(contMadeline, contBriar, contApple, contRaven);
        let pagina;
        if (maior === contMadeline) {
            pagina = 'madeline';
        } else if (maior === contBriar) {
            pagina = 'briar';
        } else if (maior === contApple) {
            pagina = 'apple';
        } else if (maior === contRaven) {
            pagina = 'raven';
        }

        setTimeout(() => {
            window.open(`${pagina}.html`, '_blank');
        }, 5000);
    };
});

function testar() {
    let contMadeline = 0;
    let contBriar = 0;
    let contApple = 0;
    let contRaven = 0;

    let radios = document.querySelectorAll('input[type="radio"]');
    console.log(radios);

    
    radios.forEach(e => {
        if (e.checked) {
            if (e.value == "madeline") {
                contMadeline++;
            } else if (e.value == "briar") {
                contBriar++;
            } else if (e.value == "apple") {
                contApple++;
            } else if (e.value == "raven") {
                contRaven++;
            }
        }
    });

    let resultado = `
        Madeline = ${contMadeline} votos<br>
        Briar = ${contBriar} votos<br>
        Apple = ${contApple} votos<br>
        Raven = ${contRaven} votos<br>
    `;

    document.getElementById("resultado").innerHTML = resultado;

    
    localStorage.setItem('madeline', contMadeline);
    localStorage.setItem('briar', contBriar);
    localStorage.setItem('apple', contApple);
    localStorage.setItem('raven', contRaven);


    let maior = 0;
    let pagina;

    if (contMadeline > maior) {
        maior = contMadeline;
        pagina = 'madeline';
    }
    if (contBriar > maior) {
        maior = contBriar;
        pagina = 'briar';
    }
    if (contApple > maior) {
        maior = contApple;
        pagina = 'apple';
    }
    if (contRaven > maior) {
        maior = contRaven;
        pagina = 'raven';
    }

    setTimeout(() => {
        window.location.href = pagina + '.html'; 
    }, 5000);
}

const musica = document.getElementById("musica")
const botao = document.getElementById("btn_msc").addEventListener("click",function(){
    if(musica.paused){
        musica.muted = false;
        musica.play();
    }
    
})