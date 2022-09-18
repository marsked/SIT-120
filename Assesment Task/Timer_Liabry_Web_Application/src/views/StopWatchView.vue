<script setup>
import { ref } from 'vue'

// Reactive Ref variables used in HTML 
let min = ref(0);
let sec = ref(0);
let running = ref(false);
let lap_time_list = ref([""]);

// Internal function variables not used in HTML 
let timer = null
let watchtime = null
let watchsec = 0;

// Create a class.
class Watch {
  constructor(min) {
    this.min = min;
    this.sec = 0;
  }
  getMinutes() {
    return this.min
  }
}


// Start the watch ticking.
function start() {
  watchtime = new Watch(min.value);
  running.value = true;
  // use Javascrip setInterval function to execute the function every
  // 1000 milliseconds (which is every 1 second) 
  timer = setInterval(function () {

    if (running.value) {
      // if 59 seconds has passed, decrease minutes by 1
      if (watchsec === 59) {
        watchtime.min = watchtime.min + 1;
        watchsec = 0;
      }
      // INCREASE watch seconds by 1 
      watchsec = watchsec + 1;
      // set reactive variables to new min and sec values for display in html
      // Using Intl.NumberFormat()to get 2 digits for seconds so it looks like a stopwatch
      sec.value = new Intl.NumberFormat("en-US",{ minimumIntegerDigits: 2 }).format(watchsec);
      min.value = watchtime.min;
    }
  }, 1000)
}

function lap(minutes, seconds) {
  const new_lap_time_string = `${minutes}:${seconds}`;
  this.lap_time_list.push(new_lap_time_string)
}

function reset() {
  // reset all time and player values to default start values
  clearInterval(timer);
  running.value = false;
  min.value = 0;
  sec.value = 0;
  watchsec = 0;
  this.lap_time_list = []
}
</script>
        
<template>
  <div class="settings">
    <button class="my_button start_button" v-on:click="start()" :disabled="running">Start</button>
    <button class="my_button lap_button" v-on:click="lap(min,sec)" :disabled="!running">Lap</button>
    <button class="my_button reset_button" v-on:click="reset()">Reset</button>
  </div>
  <div class="timer">
    <br>
    <h1>Stop Watch</h1>
    <br>

  </div>


  <div class="stop_watch">
    <div class="digits">
      <h2 class="numbers">{{min}}:{{sec}}</h2>
    </div>

    <br>
    <hr>
    <h3>LAP TIMES:</h3>
    <br>
    <ul id="example-1">
  <li style="list-style-type:none" v-for="item in lap_time_list" :key="item.message">
    {{ item }}
  </li>
</ul>
  </div>

</template>
        
<style scoped>
.settings {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.timer {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.my_button {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  border: none;
  margin: 10px;
}

.turn_button_disabled {
  background-color: var(--color-text);
  color: var(--color-text);
  cursor: none;
}

.turn_button_enabled {
  background-color: var(--color-heading);
  color: var(--color-text);
  cursor: pointer;
}

.start_button {
  background-color: var(--color-border);
}

.lap_button {
  background-color: var(--color-heading);
  color: var(--color-text);
}

.reset_button {
  background-color: var(--color-red);
}

.active_player_time {
  color: var(--color-border);
}

.digits {
  font-size: 3.5rem;
  color: var(--color-text);
}
</style>