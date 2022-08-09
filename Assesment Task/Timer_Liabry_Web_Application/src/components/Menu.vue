<script setup>
import MenuItem from './MenuItem.vue'
import NewsIcon from './icons/NewsIcon.vue'
import TimersIcon from './icons/TimersIcon.vue'
import AboutIcon from './icons/AboutIcon.vue'
</script>

<template>
      <MenuItem>
        <template #icon>
          <TimersIcon />
        </template>
        <template #heading>Timers</template>
        Our collection of useful timers  
      </MenuItem>
  <MenuItem>
    <template #icon>
      <NewsIcon />
    </template>
    <template #heading>News & Events</template> 
    Comming Soon
  </MenuItem>


  <MenuItem>
    <template #icon>
      <AboutIcon />
    </template>
    <template #heading>About</template>
    Exciting information about the creator of this appiliaiton 
  </MenuItem>
</template>
