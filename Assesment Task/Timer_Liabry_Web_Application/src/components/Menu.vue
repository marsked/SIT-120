<script setup>
//LOCALY registerded components 
import MenuItem from './MenuItem.vue'
import TimersIcon from './icons/TimersIcon.vue'
import StopWatchIcon from './icons/StopWatchIcon.vue'
</script>

<!-- Lays out the chess timer menu item -->
<template>
  <MenuItem>
  <template #icon>
    <TimersIcon />
  </template>
  <template #heading><router-link to="/chesstimer">Chess Timer</router-link></template>
  </MenuItem>

  <!-- Lays out the stop watch menu item-->
  <MenuItem>
  <template #icon>
    <StopWatchIcon />
  </template>
  <template #heading><router-link to="/stopwatch">Stop Watch</router-link></template>
  </MenuItem>

</template>
