<template>
  <div class="item-block" draggable="true">
    <img :src="item.img" alt="" draggable="false">
    <div class="counter_wrapper">
      <div class="counter">
        {{ item.value }}
      </div>
    </div>

  </div>
</template>

<script setup>


const props = defineProps({
  item: {
    type: Object
  }
});



</script>;

<style lang="scss" scoped>
@import "./style.scss";
</style>
