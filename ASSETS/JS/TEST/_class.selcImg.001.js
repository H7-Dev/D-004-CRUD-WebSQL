const inputFile = document.querySelector('.input-file');
const preview = document.querySelector('#preview');

inputFile.addEventListener('change', function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    preview.src = e.target.result;
  }
  reader.readAsDataURL(inputFile.files[0]);
});
