class Chatbot {
    constructor() {
        this.questions = [{
                text: "Qual é o seu nome?",
                type: "simple",
                isRequired: true,
                input: function () {
                    var x = `
                  <label class="dynInputTypes" for="dynInputTypes">
                      <input class="dynInputTypes" id="resUser" type="text" placeholder="dyn in (tipo texto) " >
                  </label>
                  `;
                    return x;
                },
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
            },
            {
                text: "Onde você mora?",
                type: "select",
                isRequired: false,
                input: function () {
                    var paísesArmazenados = JSON.parse(localStorage.getItem("países"));
                    var x = `
                    <select id="resUserSelect">
                      ${paísesArmazenados
                        .map(
                          (país) => `<option value="${país}">${país}</option>`
                        )
                        .join("")}
                    </select>
                  `;
                    return x;
                },
            },
        ]
        this.selc = [{
            box: document.querySelector("#box"),
            dockmsgX: document.querySelector("#dockmsg"),
            btnEnviarX: document.querySelector("#btnEnviar"),
            btnIniciarChatX: document.querySelector("#btnIniciarChat"),
        }]
        this.answers = [];
        this.i = 0;
    }

    iniciarChat() {
        alert("ok")
        const firstQuestion = this.questions[this.i];
        const pergunta = `<span class="perguntas">${firstQuestion.text}</span>`;
        this.selc.box.innerHTML += pergunta;

        if (firstQuestion.type === "simple") {
            this.selc.dockmsgX.innerHTML = '';
            const inTypeText = this.questions[this.i].input();
            this.selc.dockmsgX.innerHTML += inTypeText;
        }
        if (firstQuestion.type === "date") {
            this.selc.dockmsgX.innerHTML = '';
            const inTypeDate = this.questions[this.i].input();
            this.selc.dockmsgX.innerHTML += inTypeDate;
        }
    }
}

const button = document.querySelector("#btnIniciarChat");
button.addEventListener("click", function () {
    console.log('✍️ class nova')
    const form = new Chatbot();
    form.iniciarChat();
})



// // const button = document.querySelector("button");
// // button.addEventListener("click", function() {
// const novoChat = new Chatbot();
// console.log('✍️ class nova')
// const customQuestions = [{
//         text: "What's your name?",
//         type: "date",
//         isRequired: true,
//         input: function () {
//             var x = `
//       <label class="dynInputTypes" for="dynInputTypes">
//         <input class="dynInputTypes" id="resUser" type="text" placeholder="Enter your name">
//       </label>
//     `;
//             return x;
//         },
//     },
//     {
//         text: "What's your favorite color?",
//         type: "select",
//         isRequired: false,
//         input: function () {
//             var colors = ["red", "green", "blue"];
//             var x = `
//       <select id="resUserSelect">
//         ${colors
//           .map(
//             (color) => `<option value="${color}">${color}</option>`
//           )
//           .join("")}
//       </select>
//     `;
//             return x;
//         },
//     },
// ]

// const form = new Chatbot(customQuestions)
// customQuestions