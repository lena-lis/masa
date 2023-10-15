import '../utils/scroll-lock';
import {isEscapeKey} from '../utils/utils';

const mainHeaderElement = document.querySelector('[data-main-header]');
const navMainElement = document.querySelector('[data-nav-main]');
const navToggleButton = document.querySelector('[data-nav-toggle]');
const navMenuElement = document.querySelector('[data-nav-menu]');

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

function onOverlayClick(evt) {
  const menuTargeted = evt.target === navMainElement || navMainElement.contains(evt.target);
  const navMenuElementIsOpen = navMenuElement.classList.contains('is-open');

  if (!menuTargeted && navMenuElementIsOpen) {
    closeMenu();
  }
}

function closeMenu() {
  mainHeaderElement.classList.remove('is-active');
  navToggleButton.classList.remove('is-open');
  navMenuElement.classList.remove('is-open');
  window.scrollLock.enableScrolling();
  navToggleButton.removeEventListener('click', closeMenu);
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onDocumentKeydown);
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
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const onNavToggleButtonClick = () => {
  if (!mainHeaderElement && !navToggleButton && !navMenuElement) {
    return;
  }

  navToggleButton.addEventListener('click', openMenu);
};

export {onNavToggleButtonClick};
