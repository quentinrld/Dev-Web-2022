<template>
<header>
  <br /><br /><br /><br /><br /><br /><br />
  </header>
  <body>
  <p class="error" v-if="error">{{error}}</p>
  <div class="search">
    <form id="search">
      Search 
      <input name="query" v-model="searchQuery">
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
    <tr>
      <td>ASBL</td>
      <td>Admin</td>
      <td><a href="mailto:ASBL.contact@gmail.com">Contact</a></td>
      <td>Admin</td>
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

  

</style>