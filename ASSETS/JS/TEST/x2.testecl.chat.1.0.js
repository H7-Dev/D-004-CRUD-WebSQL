class ChatForm {
    constructor({
        _btnIniciar,
        _btnEnviar,
        _box,
        _questions
    }) {
        this.btnIniciar = document.querySelectorAll(_btnIniciar),
        this.btnEnviar = document.querySelectorAll(_btnEnviar),
        this.box = _box,
        this.form = {
            questions: _questions || [{
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
                box: 'body > div.form.frmPessoa.ativado > div > div.main > div.chat > div.box',
                dockmsgX: document.querySelector("#dockmsg"),
                dockHidden: document.querySelector(".dockHidden"),
            },
            answers: [],
            indexQuestion: 0,
        }
        this.btnIniciar.forEach((button) => {
            button.addEventListener('click', (event) => {
                console.clear();
                console.log('=> ⚡-click btnIniChat <=');
                // console.log(this);
                // console.log(this.btnIniciar);
                console.log('📍');
                // box: ,
                console.log()
                console.log(this.btnIniciar[0]);
                this.iniciarChat()
            })
        })
        this.btnEnviar.forEach((button) => {
            button.addEventListener('click', (event) => {
                console.clear();
                console.log('=> ⚡-click btnEnviar <=');
                console.log(this.btnEnviar[0])
                this.Enviar()
            })
        })
    }
    iniciarChat() {
        // console.clear();
        console.log('👉 iniciarChat()')
        console.log('|||| ||||||| |||||');

        console.log('📍 this.form.answers')
        console.log(this.form.answers)

        console.log('📍 this.form.indexQuestion')
        console.log(this.form.indexQuestion)


        const firstQuestion = this.form.questions[this.form.indexQuestion]



        const pergunta = `<span class="perguntas bubble">${firstQuestion.text}<div class="bubble-arrow"></div></span>`;
        // this.form.selc.box.innerHTML

        document.querySelector(this.box).innerHTML += pergunta;


        if (firstQuestion.type === "simple") {
            this.form.selc.dockmsgX.innerHTML = '';
            console.log('❓ this.form.selc.dockmsgX');
            console.log(this.form.selc.dockmsgX);
            const inTypeText = this.form.questions[this.form.indexQuestion].input();
            this.form.selc.dockmsgX.innerHTML += inTypeText;
        }
        if (firstQuestion.type === "date") {
            this.form.selc.dockmsgX.innerHTML = '';
            const inTypeDate = this.form.questions[this.form.indexQuestion].input();
            this.form.selc.dockmsgX.innerHTML += inTypeDate;
        }
    }
    Enviar() {
        // console.clear();
        console.log('👉 Enviar()')
        console.log('|||| ||||||| |||||')

        let answer;

        if (this.form.questions[this.form.indexQuestion].type === "simple") {
            console.log(true);
            answer = resUser.value;

            // * inputlog
            const inputlog = `<input type="hidden" id="in_${this.form.questions[this.form.indexQuestion].inputName}" value="${resUser.value}">`
            this.form.selc.dockHidden.innerHTML += inputlog
        }
        if (this.form.questions[this.form.indexQuestion].type === "date") {
            console.log(false);
            answer = resUserDate.value;

            // * inputlog
            const inputlog = `<input type="hidden" id="in_${this.form.questions[this.form.indexQuestion].inputName}" value="${resUserDate.value}">`
            this.form.selc.dockHidden.innerHTML += inputlog;
        }
        if (this.form.questions[this.form.indexQuestion].type === "select") {
            console.log(false);
            answer = resUserSelect.value;

            // * inputlog
            const inputlog = `<input type="hidden" id="in_${this.form.questions[this.form.indexQuestion].inputName}" value="${resUserSelect.value}">`
            this.form.selc.dockHidden.innerHTML += inputlog;
        }

        if (answer === "" && this.form.questions[this.form.indexQuestion].isRequired) {
            console.log(true)
            console.log(answer)
            console.log(this.form.questions[this.form.indexQuestion].isRequired)
            alert("Essa resposta é obrigatória!");
            return;
        }
        this.form.answers.push(answer)
        console.log("Resposta " + (this.form.indexQuestion + 1) + ": " + answer)

        var displayResp = `<p class="displayResp">Resposta: ${(this.form.indexQuestion + 1) + ": " + answer}</p>`;
        this.form.selc.box.innerHTML += displayResp;
        this.form.indexQuestion++;


        var typingIndicator =
            `<div class="typingIndicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
            `;
        this.form.selc.box.innerHTML += typingIndicator;
        this.form.selc.box.scroll({
            top: this.form.selc.box.scrollHeight,
            behavior: "smooth"
        })

        if (this.form.indexQuestion < this.form.questions.length) {
            setTimeout(() => {
                var children = document.querySelectorAll(".typingIndicator");
                children.forEach(function (child) {
                    child.parentNode.removeChild(child)
                })

                var pergunta = `<span class="perguntas bubble">${this.form.questions[this.form.indexQuestion].text}</span>`;
                this.form.selc.box.innerHTML += pergunta;

                if (this.form.questions[this.form.indexQuestion].type === "simple") {
                    this.form.selc.dockmsgX.innerHTML = '';
                    const inTypeText = this.form.questions[this.form.indexQuestion].input()
                    this.form.selc.dockmsgX.innerHTML += inTypeText;
                }
                if (this.form.questions[this.form.indexQuestion].type === "date") {
                    this.form.selc.dockmsgX.innerHTML = '';
                    const inTypeDate = this.form.questions[this.form.indexQuestion].input();
                    this.form.selc.dockmsgX.innerHTML += inTypeDate;
                }
                if (this.form.questions[this.form.indexQuestion].type === "select") {
                    this.form.selc.dockmsgX.innerHTML = '';
                    const inTypeSelect = this.form.questions[this.form.indexQuestion].input();
                    this.form.selc.dockmsgX.innerHTML += inTypeSelect;
                }
                this.form.selc.box.scroll({
                    top: this.form.selc.box.scrollHeight,
                    behavior: "smooth"
                })

            }, 500)
        } else {
            console.log(this.form.indexQuestion < this.form.questions.length)
            const typingIndicators = document.querySelectorAll(".typingIndicator");
            for (let i = 0; i < typingIndicators.length; i++) {
                this.form.selc.box.removeChild(typingIndicators[i]);
            }

            let msgFinal = document.createElement("div");
            msgFinal.classList.add("msgFinal");
            msgFinal.textContent = "Fim das perguntas";
            this.form.selc.box.appendChild(msgFinal);

            this.form.selc.box.scroll({
                top: this.form.selc.box.scrollHeight,
                behavior: "smooth"
            })
        }


    }

}

let chat = new ChatForm({
    _btnIniciar: ".btnIniciarCh",
    _btnEnviar: ".btnEnviar",
    _box: "body > div.form.frmPessoa.ativado > div > div.main > div.chat > div.box",
    _questions: [{
            text: "(NEW X1) - Qual é o seu nome?",
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
            text: "(NEW X1) - agora, o seu sobrenome",
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
            inputName: "sobrenome",
        },
        {
            text: "(NEW X2) - Qual é a sua data de nascimento?",
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
            text: "(NEW X3) -  Onde você mora?",
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
})