<template>
<header>
  <br /><br /><br /><br /><br />
  <h1>Page des activites</h1><br /><br />
  <p>Bienvenue dans l'onglet activitées vous pouvez consulter les différentes activitées qu'on proposé ainsi que les 
    horraires auxquels ils se déroullent. Vous pouvez égallement l'utiliser pour vous inscrire aux activitées 
    proposées</p><br />
  <button @click="$router.push({name: 'DescActi'})">Voir les différentes activitées proposées</button><br /><br />
  <button @click="$router.push({name: 'CalActi'})">Consulter les horraires des activitées à venir</button><br /><br />
  <button @click="$router.push({name: 'MyActivities'})">Consulter vos activitées à venir</button><br /><br /></header>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="activities">
    <li v-for="activity in activities">
      {{ activity }}
    </li>
  </div>
  <form action="http://localhost:3000/activities/add" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
    <button type="submit">Register</button>
  </form>
</template>

<script>
import Activities from "./Activities.js";

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.activities = await Activities.GetActivities();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods :{
    addActivity() {
      Activities.InsertActivity()
    }
  }
}
</script>

<style>

</style>