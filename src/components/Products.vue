<template>
  <div class="container">
    <h2>Lista de productos</h2>
    <hr>
    <br>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <product v-bind:product="product">Ver más</product>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Product from './Product';
export default {
  components: { Product },
  mounted() {
    if(this.$store.state.products.length == 0) {
      this.$store.dispatch('loadProducts')
    }
  },
  computed: mapState(['products'])

}
</script>

<style>

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

li {
  list-style-type: none;
  margin-right: 50px;
  margin-bottom: 50px;
}

</style>
