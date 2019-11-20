<template>
  <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Username"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      this.$store.dispatch('login', { username, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
    }
  }

}
</script>

<!-- vue-axios monta axios bajpo la instacia $http $http y está disponible en todos los componentes-->
