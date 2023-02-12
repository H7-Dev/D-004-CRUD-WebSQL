class ImageSelector {
    constructor(inputFileSelector, previewSelector) {
        this.inputFile = document.querySelector(inputFileSelector);
        this.preview = document.querySelector(previewSelector);
        this.inputFile.addEventListener('change', this.handleInputFileChange.bind(this));
    }

    handleInputFileChange() {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.preview.src = e.target.result;
            this.file = this.inputFile.files[0];
            this.fileName = this.file.name;
            this.fileSize = this.file.size;
            this.fileType = this.file.type;
            document.querySelector('#file-info').innerHTML = `
          Nome: ${this.fileName} <br>
          Tamanho: ${this.fileSize} bytes <br>
          Tipo: ${this.fileType}
        `;
        };
        reader.readAsDataURL(this.inputFile.files[0]);
    }
}

const imageSelector = new ImageSelector('.input-file', '#preview');