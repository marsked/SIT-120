<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
 // update state of the checkbox on screen in real time 
 checked: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <input v-model="email" placeholder="Email">
      <p>Email is: {{ email }}</p>
      <br>
      <input v-model="name" placeholder="Name">
      <p>Name is: {{ name }}</p>
      <br><br>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox"> on? {{ checked }}</label>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
