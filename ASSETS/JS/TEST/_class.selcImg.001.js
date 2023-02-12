class ImageSelector {
    constructor(inputFileSelector, previewSelector, unit = 'bytes', maxSize = 0, nomeSelector, sizeSelector, typeSelector) {



      this.inputFile = document.querySelector(inputFileSelector);
      this.preview = document.querySelector(previewSelector);
      this.unit = unit;
      this.maxSize = maxSize;
      this.inputFile.addEventListener('change', this.handleInputFileChange.bind(this));
      this.nomeElement = document.querySelector(nomeSelector);
       this.sizeElement = document.querySelector(sizeSelector);
       this.typeElement = document.querySelector(typeSelector);
    }

    handleInputFileChange() {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.file = this.inputFile.files[0];
        this.fileSizeInSelectedUnit = this.convertToSelectedUnit(this.file.size);

        if (this.fileSizeInSelectedUnit > this.maxSize) {
          alert(`O tamanho máximo permitido é de ${this.maxSize} ${this.unit}. Por favor, selecione outra imagem.`);
          return;
        }

        this.preview.src = e.target.result;
        this.fileName = this.file.name;
        this.fileSize = this.file.size;
        this.fileType = this.file.type;

        document.querySelector('#file-info').innerHTML = `
          Nome: ${this.fileName} <br>
          Tamanho: ${this.humanizeSize(this.fileSizeInSelectedUnit)} ${this.unit} <br>
          Tipo: ${this.fileType}
        `;
        this.nomeElement.value = this.fileName;
        this.sizeElement.value = `${this.humanizeSize(this.fileSizeInSelectedUnit)} ${this.unit}`;
        this.typeElement.value = this.fileType;
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

  const imageSelector = new ImageSelector('.input-file', '#preview', 'megabytes', 5, '#in_nome', '#in_size', '#in_type');