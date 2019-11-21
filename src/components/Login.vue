<template>
  <div class="container">
    <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <br>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Username"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <br>
     <button type="submit">Login</button>
   </form>
  </div>
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

<style scoped>

.login {
  display: flex;
  flex-direction: column;
}

input {
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  width: 10%;
}
</style>
