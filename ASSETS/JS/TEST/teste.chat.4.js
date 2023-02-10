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
        type: "select",
        isRequired: false,
        input: function () {
            var paísesArmazenados = JSON.parse(localStorage.getItem("países"));
            var x = `
              <select id="resUserSelect">
                ${paísesArmazenados.map(país => `<option value="${país}">${país}</option>`).join("")}
              </select>
            `;
            return x
        }
    }
];
let i = 0;


const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const dockmsg = document.getElementById("dockmsg");
const btnIniciarChat = document.getElementById("btnIniciarChat");



// Função para lidar com o evento de clique
function handleClickEvent(_questions) {
    const firstQuestion = _questions
    const pergunta = `<span class="perguntas">${firstQuestion.text}</span>`;
    box.innerHTML += pergunta;

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


function enviar(params) {

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
    if (questions[i].type === "select") {
        console.log(false);
        answer = resUserSelect.value;
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
            if (questions[i].type === "select") {
                dockmsg.innerHTML = '';
                const inTypeSelect = questions[i].input();
                dockmsg.innerHTML += inTypeSelect;
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
}
btnIniciarChat.addEventListener("click", handleClickEvent(questions[i]));
btnEnviar.addEventListener("click", enviar);

// btnEnviar.addEventListener("click", function () {
//     enviar()
// })