const logo = document.querySelector('.logo');
const cssFile = document.getElementById('cssFile');

logo.addEventListener('click', () => {
  const currentCssFile = cssFile.getAttribute('href');
  const newCssFile = currentCssFile.includes('black') ? './css/white.css' : './css/black.css';
  cssFile.setAttribute('href', newCssFile);
});