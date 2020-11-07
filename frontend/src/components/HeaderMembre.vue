<template>
    <header>
        <nav id="nav">
            <h1> Réseau Social</h1>
            <div class="navBar">
                <router-link to="/membre">accueil</router-link> |
                <router-link to="/profil">Profil</router-link> 
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>

#nav {
    position:fixed;
    top: 0; left:0 ; right:0;
    height:60px;
    width:100%;
    background-color: #f1f1f1;
    z-index:10;
}
</style>