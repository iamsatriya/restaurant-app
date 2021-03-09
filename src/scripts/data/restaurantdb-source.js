import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.HOMEPAGE);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }
  static async restaurantDetail(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
};

export default RestaurantDbSource;
