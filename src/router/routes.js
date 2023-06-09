// routes.js
import Orders from '../pages/Orders.vue';
import Groups from '../pages/Groups.vue';
import Products from '../pages/Products.vue';
import Users from '../pages/Users.vue';
import Settings from '../pages/Settings.vue';
import TechStack from '../pages/TechStack.vue';

export const routes = [
  { path: '/', component: { template: '<div>Home</div>' } },
  { path: '/orders', component: Orders },
  { path: '/groups', component: Groups },
  { path: '/products', component: Products },
  { path: '/users', component: Users },
  { path: '/settings', component: Settings },
  { path: '/tech-stack', component: TechStack },
];
