const btnOptsList = document.querySelectorAll("button.btnOpts");
const ulOptionsList = document.querySelectorAll("ul.ulOptions");

// verifica se os elementos foram encontrados
if (btnOptsList.length === 0) {
    console.error("Nenhum elemento com a classe 'btnOpts' foi encontrado.");
}

if (ulOptionsList.length === 0) {
    console.error("Nenhum elemento com a classe 'ulOptions' foi encontrado.");
}

// adiciona o evento de clique em cada botão
btnOptsList.forEach((btnOpts, index) => {
    const ulOptions = ulOptionsList[index];

    // verifica se o elemento foi encontrado
    if (!ulOptions) {
        console.error(`Nenhum elemento ulOptions foi encontrado para o índice ${index}.`);
        return;
    }

    const liOptsList = ulOptions.querySelectorAll("li.liOpts");

    // verifica se os elementos foram encontrados
    if (liOptsList.length === 0) {
        console.error(`Nenhum elemento liOpts foi encontrado para o índice ${index}.`);
        return;
    }

    liOptsList.forEach((liOpts) => {
        liOpts.addEventListener("click", () => {
            const selectedOption = liOpts.innerText;
            const inputOpts = ulOptions.previousElementSibling;
            const btnText = btnOpts;

            inputOpts.value = liOpts.getAttribute("value");
            console.log(selectedOption)
            btnText.innerText = selectedOption;

            ulOptions.classList.remove("show");
            btnOpts.classList.remove("active");
        });
    });

    btnOpts.addEventListener("click", () => {
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
    });

    document.addEventListener("click", (event) => {
        const isClickInside = btnOpts.contains(event.target) || ulOptions.contains(event.target);

        if (!isClickInside) {
            ulOptions.classList.remove("show");
            btnOpts.classList.remove("active");
        }
    });
});