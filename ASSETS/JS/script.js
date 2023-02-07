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


// btnAdd.toggle()
