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
  <div class="contact">
  <table>
    <thead>
    <tr>
      <th>Activités</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="activity in activities">
      <td>
        {{ activity.actname }}
      </td>
      <td>
        {{ activity.actDesc }}
      </td>
    </tr>
    </tbody>
  </table>
  </div>
  </body>
  <footer class="lien">
  <hr>
  <p>Contact ASBL :</p>
  <ul>
    <li>Facebook : <a href="https://www.facebook.com/LesExtrAimes/">Les Extr-Aimes asbl</a></li>
    <li>Mail : <a href="mailto:asbl.extraimes@gmail.com">asbl.extraimes@gmail.com</a></li>
    <li>Téléphone : <a href="tel:+32 000 00 00 00">+32 000 00 00 00</a></li>
  </ul>
</footer>
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
.lien {
  position: absolute;
  width: 100%;
  height: 90px;
  left: 5px;
  bottom: 0px;
}
li {
  left: 20px;
}
</style>