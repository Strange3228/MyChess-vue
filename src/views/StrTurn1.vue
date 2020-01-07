<template>
  <div>
    <h1 class="title" style="color:white;">Example of chess debut</h1>
    <div class="content mycontent">
      <router-link to="/turn1">
        <button style="width:100%">
          Next turn
        </button>
      </router-link>
      <div class="chess">
          <div class="piece peshka" id="peshka1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.mycontent{
  display: flex;
  flex-direction: column;
}
.chess{
  background-image: url("../assets/board.png");
  background-size: cover;
  margin-bottom: 40px;
  height: 644px;
  width: 644px;
  background-color: aquamarine;
  display: flex;
}
.piece{
  position: relative;
  margin: 0;
  width: 12.5%;
  height: 12.5%;
  top: 160px;
  left: 0;
}
.peshka{
  background-image: url("../assets/PeshkaWhite.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
