
// * seleciona o primeiro elemento com uma classe "btnSelc" no documento HTML atual e o armazena em uma variável chamada "a".
const a = document.querySelector('.btnSelc');

a.addEventListener('click', (e) => {
    const toggleClasses = new altClass({
        elementsToToggle: [".thActions", ".action"],
        activeClass: "active",
        animeClass: "zoomIn",
        delay: 500,
    });
    toggleClasses.alternaClass(document.querySelectorAll(".thActions, .action"));
});



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








// * Não faz parte do projeto (excluir ao final)
var países = ["Brasil", "Argentina", "Chile", "Colômbia", "Equador", "Guiana", "Paraguai", "Peru", "Uruguai", "Venezuela",
    "Canadá", "Estados Unidos", "México", "Costa Rica", "Panamá", "Jamaica", "Haiti", "República Dominicana", "Cuba", "Puerto Rico"
];
// Armazenar a lista de países no localStorage
localStorage.setItem("países", JSON.stringify(países))