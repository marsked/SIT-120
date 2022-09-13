<script setup>
    import { ref } from 'vue'
  
  let min1 = ref(10);
  let min2 = ref(10);
  let sec1 = ref(0);
  let  sec2 = ref(0);
  let  p1sec = 60;
  let  p2sec = 60;
  let playing = false;
  let  currentPlayer = 0;
  
  
  // Switch from player 1(0) to player 2(1) and vice versa.
  function swap() {
      currentPlayer = currentPlayer === 0 ? 1 : 0;
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
  
  // Create an instance of the clock for each player from the Clock class.
  let p1time = new Clock(min1.value);
  let p2time = new Clock(min2.value);
  
  
  // Start the clocks ticking.
  function start() {
    playing = true;
    // use Javascrip setInterval function to execute the function every
    // 1000 milliseconds (which is every 1 second) 
    let timer = setInterval(function () {
  
      // Working on player 1 (0)
      if (currentPlayer === 0) {
        if (playing) {
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
              playing = false;
            }
            // otherwise reset player 1 seconds to 60 again ready for next minute
            p1sec = 60;
          }
        }
  
      } else {
      // Working on player 1 (0)
        if (playing) {
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
              playing = false;
            }
            // otherwise reset plkayer 2 seconds to 60 again ready for next minute
            p2sec = 60;
          }
        }
      }
    }, 1000)
  }
  
  </script>
    
  <template>
    <div class="timer">
      <h1>Chess Timer</h1>
      <button v-on:click="start()">Start</button>
    </div>
  
    <div class="players">
  
      <!-- player 1 -->
      <div class="player one">
  
        <img class="crowns" src="images/wK.svg" alt="light_color_queen">
        <h2 class="label">PLAYER 1</h2>
        <button v-on:click="swap()">Swap</button>
  
        <div class="digits">
          <h2 class="numbers">{{min1}}:{{sec1}}</h2>
        </div>
  
      </div><!-- END player 1 -->
  
      <!-- player 2 -->
      <div class="player two">
  
        <img class="crowns" src="images/bK.svg" alt="dark_color_queen">
        <h2 class="label">PLAYER 2</h2>
        <button v-on:click="swap()">Swap</button>
        <div class="digits">
          <h2 class="numbers">{{min2}}:{{sec2}}</h2>
        </div>
  
      </div><!-- END player 2 -->
  
    </div><!-- END players -->
  
  
  
  
  </template>
    
  <style scoped>
  .timer {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .digits {
    font-size: 3.5rem;
  }
  </style>