let darkMode = localStorage.getItem('dark');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const navbar = document.querySelector('#navbar');

// check if dark mode is enabled
// if its enabled, we want to turn it off
// if its disabled, turn it on

const enableDarkMode = () => {
  // 1. add class dark to the body
  document.body.classList.add('dark');
  darkModeToggle.innerHTML = 'Light';
  // 2. update dark in the localstorage
  localStorage.setItem('dark', 'enabled');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

const disableDarkMode = () => {
  // 1. add class dark to the body
  document.body.classList.remove('dark');
  darkModeToggle.innerHTML = 'Dark';
  // 2. update dark in the localstorage
  localStorage.setItem('dark', null);
};

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('dark');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
