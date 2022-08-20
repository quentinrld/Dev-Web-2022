<template>
<body>
  <main class="grid">
    <div class="form">
      <h2 class="connection">Connection</h2>
      <form action="http://localhost:3000/login" method="post">
        <label id="labmail" for="email">Email</label>
        <input class="email" type="email" id="email" name="email">
        <label id="labpsw" for="password">Password</label>
        <input class="password" type="password" id="password" name="password">
        <input type="submit" value="Se connecter">
      </form>
      <button id="newuser" @click="$router.push({name: 'signin'})">Créer un compte</button>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
  </main>
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

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>