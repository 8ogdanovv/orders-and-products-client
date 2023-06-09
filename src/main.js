import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store.js';
import App from './App.vue';
import { routes } from './router/routes'; // Import the routes from the created routes.js file

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');