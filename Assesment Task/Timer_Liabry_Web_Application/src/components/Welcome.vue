<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      A selection of timers for the entertainment of an SIT120 project.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: rgb(39, 99, 187);
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* medium screen */
@media (max-width: 1024px) {
  h1 {
    font-weight: 500;
    font-size: 2.0rem;
    top: -10px;
    color: rgb(39, 99, 187);
  }

}

/* small screen */
@media (max-width: 500px) {
  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    top: -10px;
    color: rgb(39, 99, 187);
  }

}
</style>