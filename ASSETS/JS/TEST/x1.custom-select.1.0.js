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
        selcOptions.style.left = `${btnRect.left}px`;

        // define a largura da lista de seleção igual à largura do botão
        selcOptions.style.width = `${btnWidth}px`;

        selcOptions.classList.add("show");
    }
});