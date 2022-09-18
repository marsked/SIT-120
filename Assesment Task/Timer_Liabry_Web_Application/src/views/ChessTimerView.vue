<script setup>
import { ref } from 'vue'

// Reactive Ref variables used in HTML 
let min1 = ref(10);
let min2 = ref(10);
let sec1 = ref(0);
let sec2 = ref(0);
let playing = ref(false);
let currentPlayer = ref(0); // zero indexed player no, so 0 = player 1

// Internal function variables not used in HTML 
let timer = null
let p1time = null
let p2time = null
let p1sec = 60;
let p2sec = 60;


// Switch from player 1(0) to player 2(1) and vice versa.
function swap() {
  currentPlayer.value = currentPlayer.value === 0 ? 1 : 0;
  console.log(`swap(): current player = ${currentPlayer.value}`);
}


// Create a class.
class Clock {
  constructor(min) {
    this.min = min;
    this.sec = 60;
  }
  getMinutes() {
    return this.min
  }
}


// Start the clocks ticking.
function start() {

  let p1time = new Clock(min1.value);
  let p2time = new Clock(min2.value);

  playing.value = true;
  // use Javascrip setInterval function to execute the function every
  // 1000 milliseconds (which is every 1 second) 
  timer = setInterval(function () {

    // Working on player 1 (0)
    if (currentPlayer.value === 0) {
      if (playing.value) {
        // if 60 seconds has passed, decrease minutes by 1
        if (p1sec === 60) {
          p1time.min = p1time.min - 1;
        }
        // decrease player 1 seconds by 1 
        p1sec = p1sec - 1;
        // set reactive variables to new min and sec values for display in html
        sec1.value = p1sec;
        min1.value = p1time.min;

        if (p1sec === 0) {
          if (p1sec === 0 && p1time.min === 0) {
            // if seconds is down to 0 and no more minutes remain end the timer and game
            clearInterval(timer);
            playing.value = false;
          }
          // otherwise reset player1 seconds to 60 again ready for next minute
          p1sec = 60;
        }
      }

    } else {
      // Working on player 1 (0)
      if (playing.value) {
        if (p2sec === 60) {
          p2time.min = p2time.min - 1;
        }
        // decrease player 1 seconds by 1 
        p2sec = p2sec - 1;
        sec2.value = p2sec;
        min2.value = p2time.min;

        if (p2sec === 0) {
          if (p2sec === 0 && p2time.min === 0) {
            clearInterval(timer);
            playing.value = false;
          }
          // otherwise reset player2 seconds to 60 again ready for next minute
          p2sec = 60;
        }
      }
    }
  }, 1000)
}

function reset() {
  // reset all time and player values to default start values
  clearInterval(timer);
  playing.value = false;
  min1.value = 10;
  min2.value = 10;
  sec1.value = 0;
  sec2.value = 0;
  p1sec = 60;
  p2sec = 60;
  currentPlayer.value = 0;
}

function isCurrentPlayer(player_no) {
  if (player_no === currentPlayer.value) {
    return true
  } else return false
}

</script>
    
<template>
  <div class="settings">
    <button class="my_button start_button" v-on:click="start()" :disabled="playing">Start</button>
    <button class="my_button reset_button" v-on:click="reset()">Reset</button>
  </div>
  <div class="timer">
    <br>
    <h1>Chess Timer</h1>
    <br>

  </div>

  <div class="players">

    <!-- player 1 -->
    <div class="player one">

      <button class="my_button turn_button" v-on:click="swap()" :class="{ turn_button_enabled : isCurrentPlayer(0) && playing}"
        :disabled="isCurrentPlayer(1) || !playing">End Turn</button>
      <h2 class="label">PLAYER 1</h2>

      <div class="digits">
        <h2 class="numbers" :class="{ active_player_time: isCurrentPlayer(0)}">{{min1}}:{{sec1}}</h2>
      </div>

    </div><!-- END player 1 -->
    <hr>
    <!-- player 2 -->
    <div class="player two">
      <div class="digits">
        <h2 class="numbers" :class="{ active_player_time: isCurrentPlayer(1)}">{{min2}}:{{sec2}}</h2>
      </div>
      <h2 class="label">PLAYER 2</h2>
      <button class="my_button turn_button" v-on:click="swap()" :class="{ turn_button_enabled : isCurrentPlayer(1) && playing}"
        :disabled="isCurrentPlayer(0)">End Turn</button>

    </div><!-- END player 2 -->



  </div><!-- END players -->




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