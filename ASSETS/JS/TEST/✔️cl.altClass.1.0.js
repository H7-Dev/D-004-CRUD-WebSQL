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

    toggle() {
        this.alternaClass(document.querySelectorAll(".thActions, .action"));
    }

    alternaClass(elements, inClass = this.inClass, outClass = this.outClass) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].classList) {
                if (elements[i].classList.contains(this.activeClass)) {
                    elements[i].classList.add(outClass);
                    setTimeout(() => {
                        elements[i].classList.remove(this.activeClass);
                        elements[i].classList.remove(outClass);
                    }, this.delay);
                } else {
                    elements[i].classList.add(this.activeClass);
                    elements[i].classList.add(inClass);
                    setTimeout(() => {
                        elements[i].classList.remove(inClass);
                    }, this.delay);
                }
            }
        }
    }
}

/* Exemplor de uso da class */


// const a = document.querySelector('.btnSelc');
// const toggleClasses = new altClass({
//     elementsToToggle: [".thActions", ".action"],
//     activeClass: "active",
//     inClass: "zoomIn",
//     outClass: "saltarOut",
//     delay: 900,
// });

// a.addEventListener('click', (e) => {
//     toggleClasses.toggle();
// });


// $(document).on('click', 'div.bars', function (e) {
//     console.clear()
//     console.log('=> ⚡-click btnBars <=')
//     let $th = $(this)
//     console.log($th)
// })