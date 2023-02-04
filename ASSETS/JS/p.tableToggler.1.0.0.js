var TableToggler = function(options) {
    console.log('teste')
    options = options || {};
    var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");
    var elementsToToggle = [];
    console.log(elementsToToggle);
    options.elementsToToggle.forEach(function(element) {
      var elements = document.querySelectorAll(element);
      elementsToToggle = elementsToToggle.concat([].slice.call(elements));
    });

    var toggleDisplay = function(elements) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = elements[i].style.display === "none" || !elements[i].style.display ? "table-cell" : "none";
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
