import CONFIG from '../globals/config';
class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = `
    <a href="/#/detail/${this._restaurant.id}"
    class="recommendation__item" 
    style="
    background-image: 
    url(${CONFIG.BASE_IMAGE_URL}/medium/${this._restaurant.pictureId});">
      <div class="recommendation__text-container">
        <p class="recommendation__city">${this._restaurant.name}</p>
        <p class="recommendation__desc">
        ${this._restaurant.description}
        </p>
      </div>
      <p class="recommendation__rating">
        ${this._restaurant.rating.toFixed(1)}
      </p>
    </a>
    `;
  }
}
customElements.define('restaurant-card', RestaurantCard);
