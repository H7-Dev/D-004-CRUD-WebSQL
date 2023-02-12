class ImageSelector {
    constructor(inputFileSelector, previewSelector, maxSizeInMB, inNameSelector, inSizeSelector, inTypeSelector) {
      this.inputFileElement = document.querySelector(inputFileSelector);
      this.previewElement = document.querySelector(previewSelector);
      this.maxSizeInBytes = maxSizeInMB * 1024 * 1024;
      this.fileName = '';
      this.fileSizeInBytes = 0;
      this.fileType = '';
      this.nameElement = document.querySelector(inNameSelector);
      this.sizeElement = document.querySelector(inSizeSelector);
      this.typeElement = document.querySelector(inTypeSelector);

      this.inputFileElement.addEventListener('change', this.handleInputFileChange.bind(this));
    }

    handleInputFileChange() {
      const file = this.inputFileElement.files[0];

      if (!file) {
        return;
      }

      this.fileName = file.name;
      this.fileSizeInBytes = file.size;
      this.fileType = file.type;

      if (this.fileSizeInBytes > this.maxSizeInBytes) {
        alert(`Tamanho da imagem excedeu o limite de ${(this.maxSizeInBytes / (1024 * 1024)).toFixed(2)} MB. Selecione uma imagem menor.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        this.previewElement.src = event.target.result;
      };
      reader.readAsDataURL(file);

      this.nameElement.innerHTML  = this.fileName;
      const { size, unit } = this.autoSizeUnit(this.fileSizeInBytes);
      this.sizeElement.innerHTML = `${size.toFixed(2)} ${unit}`;
      this.typeElement.innerHTML = this.fileType;
    }

    autoSizeUnit(sizeInBytes) {
      let size = sizeInBytes;
      let unit = 'bytes';
      if (size >= 1000) {
        size = size / 1000;
        unit = 'kilobytes';
      }
      if (size >= 1000) {
        size = size / 1000;
        unit = 'megabytes';
      }
      if (size >= 1000) {
        size = size / 1000;
        unit = 'gigabytes';
      }
      return { size, unit };
    }
  }

  const imageSelector = new ImageSelector('.input-file', '#preview', 12, '.in_nome', '.in_size', '.in_type');
