<template>
<body>
  <div class="log">
  <p class="error" v-if="error">{{ error }}</p>
    <div class="login">
      <h3 class="connection">Connection</h3>
      <form action="http://localhost:3000/login" method="post">
        <label id="labmail" for="email">Email</label>
        <input class="email" type="email" id="email" name="email">
        <label id="labpsw" for="password">Password</label>
        <input class="password" type="password" id="password" name="password">
        <input type="submit" value="Se connecter">
      </form>
    <button id="newuser" @click="$router.push({name: 'signin'})">Créer un compte</button>
    </div>
  </div>
</body>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {Footer},
  data () {
    return {
      name: 'login',
      error: ''
    }
  }
}
</script>

<style>

.login {
  display: flex;
  justify-content: center;
}

form {
  padding: 1%;
  width: 15%;
}

form input {
  margin: 0 0.9% 0 0.9%;
}

</style>