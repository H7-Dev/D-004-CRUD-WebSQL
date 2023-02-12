class ImageSelector {
    constructor(inputFileSelector, previewSelector, unit = 'bytes') {
        this.inputFile = document.querySelector(inputFileSelector);
        this.preview = document.querySelector(previewSelector);
        this.unit = unit;
        this.inputFile.addEventListener('change', this.handleInputFileChange.bind(this));
    }

    handleInputFileChange() {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.preview.src = e.target.result;
            this.file = this.inputFile.files[0];
            this.fileName = this.file.name;
            this.fileSize = this.file.size;
            this.fileSizeInSelectedUnit = this.convertToSelectedUnit(this.file.size);
            this.fileType = this.file.type;
            document.querySelector('#file-info').innerHTML = `
          Nome: ${this.fileName} <br>
          Tamanho: ${this.humanizeSize(this.fileSizeInSelectedUnit)} ${this.unit} <br>
          Tipo: ${this.fileType}
        `;
        };
        reader.readAsDataURL(this.inputFile.files[0]);
    }

    convertToSelectedUnit(sizeInBytes) {
        switch (this.unit) {
            case 'bytes':
                return sizeInBytes;
            case 'kilobytes':
                return sizeInBytes / 1024;
            case 'megabytes':
                return sizeInBytes / (1024 * 1024);
            case 'gigabytes':
                return sizeInBytes / (1024 * 1024 * 1024);
            default:
                return sizeInBytes;
        }
    }

    humanizeSize(size) {
        return new Intl.NumberFormat().format(size);
    }
}

const imageSelector = new ImageSelector(
    '.input-file',
    '#preview',
    'megabytes'
)