const wrapper = document.querySelector("body > div.form"),
     header = wrapper.querySelector("body > div.form > div > div.header");

function onDrag({
    movementX,
    movementY
}) {
    console.log('=> 👉 func  onDrag <=')
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", () => {
    header.classList.add("activeMove");
    header.addEventListener("mousemove", onDrag);
})
document.addEventListener("mouseup", () => {
    header.classList.remove("activeMove");
    header.removeEventListener("mousemove", onDrag);
})
wrapper.addEventListener("dblclick", () => {
    wrapper.style.left = "0px";
    wrapper.style.top = "0px";
})