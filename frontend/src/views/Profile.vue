<template>
<header>
  <h1>page des profiles</h1>
</header>
</template>

<script>
import Profile from "./Profile.js";

export default {
  name: 'profile',
  data() {
    return {
      profile :[],
      error: '',
      text: '', 
    }
  },
  async created() {
    try {
      this.profiles = await Profile.GetProfile();
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<style>

</style>