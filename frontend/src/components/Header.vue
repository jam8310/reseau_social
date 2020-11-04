<template>
    <header>
        <div id="nav">
            <h1> Réseau Social</h1>
            <div class="navBar">
                <router-link to="/">Login</router-link> |
                <router-link to="/create">Create</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
#nav {
  width:100%;
  padding: 30px;
  display:flex;
  justify-content: space-between;
  align-items:center; 
}


</style>