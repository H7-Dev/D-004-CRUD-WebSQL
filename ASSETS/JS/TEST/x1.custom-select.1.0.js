// agora implementar um sombreamento para ul.

const btnOption = document.querySelector("button.btnOption");
const selcOptions = document.querySelector("ul.selcOptions");

btnOption.addEventListener("click", () => {
    // obtém a largura do botão
    const btnWidth = btnOption.offsetWidth;

    if (selcOptions.classList.contains("show")) {
        selcOptions.classList.remove("show");
    } else {
        const btnRect = btnOption.getBoundingClientRect();

        selcOptions.style.top = `${btnRect.bottom + 5}px`;
        selcOptions.style.left = `${btnRect.left -5}px`;

        // define a largura da lista de seleção igual à largura do botão
        selcOptions.style.width = `${btnWidth}px`;

        selcOptions.classList.add("show");
    }
});

// adiciona ouvinte de eventos para detectar o clique em um elemento "li"
selcOptions.addEventListener("click", (event) => {
    // verifica se o elemento clicado é um "li"
    if (event.target.tagName === "LI") {
        // obtém o valor da opção selecionada
        const selectedValue = event.target.getAttribute("value");

        // atualiza o texto do botão com o valor selecionado
        btnOption.textContent = selectedValue;

        // oculta a lista de opções
        selcOptions.classList.remove("show");
    }
});

