<template>
  <div id="app">
    <header-top v-if="!connected"></header-top>
    <header-membre v-if="connected"></header-membre>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import HeaderMembre from './components/HeaderMembre'

export default {
  name: 'App',
  data() {
    return {
      connected : false
    }
  },
  components: {
    'header-top': Header,
    'header-membre': HeaderMembre
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  width:100%;
  max-width:900px;
  height:100vh;
  padding:20px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: .2s;

    &.router-link-exact-active {
      color: #999;
      text-decoration: underline;
    }
    &:hover{
      color:#999;
    }
  }

</style>
