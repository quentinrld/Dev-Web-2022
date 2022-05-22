<template>
<header>
    <br /><br /><br /><br /><br />
    <h1> page des sign in</h1>
</header>
  <form action="http://localhost:3000/register" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
    <button type="submit">Register</button>
  </form>
  <button @click="$router.push({name: 'Login'})">Se connecter</button>
</template>

<script>
export default {
    name: 'Signin'
}
</script>

<style>

</style>