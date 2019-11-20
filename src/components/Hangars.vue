<template>
  <div>
    <ul>
      <li v-for="hangar in hangars" v-bind:key="hangar.id">
        {{ hangar.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  mounted() {
    if(this.$store.state.hangars.length == 0) {
      this.$store.dispatch('loadHangars')
    }
  },
  computed: mapState(['hangars'])

}
</script>
