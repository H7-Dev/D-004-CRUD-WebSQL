var altClasses = function(options) {
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

    // Definição da classe padrão ou personalizada para elementos desativados
    var disabledClass = options.disabledClass || "disabled";

    // Definição da classe padrão ou personalizada para elementos durante a animação de ativação
    var animeClass = options.animeClass || "anime";

    // Definição da classe padrão ou personalizada para elementos durante a animação de desativação
    var animeOutClass = options.animeOutClass || "animeOut";

    // Definição do tempo de delay antes da animação de desativação ser concluída
    var delay = options.delay || 1100;

    // Função para alternar a exibição dos elementos
    var toggleDisplay = function(elements) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].classList) {
          if (elements[i].classList.contains(disabledClass)) {
            elements[i].classList.remove(disabledClass);
            elements[i].classList.add(activeClass);
            elements[i].classList.add(animeClass);
          } else {
            elements[i].classList.add(animeOutClass);
            (function(index) {
              setTimeout(function() {
                if (elements[index] && elements[index].classList) {
                  elements[index].classList.remove(activeClass);
                  elements[index].classList.remove(animeClass);
                  elements[index].classList.remove(animeOutClass);
                  elements[index].classList.add(disabledClass);
                }
              }, delay);
            })(i);
          }
        }
      }
    };

    // Adiciona um evento de clique ao botão selecionado para alternar a exibição dos elementos
    if (btnSelc) {
      btnSelc.addEventListener("click", function() {
        toggleDisplay(elementsToToggle);
      });
    }

    // Permite que a alterne
    this.toggle = function() {
      toggleDisplay(elementsToToggle);
    };
  };
