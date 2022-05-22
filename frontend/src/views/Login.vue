<template>
<header>
    <br /><br /><br /><br /><br />
    <h1>Se connecter</h1>
  <p class="error" v-if="error">{{ error }}</p>
  <form action="http://localhost:3000/login" method="post">
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
    <button type="submit">Login</button>
  </form>
  <button @click="$router.push({name: 'Signin'})">Créer un compte</button>
</header>
</template>

<script>
export default {
  data () {
    return {
      name: 'Login',
      error: ''
    }
  }
}
</script>

<style>

</style>