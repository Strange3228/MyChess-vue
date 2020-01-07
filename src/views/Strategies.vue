<template>
  <div>
    <h1 class="title" style="color:white;">Example of chess Opening Move</h1>
    <div class="content mycontent">
      <button style="width:100%" @click="incCounter">
          Next turn
      </button>
      <div class="chess">
          <!--<div v-bind:class="[counter >= 1 && counter <4 ? 'turn1' : counter >= 4 ? `turn2` : ``]" class="piece peshkaWhite"></div>-->
          <div class="piece slonBlack"></div>
          <div class="piece horseBlack"></div>
          <div class="piece ferzBlack"></div>
          <div class="piece queenBlack"
            v-bind:class="[counter >=8 && counter < 9 ? 'turn8' : counter >= 9 ? 'destroyed2' : '']">
          </div>
          <div class="piece kingBlack"></div>
          <div class="piece ferzBlack"
            v-bind:class="[counter >=6 && counter < 10 ? 'turn6' : counter>=10 ? 'turn10' : '']">
          </div>
          <div class="piece horseBlack"></div>
          <div class="piece slonBlack"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"
            v-bind:class="[counter >=2 ? 'turn2' : '']">
          </div>
          <div class="piece peshkaBlack" style="top:-12.5%"
            v-bind:class="[counter >=4 ? 'turn4' : '']">
          </div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <div class="piece peshkaBlack" style="top:-12.5%"></div>
          <!---->
          <div class="piece peshkaWhite" style="top:25%"></div>
          <div class="piece peshkaWhite" style="top:25%"></div>
          <div class="piece peshkaWhite" style="top:25%"></div>
          <div class="piece peshkaWhite" style="top:25%"></div>
          <div class="piece peshkaWhite" style="top:25%"></div>
          <div class="piece peshkaWhite"
            style="top:25%"
            v-bind:class="[counter >=3 ? 'turn3' : '']">
          </div>
          <div class="piece peshkaWhite"
            style="top:25%"
            v-bind:class="[counter >=1 ? 'turn1' : '']">
          </div>
          <div class="piece peshkaWhite"
            style="top:25%"
            v-bind:class="[counter >=5 && counter < 8 ? 'turn5' : counter >= 8 ? 'destroyed1' : '']">
          </div>
          <div class="piece slonWhite" style="top:12.5%"></div>
          <div class="piece horseWhite" style="top:12.5%"></div>
          <div class="piece ferzWhite" style="top:12.5%"></div>
          <div class="piece queenWhite" style="top:12.5%"></div>
          <div class="piece kingWhite"
            style="top:12.5%"
            v-bind:class="[counter >=10 ? 'defeated' : '']">
          </div>
          <div class="piece ferzWhite" style="top:12.5%"></div>
          <div class="piece horseWhite" style="top:12.5%"></div>
          <div class="piece slonWhite"
            style="top:12.5%"
            v-bind:class="[counter >=7 && counter < 9 ? 'turn7' : counter>=9 ? 'turn9' : '']"
            >
          </div>
      </div>
    </div>
    <div class="tricks" style="color:black">
        {{ tipText }}
    </div>
  </div>
</template>

<script>
// import * as easing from '../easing/easeInQuad'
export default {
  name: 'start',
  data () {
    return {
      counter: 0,
      tipText: 'Here we go'
    }
  },
  methods: {
    incCounter () {
      this.counter++
      if (this.counter === 1) {
        this.tipText = '1. g4!? With this move, White does not fight for the centre – an important concept in chess – and gives Black a clear target to attack.'
      } else if (this.counter === 2) {
        this.tipText = '1. d5! Black occupies the centre and directly attacks White’s loose pawn on g4 with his bishop on c8'
      } else if (this.counter === 3) {
        this.tipText = '2. f3?'
      } else if (this.counter === 4) {
        this.tipText = '2. e6 Black threatens a deadly checkmate on h4 with the queen.'
      } else if (this.counter === 5) {
        this.tipText = '3. h4'
      } else if (this.counter === 6) {
        this.tipText = '3. d6 Black renews the threat of mating White on the e1-h4 diagonal.'
      } else if (this.counter === 7) {
        this.tipText = '4. h3'
      } else if (this.counter === 8) {
        this.tipText = '4. h4+'
      } else if (this.counter === 9) {
        this.tipText = '5. h4'
      } else {
        this.tipText = '5. g3# Gratulated. Ez)'
      }
    }
  }
}
</script>

<style scoped>
.mycontent{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chess{
  background-image: url("../assets/board.png");
  background-size: cover;
  margin-bottom: 40px;
  height: 45vw;
  width: 45vw;
  background-color: aquamarine;
  display: flex;
  flex-wrap: wrap;
}
.tricks{
  position: absolute;
  left: 0;
  top: 200px;
  width: 20%;
  background-color: rgba(253, 253, 253, 0.507);
  text-align: center;
}
</style>
