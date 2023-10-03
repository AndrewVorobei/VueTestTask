<template>
  <div class="container">
    <button class="closeModal" @click="closeModal">
      <img src="@/assets/footer-img/close-btn.svg">
    </button>

    <div class="fileImg"></div>
    <hr class="hr hr-top" />
    <div class="skeletonsModal">
      <div class="stub"></div>
      <div class="skeletonContent"></div>
    </div>
    <hr class="hr hr-bottom" />

    <button class="deleteItem" v-if="isClose" @click="closeConfirm">Удалить предмет</button>
    <transition name="modal-fade">
      <div class="confirm" v-if="!isClose">
        <input type="text" class="confirm-input" v-model="deleteCount" placeholder="Введите количество" />
        <div class="confirmDelete">
          <button class="confirmBtn1" @click="cancelConfirm">Отмена</button>
          <button class="confirmBtn2" @click="confirmDelete">Подтвердить</button>
        </div>
      </div>
    </transition>


  </div>
</template>

<script setup>
import { ref } from "vue";

let isClose = ref(true);
let deleteCount = ref(null);

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}

function closeConfirm() {
  isClose.value = false;
}

function cancelConfirm() {
  isClose.value = true;
}



</script>

<style scoped>
@import "./style.scss";
</style>
