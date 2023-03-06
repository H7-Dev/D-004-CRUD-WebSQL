// * ✔️ Mostrar/ocultar from  altClass
let btnSelcRowsTable = document.querySelectorAll('.btnSelc')
btnSelcRowsTable.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear();
        console.log('=> ⚡-click btnSelc <=');
        console.log(this);
        const toggleClasses = new altClass({
            elementsToToggle: [".thActions", ".action"],
            activeClass: "active",
            inClass: "zoomIn",
            outClass: "saltarOut",
            delay: 900,
        });
        toggleClasses.toggle();
    });
});


let btnIniChat = document.querySelectorAll('.btnAddRegistro')
btnIniChat.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // console.clear()
        console.log('=> ⚡-click btnIniChat <=');
        console.log(this);

        const addClasses = new AddClasses({
            elementsToToggle: [".form"],
            activeClass: "ativado",
            animeClass: "zoomIn",
            delay: 500,
        });
        addClasses.add();
    })
})

let btnVoltar = document.querySelectorAll('.btnVoltar')
btnVoltar.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear()
        console.log('=> ⚡-click btnVoltar <=');
        console.log(this);

        const options = {
            elementsToToggle: [".form"],
            animeClass: "saltarOut",
            removeClass: "ativado",
            delay: 500
        };
        const removeClassesInstance = new RemoveClasses(options);
        removeClassesInstance.init();
    })
})

// qj.$('selector').click(function (e) {
//     e.preventDefault();

// });




let btnSelcImg = document.querySelectorAll('#btnSeclIgm')
btnSelcImg.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear()
        console.log('=> ⚡-click btnSelcImg <=');
        console.log(this);

        const addClasses = new AddClasses({
            elementsToToggle: [".selcImg"],
            activeClass: "ativado",
            animeClass: "zoomIn",
            delay: 500,
        });
        addClasses.add();
    })
})



let btnShowGravador = document.querySelectorAll('.btnShowGravador')
btnShowGravador.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear()
        console.log('=> ⚡-click btnShowGravador <=');
        console.log(this);

        const addClasses = new AddClasses({
            elementsToToggle: [".gravadorAudio"],
            activeClass: "ativado",
            animeClass: "zoomIn",
            delay: 500,
        });
        addClasses.add();
    })
})


let btnVotlarSelcImg = document.querySelectorAll('body > div.selcImg > div.footer > button.btnCancelar')
btnVotlarSelcImg.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear()
        console.log('=> ⚡-click btnVotlarSelcImg <=');
        console.log(this);

        const options = {
            elementsToToggle: [".selcImg"],
            animeClass: "saltarOut",
            removeClass: "ativado",
            delay: 500
        };
        const removeClassesInstance = new RemoveClasses(options);
        removeClassesInstance.init();
    })
})

/* Exemplor de uso  da class ImageSelector*/
const imageSelector = new ImageSelector({
    inputFileSelector: '#fileInput',
    previewSelector: '#preview',
    maxSizeInMB: 10,
    inNameSelector: '.in_nome',
    inSizeSelector: '.in_size',
    inTypeSelector: '.in_type',
})


let useImg = document.querySelector('#useImg');
useImg.addEventListener('click', (e) => {

    var imgSrc = document.getElementById("preview").getAttribute("src");
    if (imgSrc) {
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

// * Não faz parte do projeto (excluir ao final)
var países = ["Brasil", "Argentina", "Chile", "Colômbia", "Equador", "Guiana", "Paraguai", "Peru", "Uruguai", "Venezuela",
    "Canadá", "Estados Unidos", "México", "Costa Rica", "Panamá", "Jamaica", "Haiti", "República Dominicana", "Cuba", "Puerto Rico"
];
// Armazenar a lista de países no localStorage
localStorage.setItem("países", JSON.stringify(países))


// const paises = localStorage.getItem('países');
// console.log(paises);

// const paises = localStorage.getItem('países');
// const paisesObj = JSON.parse(paises);
// console.log(paisesObj);


const ul = document.querySelector('ul#ulOptionsPaises');
const paises = localStorage.getItem('países');
const paisesArray = JSON.parse(paises);
ul.innerHTML = ''

paisesArray.forEach((pais) => {
    const li = `<li class="liOpts" value="${pais}" >${pais}</li>`;
    ul.innerHTML += li;
})


const myDropdown = new customSelc({
    customSelc: '.customSelc',
    btnOptsSelector: '.btnOpts',
    ulOptionsSelector: '.ulOptions',
    liOptsSelector: '.liOpts',
    btnClear: '.clearSelc'
})


/* OPERAÇÕES CRUD */

// *INSERT TO

let btnAciton = document.querySelectorAll('button.btnSalvar.btnAciton')
btnAciton.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.clear()
        console.log('=> ⚡-click btnAciton <=');
        console.log(this)

        function getInputsValues() {
            return new Promise((resolve, reject) => {
                const inputs = {
                    idPessoas: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email').value.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''),
                    in_nome: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_nome > input.in_nome'),
                    in_email: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email'),
                    in_dtNasc: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_dtNasc > input.in_dtNasc'),
                    in_optsPais: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.customSelc.col1-3 > input.in_optsPais'),
                    in_optsSexo: document.querySelector('body > div.form.frmPessoa > div > div.main > div.chat > label.customSelc.col3 > input.in_optsSexo')
                };

                // Verifica se todos os valores foram obtidos
                if (inputs.idPessoas && inputs.in_nome && inputs.in_email && inputs.in_dtNasc && inputs.in_optsPais && inputs.in_optsSexo) {
                    console.log(inputs.idPessoas)
                    resolve(inputs);
                } else {
                    reject(new Error('Não foi possível obter todos os valores de entrada.'));
                }
            });
        }

        // Chama a função getInputsValues para obter os valores de entrada e, em seguida, chama a função insertToWsql.insert quando os valores forem obtidos
        getInputsValues().then((inputs) => {
            const tabela = 'tbPessoas';
            const registro = {
                idPessoas: inputs.idPessoas,
                c_nome: inputs.in_nome.value,
                c_email: inputs.in_email.value,
                c_date: inputs.in_dtNasc.value,
                c_pais: inputs.in_optsPais.value,
                c_sexo: inputs.in_optsSexo.value
            };
            const campos = ['idPessoas', 'c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo'];
            const retorno = 'c_nome';
            const campoUnico = 'c_email';

            insertToWsql.insert(db, tabela, registro, campos, function (success, message, insertId, returnField) {
                if (success) {
                    console.log(message);
                    // console.log('ID do registro inserido:', insertId);
                    // console.log('Campo de retorno:', returnField);
                } else {
                    console.error(message);
                }
            }, retorno, campoUnico);
        }).catch((error) => {
            console.error(error);
        });


    })
})