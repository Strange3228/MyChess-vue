<template>
<div class="app">
  <SideMenu v-if="isOpen" class="sideMenu">
  </SideMenu>
  <div class="container">
    <NavBar/>
    <div class="desk-container">
      <router-view />
    </div>
  </div>
  <button @click="closeSide" class="button sideMenuButton">Click</button>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideMenu from '@/components/SideMenu.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState(['grosmasters'])
  },
  components: {
    NavBar,
    SideMenu
  },
  methods: {
    closeSide () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
html, body{
  height: 100%;
}
.app{
  background-image: url("https://ak7.picdn.net/shutterstock/videos/13430837/thumb/1.jpg");
  background-size: cover;
}
.container{
  width: 60%;
}
.desk-container{
  display: flex;
  justify-content: center;
}
</style>

<style scoped>
.sideMenu{
  position: fixed;
  height: 100%;
  top: 0;
}
.sideMenuButton{
  position:fixed;
  top: 0;
  left: 0;
  border:3px;
  border-radius: 123;
  z-index: 100;
}
</style>
