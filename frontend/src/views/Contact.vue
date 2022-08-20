<template>
<header>
  </header>
  <body>
  <p class="error" v-if="error">{{error}}</p>
  <div class="search">
    <form id="search">
      Search 
      <input name="query" type="text" v-model="searchQuery">
    </form>
    <demo-grid :filter-key="searchQuery"></demo-grid>
  </div>
  <main class="grid">
  <table>
    <caption><h1> Contact de l'ASBL </h1></caption>
    <tr id="contactHead">
      <th>Nom</th>
      <th>Prénom</th>
      <th>Adresse mail</th>
      <th>Responsable de l'activité</th>
    </tr>
    <tr v-for="contacts in contact" :key="contacts">
      <td>{{contacts.userLastName}}</td>
      <td>{{contacts.userName}}</td>
      <td><a v-bind:href="'mailto:' + contacts.mailAdd">Contact</a></td>
      <td>{{contacts.actname}}</td>
    </tr>
  </table>
  </main>
  </body>
</template>

<script>
import Contact from "./Contacts.js";

export default {
  name: 'contact',
  data() {
    return {
      contact: [
        {
          userLastName: "Geonet",
          userName: "Antoine",
          mailAdd: "eniotna@scarlet.be",
          actname: "Tennis"
        }
      ],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.contact = await Contact.GetContacts();
    } catch(err) {
      this.error = err.message;
    }
  }
}

/*const search = new Vue({
  el: "#search",
  data: {
    filter: "",
    rows: contact,
  },
  methode: {
    highlightMatches(text) {
      const matchExists = text.
      toLowerCase().
      includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    } },
  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const employees = row.employees.toString().toLowerCase();
        const department = row.department.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          department.includes(searchTerm) || employees.includes(searchTerm));

      });
    }
  }
})*/
</script>

<style>

tr {
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  text-align: center;
}

</style>