import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';
import '../scripts/component/restaurant-list.js';

const restaurantList = document.querySelector('restaurant-list');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const headerNav = document.querySelector('#header__nav');
const closeNav = document.querySelector('#close-menu');

hamburgerMenu.addEventListener('click', function() {
  headerNav.classList.toggle('active');
});
closeNav.addEventListener('click', function() {
  headerNav.classList.toggle('active');
});

const loadRestaurant = () => {
  restaurantList.restaurants = data.restaurants;
};

document.addEventListener('DOMContentLoaded', function() {
  loadRestaurant();
});
