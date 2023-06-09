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
  padding-left: 7.5rem;
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
  width: 24%;
  display: inline-flex;
  margin: 0 auto 0 7rem;
}

.search::placeholder {
  position: relative;
  top: -3px;
  font-size: 0.65em;
  padding-left: 0.5rem;
  color: black;
  font-weight: 500;
}

</style>