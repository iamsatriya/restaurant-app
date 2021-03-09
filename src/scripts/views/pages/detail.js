import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
const Detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    console.log(restaurant);
    return `
    <article class="detail">
    <img src=
    "${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}"
    class="detail__photo" alt="cupcakes">
    <div class="detail__container">
      <div class="detail__fav">
        <div class="detail__bookmark"></div>
      </div>
      <h3 class="heading__secondary">${restaurant.name}</h3>
      <div class="detail__categories">
      ${restaurant.categories.map(
      (category) =>
        `<span class="detail__categories-item">${category.name}</span>`)
      .join()
      .replaceAll(',', '')}
      </div>
      <div class="detail__address-container">
        <div class="detail__icon detail__icon-loc"></div>
        <p class="detail__address-location">
        ${restaurant.address}, <span class="bold">${restaurant.city}</span></p>
      </div>
      <div class="detail__rating-container">
        <div class="detail__icon detail__icon-rating"></div>
        <p class="detail__rating-value">${restaurant.rating.toFixed(1)}</p>
      </div>
      <div class="detail__menu-wrapper">
        <h4 class="detail__menu-title">${Object.keys(restaurant.menus)[0]}</h4>
        <ul>
        ${restaurant.menus.foods.map(
      (food) => `<li class="detail__menu-item">${food.name}</li>`)
      .join().replaceAll(',', '')
}
      </ul>
      </div>
      <div class="detail__menu-wrapper">
        <h4 class="detail__menu-title">${Object.keys(restaurant.menus)[1]}</h4>
        <ul>
        ${restaurant.menus.drinks.map(
      (drink) => `<li class="detail__menu-item">${drink.name}</li>`)
      .join().replaceAll(',', '')
}
      </ul>
      </div>
      <div class="detail__review">
        <h4 class="detail__review-title">Reivew</h4>
        ${restaurant.customerReviews.map((review) =>
    `<div class="detail__review-item">
      <q class="detail__review-comment">${review.review}</q>
      <p class="detail__review-user">${review.name}</p>
      <p class="detail__review-date">${review.date}</p>
    </div>`).join().replaceAll(',', '')}
      </div>
    </div>
  </article>
    `;
  },
  async afterRender() {
    /* const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    console.log(restaurant); */
  },
};
export default Detail;
