const btnOption = document.querySelector("button.btnOption");
const selcOptions = document.querySelector("ul.selcOptions");

btnOption.addEventListener("click", () => {
  if (selcOptions.style.display === "block") {
    selcOptions.style.display = "none";
  } else {
    // Obtém a posição do botão em relação à janela de visualização
    const btnRect = btnOption.getBoundingClientRect();

    // Define as posições da lista em relação ao botão
    selcOptions.style.top = `${btnRect.bottom + 5}px`;
    selcOptions.style.left = `${btnRect.left}px`;

    selcOptions.style.display = "block";
  }
});
