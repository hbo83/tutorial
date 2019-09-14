<template>
  <div class="nav">
  <nav>
    <ul>
      <!-- <li v-bind:class="[i0.isActiveisActive ? 'red' : 'blue']" @click="toggleClass()"><router-link to = "/nastenka"><v-icon size="28px">home</v-icon>Nástěnka</router-link></li>
      <li v-bind:class="[i0.isActiveisActive ? 'red' : 'blue']" @click="toggleClass()"><router-link to = "/owners"><v-icon size="28px">person</v-icon>Spoluvlastníci</router-link></li> -->
      <li><router-link style="color: black;font-weight: bold" to = "/">Home</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/objects">Objects</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/objectNumber">Number</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/ObjectBoolean">Boolean</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/objectPromise">Promise</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/odecty">Odečty</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/meeting">Schůze</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/fault">Závady</router-link></li>
      <!-- <li><router-link style="color: black;font-weight: bold" to = "/ucetnictvi"><v-icon style="color: black" size="28px">folder_open</v-icon>Ucetnictvi</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/nastaveni"><v-icon style="color: black" size="28px">apps</v-icon>Nastavení</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/faq"><v-icon style="color: black" size="28px">contact_support</v-icon>FAQ</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/hints"><v-icon style="color: black" size="28px">thumb_up</v-icon>Důležité rady</router-link></li>
      <li><router-link style="color: black;font-weight: bold" to = "/galerie"><v-icon style="color: black" size="28px">thumb_up</v-icon>Galerie</router-link></li> -->
    </ul>
  </nav>
</div>
</template>

<script>
export default {
name: 'Nav',
data() {
  return {

      i0: {
        isActive: true
    }
  }
},
methods: {
  toggleClass: function() {
    if(this.i0.isActive){
      this.i0.isActive = false;
    } else {
      this.i0.isActive = true;
    }
  }
}
}
</script>

<style scoped>

nav {
  box-sizing: border-box;
  width: 10%;
  border: 1px solid black;
  height: 800px;
  float: left;
}
li a {
  line-height: 49px;
  font-size: 20px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-left: 12px;
  opacity: 0.7;
  border-bottom: 1px solid #9eceff;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li:hover {
  color: red;
  background-color: #f2f2f2;
}
/* a:link, a:visited, a:active  {
  color: grey;
} */
a:hover {
  /* color: black; */
  cursor: pointer;
  opacity: 1;
}
li i {
  margin-right: 12px
}
.red {
  color: green;
}
.blue {
  color: blue;
}

</style>
