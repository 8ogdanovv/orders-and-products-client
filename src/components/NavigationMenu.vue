<template>
  <div class="navigation">
    <menu class="navigation-menu shadow">
      <li
        v-for="(menuItem, index) in menuItems"
        :key="index"
        @click="changeSelectedTo(menuItem.route.path)"
      >
        <router-link
          :to="menuItem.route.path"
          :class="['navigation-menu-item', { selected: isSelected(menuItem.route.path) }]"
        >
          {{ menuItem.label }}
        </router-link>
      </li>
    </menu>

    <div class="overlay" v-show="showDeleteWindow"></div>

    <transition name="fade">
      <router-view :key="route.value" class="show-area" />
    </transition>
  </div>
</template>

<script>
import { watch, ref, computed, onMounted } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes.js';

export default {
  setup() {
    const route = ref('/');
    const showDeleteWindow = ref(false);

    const menuItems = ref([
      { id: 'nav-link-0', label: 'ORDERS', route: routes.find((r) => r.path === '/orders') },
      { id: 'nav-link-1', label: 'GROUPS', route: routes.find((r) => r.path === '/groups') },
      { id: 'nav-link-2', label: 'PRODUCTS', route: routes.find((r) => r.path === '/products') },
      { id: 'nav-link-3', label: 'USERS', route: routes.find((r) => r.path === '/users') },
      { id: 'nav-link-4', label: 'SETTINGS', route: routes.find((r) => r.path === '/settings') },
      { id: 'nav-link-5', label: 'TECHNOLOGIES', route: routes.find((r) => r.path === '/tech-stack') },
    ]);

    const isSelected = (routePath) => {
      return route.value === routePath;
    };

    const changeSelectedTo = (routePath) => {
      showDeleteWindow.value = false;
      const showAreaElement = document.querySelector('.show-area');
      if (showAreaElement) {
        showAreaElement.style.opacity = '0';
        const selectedItemElement = document.querySelector('.navigation-menu-item.selected');
        if (selectedItemElement) {
          selectedItemElement.classList.remove('selected');
          selectedItemElement.addEventListener('transitionend', () => {
            route.value = routePath;
            showAreaElement.style.opacity = '1';
            selectedItemElement.classList.add('selected');
          }, { once: true });
        } else {
          route.value = routePath;
          showAreaElement.style.opacity = '1';
        }
      } else {
        route.value = routePath;
      }
    };

    // Create the router instance
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    // Set the initial route value based on the current location
    route.value = router.currentRoute.value.path;

    // Listen to route changes and update the route value accordingly
    router.afterEach((to) => {
      route.value = to.path;
    });

    // Mount the router
    onMounted(() => {
      router.isReady().then(() => {
        router.mount('#app');
      });
    });

    watch(route, (newRoute, oldRoute) => {
      const showAreaElement = document.querySelector('.show-area');
      if (showAreaElement) {
        showAreaElement.style.opacity = '0';
        setTimeout(() => {
          showAreaElement.style.opacity = '1';
        }, 0);
      }
    });

    return {
      menuItems,
      isSelected,
      changeSelectedTo,
      showDeleteWindow,
      route,
    };
  },
};
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.navigation {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 2rem 0;
}

.navigation-menu {
  padding: 0;
  top: 0;
  left: 0;
  list-style: none;
  font-size: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 20dvh;
  width: 8rem;
  height: 75dvh;
  position: relative;
  z-index: 9999;
  background-color: white;
}

.navigation-menu::before {
  content: '';
  position: absolute;
  top: 5dvh;
  left: 50%;
  transform: translate(-50%);
  width: 4rem;
  height: 4rem;
  background-image: url('./../assets/photo956.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
}

.navigation-menu * {
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  color: black;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: 0.2rem solid transparent;
  cursor: pointer;
  position: relative;
  z-index: 999;
  transition: border-bottom 0.5s;
}

.navigation-menu-item * {
  margin: 0.25rem 0;
}

.navigation-menu-item.selected {
  border-bottom: 2px solid var(--color-secondary);
}

.navigation-menu-item.selected::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: var(--color-secondary);
  transition: height 0.5s;
}

.navigation-menu-item.selected.selected::after {
  height: 3px;
}

.show-area {
  padding: 3rem 5rem;
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
