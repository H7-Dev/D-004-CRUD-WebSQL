const selectButton = document.getElementById('select-button');
const selectOptions = document.getElementById('select-options');

selectButton.addEventListener('click', () => {
  selectOptions.classList.toggle('show');
});

selectOptions.addEventListener('click', (event) => {
  const selectedOption = event.target;
  selectButton.textContent = selectedOption.textContent;
  selectOptions.classList.remove('show');
});


const customSelect = document.querySelector('.custom-select');
const optionsList = customSelect.querySelector('ul');

customSelect.addEventListener('click', function () {
  customSelect.classList.toggle('show');
  if (customSelect.classList.contains('show')) {
    showOptionsList();
  } else {
    hideOptionsList();
  }
});

function hideOptionsList() {
  optionsList.style.opacity = '0';
  optionsList.style.transition = 'opacity 0.2s ease-in-out';
  setTimeout(function() {
    optionsList.style.maxHeight = '0';
    optionsList.style.visibility = 'hidden';
  }, 200);
}

function showOptionsList() {
  optionsList.style.maxHeight = '200px';
  optionsList.style.opacity = '1';
  optionsList.style.visibility = 'visible';
  optionsList.style.transition = 'opacity 0.2s ease-in-out 0.2s';
}

customSelect.addEventListener('transitionend', function (event) {
  if (event.propertyName === 'max-height' && !customSelect.classList.contains('show')) {
    hideOptionsList();
  }
});
