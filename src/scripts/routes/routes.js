import Detail from '../views/pages/detail';
import Homepage from '../views/pages/homepage';

const routes = {
  '/': Homepage,
  '/homepage': Homepage,
  '/detail/:id': Detail,
};
export default routes;
