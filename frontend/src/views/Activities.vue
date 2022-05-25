<template>
  <header>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Page des activités</h1>
    <p>
      Bienvenue dans l'onglet des activités. Vous pouvez consulter les différentes activités qu'on propose ainsi que les
      horaires auxquels ils se déroulent. Vous pouvez également l'utiliser pour vous inscrire aux activités proposées.
    </p>
    <button @click="$router.push({name: 'DescActi'})">Voir les différentes activités proposées</button>
    <button @click="$router.push({name: 'CalActi'})">Consulter les horaires des activités à venir</button>
    <button @click="$router.push({name: 'MyActivities'})">Consulter vos activités à venir</button>
  </header>
  <body>
  <p class="error" v-if="error">{{ error }}</p>
  <ul>
    <li v-for="activity in activities" :key="activity">
      {{ activity.actname }}{{ activity.actDesc }}
    </li>
  </ul>
  </body>
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