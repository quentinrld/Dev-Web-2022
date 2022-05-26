<template>
<header>
  <br /><br /><br /><br /><br /><br /><br />
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
  <div class="contact">
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
import Contact from "./Contacts.js";

export default {
  name: 'Contact',
  data() {
    return {
      contact: [],
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
.contact {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
th {
  border: 1px solid black; 
  background-color: rgb(84, 102, 219);
  border-radius: 5px;
  text-align: center;
  width: 300px;
  height: 50px;
  font-size: 25px;
}
td {
  border: 1px solid black; 
  background-color: rgb(206, 212, 248);
  border-radius: 5px;
  text-align: center;
  width: 300px;
  height: 50px;
  font-size: 20px;
};
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