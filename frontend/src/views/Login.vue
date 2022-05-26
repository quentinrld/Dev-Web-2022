<template>
<header>
    <br /><br /><br /><br /><br />
</header>
<body>
  <div class="log">
  <p class="error" v-if="error">{{ error }}</p>
  <div class="login">
    <p class="connection">Connection</p>
  <form action="http://localhost:3000/login" method="post">
    <label id="labmail" for="email">Email</label>
    <input class="email" type="email" id="email" name="email">
    <label id="labpsw" for="password">Password</label>
    <input class="password" type="password" id="password" name="password">
    <button id="login" type="submit">Login</button>
  </form>
  <button id="newuser" @click="$router.push({name: 'Signin'})">Créer un compte</button>
  </div>
  </div>
</body>
</template>

<script>
export default {
  data () {
    return {
      name: 'Login',
      error: ''
    }
  }
}
</script>

<style>
.login {
  position: absolute;
  width: 400px;
  height: 600px;
  left: 520px;
  top: 220px;
  background: rgba(0, 21, 131, 0.54);
  border-radius: 57px;
}
.connection {
  position: absolute;
  width: 175px;
  height: 34px;
  left: 120px;
  top: 15px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
}
#labmail {
  position: absolute;
  width: 200px;
  height: 40px;
  left: 40px;
  top: 110px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}
.email {
  box-sizing: border-box;
  position: absolute;
  width: 335px;
  height: 51px;
  left: 35px;
  top: 150px;
  font-size: 20px;
}
#labpsw {
  position: absolute;
  width: 200px;
  height: 40px;
  left: 40px;
  top: 250px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}
.password {
  box-sizing: border-box;
  position: absolute;
  width: 335px;
  height: 51px;
  left: 35px;
  top: 290px;
  font-size: 20px;
}
#login {
  position: absolute;
  width: 163px;
  height: 49px;
  left: 120px;
  top: 400px;
  font-size: 20px;
}
#newuser {
  position: absolute;
  width: 163px;
  height: 49px;
  left: 120px;  
  top: 470px;
  font-size: 20px;
}
</style>