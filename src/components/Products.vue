<template>
  <div>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  mounted() {
    if(this.$store.state.products.length == 0) {
      this.$store.dispatch('loadProducts')
    }
  },
  computed: mapState(['products'])

}
</script>
