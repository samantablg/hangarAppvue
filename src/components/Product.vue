<template>
  <section class="card">
    <img src="../assets/img/card-product.jpg">
    <div class="body">
      <span class="title">{{ product.name }}</span>
      <span class="description">{{ product.description }}</span>
    </div>
    <div class="footer">
        <custom-button><slot></slot></custom-button>
    </div>
  </section>
</template>

<script>
import CustomButton from './CustomButton';
export default {
  components: { CustomButton },
  props: ['product'],
}
</script>

<style scoped>
.card {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e7ebef;
    position: relative;
    border-bottom: 5px solid #0C9;
}

img {
    position: relative;
    width: 100%;
    height: 50%;
    background-position: center center;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

span {
 padding: 2%;
}

.footer {
  margin: 0;
    height: 30%;
    width: 100%;
}

</style>
