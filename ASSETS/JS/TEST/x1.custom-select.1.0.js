const customSelect = document.querySelector('.custom-select');
const button = customSelect.querySelector('button');
const optionsList = customSelect.querySelector('ul');

button.addEventListener('click', function() {
  optionsList.classList.toggle('show');
  button.classList.toggle('open');
});

optionsList.querySelectorAll('li').forEach(function(option) {
  option.addEventListener('click', function() {
    button.textContent = option.textContent;
    optionsList.classList.remove('show');
    button.classList.remove('open');
  });
});
