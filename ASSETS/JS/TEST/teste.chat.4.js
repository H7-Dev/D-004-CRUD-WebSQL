console.clear()
console.log('teste.chat.4.js')

const questions = [{
        text: "Qual é o seu nome?",
        type: "simple",
        isRequired: true,
        input: function () {
            var x = `
            <label class="dynInputTypes" for="dynInputTypes">
                <input class="dynInputTypes" id="resUser" type="text" placeholder="✍️ dyn in (tipo texto) " >
            </label>
            `
            return x
        }
    },
    {
        text: "Qual é a sua data de nascimento?",
        type: "date",
        isRequired: false,
        input: function () {
            var x = `
            <label class="dynInputTypes">
                <input class="dynInputTypes" id="resUserDate" type="date" value="2000-01-01">
            </label>
            `
            return x
        }
    },
    {
        text: "Onde você mora?",
        type: "simple",
        isRequired: false,
        input: function () {
            var x = `
            <label class="dynInputTypes" for="dynInputTypes">
                <input class="dynInputTypes" id="resUser" type="text" placeholder="✔️ dyn in (tipo texto) " >
            </label>
            `
            return x
        }
    }
];
let i = 0;

console.log('❓ ');
console.log(questions[i].type);
console.log(questions[i].input());

const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const dockmsg = document.getElementById("dockmsg");
const btnIniciarChat = document.getElementById("btnIniciarChat");





// Adiciona o evento de clique ao botão btnIniciarChat
// btnIniciarChat.addEventListener("click", handleClickEvent);
btnIniciarChat.addEventListener("click", function() {
    handleClickEvent(questions[i])
})


// Função para lidar com o evento de clique
function handleClickEvent(_questions) {
    // Recupera a primeira pergunta da matriz "questions"
    const firstQuestion = _questions

    // Adiciona a pergunta recuperada à caixa (box)
    const pergunta = `<span class="perguntas">${firstQuestion.text}</span>`;
    box.innerHTML += pergunta;

    // Verifica o tipo da primeira pergunta
    if (firstQuestion.type === "simple") {
      dockmsg.innerHTML = '';
      const inTypeText = questions[i].input();
      dockmsg.innerHTML += inTypeText;
    }
    if (firstQuestion.type === "date") {
      dockmsg.innerHTML = '';
      const inTypeDate = questions[i].input();
      dockmsg.innerHTML += inTypeDate;
    }
  }
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

            console.log('❓ ');
            console.log(questions[i].type);
            if (questions[i].type === "simple") {
                dockmsg.innerHTML = '';
                const inTypeText = questions[i].input()
                dockmsg.innerHTML += inTypeText;
            }
            if (questions[i].type === "date") {
                dockmsg.innerHTML = '';
                const inTypeDate = questions[i].input();
                dockmsg.innerHTML += inTypeDate;
            }
            box.scroll({
                top: box.scrollHeight,
                behavior: "smooth"
            })
        }, 500)
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