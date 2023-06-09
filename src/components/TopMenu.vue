<template>
  <div class="top-menu shadow">
    <a class="home-link" href="/">
      <img
        class="home-image"
        src="../assets/default_user.png"
        alt="default user icon"
      />

      Inventory
    </a>

    <input
      type="search"
      name="search"
      class="search"
      placeholder="Поиск"
    >

    <Timer />

    <SocketCounter />
  </div>
</template>

<script>
import Timer from './Timer.vue';
import SocketCounter from './SocketCounter.vue';

export default {
  components: {
    Timer,
    SocketCounter,
  },
};
</script>

<style>
.top-menu {
  position: relative;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  align-items: center;
  background-color: white;
  z-index: 5;
}

.home-link {
  height: 3rem;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 600;
  text-shadow: 0 -1px 1px cyan;
  font-size: 0.6em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.home-image {
  width: 3rem;
  height: 3rem;
  margin-right: -0.1em;
}

.search {
  height: 1.25rem;
  display: inline-flex;
  width: 25%;
  margin: 0 0 0 auto;
}

.search::placeholder {
  position: relative;
  top: -3px;
  font-size: 0.65em;
  padding-left: 0.5rem;
  color: black;
  font-weight: 500;
}

@media (max-width: 560px) {
  .top-menu {
    padding-left: 1rem;
  }

  .home-link {
    font-size: 0.5em;
  }

  .home-image {
    width: 2rem;
    height: 2rem;
  }
}
</style>