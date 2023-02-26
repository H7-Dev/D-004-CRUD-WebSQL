class customSelc {
    constructor(btnOptsSelector, ulOptionsSelector, liOptsSelector) {
        this.btnOptsList = document.querySelectorAll(btnOptsSelector);
        this.ulOptionsList = document.querySelectorAll(ulOptionsSelector);
        this.liOptsSelector = liOptsSelector;

        // verifica se os elementos foram encontrados
        if (this.btnOptsList.length === 0) {
            console.error(`Nenhum elemento com o seletor '${btnOptsSelector}' foi encontrado.`);
        }

        if (this.ulOptionsList.length === 0) {
            console.error(`Nenhum elemento com o seletor '${ulOptionsSelector}' foi encontrado.`);
        }

        this.btnOptsList.forEach((btnOpts, index) => {
            const ulOptions = this.ulOptionsList[index];

            // verifica se o elemento foi encontrado
            if (!ulOptions) {
                console.error(`Nenhum elemento ulOptions foi encontrado para o índice ${index}.`);
                return;
            }

            const liOptsList = ulOptions.querySelectorAll(this.liOptsSelector);

            // verifica se os elementos foram encontrados
            if (liOptsList.length === 0) {
                console.error(`Nenhum elemento liOpts foi encontrado para o índice ${index}.`);
                return;
            }

            liOptsList.forEach((liOpts) => {
                liOpts.addEventListener("click", () => {
                    this.onOptionSelected(btnOpts, liOpts, ulOptions);
                });
            });

            btnOpts.addEventListener("click", () => {
                this.onButtonClicked(btnOpts, ulOptions);
            });

            document.addEventListener("click", (event) => {
                this.onDocumentClicked(event, btnOpts, ulOptions);
            });
        });
    }

    onOptionSelected(btnOpts, liOpts, ulOptions) {
        const selectedOption = liOpts.innerText;
        const inputOpts = btnOpts.closest('.dropDown').querySelector('.in_opts');
        const btnText = btnOpts;

        inputOpts.value = liOpts.getAttribute("value");
        btnText.innerText = selectedOption;

        ulOptions.classList.remove("show");
        btnOpts.classList.remove("active");
    }

    onButtonClicked(btnOpts, ulOptions) {
        // obtém a largura do botão
        const btnWidth = btnOpts.offsetWidth;

        if (ulOptions.classList.contains("show")) {
            ulOptions.classList.remove("show");
            btnOpts.classList.remove("active");
        } else {
            const btnRect = btnOpts.getBoundingClientRect();

            ulOptions.style.top = `${btnRect.bottom + 5}px`;
            ulOptions.style.left = `${btnRect.left}px`;

            // define a largura da lista de seleção igual à largura do botão
            ulOptions.style.width = `${btnWidth}px`;

            ulOptions.classList.add("show");
            btnOpts.classList.add("active");
        }
    }

    onDocumentClicked(event, btnOpts, ulOptions) {
        const isClickInside = btnOpts.contains(event.target) || ulOptions.contains(event.target);

        if (!isClickInside) {
            ulOptions.classList.remove("show");
            btnOpts.classList.remove("active");
        }
    }
}
