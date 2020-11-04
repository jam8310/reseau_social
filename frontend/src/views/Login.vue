<template>
  <div class="home">
    <div class="formulaire">
      <h2>Login</h2>
      <br>
      <Formulaire  btn="Connexion" />
      <router-link to="/create">Create Account</router-link>
    </div>
  </div>
</template>

<script>
import Formulaire from '../components/Formulaire'

export default {
  name: 'Login',
  components: {
    Formulaire
  }
}
</script>

<style lang="scss">
.home{
  width:100%;
}
.formulaire{
  width:100%;
  max-width:320px;
  border: 1px solid #333;
  border-radius:10px;
  padding:20px;
  margin:0 auto;
}
</style>