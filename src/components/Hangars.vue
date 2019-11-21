<template>
  <div class="container">
    <h2>Lista de Hangares</h2>
    <hr>
    <br>
    <table>
      <tbody>
        <tr v-for="hangar in hangars" v-bind:key="hangar.id">
          <td>{{ hangar.name }}</td>
          <td>{{ hangar.owner }}</td>
        </tr>
      </tbody>
    </table>
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

<style>

table {
    height: 65%;
    margin: 0;
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
}

tr {
  width: 100%;
  height: 4em;
  border-bottom: .1vh solid #D6DDDF;
}

td {
  margin: 20px;
}
</style>
