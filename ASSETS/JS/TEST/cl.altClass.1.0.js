class altClass {
    constructor(options = {}) {
        this.elementsToToggle = [];
        options.elementsToToggle.forEach((element) => {
            const elements = document.querySelectorAll(element);
            this.elementsToToggle = this.elementsToToggle.concat([].slice.call(elements));
        });

        this.activeClass = options.activeClass || "active";
        this.inClass = options.inClass || "zoomIn";
        this.outClass = options.outClass || "animeOut";
        this.delay = options.delay || 900;
    }

    alternaClass(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (elements[i].classList.contains(this.activeClass)) {
                    elements[i].classList.add(this.outClass);
                    setTimeout(() => {
                        elements[i].classList.remove(this.activeClass);
                        elements[i].classList.remove(this.outClass);
                    }, this.delay);
                } else {
                    elements[i].classList.add(this.activeClass);
                    elements[i].classList.add(this.inClass);
                    setTimeout(() => {
                        elements[i].classList.remove(this.inClass);
                    }, this.delay);
                }
            }
        }
    }
}

const a = document.querySelector('.btnSelc');

a.addEventListener('click', (e) => {
    const toggleClasses = new altClass({
        elementsToToggle: [".thActions", ".action"],
        activeClass: "active",
        inClass: "zoomIn",
        outClass: "saltarOut",
        delay: 900,
    });
    toggleClasses.alternaClass(document.querySelectorAll(".thActions, .action"));
});



/* Exemplo de uso */
// const element = document.getElementById('my-element');
// const classToggler = new ClassToggler(element);

// classToggler.toggleClass('my-class'); // adiciona a classe "my-class" se ela não existir no elemento ou remove-a se ela já existir