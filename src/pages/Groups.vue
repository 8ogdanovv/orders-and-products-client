<template>
  <div class="groups">
    <h1>Kids' Grouping Skills</h1>
    <p>Did you know that kids are natural experts at grouping things? Whether it's arranging toys, organizing colors, or categorizing shapes, they can create masterpieces with randomly designed orders. Explore their imaginative world of groupings!</p>

    <div class="picture-placeholder">
      <img class="image" src="https://m.media-amazon.com/images/I/518AoJxj5CL._AC_UF350,350_QL80_.jpg" alt="grouping skills">
    </div>

    <h1>Programmer Groups</h1>
    <p>Discover various groups of programmers and coding enthusiasts. They gather to crack the code and debug the mysteries of the digital world, one line at a time.</p>

    <div class="picture-placeholder">
      <a href="https://devdojo.com/devdojo/10-awesome-programming-jokes" target="_blank">
      <img class="image" src="https://cdn.devdojo.com/images/May2017/10-awesome-programming-jokes.jpg" alt="10 jokes"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Groups',
  // Add your logic here
}
</script>

<style>
.groups {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.picture-placeholder {
  width: 95%;
}

.image {
  width: 100%;
}
</style>
