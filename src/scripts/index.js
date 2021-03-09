import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../scripts/component/restaurant-list.js';
import App from './views/app';


const app = new App({
  button: document.querySelector('#hamburger-menu'),
  drawer: document.querySelector('#header__nav'),
  content: document.querySelector('#main-content'),
  closebtn: document.querySelector('#close-menu'),
  navLink: document.querySelectorAll('#header__nav a'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
});
