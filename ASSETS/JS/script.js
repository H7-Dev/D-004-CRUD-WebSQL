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