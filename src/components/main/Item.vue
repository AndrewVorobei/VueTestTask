<template>
  <div class="item">
    <slot></slot>
    <div class="counter_wrapper">
      <div class="counter">
        {{ counter }}
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";


const counter = ref(4);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;


  cursor: url('@/assets/layout/cursor-hover.svg'), auto;

  &:active {
    cursor: url('@/assets/layout/cursor-hover.svg'), auto;

  }

  .counter_wrapper {
    display: flex;
    align-self: flex-end;
    margin-top: 6px;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid #4D4D4D;
    background: #262626;
    border-radius: 6px 0px 0px 0px;
    opacity: 0.4;

    .counter {
      color: #fff;
      text-align: center;
      font-size: 10px;
      font-weight: 500;
    }

  }


}
</style>
