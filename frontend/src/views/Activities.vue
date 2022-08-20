<template>
  <body>
  <header class="header-grid">
    <section class="card">
      <div class="image">
        <img alt="gym" src="@/assets/gym.jpeg">
      </div>
      <div>
        <h2>Activités</h2>
        <p>
          Bienvenue dans l'onglet des activités. Vous pouvez consulter les différentes activités qu'on propose ainsi que les
          horaires auxquels ils se déroulent. Vous pouvez également l'utiliser pour vous inscrire aux activités proposées.
        </p>
      </div>
    </section>
    <!-- <button @click="$router.push({name: 'DescActi'})">Voir les différentes activités proposées</button>
    <button @click="$router.push({name: 'CalActi'})">Consulter les horaires des activités à venir</button>
    <button @click="$router.push({name: 'MyActivities'})">Consulter vos activités à venir</button> -->
  </header>

  <main class="grid">
    <table>
      <thead>
        <tr>
          <th>Activités</th>
          <th>Description</th>
          <th>Horaire</th>
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
          <td>
            {{ activity.actHoraire }}
          </td>
        </tr>
      </tbody>
    </table>
    <p class="error" v-if="error">{{ error }}</p>
  </main>
  </body>
</template>

<script>
import Activities from "./Activities.js";

export default {
  name: 'activities',
  data() {
    return {
      activities: [
          {
            actname: "Tennis",
            actDesc: "Cours de tennis sur terre battue",
            actHoraire: "Tous les mardi à 13h"
          },
          {
            actname: "Foot",
            actDesc: "Foot en salle par monsieur Lejeune",
            actHoraire: "Tous les samedi à 18h30"
          }
      ],
      error: '',
      text: '',
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

.header-grid {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  gap: 5rem;
}

.card {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: center;
  align-items: center;
}

.image img {
  max-width: clamp(240px, 100%, 500px);
  height: auto;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

tr {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  text-align: center;
}

th {
  padding: 0.3rem;
}

td {
  padding: 1.5rem;
}

table {
  background-color: rgb(130, 129, 129, 0.60);
  border-collapse: collapse;
  margin-left: 4rem;
  margin-right: 4rem;
}

table, td, th {
  border: 1px solid rgba(0, 0, 0, 0.78);
}

.container {
  position: relative;
  justify-content: center;
  align-items: center;
}

.table-img {
  display: block;
  opacity: 1;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transition: .5s ease;
  opacity: 0;
  text-align: center;
}

.container:hover .table-img {
  opacity: 0.3;
}

.container:hover .middle{
  opacity: 1;
}



</style>