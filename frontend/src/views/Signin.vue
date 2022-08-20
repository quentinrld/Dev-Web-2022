<template>
  <body>
  <main class="grid">
    <div class="form">
      <h2 id="textsignin">Créer votre compte</h2>
      <form action="http://localhost:3000/register" method="post">
        <!-- userName -->
        <label id="labusername" for="userName">Prénom</label>
        <input type="text" id="userName" name="userName">
        <!-- userLastName -->
        <label id="labuserlastname" for="userLastName">Nom</label>
        <input type="text" id="userLastName" name="userLastName">
        <!-- email -->
        <label id="mail" for="email">Email</label>
        <input class="mail" type="email" id="email" name="email">
        <!-- password -->
        <label id="psw" for="password">Mot de passe</label>
        <input class="psw" type="password" id="password" name="password">
        <!-- rue -->
        <label id="labrue" for="rue">Adresse</label>
        <input type="text" id="rue" name="rue">
        <!-- numero -->
        <label id="labnum" for="numero">N°</label>
        <input type="number" id="numero" name="numero">
        <!-- codepost -->
        <label id="labcodepost" for="codepost">Code postal</label>
        <input type="number" id="codepost" name="codepost">
        <!-- villenom -->
        <label id="labville" for="villenom">Localité</label>
        <input type="text" id="villenom" name="villenom">
        <input type="submit" value="Créer le compte">
      </form>
      <button id="connection" @click="$router.push({name: 'login'})">Se connecter</button>
    </div>
  </main>
  </body>
</template>

<script>
export default {
    name: 'signin'
}
</script>

<style>



</style>
