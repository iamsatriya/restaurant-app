import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
class App {
  constructor({button, drawer, content, closebtn, navLink}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._closebtn = closebtn;
    this._navLink = navLink;

    this._initialAppShell();
  }
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      closebtn: this._closebtn,
      navLink: this._navLink,
    });
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;
