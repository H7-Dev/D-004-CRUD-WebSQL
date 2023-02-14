
class Draggable {
    constructor(wrapperSelector, headerSelector) {
        this.wrapper = document.querySelector(wrapperSelector);
        this.header = this.wrapper.querySelector(headerSelector);
        this.activeMove = false;

        this.onDrag = this.onDrag.bind(this);
        this.init();
    }

    init() {
        this.header.addEventListener("mousedown", this.handleMouseDown.bind(this));
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.wrapper.addEventListener("dblclick", this.handleDoubleClick.bind(this));
    }

    handleMouseDown() {
        this.activeMove = true;
        this.header.classList.add("activeMove");
        this.header.addEventListener("mousemove", this.onDrag);
    }

    handleMouseUp() {
        this.activeMove = false;
        this.header.classList.remove("activeMove");
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
        this.wrapper.style.left = "0px";
        this.wrapper.style.top = "0px";
    }
}


const draggable = new Draggable("body > div.form", "body > div.form > div > div.header");