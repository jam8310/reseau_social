<template>
  <div id="app">
    <div id="nav">
      <h1> Réseau Social</h1>
      <div class="navBar">
        <router-link to="/">Login</router-link> |
        <router-link to="/create">Create</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body{
  width:100%;
  max-width:900px;
  height:100vh;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  width:100%;
  padding: 30px;
  display:flex;
  justify-content: space-between;
  align-items:center; 
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
