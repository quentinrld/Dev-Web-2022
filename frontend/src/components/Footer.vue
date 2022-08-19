<template>
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
export default {
  name: 'Footer'
}
</script>

<style>

footer.lien {
  background-color: rgba(0, 0, 0, 0.79);
  color: white;
  position: fixed;
  bottom: 0;
}

a {
  color: #09cce6;
}

</style>