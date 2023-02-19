class ChatForm {
    constructor({
        _btnIniciar
    }) {
        this.btnIniciar = document.querySelectorAll(_btnIniciar);
        this.form = {
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
                        inputName: "nome",
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
                        inputName: "data",
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
                      .map((país) => `<option value="${país}">${país}</option>`)
                      .join("")}
                  </select>
                `;
                            return x;
                        },
                        inputName: "pais",
                    },
                ],
                selc: {
                    box: document.querySelector("#box"),
                    dockmsgX: document.querySelector("#dockmsg"),
                    btnEnviarX: document.querySelector("#btnEnviar"),
                    btnIniciarChatX: document.querySelector("#btnIniciarChat"),
                    dockHidden: document.querySelector(".dockHidden"),
                },
                answers: [],
                indexQuestion: 0,
            },
            this.btnIniciar.forEach((button) => {
                button.addEventListener('click', (event) => {
                    console.clear();
                    console.log('=> ⚡-click btnIniChat <=');
                    // console.log(this);
                    // console.log(this.btnIniciar);
                    console.log(this.btnIniciar[0]);
                    this.iniciarChat();
                })
            })
    }
    iniciarChat() {
        console.clear();
        console.log('👉 iniciarChat()')
        console.log('- --- -');

        console.log('📍 this.form.answers')
        console.log(this.form.answers)

        console.log('📍 this.form.indexQuestion')
        console.log(this.form.indexQuestion)


        const firstQuestion = this.form.questions[this.form.indexQuestion]
        console.log('✍️ firstQuestion')
        console.log(firstQuestion)

        const pergunta = `<span class="perguntas bubble">${firstQuestion.text}<div class="bubble-arrow"></div></span>`;
        this.form.selc.box.innerHTML += pergunta;


        if (firstQuestion.type === "simple") {
            dockmsg.innerHTML = '';
            const inTypeText = this.form.questions[this.form.indexQuestion].input();
            dockmsg.innerHTML += inTypeText;

        }
        if (firstQuestion.type === "date") {
            dockmsg.innerHTML = '';
            const inTypeDate = this.form.questions[this.form.indexQuestion].input();
            dockmsg.innerHTML += inTypeDate;
        }
    }
}

// let chat = new ChatForm({
//     _btnIniciar: ".btnIniciarCh",

// })
let chat = new ChatForm({
    _btnIniciar: ".btnIniciarCh",
    // outras propriedades...
});

const newQuestions = [{
        text: "(NEW X) - Qual é o seu nome?",
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
        inputName: "nome",
    },
    {
        text: "(NEW X) - Qual é a sua data de nascimento?",
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
        inputName: "data",
    },
    {
        text: "(NEW X) -  Onde você mora?",
        type: "select",
        isRequired: false,
        input: function () {
            var paísesArmazenados = JSON.parse(localStorage.getItem("países"));
            var x = `
                <select class="minimal" id="resUserSelect">
                    ${paísesArmazenados.map((país) => `<option value="${país}">${país}</option>`).join("")}
                </select>
                `;
            return x;
        },
        inputName: "pais",
    },
]

chat.form.questions = newQuestions;