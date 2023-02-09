console.clear()
console.log('teste.chat.3.js')

const questions = [{
        text: "Qual é o seu nome?",
        type: "simple",
        isRequired: true
    },
    {
        text: "Qual é a sua data de nascimento?",
        type: "date",
        isRequired: true
    },
    {
        text: "Onde você mora?",
        type: "simple",
        isRequired: false
    }
];
console.log('✍️ const "questions" objeto js e suas propriedade (text para perguntas, type para tipo de pergunta e isRequired para setar como obrigatório ou opcional a resposta)');
console.log(questions)
let i = 0;

console.log('✍️ variável "i" = 0 (server para obter o indice 0 de um array qualquer) neste caso, questions');
console.log(i)

const resUser = document.getElementById("resUser");
const resUserDate = document.getElementById("resUserDate");
const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const btnIniciarChat = document.getElementById("btnIniciarChat");

btnIniciarChat.addEventListener("click", function () {
    const firstQuestion = questions[i];
    console.log('✍️ firstQuestion, obtém a primeira questão do objeto questions\n seguindo o caminho da lógica até o objeto');
    console.log(firstQuestion)

    const pergunta =
    `<span class="perguntas">${firstQuestion.text}</span>`;
    box.innerHTML += pergunta;

    console.log('');
    console.log('✍️ firstQuestion.text, obtém a primeira questão do objeto questions.');
    console.log(firstQuestion.text)
    // btnIniciarChat.style.display = "none";

    if (firstQuestion.type === "simple") {
        resUser.style.display = "block";
        resUserDate.style.display = "none";
    } else {
        resUser.style.display = "none";
        resUserDate.style.display = "block";
    }
})

const answers = [];

console.log('✍️ "answers" é um array vazio que será preenchido com as respostas, isto é, a medida que as perguntas são respondidas');
console.log(answers)


btnEnviar.addEventListener("click", function () {
    let answer;

    console.log('✍️ "answer" é um variável indefinado no se estado inicial, porém recebe a resposta quando as condições são satisfeitas.');
    console.log(answer)

    console.log('❓ primeira condição: "questions[i].type" é igual a "simple"?');
    if (questions[i].type === "simple") {
        console.log(true);
        answer = resUser.value;
    } else {
        console.log(false);
        answer = resUserDate.value;
    }
    console.log('❓ segunda condição: "answer" é igual vazio e se é obrigatório?');
    if (answer === "" && questions[i].isRequired) {
        console.log(true)
        console.log(answer)
        console.log(questions[i].isRequired)
        alert("Essa resposta é obrigatória!");
        return;
    }
    console.log(answer)
    console.log('❕ condições satisfeitas a variável answer recebe a resposta, no caso, a resposta é: \n'+answer);


    console.log('');
    console.log('✍️ O "push" é usado para inserir a resposta no array "answers" ');
    console.log(answer)
    answers.push(answer);
    console.log("Resposta " + (i + 1) + ": " + answer)

    //  displayResp = `<p class="displayResp">Resposta: ${(i + 1)+answer}</p>`;
    // box.insertAdjacentHTML("beforeend", displayResp);

    console.log('❕ condições satisfeitas a variável answer recebe a resposta, no caso, a resposta é: \n'+answer);
    displayResp =
    `<p class="displayResp">Resposta: ${(i + 1)+ ' ' +answer}</p>`;
    box.innerHTML += displayResp;

    resUser.value = "";
    resUserDate.value = "";
    i++;

    console.log('✍️ O "i++"');
    console.log(i);

    // let typingIndicator = document.createElement("div");
    // typingIndicator.classList.add("typingIndicator");

    // for (let i = 0; i < 3; i++) {
    //     let dot = document.createElement("span");
    //     typingIndicator.appendChild(dot);
    // }

    // box.appendChild(typingIndicator)


    typingIndicator =
    `<div class="typingIndicator">
        <span></span>
        <span></span>
        <span></span>
    </div>
    `;
    box.innerHTML += typingIndicator;
    box.scroll({
        top: box.scrollHeight,
        behavior: "smooth"
    });

    console.log('❓ "i" é menor do questions.length?');
    if (i < questions.length) {
        console.log(i < questions.length)

        setTimeout(() => {
            // * espera dois segundos para remover o typingIndicator
            var children = document.querySelectorAll(".typingIndicator");
            children.forEach(function(child) {child.parentNode.removeChild(child)})


            // * cria o elemento span com a pergunta
            pergunta = `<span class="perguntas">${questions[i].text}</span>`;
            box.innerHTML += pergunta;

            document.getElementById("resUser").style.display = questions[i].type === "simple" ? "block" : "none";
            document.getElementById("resUserDate").style.display = questions[i].type === "date" ? "block" : "none";

            box.scroll({
                top: box.scrollHeight,
                behavior: "smooth"
            })
        }, 2000)
    } else {
        console.log(i < questions.length)
        const typingIndicators = document.querySelectorAll(".typingIndicator");
        for (let i = 0; i < typingIndicators.length; i++) {
            box.removeChild(typingIndicators[i]);
        }

        let msgFinal = document.createElement("div");
        msgFinal.classList.add("msgFinal");
        msgFinal.textContent = "Fim das perguntas";
        box.appendChild(msgFinal);

        box.scroll({
            top: box.scrollHeight,
            behavior: "smooth"
        });
    }
})