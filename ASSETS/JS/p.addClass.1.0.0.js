var addClasses = function(options) {
    // Caso não seja passado nenhum objeto de opções, ele será definido como um objeto vazio
    options = options || {};

    // Seleção do botão padrão ou do botão personalizado na página HTML
    var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");
    console.log(btnSelc);

    // Armazenamento dos elementos na página HTML a serem alternados
    var elementsToToggle = [];
    options.elementsToToggle.forEach(function(element) {
      var elements = document.querySelectorAll(element);
      elementsToToggle = elementsToToggle.concat([].slice.call(elements));
    });

    // Definição da classe padrão ou personalizada para elementos ativados
    var activeClass = options.activeClass || "active";

    // Definição da classe padrão ou personalizada para elementos durante a animação de ativação
    var animeClass = options.animeClass || "anime";

    // Função para alternar a exibição dos elementos
    var adicionarClass = function(elements) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].classList) {
          if (!elements[i].classList.contains(activeClass)) {
            // elements[i].classList.remove(disabledClass);
            elements[i].classList.add(activeClass);
            elements[i].classList.add(animeClass);
          }
        }
      }
    };
    // Adiciona um evento de clique ao botão selecionado para alternar a exibição dos elementos
    if (btnSelc) {
      btnSelc.addEventListener("click", function() {
        adicionarClass(elementsToToggle);
      });
    }
    // Permite que a alterne (ao inicial a página)
    // this.toggle = function() {
    //   adicionarClass(elementsToToggle);
    // };
  };
