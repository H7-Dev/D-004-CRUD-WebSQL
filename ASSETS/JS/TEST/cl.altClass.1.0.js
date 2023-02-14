class altClasses {
    constructor(options) {
        this.options = options || {};
        this.elementsToToggle = [];
        this.options.elementsToToggle.forEach(element => {
            const elements = document.querySelectorAll(element);
            this.elementsToToggle = this.elementsToToggle.concat([].slice.call(elements));
        });

        this.activeClass = this.options.activeClass || "active";
        this.disabledClass = this.options.disabledClass || "disabled";
        this.animeClass = this.options.animeClass || "anime";
        this.animeOutClass = this.options.animeOutClass || "animeOut";
        this.delay = this.options.delay || 1100;
    }

    toggle() {
        for (let i = 0; i < this.elementsToToggle.length; i++) {
            const element = this.elementsToToggle[i];
            if (element && element.classList) {
                if (element.classList.contains(this.disabledClass)) {
                    element.classList.remove(this.disabledClass);
                    element.classList.add(this.activeClass);
                    element.classList.add(this.animeClass);
                } else {
                    element.classList.add(this.animeOutClass);
                    setTimeout(() => {
                        if (element && element.classList) {
                            element.classList.remove(this.activeClass);
                            element.classList.remove(this.animeClass);
                            element.classList.remove(this.animeOutClass);
                            element.classList.add(this.disabledClass);
                        }
                    }, this.delay);
                }
            }
        }
    }
}