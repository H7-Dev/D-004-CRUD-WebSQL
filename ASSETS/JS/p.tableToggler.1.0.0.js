var altClasses = function(options) {
    options = options || {};
    var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");
    var elementsToToggle = [];
    options.elementsToToggle.forEach(function(element) {
      var elements = document.querySelectorAll(element);
      elementsToToggle = elementsToToggle.concat([].slice.call(elements));
    });
    var activeClass = options.activeClass || "active";
    var disabledClass = options.disabledClass || "disabled";
    var animeClass = options.animeClass || "anime";
    var animeOutClass = options.animeOutClass || "animeOut";
    var delay = options.delay || 1100;

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

    if (btnSelc) {
      btnSelc.addEventListener("click", function() {
        toggleDisplay(elementsToToggle);
      });
    }

    this.toggle = function() {
      toggleDisplay(elementsToToggle);
    };
  };
