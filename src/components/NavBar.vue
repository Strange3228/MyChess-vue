<template>
    <b-navbar class="navbar">
        <template slot="brand">
            <b-navbar-item tag="router-link" to="/">
                <img class=""
                    src="../assets/QueenWhite.png"
                    alt="Logo MyChess"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" to="/strategies">
                Example of chess Opening Move
            </b-navbar-item>
            <b-navbar-item>
                |
            </b-navbar-item>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar{
  margin-bottom:40px;
  background-color: rgba(201, 192, 192, 0);
}
*:hover{
    background-color: transparent !important;
}
</style>
