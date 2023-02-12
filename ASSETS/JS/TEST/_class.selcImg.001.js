console.log('ImageSelector')
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
        };
        reader.readAsDataURL(this.inputFile.files[0]);
    }
}

const imageSelector = new ImageSelector('.input-file', '#preview');