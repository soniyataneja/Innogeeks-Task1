const colorInput = document.getElementById('colorInput');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
  const color = colorInput.value;
  document.body.style.backgroundColor = color;
});