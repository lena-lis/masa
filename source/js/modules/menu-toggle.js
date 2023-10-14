import '../utils/scroll-lock';

const mainHeaderElement = document.querySelector('[data-main-header]');
// const navMainElement = document.querySelector('[data-nav-main]');
const navToggleButton = document.querySelector('[data-nav-toggle]');
const navMenuElement = document.querySelector('[data-nav-menu]');

function closeMenu() {
  mainHeaderElement.classList.remove('is-active');
  navToggleButton.classList.remove('is-open');
  navMenuElement.classList.remove('is-open');
  window.scrollLock.enableScrolling();
  navToggleButton.removeEventListener('click', closeMenu);
}

const openMenu = () => {
  if (!navToggleButton) {
    return;
  }

  mainHeaderElement.classList.add('is-active');
  navToggleButton.classList.add('is-open');
  navMenuElement.classList.add('is-open');
  window.scrollLock.disableScrolling();
  navToggleButton.addEventListener('click', closeMenu);
};

const onNavToggleButtonClick = () => {
  if (!mainHeaderElement && !navToggleButton && !navMenuElement) {
    return;
  }

  navToggleButton.addEventListener('click', openMenu);
};

export {onNavToggleButtonClick};
