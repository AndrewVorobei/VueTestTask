<template>
  <div class="page">
    <div class="inventory">
      <div class="side">
        <div class="sideBg"></div>
        <div class="skeletons">
          <div class="skeletonStub"></div>
          <div class="skeletonContent"></div>
        </div>
      </div>
      <div class="main" @dragover="allowDrop" @drop="dropItem">
        <div class="item1" style="border-top-left-radius: 12px">
          <Item
            @click="openModal"
            id="drag1"
            class="itemDraggable"
            @dragstart="dragStart"
            draggable="true"
          />
        </div>
        <div class="item">
          <Item
            @click="openModal"
            id="drag2"
            class="itemDraggable"
            @dragstart="dragStart"
            draggable="true"
          />
        </div>
        <div class="item">
          <Item
            @click="openModal"
            id="drag3"
            class="itemDraggable"
            @dragstart="dragStart"
            draggable="true"
          />
        </div>
        <div class="item"></div>
        <div class="item" style="border-top-right-radius: 12px"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item" style="border-bottom-left-radius: 12px"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item" style="border-bottom-right-radius: 12px"></div>
      </div>
      <ModalWindow
        class="modal"
        v-if="isModalOpen"
        @close="closeModal"
        transition="modal"
      />
    </div>
    <div class="footer">
      <div class="footerContent"><button class="footerBtn">X</button></div>
    </div>
  </div>
</template>

<script setup>
import ModalWindow from "../components/ModalWindow.vue";
import Item from "../components/Item.vue";
import { ref } from "vue";

let storage = ref([]);
let isModalOpen = ref(false);

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dropItem(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
function closeModal() {
  isModalOpen.value = false;
}

function openModal() {
  isModalOpen.value = true;
}
</script>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 849px;
  height: 660px;
}
.inventory {
  display: flex;
}

.side {
  width: 236px;
  height: 500px;
  border-radius: 12px;
  background: linear-gradient(#4d4d4d, #262626);
  display: flex;
  flex-direction: column;
}

.sideBg {
  background-image: url("../src/assets/ImgBlur.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 208px;
  height: 236px;
  margin-top: 18px;
  margin-left: 14px;
  margin-right: 14px;
}

.skeletons {
  background-image: url("../src/assets/Skeletons.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 198px;
  height: 198px;
  margin-top: 20px;
  margin-left: 23px;
}

.main {
  margin-left: 24px;
  width: 525px;
  height: 500px;
  border-radius: 12px;
  border-color: #4d4d4d;
  background: #262626;
  display: grid;
  grid-template-columns: repeat(5, 105px);
  grid-template-rows: repeat(5, 100px);
}

.main > *:not(.modal) {
  border: 1px solid #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main > *:hover {
  background-color: #2f2f2f;
}
#drag1 {
  width: 54px;
  height: 54px;
  background-image: url("../src/assets/ModalImages/ModalImage.png");

  background-repeat: no-repeat;
  background-size: cover;
}

#drag2 {
  width: 54px;
  height: 54px;
  background-image: url("../src/assets/ModalImages/ModalImage2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#drag3 {
  width: 54px;
  height: 54px;
  background-image: url("../src/assets/ModalImages/ModalImage3.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.itemDraggable {
  cursor: grab;
}

.itemDraggable:active {
  cursor: grab;
}
.footer {
  width: 785px;
  height: 72px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  margin-top: 24px;
}

.footerContent {
  width: 699px;
  height: 36px;
  margin-top: 18px;
  margin-left: 18px;
  border-radius: 12px;
  background: linear-gradient(#3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.footerBtn {
  position: absolute;
  background: none;
  border: none;
  width: 12px;
  height: 12px;
  color: white;
  left: 850px;
}
</style>
