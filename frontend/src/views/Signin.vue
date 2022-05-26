<template>
<header>
    <br /><br /><br /><br /><br /><br />
</header>
<div class="signin">
  <p id="textsignin">Créer votre compte</p>
  <form action="http://localhost:3000/register" method="post">
    <!-- userName -->
    <label id="labusername" for="userName">Prénom</label>
    <input type="text" id="userName" name="userName">
    <!-- userLastName -->
    <label id="labuserlastname" for="userLastName">Nom</label>
    <input type="text" id="userLastName" name="userLastName">
    <!-- email -->
    <label id="mail" for="email">Email</label>
    <input class="mail" type="email" id="email" name="email">
    <!-- password -->
    <label id="psw" for="password">Mot de passe</label>
    <input class="psw" type="password" id="password" name="password">
    <!-- rue -->
    <label id="labrue" for="rue">Adresse</label>
    <input type="text" id="rue" name="rue">
    <!-- numero -->
    <label id="labnum" for="numero">N°</label>
    <input type="number" id="numero" name="numero">
    <!-- codepost -->
    <label id="labcodepost" for="codepost">Code postal</label>
    <input type="number" id="codepost" name="codepost">
    <!-- villenom -->
    <label id="labville" for="villenom">Localité</label>
    <input type="text" id="villenom" name="villenom">
    <button id="register" type="submit">Créer le compte</button>
  </form>
  <button id="connection" @click="$router.push({name: 'Login'})">Se connecter</button>
  </div>
</template>

<script>
export default {
    name: 'Signin'
}
</script>

<style>
.signin {
  position: absolute;
width: 477px;
height: 760px;
left: 481px;
top: 90px;

background: rgba(0, 21, 131, 0.54);
border-radius: 57px;
}
#textsignin {
position: absolute;
width: 1000px;
height: 40px;
left: 120px;
top: 30px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 39px;
}
#labusername {
  position: absolute;
width: 120px;
height: 30px;
left: 40px;
top: 120px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
#userName {
  box-sizing: border-box;

position: absolute;
width: 200px;
height: 30px;
left: 35px;
top: 150px;
}
#labuserlastname {
  position: absolute;
width: 1200px;
height: 30px;
left: 250px;
top: 120px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;  
}
#userLastName {
   box-sizing: border-box;

position: absolute;
width: 200px;
height: 30px;
left: 245px;
top: 150px;
}
#mail {
  position: absolute;
width: 156px;
height: 30px;
left: 40px;
top: 200px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
.mail {
  box-sizing: border-box;

position: absolute;
width: 416px;
height: 30px;
left: 35px;
top: 230px;
}
#psw {
  position: absolute;
width: 156px;
height: 30px;
left: 40px;
top: 280px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
.psw {
  box-sizing: border-box;

position: absolute;
width: 416px;
height: 30px;
left: 35px;
top: 310px;  
}
#labrue {
  position: absolute;
width: 156px;
height: 30px;
left: 40px;
top: 360px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
#rue {
  box-sizing: border-box;

position: absolute;
width: 351px;
height: 30px;
left: 35px;
top: 390px;
}
#labnum {
  position: absolute;
width: 35px;
height: 30px;
left: 400px;
top: 360px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
#numero {
  box-sizing: border-box;

position: absolute;
width: 49px;
height: 30px;
left: 395px;
top: 390px;
}
#labcodepost {
  position: absolute;
width: 143px;
height: 30px;
left: 335px;
top: 440px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
#codepost {
  box-sizing: border-box;

position: absolute;
width: 100px;
height: 30px;
left: 350px;
top: 470px;
}
#labville {position: absolute;
width: 58.06px;
height: 30px;
left: 40px;
top: 440px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
}
#villenom {
    box-sizing: border-box;

position: absolute;
width: 305px;
height: 30px;
left: 35px;
top: 470px;
}
#register {
  position: absolute;
width: 220px;
height: 50px;
left: 120px;
top: 550px;
font-size: 20px;
}
#connection {  
  position: absolute;
width: 220px;
height: 50px;
left: 120px;
top: 620px;
font-size: 20px;
}
</style>
