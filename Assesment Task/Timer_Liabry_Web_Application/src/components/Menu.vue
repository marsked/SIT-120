<script setup>
import MenuItem from './MenuItem.vue'
import NewsIcon from './icons/NewsIcon.vue'
import TimersIcon from './icons/TimersIcon.vue'
import AboutIcon from './icons/AboutIcon.vue'
</script>

<!-- Lays out the timer block -->
<template>
  <MenuItem>
  <template #icon>
    <TimersIcon />
  </template>
  <template #heading><router-link to="/chesstimer">Chess Timer</router-link></template>
  Our collection of useful timers
  </MenuItem>

  <!-- Lays out the News & Evets Block -->
  <MenuItem>
  <template #icon>
    <NewsIcon />
  </template>
  <template #heading>News & Events</template>
  Comming Soon
  </MenuItem>

  <!-- Lays out the about us block -->
  <MenuItem>
  <template #icon>
    <AboutIcon />
  </template>
  <template #heading>About</template>
  Exciting information about the creator of this appiliaiton
  </MenuItem>
</template>
