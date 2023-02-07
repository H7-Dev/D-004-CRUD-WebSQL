var removeClasses = function (options) {
    options = options || {};
    var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");

    var elementsToToggle = [];
    options.elementsToToggle.forEach(function (element) {
        var elements = document.querySelectorAll(element);
        elementsToToggle = elementsToToggle.concat([].slice.call(elements));
    });

    var animeClass = options.animeClass || "anime";
    var removeClass = options.removeClass || "active";
    var delay = options.delay || 900;

    var removerClasses = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (elements[i].classList.contains(removeClass)) {
                    elements[i].classList.add(animeClass);
                    (function(i) {
                        setTimeout(function() {
                            elements[i].classList.remove(removeClass);
                            elements[i].classList.remove(animeClass);
                        }, delay);
                    })(i);
                }
            }
        }
    };
    if (btnSelc) {
        btnSelc.addEventListener("click", function () {
            removerClasses(elementsToToggle);
        });
    }
};

var btnVoltar = new removeClasses({
    btnSelc: ".btnVoltar",
    elementsToToggle: [".form"],
    animeClass: "saltarOut",
    removeClass: "ativado",
    // delay: 5000,
});
