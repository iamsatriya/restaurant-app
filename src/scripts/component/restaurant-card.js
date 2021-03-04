class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
    .${this._restaurant.id} {
      background-image: url(${this._restaurant.pictureId});
    }
    </style>
    <div class="recommendation__item ${this._restaurant.id}">
      <div class="recommendation__text-container">
        <p class="recommendation__city">${this._restaurant.name}</p>
        <p class="recommendation__desc">
        ${this._restaurant.description}
        </p>
      </div>
      <p class="recommendation__rating">
        ${this._restaurant.rating.toFixed(1)}
      </p>
    </div>
    `;
  }
}
customElements.define('restaurant-card', RestaurantCard);
