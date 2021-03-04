import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';
import '../scripts/component/restaurant-list.js';

const restaurantList = document.querySelector('restaurant-list');

const loadRestaurant = () => {
  restaurantList.restaurants = data.restaurants;
};

document.addEventListener('DOMContentLoaded', function() {
  loadRestaurant();
});
