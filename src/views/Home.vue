<template>
  <div class="home">
    <h1 class="title is-1" style="color:white">Top 10 Best Chess Palyers</h1>
    <div class="information" style="display:flex; align-items:center; flex-direction:column;">
      <h1 class="title">{{this.grosmasters[0].name}}</h1>
      <h1 class="subtitle">{{this.grosmasters[0].bornYear}}</h1>
      <p>
        <template>
          <b-carousel  style="float:left; margin:0px 15px 15px 15px; width:25%; height:auto;">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium`" :style="{ backgroundImage: 'url(' + carousel.imageG + ')' }" style="background-repeat: no-repeat; background-size:cover;">
                <div class="hero-body has-text-centered">
                </div>
              </section>
            </b-carousel-item>
            </b-carousel>
        </template>
        {{this.grosmasters[0].information}}
      </p>
    </div>
    <div class="information2" style="display:flex; align-items:center; flex-direction:column;">
      <h1 class="title">{{this.grosmasters[1].name}}</h1>
      <h1 class="subtitle">{{this.grosmasters[1].bornYear}}</h1>
      <p>
        <template>
          <b-carousel  style="float:left; margin:0px 15px 15px 15px; width:25%; height:auto;">
            <b-carousel-item v-for="(slide, i) in slides" :key="i">
              <section :class="`hero is-medium`" :style="{ backgroundImage: 'url(' + slide.imageA + ')' }" style="background-repeat: no-repeat; background-size:cover;">
                <div class="hero-body has-text-centered">
                </div>
              </section>
            </b-carousel-item>
            </b-carousel>
        </template>
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
      carousels: [
        { imageG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kasparov-34.jpg/220px-Kasparov-34.jpg' },
        { imageG: 'https://d.newsweek.com/en/full/1548757/former-chess-champion-garry-kasparov.jpg?w=1600&h=1600&l=48&t=45&q=88&f=193d2ab5250426ce9d105ce584fcac97' },
        { imageG: 'https://i.pinimg.com/originals/29/cb/57/29cb57ca739722938c15bc1a8cde030b.jpg' },
        { imageG: 'https://www.chessgames.com/f/15940.jpg' }
      ],
      slides: [
        { imageA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Anatoly_Karpov_2017_april.jpg/340px-Anatoly_Karpov_2017_april.jpg' },
        { imageA: 'https://images-na.ssl-images-amazon.com/images/I/819OpfQnSiL._SY500_.jpg' },
        { imageA: 'http://www.myschach.de/images/wiki/Karpov.jpg' },
        { imageA: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Anatoly_Karpov_1979.jpg' }
      ]
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
