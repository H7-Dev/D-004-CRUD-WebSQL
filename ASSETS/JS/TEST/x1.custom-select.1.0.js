const btnOption = document.querySelector("button.btnOption");
const selcOptions = document.querySelector("ul.selcOptions");

btnOption.addEventListener("click", () => {
  if (selcOptions.classList.contains("show")) {
    selcOptions.classList.remove("show");
  } else {
    const btnRect = btnOption.getBoundingClientRect();

    selcOptions.style.top = `${btnRect.bottom + 5}px`;
    selcOptions.style.left = `${btnRect.left}px`;

    selcOptions.classList.add("show"); // Adiciona a classe "show" para exibir a lista
  }
});
