<template>
<div class="side-menu">
    <b-menu>
        <b-menu-list label="Actions">
            <b-menu-item label="Logout" style="font-weight:bold; color: white;"></b-menu-item>
        </b-menu-list>
    </b-menu>
</div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
*{
    color: white !important;
}
.side-menu{
    margin-top: 40px;
    width: 10%;
    float: left;
    background-color: rgba(204, 203, 203, 0);
    z-index: 99;
}
</style>
