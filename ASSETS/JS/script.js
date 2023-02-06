// Criação de uma nova instância da classe altClasses
var tableToggler = new altClasses({
    // btnSelc: ".btnSelc",                     // * Seleciona um botão personalizado na página HTML
    elementsToToggle: [
        "td.action",
        ".thActions",
        ".btnDel",
        ".btnUpdate"
    ],                                      // * Seleciona elementos na página HTML para alternar sua exibição
    // activeClass: "customAtivado",        // * Define a classe para ser adicionada aos elementos quando estiverem ativados
    // disabledClass: "customDesativado",   //  * Define a classe para ser adicionada aos elementos quando estiverem desativados
    animeClass: "saltar",                   // * Define a classe para ser adicionada aos elementos durante a animação de ativação
    animeOutClass: "saltarOut",             // * Define a classe para ser adicionada aos elementos durante a animação de desativação
    delay: 700,                             // * Define o tempo de delay antes da animação de desativação ser concluída
})

// * Chama o método toggle na instância tableToggler
tableToggler.toggle()


var btnAdd = new altClasses({
    btnSelc: ".btnAddRegistro",
    elementsToToggle: [".form"],
    activeClass: "ativado",
    disabledClass: "desativo",
    animeClass: "fadeInDown",
    animeOutClass: "fadeOut",
    delay: 700,
})

btnAdd.toggle()

var btnVoltar = new altClasses({
    btnSelc: ".btnVoltar",
    elementsToToggle: [".form"],
    activeClass: "ativado",
    disabledClass: "desativo",
    animeClass: "fadeInDown",
    animeOutClass: "fadeOut",
    delay: 1700,
})

btnAdd.toggle()
