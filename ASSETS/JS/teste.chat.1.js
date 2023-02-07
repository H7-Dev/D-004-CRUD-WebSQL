const questions = [{
        question: "What is your name?",
        type: "simple"
    },
    {
        question: "What is your birthdate?",
        type: "date"
    },
    {
        question: "What is your favorite color?",
        type: "select",
        options: ["red", "green", "blue"]
    }
];
const answers = [];
const isRequired = [true, false, false];
let i = 0;

btnIniciarChat.addEventListener("click", function () {
    const pergunta = document.createElement("span");
    pergunta.classList.add("perguntas");
    pergunta.textContent = questions[i].question;
    box.appendChild(pergunta);

    displayResp = document.createElement("p");
    displayResp.classList.add("displayResp");
    box.appendChild(displayResp);

    btnIniciarChat.style.display = "none";

    if (questions[i].type === "date") {
        const dockmsg = document.getElementById("dockmsg");
        dockmsg.innerHTML = "";
        const resUser = document.createElement("input");
        resUser.setAttribute("type", "date");
        resUser.setAttribute("id", "resUser");
        dockmsg.appendChild(resUser);
    } else if (questions[i].type === "select") {
        const dockmsg = document.getElementById("dockmsg");
        dockmsg.innerHTML = "";
        const select = document.createElement("select");
        select.setAttribute("id", "resUser");
        for (const option of questions[i].options) {
            const opt = document.createElement("option");
            opt.textContent = option;
            opt.value = option;
            select.appendChild(opt);
        }
        dockmsg.appendChild(select);
    } else {
        const dockmsg = document.getElementById("dockmsg");
        dockmsg.innerHTML = "";
        const resUser = document.createElement("input");
        resUser.setAttribute("type", "text");
        resUser.setAttribute("id", "resUser");
        dockmsg.appendChild(resUser);
    }
});

resUser.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert("OK")
        let answer = resUser.value;
        if (questions[i].type === "date") {
            answer = resUser.valueAsDate;
        }
        if (answer === "" && isRequired[i]) {
            alert("This answer is required!");
            return;
        }
        answers.push(answer);
        displayResp.textContent = "Answer " + (i + 1) + ": " + answer;

        // The rest of the code remains the same.
        resUser.value = "";
        i++;

        if (answers[i - 1].type === "simple") {
            if (resUser.value === "" && isRequired[i - 1]) {
                alert("Essa resposta é obrigatória!");
                return;
            }
            answers.push({
                value: resUser.value,
                type: "simple"
            });
            displayResp.textContent = "Resposta " + (i) + ": " + resUser.value;
            resUser.value = "";
        } else if (answers[i - 1].type === "date") {
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }
            let dateInput = document.createElement("input");
            dateInput.setAttribute("type", "date");
            dateInput.setAttribute("id", "resUser");
            box.appendChild(dateInput);

            dateInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    if (dateInput.value === "" && isRequired[i - 1]) {
                        alert("Essa resposta é obrigatória!");
                        return;
                    }
                    answers.push({
                        value: dateInput.value,
                        type: "date"
                    });
                    displayResp = document.createElement("p");
                    displayResp.classList.add("displayResp");
                    displayResp.textContent = "Resposta " + (i) + ": " + dateInput.value;
                    box.appendChild(displayResp);
                    dateInput.value = "";
                }
            });
        } else if (answers[i - 1].type === "select") {
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }
            let selectInput = document.createElement("select");
            selectInput.setAttribute("id", "resUser");
            box.appendChild(selectInput);

            let options = answers[i - 1].options;
            for (let j = 0; j < options.length; j++) {
                let option = document.createElement("option");
                option.text = options[j];
                selectInput.add(option);
            }

            selectInput.addEventListener("change", function () {
                answers.push({
                    value: selectInput.value,
                    type: "select"
                });
                displayResp = document.createElement("p");
                displayResp.classList.add("displayResp");
                displayResp.textContent = "Resposta " + (i) + ": " + selectInput.value;
                box.appendChild(displayResp);
            });
        }
    }
});