<template>
  <div class="container">
    <h2>Productos de la tienda</h2>
    <hr>
    <br>
    <ul>
      <li v-for="product in productsOfShop" v-bind:key="product.id">
        <product v-bind:product="product">Comprar</product>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from './Product';
export default {
  components: { Product },
  computed: mapGetters(['productsOfShop'])
}
</script>
