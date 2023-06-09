<template>
  <div class="users">
    <h1>Child Garden</h1>
    <p>Meet adorable kids in this fun and playful child garden. They are the future generation of users and consumers, bringing joy and laughter to the world.</p>
    <div class="user-list">
      <!-- Add your user elements here -->
    </div>
    <img class="picture" src="https://media.istockphoto.com/id/507498772/photo/two-little-kids-playing-with-garden-hose-and-water.jpg?s=1024x1024&w=is&k=20&c=aeo8s9WSZrad8SQkT6AauCobcJn-FJXEBggbQCZVNVI=" alt="Funny Picture" />
    <img class="picture" src="https://previews.123rf.com/images/anoushkatoronto/anoushkatoronto1907/anoushkatoronto190700038/127122391-kids-friends-splashing-with-gardening-hose-sprinkler-on-backyard-on-summer-day-children-jumping.jpg" alt="Funny Picture" />
  </div>
</template>

<script>
export default {
  name: 'Users',
  // Add your logic here
}
</script>

<style>
.users {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.picture {
  width: 95%;
}
/* Add your styles here */
</style>
