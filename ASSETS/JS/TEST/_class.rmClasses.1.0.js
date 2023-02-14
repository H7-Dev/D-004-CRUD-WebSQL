class RemoveClasses {
    constructor(options) {
        this.options = options || {};
        this.elementsToToggle = [];
    }
    init() {
        this.options.elementsToToggle.forEach(element => {
            const elements = document.querySelectorAll(element);
            this.elementsToToggle = this.elementsToToggle.concat([].slice.call(elements));
        });

        this.animeClass = this.options.animeClass || "anime";
        this.removeClass = this.options.removeClass || "active";
        this.delay = this.options.delay || 900;

        this.removeClasses(this.elementsToToggle);
    }
    removeClasses(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (elements[i].classList.contains(this.removeClass)) {
                    elements[i].classList.add(this.animeClass);
                    setTimeout(() => {
                        elements[i].classList.remove(this.removeClass);
                        elements[i].classList.remove(this.animeClass);
                    }, this.delay);
                }
            }
        }
    }
}
