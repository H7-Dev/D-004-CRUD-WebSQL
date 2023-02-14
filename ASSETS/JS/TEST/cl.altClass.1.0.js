class altClass {
    constructor(options = {}) {
        this.elementsToToggle = [];
        options.elementsToToggle.forEach((element) => {
            const elements = document.querySelectorAll(element);
            this.elementsToToggle = this.elementsToToggle.concat([].slice.call(elements));
        });

        this.activeClass = options.activeClass || "active";
        this.animeClass = options.animeClass || "anime";
        this.delay = options.delay || 900;
    }

    alternaClass(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (elements[i].classList.contains(this.activeClass)) {
                    elements[i].classList.remove(this.activeClass);
                } else {
                    elements[i].classList.add(this.activeClass);
                    elements[i].classList.add(this.animeClass);
                    setTimeout(() => {
                        elements[i].classList.remove(this.animeClass);
                    }, this.delay);
                }
            }
        }
    }
}



/* Exemplo de uso */
// const element = document.getElementById('my-element');
// const classToggler = new ClassToggler(element);

// classToggler.toggleClass('my-class'); // adiciona a classe "my-class" se ela não existir no elemento ou remove-a se ela já existir