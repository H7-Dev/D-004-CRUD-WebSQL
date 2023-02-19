
class ChatForm {
    constructor({_btnIniciar}) {
        this.btnIniciar = document.querySelectorAll(_btnIniciar);
        this.btnIniciar.forEach(function (button) {
            button.addEventListener('click', function (event) {
                console.clear();
                console.log('=> ⚡-click btnIniChat <=');
                console.log(this);
                this.showAlert();
            })
        })
    }
    showAlert() {
        alert("Tentar método");
    }
}

let chat = new ChatForm({
    _btnIniciar: ".btnIniciarCh"
});

// chat.iniciar()