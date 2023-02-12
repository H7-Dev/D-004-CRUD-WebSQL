class DragAndDrop {
    constructor(wrapperSelector, headerSelector) {
      this.wrapper = document.querySelector(wrapperSelector);
      this.header = this.wrapper.querySelector(headerSelector);
      this.originalLeft = this.wrapper.offsetLeft;
      this.originalTop = this.wrapper.offsetTop;
      this.isDragging = false;
    }

    onDrag({ movementX, movementY }) {
      if (!this.isDragging) return;

      let leftVal = parseInt(this.wrapper.style.left || this.originalLeft);
      let topVal = parseInt(this.wrapper.style.top || this.originalTop);
      this.wrapper.style.left = `${leftVal + movementX}px`;
      this.wrapper.style.top = `${topVal + movementY}px`;
    }

    resetPosition() {
      this.wrapper.style.left = `${this.originalLeft}px`;
      this.wrapper.style.top = `${this.originalTop}px`;
    }

    handleHeaderMouseDown() {
      this.header.classList.add("activeMove");
      this.isDragging = true;
      this.header.addEventListener("mousemove", this.onDrag.bind(this));
    }

    handleDocumentMouseUp() {
      this.header.classList.remove("activeMove");
      this.header.removeEventListener("mousemove", this.onDrag);
      this.isDragging = false;
    }

    enable() {
      this.header.addEventListener("mousedown", this.handleHeaderMouseDown.bind(this));
      document.addEventListener("mouseup", this.handleDocumentMouseUp.bind(this));
      this.header.addEventListener("dblclick", this.resetPosition.bind(this));
    }
  }

  const dragAndDrop = new DragAndDrop("div.selcImg", "body > div.selcImg > div.header");
  dragAndDrop.enable();
