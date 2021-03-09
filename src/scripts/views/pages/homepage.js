import '../../component/restaurant-list';
import RestaurantDbSource from '../../data/restaurantdb-source';
const Homepage = {
  async render() {
    return `
    <div class="jumbotron">
      <h1 class="jumbotron__title">
        Hungry
        <span class="yellow">?</span>
        <br>you<span class="yellow">'</span>
        re in the right place<span class="yellow">.</span>
      </h1>
    </div>
    <section class="introduction">
      <div class="introduction__container">
        <div class="introduction__left">
          <h2 class="heading__primary">Eating well should<br>be simple.</h2>
          <p>All recommendation restaurant can be found in 
          single click. Eating a healthy diet is not about strict 
          limitations, staying unrealistically thin, or depriving 
          yourself of the foods you love. Rather, it’s about 
          feeling great, having more energy, improving your health, 
          and boosting your mood.</p>
        </div>
        <div class="introduction__right">
          <img src="/images/cupcakes.jpg" alt="Tasty Food">
        </div>
      </div>
      <div class="introduction__container">
        <div class="introduction__right">
          <img src="/images/drink.jpg" alt="Tasty Food">
        </div>
        <div class="introduction__left">
          <h2 class="heading__primary">Drink tasty should<br>be easy.</h2>
          <p> Stay hydrated and choose calorie-free beverages to avoid 
          added sugars. In addition to drinking water, choosing low-fat 
          or fat-free milk, fortified soy beverages, or unsweetened 
          beverages such as 100% fruit or vegetable juice can help meet 
          fluid needs to avoid dehydration while also meeting other 
          food group recommendations, according to the USDA and HHS.</p>
        </div>
      </div>
    </section>
    <section class="recommendation">
      <h2 class="heading__primary">Our recommendation</h2>
      <p>All of our favorite restaurant can be found here. All the 
      restaurant list in the single place, and single click. please 
      feel free to leave your review to our restaurant list</p>
      <div class="recommendation__container">
        <restaurant-list></restaurant-list>
      </div>
    </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};

export default Homepage;
