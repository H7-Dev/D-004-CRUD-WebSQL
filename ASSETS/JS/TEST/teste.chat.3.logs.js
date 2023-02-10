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

const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const dockmsg = document.getElementById("dockmsg");
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
        dockmsg.innerHTML = '';
        const inTypeText =
            `
        <label class="dynInputTypes" for="dynInputTypes">
            <input class="dynInputTypes" id="resUser" type="text" placeholder="Digite a resposta (tipo texto) " >
        </label>
        `;
        dockmsg.innerHTML += inTypeText;
    }
    if (firstQuestion.type === "date") {
        dockmsg.innerHTML = '';
        const inTypeDate =
            `
        <label class="dynInputTypes">
            <input class="dynInputTypes" id="resUserDate" type="date">
        </label>
        `;
        dockmsg.innerHTML += inTypeDate;
    }

})

const answers = [];


btnEnviar.addEventListener("click", function () {
    let answer;
    const resUser = document.getElementById("resUser");
    const resUserDate = document.getElementById("resUserDate");
    if (questions[i].type === "simple") {
        console.log(true);
        answer = resUser.value;
    }
    if (questions[i].type === "date") {
        console.log(false);
        answer = resUserDate.value;
    }

    if (answer === "" && questions[i].isRequired) {
        console.log(true)
        console.log(answer)
        console.log(questions[i].isRequired)
        alert("Essa resposta é obrigatória!");
        return;
    }
    answers.push(answer);
    console.log("Resposta " + (i + 1) + ": " + answer)

    displayResp =
        `<p class="displayResp">Resposta: ${(i + 1)+ ' ' +answer}</p>`;
    box.innerHTML += displayResp;
    i++;

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

    if (i < questions.length) {
        console.log(i < questions.length)

        setTimeout(() => {
            // * espera dois segundos para remover o typingIndicator
            var children = document.querySelectorAll(".typingIndicator");
            children.forEach(function (child) {
                child.parentNode.removeChild(child)
            })


            // * cria o elemento span com a pergunta
            pergunta = `<span class="perguntas">${questions[i].text}</span>`;
            box.innerHTML += pergunta;

            if (questions[i].type === "simple") {
                dockmsg.innerHTML = '';
                const inTypeText =
                    `
                    <label class="dynInputTypes" for="dynInputTypes">
                        <input class="dynInputTypes" id="resUser" type="text" placeholder="Digite a resposta (tipo texto) " >
                    </label>
                    `;
                dockmsg.innerHTML += inTypeText;
            }
            if (questions[i].type === "date") {
                dockmsg.innerHTML = '';
                const inTypeDate =
                    `
                    <label class="dynInputTypes">
                        <input class="dynInputTypes" id="resUserDate" type="date" placeholder="Digite a resposta (tipo data) " >
                    </label>
                    `;
                dockmsg.innerHTML += inTypeDate;
            }
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
        })
    }
})