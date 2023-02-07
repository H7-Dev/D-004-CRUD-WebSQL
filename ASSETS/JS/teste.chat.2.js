const questions = ["Qual é o seu nome?", "Qual é a sua data de nascimento?", "Onde você mora?"];
const answerTypes = ["simple", "date", "simple"];
const answers = [];
const isRequired = [true, false, false];
let i = 0;

const resUser = document.getElementById("resUser");
const resUserDate = document.getElementById("resUserDate");
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

    if (answerTypes[i] === "simple") {
        resUser.style.display = "block";
        resUserDate.style.display = "none";
    } else {
        resUser.style.display = "none";
        resUserDate.style.display = "block";
    }
});
btnEnviar.addEventListener("click", function () {
    let answer;
    if (answerTypes[i] === "simple") {
        answer = resUser.value;
    } else {
        answer = resUserDate.value;
    }

    if (answer === "" && isRequired[i]) {
        alert("Essa resposta é obrigatória!");
        return;
    }
    answers.push(answer);
    displayResp.textContent = "Resposta " + (i + 1) + ": " + answer;
    resUser.value = "";
    resUserDate.value = "";
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
        let questionType;
        if (questions[i].toLowerCase().includes("data")) {
            questionType = "date";
        } else {
            questionType = "simple";
        }

        setTimeout(() => {
            box.removeChild(typingIndicator);

            pergunta = document.createElement("span");
            pergunta.classList.add("perguntas");
            pergunta.textContent = questions[i];
            box.appendChild(pergunta);

            displayResp = document.createElement("p");
            displayResp.classList.add("displayResp");
            box.appendChild(displayResp);

            document.getElementById("resUser").style.display = questionType === "simple" ? "block" : "none";
            document.getElementById("resUserDate").style.display = questionType === "date" ? "block" : "none";

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