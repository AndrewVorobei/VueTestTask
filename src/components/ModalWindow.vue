<template>
  <div class="container">
    <button class="closeModal" @click="closeModal">X</button>

    <div class="fileImg"></div>
    <hr class="hr" />
    <div class="skeletonsModal">
      <div class="stub"></div>
      <div class="skeletonContent"></div>
    </div>
    <hr class="hr" />
    <div class="footerModal">
      <button class="deleteItem" @click="closeConfirm">Удалить предмет</button>
    </div>
    <div class="confirm" v-if="!isClose">
      <input type="text" placeholder="Введите количество" />
      <div class="confirmDelete">
        <button class="confirmBtn1" @click="cancelConfirm">Отмена</button>
        <button class="confirmBtn2" @click="addItem">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["close"]);

let storage = ref([]);
let isClose = ref(true);

function addItem() {
  storage.value.push("1");
  emit("close");
}

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
.container:hover {
  background: #262626 50%;
}
.container {
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 498px;
  margin-left: 533px;

  background: #262626 50%;
  border: 1px solid #4d4d4d;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  backdrop-filter: blur(1px);
  fill: rgba(38, 38, 38, 0.5);
}

.hr {
  height: 1px;
  width: 220px;
  border: none;
  background-color: #4d4d4d;
  margin-top: 30px;
}

.fileImg {
  width: 130px;
  height: 130px;
  margin-left: 60px;
  margin-top: 55px;
  background-image: url("../src/assets/ModalImages/ModalImage.png");
}

.stub {
  background-image: url("../src/assets/ModalImages/Stub.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 211px;
  height: 30px;
  margin-left: 23px;
}
.skeletonContent {
  margin-top: 24px;
  background-image: url("../src/assets/ModalImages/Content.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 211px;
  height: 114px;

  margin-left: 23px;
  backdrop-filter: none;
}

.deleteItem {
  width: 220px;
  height: 39px;
  margin-bottom: 18px;
  text-justify: center;
  color: #ffffff;
  background-color: #fa7272;
  border: none;
  border-radius: 8px;
}

.deleteItem:hover {
  background-color: #ff8888;
}

.closeModal {
  position: absolute;
  width: 12px;
  height: 12px;
  margin-left: 224px;
  margin-top: 14px;
  border: none;
  background: none;
  color: #ffffff;
}

.confirm {
  display: flex;
  background: #262626 60%;
  flex-direction: column;
  position: absolute;
  top: 364px;
  width: 249px;
  height: 133px;
  border: 1px solid #4d4d4d;
  border-bottom-right-radius: 12px;
}
.confirmDelete {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.confirm input {
  width: 210px;
  height: 40px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  margin: 20px 15px;
}

.confirmBtn1 {
  width: 88px;
  height: 33px;
  border-radius: 8px;
  border: none;
  color: #2d2d2d;
  box-shadow: 0 0 10px 1px rgba(182, 174, 173, 0.966);
}

.confirmBtn2 {
  width: 112px;
  height: 33px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #fa7272;
  box-shadow: 0 0 10px 1px rgba(179, 88, 65, 0.966);
}
</style>
