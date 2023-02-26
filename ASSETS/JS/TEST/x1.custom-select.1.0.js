const btnOpts = document.querySelector("button.btnOpts");
const ulOptions = document.querySelector("ul.ulOptions");
const inOpts = document.querySelector("input.in_opts");

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

const liOptions = document.querySelectorAll("ul.ulOptions li");

liOptions.forEach(li => {
  li.addEventListener("click", () => {
    btnOpts.textContent = li.textContent;
    inOpts.value = li.getAttribute("value");
    ulOptions.classList.remove("show");
    btnOpts.classList.remove("active");
  });
});
