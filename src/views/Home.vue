<template>
  <div class="home">
    <h1 class="title is-1" style="color:white">Top 10 Best Chess Palyers</h1>
    <div class="information" style="display:flex; align-items:center; flex-direction:column;">
      <h1 class="title">{{this.grosmasters[0].name}}</h1>
      <h1 class="subtitle">{{this.grosmasters[0].bornYear}}</h1>
      <p>
        <img style="float:left; margin:0px 30px 30px 30px; width:25%; height:auto;" :src="grosmasters[0].imageUrl">
        {{this.grosmasters[0].information}}
      </p>
    </div>
    <div class="information2" style="display:flex; align-items:center; flex-direction:column;">
      <h1 class="title">{{this.grosmasters[1].name}}</h1>
      <h1 class="subtitle">{{this.grosmasters[1].bornYear}}</h1>
      <p>
        <img style="float:left; margin:0px 30px 30px 30px; width:25%; height:auto;" :src="grosmasters[1].imageUrl">
        {{this.grosmasters[1].information}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['grosmasters'])
  },
  methods: {}
}
</script>

<style scoped>
.home{
    width: 80%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1{
  color:rgb(172, 172, 172);
}
.information{
  background-color: rgba(190, 190, 190, 0.199);
  margin-bottom: 20px;
  padding: 5px;
}
.information2{
  background-color: rgba(34, 33, 33, 0.945);
  margin-bottom: 20px;
  padding: 5px;
}
</style>
