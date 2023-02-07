const questions = ["Qual é o seu nome?", "Qual é a sua idade?", "Onde você mora?"];
const answers = [];
const isRequired = [true, false, false];
let i = 0;

const resUser = document.getElementById("resUser");
const btnEnviar = document.getElementById("btnEnviar");
const box = document.getElementById("box");
const btnIniciarChat = document.getElementById("btnIniciarChat");

btnIniciarChat.addEventListener("click", function () {
    pergunta = document.createElement("span");
    pergunta.classList.add("perguntas");
    pergunta.textContent = questions[i];
    box.appendChild(pergunta);

    displayResp = document.createElement("p");
    displayResp.classList.add("displayResp");
    box.appendChild(displayResp);

    btnIniciarChat.style.display = "none";
});
btnEnviar.addEventListener("click", function () {
    if (resUser.value === "" && isRequired[i]) {
        alert("Essa resposta é obrigatória!");
        return;
    }
    answers.push(resUser.value);
    displayResp.textContent = "Resposta " + (i + 1) + ": " + resUser.value;
    resUser.value = "";
    i++;

    let typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typingIndicator");

    for (let i = 0; i < 3; i++) {
        let dot = document.createElement("span");
        typingIndicator.appendChild(dot);
    }

    box.appendChild(typingIndicator);
    box.scroll({
        top: box.scrollHeight,
        behavior: "smooth"
    });

    if (i < questions.length) {
        setTimeout(() => {
            box.removeChild(typingIndicator);

            pergunta = document.createElement("span");
            pergunta.classList.add("perguntas");
            pergunta.textContent = questions[i];
            box.appendChild(pergunta);

            displayResp = document.createElement("p");
            displayResp.classList.add("displayResp");
            box.appendChild(displayResp);

            box.scroll({
                top: box.scrollHeight,
                behavior: "smooth"
            });
        }, 2000);
    } else {
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