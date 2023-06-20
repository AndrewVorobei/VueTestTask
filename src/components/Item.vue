<template>
  <div class="item">
    <div class="count" @click="counterPlus">{{ count }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(4);

function counterPlus() {
  count.value++;
}
</script>

<style scoped>
.item {
  display: flex;
}
.count {
  width: 16px;
  height: 16px;
  color: #ffffff;
  background-image: url("../src/assets/Counter.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
