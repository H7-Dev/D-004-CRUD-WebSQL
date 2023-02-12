class AddClasses {
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
    adicionarClass(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (!elements[i].classList.contains(this.activeClass)) {
                    elements[i].classList.add(this.activeClass);
                    elements[i].classList.add(this.animeClass);
                }
            }
        }
        setTimeout(() => {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i] && elements[i].classList) {
                    elements[i].classList.remove(this.animeClass);
                }
            }
        }, this.delay);
    }
    add() {
        this.adicionarClass(this.elementsToToggle);
    }
}
