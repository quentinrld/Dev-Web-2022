<template>
  <body>
  <header class="header-grid">
    <img src="@/assets/ASBL_nom.jpg">
  </header>
  <main class="grid">

    <section class="card">
      <div class="image">
        <img alt="gym" src="@/assets/gym.jpeg">
      </div>
      <div>
        <h2>Présentation</h2>
        <p>
          Curabitur sed lectus semper, viverra nibh non, condimentum odio. Cras quis mollis mauris. Nam quis tortor quis enim pharetra laoreet non nec purus. Nullam quis eleifend justo. Praesent eget sagittis justo, eu finibus lacus. Fusce tempor libero ac venenatis euismod. Integer vestibulum aliquam turpis, id pretium est rutrum non. Etiam vel metus vel orci pretium tempus sed in tortor.
        </p>
      </div>
    </section>

    <section class="card">
      <div>
        <h2>Qui somme-nous ?</h2>
        <p>
          Curabitur sed lectus semper, viverra nibh non, condimentum odio. Cras quis mollis mauris. Nam quis tortor quis enim pharetra laoreet non nec purus. Nullam quis eleifend justo. Praesent eget sagittis justo, eu finibus lacus. Fusce tempor libero ac venenatis euismod. Integer vestibulum aliquam turpis, id pretium est rutrum non. Etiam vel metus vel orci pretium tempus sed in tortor.
        </p>
      </div>
      <div class="image">
        <img alt="sport team" src="@/assets/team.jpeg">
      </div>
    </section>

  </main>
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
</style>