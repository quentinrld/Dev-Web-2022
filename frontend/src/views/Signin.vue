<template>
<header>
    <br /><br /><br /><br /><br />
    <h1> page des sign in</h1>
</header>
  <form action="http://localhost:3000/register" method="post">
    <!-- userName -->
    <label for="userName">Nom</label>
    <input type="text" id="userName" name="userName">
    <!-- userLastName -->
    <label for="userLastName">Nom de famille</label>
    <input type="text" id="userLastName" name="userLastName">
    <!-- email -->
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
    <!-- password -->
    <label for="password">Mot de passe</label>
    <input type="password" id="password" name="password">
    <!-- rue -->
    <label for="rue">Adresse</label>
    <input type="text" id="rue" name="rue">
    <!-- numero -->
    <label for="numero">Numéro</label>
    <input type="number" id="numero" name="numero">
    <!-- codepost -->
    <label for="codepost">Code postal</label>
    <input type="number" id="codepost" name="codepost">
    <!-- villenom -->
    <label for="villenom">Localité</label>
    <input type="text" id="villenom" name="villenom">
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