<template>
  <body>
  <div id="home">
    <img src="@/assets/ASBL_nom.jpg">
  </div>
  <div class="row">
    <div class="column">
      <img src="@/assets/gym.jpeg">
    </div>
    <div class="column">
      <div class="content">
        <h2>Présentation</h2>
        <p>
          Curabitur sed lectus semper, viverra nibh non, condimentum odio. Cras quis mollis mauris. Nam quis tortor quis enim pharetra laoreet non nec purus. Nullam quis eleifend justo. Praesent eget sagittis justo, eu finibus lacus. Fusce tempor libero ac venenatis euismod. Integer vestibulum aliquam turpis, id pretium est rutrum non. Etiam vel metus vel orci pretium tempus sed in tortor.
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <div class="content">
        <h2>Qui somme-nous ?</h2>
        <p>
          Curabitur sed lectus semper, viverra nibh non, condimentum odio. Cras quis mollis mauris. Nam quis tortor quis enim pharetra laoreet non nec purus. Nullam quis eleifend justo. Praesent eget sagittis justo, eu finibus lacus. Fusce tempor libero ac venenatis euismod. Integer vestibulum aliquam turpis, id pretium est rutrum non. Etiam vel metus vel orci pretium tempus sed in tortor.
        </p>
      </div>
    </div>
    <div class="column">
      <img src="@/assets/team.jpeg">
    </div>
  </div>
  </body>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: 'home',
  components: {Footer}
}
</script>

<style>

#home {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 75%;
  height: 75%;
  border-radius: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.content {
  text-align: center;
}

.content p {
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px solid #09cce6;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 15px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>