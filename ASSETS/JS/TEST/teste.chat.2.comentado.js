// Array de perguntas a serem feitas
const questions = ["Qual é o seu nome?", "Qual é a sua data de nascimento?", "Onde você mora?"];

// console.log('✍️ Array de perguntas a serem feitas');
// console.log(questions)

// Array com o tipo de resposta para cada pergunta
const answerTypes = ["simple", "date", "simple"];

// Array para armazenar as respostas
const answers = [];

// Array para indicar se uma resposta é obrigatória ou não
const isRequired = [true, false, false];

// Variável de controle para o índice das perguntas
let i = 0;

// Variáveis para acesso aos elementos HTML
const resUser = document.getElementById("resUser");
const resUserDate = document.getElementById("resUserDate");
const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const btnIniciarChat = document.getElementById("btnIniciarChat");

// Event listener para o botão de iniciar chat
btnIniciarChat.addEventListener("click", function () {
    // Cria um elemento <span> para a pergunta
    pergunta = document.createElement("span");

    // Adiciona a classe "perguntas" ao elemento criado
    pergunta.classList.add("perguntas");

    // Define o texto da pergunta como o conteúdo do elemento
    pergunta.textContent = questions[i];

    // Adiciona a pergunta ao elemento HTML com id "box"
    box.appendChild(pergunta);

    // Cria um elemento <p> para exibir a resposta
    displayResp = document.createElement("p");

    // Adiciona a classe "displayResp" ao elemento criado
    displayResp.classList.add("displayResp");

    // Adiciona o elemento ao elemento HTML com id "box"
    box.appendChild(displayResp);

    // Esconde o botão de iniciar chat
    btnIniciarChat.style.display = "none";

    // Verifica se a resposta é do tipo "simple" ou "date"
    if (answerTypes[i] === "simple") {
        // Exibe o campo de texto para resposta simples
        resUser.style.display = "block";

        // Esconde o campo de data para resposta
        resUserDate.style.display = "none";
    } else {
        // Esconde o campo de texto para resposta simples
        resUser.style.display = "none";

        // Exibe o campo de data para resposta
        resUserDate.style.display = "block";
    }
});

// Adiciona um event listener ao botão "Enviar"
btnEnviar.addEventListener("click", function () {
    // Declara a variável "answer" sem atribuição inicial
    let answer;

    // Verifica o tipo de resposta esperado para a pergunta atual (armazenada em "answerTypes[i]")
    if (answerTypes[i] === "simple") {
        // Se a resposta esperada for simples, atribui a resposta do usuário (resUser.value) à variável "answer"
        answer = resUser.value;
    } else {
        // Se a resposta esperada for uma data, atribui a resposta do usuário (resUserDate.value) à variável "answer"
        answer = resUserDate.value;
    }

    // Verifica se a resposta é obrigatória (armazenada em "isRequired[i]")
    if (answer === "" && isRequired[i]) {
        // Se a resposta é obrigatória e não foi fornecida, exibe uma mensagem de erro
        alert("Essa resposta é obrigatória!");
        // Interrompe a execução da função
        return;
    }
    // Adiciona a resposta à lista "answers"
    answers.push(answer);
    // Atualiza a exibição da resposta na tela
    displayResp.textContent = "Resposta " + (i + 1) + ": " + answer;
    // Limpa os campos de resposta
    resUser.value = "";
    resUserDate.value = "";
    // Incrementa o índice da pergunta atual
    i++;

    // Cria um elemento HTML <div> para exibir um indicador de digitação
    let typingIndicator = document.createElement("div");
    // Adiciona a classe "typingIndicator" ao elemento criado
    typingIndicator.classList.add("typingIndicator");

    // Cria três pontos (elementos <span>) para exibir o indicador de digitação
    for (let i = 0; i < 3; i++) {
        let dot = document.createElement("span");
        // Adiciona os pontos ao elemento <div>
        typingIndicator.appendChild(dot);
    }

    // Adiciona o indicador de digitação à caixa de diálogo (elemento <div> com id "box")
    box.appendChild(typingIndicator);
    // Faz a caixa de diálogo rolar até o final (para exibir o indicador de digitação)
    box.scroll({
        top: box.scrollHeight,
        behavior: "smooth"
    });
    if (i < questions.length) {
        // Verifica se há mais perguntas para serem feitas

        let questionType;
        if (questions[i].toLowerCase().includes("data")) {
            // Se a pergunta contém a palavra "data" em seu conteúdo, o tipo da pergunta será "date"
            questionType = "date";
        } else {
            // Caso contrário, o tipo da pergunta será "simple"
            questionType = "simple";
        }

        // Espera 2 segundos antes de remover o indicador de escrita e exibir a próxima pergunta
        setTimeout(() => {
            box.removeChild(typingIndicator);

            // Cria um elemento "span" para exibir a pergunta
            pergunta = document.createElement("span");
            pergunta.classList.add("perguntas");
            pergunta.textContent = questions[i];
            box.appendChild(pergunta);

            // Cria um elemento "p" para exibir a resposta
            displayResp = document.createElement("p");
            displayResp.classList.add("displayResp");
            box.appendChild(displayResp);

            // Exibe o campo de resposta simples se o tipo da pergunta for "simple" e oculta caso contrário
            document.getElementById("resUser").style.display = questionType === "simple" ? "block" : "none";
            // Exibe o campo de resposta de data se o tipo da pergunta for "date" e oculta caso contrário
            document.getElementById("resUserDate").style.display = questionType === "date" ? "block" : "none";

            // Rola a tela para exibir a próxima pergunta e resposta
            box.scroll({
                top: box.scrollHeight,
                behavior: "smooth"
            });
        }, 2000);
    } else {
        // Se não houver mais perguntas, remove todos os indicadores de escrita
        const typingIndicators = document.querySelectorAll(".typingIndicator");
        for (let i = 0; i < typingIndicators.length; i++) {
            box.removeChild(typingIndicators[i]);
        }

        // Cria um elemento "div" para exibir a mensagem de fim das perguntas
        let msgFinal = document.createElement("div");
        msgFinal.classList.add("msgFinal");
        msgFinal.textContent = "Fim das perguntas";
        box.appendChild(msgFinal);

        // Rola a tela para exibir a mensagem de fim das perguntas
        box.scroll({
            top: box.scrollHeight,
            behavior: "smooth"
        });
    }
})