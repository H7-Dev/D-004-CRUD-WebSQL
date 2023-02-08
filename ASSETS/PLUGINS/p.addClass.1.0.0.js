var addClasses = function (options) {
    options = options || {};

    var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");

    var elementsToToggle = [];
    options.elementsToToggle.forEach(function (element) {
        var elements = document.querySelectorAll(element);
        elementsToToggle = elementsToToggle.concat([].slice.call(elements));
    });

    var activeClass = options.activeClass || "active";
    var animeClass = options.animeClass || "anime";
    var delay = options.delay || 900;

    var adicionarClass = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (!elements[i].classList.contains(activeClass)) {
                    elements[i].classList.add(activeClass);
                    elements[i].classList.add(animeClass);
                }
            }
        }
        setTimeout(function() {
            for (var i = 0; i < elements.length; i++) {
                if (elements[i] && elements[i].classList) {
                    elements[i].classList.remove(animeClass);
                }
            }
        }, delay);
    };
    if (btnSelc) {
        btnSelc.addEventListener("click", function () {
            adicionarClass(elementsToToggle);
        });
    }
};

var btnAdd = new addClasses({
    btnSelc: ".btnAddRegistro",
    elementsToToggle: [".form"],
    activeClass: "ativado",
    animeClass: "zoomIn",
    // delay: 3000,
});
