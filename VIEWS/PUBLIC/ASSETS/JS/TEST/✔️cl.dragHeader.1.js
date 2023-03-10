class Draggable {
    constructor({wrapperSelector, headerSelector, customClass = "activeMove"}) {
        this.wrapper = document.querySelector(wrapperSelector);
        this.header = this.wrapper.querySelector(headerSelector);
        this.active = false;
        this.customClass = customClass;

        this.onDrag = this.onDrag.bind(this);
        this.init();
    }
    init() {
        this.header.addEventListener("mousedown", this.handleMouseDown.bind(this));
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.wrapper.addEventListener("dblclick", this.handleDoubleClick.bind(this));
    }
    handleMouseDown() {
        this.active = true;
        this.header.classList.add(this.customClass);
        this.header.addEventListener("mousemove", this.onDrag);
    }

    handleMouseUp() {
        this.active = false;
        this.header.classList.remove(this.customClass);
        this.header.removeEventListener("mousemove", this.onDrag);
    }

    onDrag({
        movementX,
        movementY
    }) {
        let getStyle = window.getComputedStyle(this.wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        this.wrapper.style.left = `${leftVal + movementX}px`;
        this.wrapper.style.top = `${topVal + movementY}px`;
    }

    handleDoubleClick() {
        this.wrapper.style.left = "";
        this.wrapper.style.top = "";
    }
}



const draggable = new Draggable({
    wrapperSelector: "body > div.form",
    headerSelector: "body > div.form > div > div.header"
})
const draggableX = new Draggable({
    wrapperSelector: "body > div.selcImg",
    headerSelector: "body > div.selcImg > div.header",
    customClass: "activeMoveX"
})