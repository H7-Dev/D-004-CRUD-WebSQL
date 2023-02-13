// Criação de uma nova instância da classe altClasses
var tableToggler = new altClasses({
    // btnSelc: ".btnSelc",                     // * Seleciona um botão personalizado na página HTML
    elementsToToggle: [
        "td.action",
        ".thActions",
        ".btnDel",
        ".btnUpdate"
    ], // * Seleciona elementos na página HTML para alternar sua exibição
    // activeClass: "customAtivado",        // * Define a classe para ser adicionada aos elementos quando estiverem ativados
    // disabledClass: "customDesativado",   //  * Define a classe para ser adicionada aos elementos quando estiverem desativados
    animeClass: "saltar", // * Define a classe para ser adicionada aos elementos durante a animação de ativação
    animeOutClass: "saltarOut", // * Define a classe para ser adicionada aos elementos durante a animação de desativação
    delay: 700, // * Define o tempo de delay antes da animação de desativação ser concluída
})
tableToggler.toggle()


var países = ["Brasil", "Argentina", "Chile", "Colômbia", "Equador", "Guiana", "Paraguai", "Peru", "Uruguai", "Venezuela",
    "Canadá", "Estados Unidos", "México", "Costa Rica", "Panamá", "Jamaica", "Haiti", "República Dominicana", "Cuba", "Puerto Rico"
];

// Armazenar a lista de países no localStorage
localStorage.setItem("países", JSON.stringify(países));

// Recuperar a lista de países do localStorage
var paísesArmazenados = JSON.parse(localStorage.getItem("países"));
// console.log(paísesArmazenados)

// *
let element = document.querySelector('.btnAddRegistro');
element.addEventListener('click', (e) => {
    console.log('x');
    console.log(e.target)

    const addClasses = new AddClasses({
        elementsToToggle: [".form"],
        activeClass: "ativado",
        animeClass: "zoomIn",
        delay: 500,
    });
    addClasses.add();
})
// *

let btnSeclIgm = document.querySelector('.btnSeclIgm');
btnSeclIgm.addEventListener('click', (e) => {
    console.log('x');
    console.log(e.target)

    const addClasses = new AddClasses({
        elementsToToggle: [".selcImg"],
        activeClass: "ativado",
        animeClass: "zoomIn",
        delay: 500,
    });
    addClasses.add();
})




let useImg = document.querySelector('#useImg');
useImg.addEventListener('click', (e) => {
    console.log('x2');
    console.log(e.target)

    var imgSrc = document.getElementById("preview").getAttribute("src");
    if (imgSrc) {
        // document.querySelector(".btnSeclIgm").style.backgroundImage = "url('" + imgSrc + "')";

        // Para configurar a imagem como background-image de um elemento com classe '.background-element':
        // Para configurar a imagem como background-image de um elemento com classe '.background-element':
        imageSelector.setBackgroundImage('.btnSeclIgm')
            .then(() => {
                imageSelector.clear();
            })
            .catch((error) => {
                console.error(`Error setting background-image: ${error}`);
            });


        const options = {
            elementsToToggle: [".selcImg"],
            animeClass: "saltarOut",
            removeClass: "ativado",
            delay: 500
        };

        const removeClassesInstance = new RemoveClasses(options);
        removeClassesInstance.init();

    } else {
        console.error("O valor do atributo src está vazio");
    }
})

let btnCancelar = document.querySelector('body > div.selcImg > div.footer > button.btnCancelar');
btnCancelar.addEventListener('click', (e) => {
    console.log('x');
    console.log(e.target)
    const options = {
        elementsToToggle: [".selcImg"],
        animeClass: "saltarOut",
        removeClass: "ativado",
        delay: 500
    };
    const removeClassesInstance = new RemoveClasses(options);
    removeClassesInstance.init();
})



// document.getElementById("useImg").addEventListener("click", function () {
//     var imgSrc = document.getElementById("preview").getAttribute("src");
//     if (imgSrc) {
//         document.querySelector(".btnSeclIgm").style.backgroundImage = "url('" + imgSrc + "')";

//     const remover = new RemoveClasses({
//         elementsToToggle: [".selcImg"],
//         animeClass: "saltarOut",
//         removeClass: "ativadoX",
//         delay: 500
//       });
//       remover.init();
//     } else {
//         console.error("O valor do atributo src está vazio");
//     }
// })