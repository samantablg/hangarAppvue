<template>
  <nav>
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="hangars" active-class="active">Hangar</router-link></li>
      <li><router-link class="link" to="products" active-class="active">Product</router-link></li>
      <li><router-link class="link" to="shop" active-class="active">Shop</router-link></li>
      <li><a class="link" @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['isLoggedIn']),
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>

<style scoped>

nav {
  background-color: #24292f;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

ul {
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

li {
  height: 100%;
  margin-left: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.link {
  margin-top: 33px;
  text-decoration: none !important;
  font-size: large;
  color: rgb(209, 232, 236);
  vertical-align: middle !important;
}

.active, .link:hover {
  border-bottom: 5px solid #0C9;
}

</style>
