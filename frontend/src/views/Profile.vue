<template>
<header>
  <br /><br /><br /><br /><br />
  <h1>page des profiles</h1>
</header>
</template>

<script>
import Profile from "./profile.js";

export default {
  name: 'Profile',
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