console.clear()
console.log('teste.chat.5.js')

const form = {
    questions: [{
            text: "Qual é o seu nome?",
            type: "simple",
            isRequired: true,
            input: function () {
                var x = `
              <label class="dynInputTypes" for="dynInputTypes">
                  <input class="dynInputTypes" id="resUser" type="text" placeholder="✍️ dyn in (tipo texto) " >
              </label>
              `;
                return x;
            },
            inputName: "nome"
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
              `;
                return x;
            },
            inputName: "data"
        },
        {
            text: "Onde você mora?",
            type: "select",
            isRequired: false,
            input: function () {
                var paísesArmazenados = JSON.parse(localStorage.getItem("países"));
                var x = `
                <select class="minimal" id="resUserSelect">
                  ${paísesArmazenados
                    .map(
                      (país) => `<option value="${país}">${país}</option>`
                    )
                    .join("")}
                </select>
              `;
                return x;
            },
            inputName: "pais"
        },
    ],
    selc: {
        box: document.querySelector("#box"),
        dockmsgX: document.querySelector("#dockmsg"),
        btnEnviarX: document.querySelector("#btnEnviar"),
        btnIniciarChatX: document.querySelector("#btnIniciarChat"),
        dockLeft: document.querySelector(".dockLeft"),
    },
};
const answers = [];
let i = 0;
function iniciarChat() {
    const firstQuestion = form.questions[i]
    const pergunta = `<span class="perguntas bubble">${firstQuestion.text}<div class="bubble-arrow"></div></span>`;
    form.selc.box.innerHTML += pergunta;

    if (firstQuestion.type === "simple") {
        dockmsg.innerHTML = '';
        const inTypeText = form.questions[i].input();
        dockmsg.innerHTML += inTypeText;

    }
    if (firstQuestion.type === "date") {
        dockmsg.innerHTML = '';
        const inTypeDate = form.questions[i].input();
        dockmsg.innerHTML += inTypeDate;
    }
}

function enviar(params) {

    let answer;
    if (form.questions[i].type === "simple") {
        console.log(true);
        answer = resUser.value;

        // * inputlog
        const inputlog = `<input type="hidden" id="in_${form.questions[i].inputName}" value="${resUser.value}">`
        form.selc.dockLeft.innerHTML += inputlog;
    }
    if (form.questions[i].type === "date") {
        console.log(false);
        answer = resUserDate.value;

        // * inputlog
        const inputlog = `<input type="hidden" id="in_${form.questions[i].inputName}" value="${resUserDate.value}">`
        form.selc.dockLeft.innerHTML += inputlog;
    }
    if (form.questions[i].type === "select") {
        console.log(false);
        answer = resUserSelect.value;

        // * inputlog
        const inputlog = `<input type="hidden" id="in_${form.questions[i].inputName}" value="${resUserSelect.value}">`
        form.selc.dockLeft.innerHTML += inputlog;
    }

    if (answer === "" && form.questions[i].isRequired) {
        console.log(true)
        console.log(answer)
        console.log(form.questions[i].isRequired)
        alert("Essa resposta é obrigatória!");
        return;
    }
    answers.push(answer);
    console.log("Resposta " + (i + 1) + ": " + answer)

    displayResp =
        `<p class="displayResp">Resposta: ${(i + 1)+ ' ' +answer}</p>`;
    form.selc.box.innerHTML += displayResp;
    i++;

    typingIndicator =
        `<div class="typingIndicator">
        <span></span>
        <span></span>
        <span></span>
    </div>
    `;
    form.selc.box.innerHTML += typingIndicator;
    form.selc.box.scroll({
        top: form.selc.box.scrollHeight,
        behavior: "smooth"
    });

    if (i < form.questions.length) {
        console.log(i < form.questions.length)

        setTimeout(() => {

            var children = document.querySelectorAll(".typingIndicator");
            children.forEach(function (child) {
                child.parentNode.removeChild(child)
            })

            pergunta = `<span class="perguntas bubble">${form.questions[i].text}</span>`;
            form.selc.box.innerHTML += pergunta;

            if (form.questions[i].type === "simple") {
                dockmsg.innerHTML = '';
                const inTypeText = form.questions[i].input()
                dockmsg.innerHTML += inTypeText;
            }
            if (form.questions[i].type === "date") {
                dockmsg.innerHTML = '';
                const inTypeDate = form.questions[i].input();
                dockmsg.innerHTML += inTypeDate;
            }
            if (form.questions[i].type === "select") {
                dockmsg.innerHTML = '';
                const inTypeSelect = form.questions[i].input();
                dockmsg.innerHTML += inTypeSelect;
            }
            form.selc.box.scroll({
                top: form.selc.box.scrollHeight,
                behavior: "smooth"
            })
        }, 500)
    } else {
        console.log(i < form.questions.length)
        const typingIndicators = document.querySelectorAll(".typingIndicator");
        for (let i = 0; i < typingIndicators.length; i++) {
            form.selc.box.removeChild(typingIndicators[i]);
        }

        let msgFinal = document.createElement("div");
        msgFinal.classList.add("msgFinal");
        msgFinal.textContent = "Fim das perguntas";
        form.selc.box.appendChild(msgFinal);

        form.selc.box.scroll({
            top: form.selc.box.scrollHeight,
            behavior: "smooth"
        })
    }
}
form.selc.btnIniciarChatX.addEventListener("click", iniciarChat)
form.selc.btnEnviarX.addEventListener("click", enviar);