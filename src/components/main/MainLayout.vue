<script setup>
import { useStore } from "vuex";
import Item from "./Item.vue";
import ModalWindow from "./ModalWindow.vue";

import { ref } from "vue";

let isModalOpen = ref(false);
const store = useStore();

const items = store.state.items

function closeModal() {
    isModalOpen.value = false;
}

function openModal() {
    isModalOpen.value = true;
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dropItem(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const droppedItem = document.getElementById(data);



    event.target.appendChild(droppedItem);

}



</script>
<template>
    <div class="main">
        <div class="wrapper_main" @dragover="allowDrop" @drop="dropItem">
            <div class="item">
                <Item id="item-1" @click="openModal" @dragstart="dragStart" draggable="true">
                    <img src="@/assets/main-img/green.svg" class="item_img" alt="" draggable="false">
                </Item>
            </div>
            <div class="item">
                <Item id="item-2" @click="openModal" @dragstart="dragStart" draggable="true">
                    <img src="@/assets/main-img/blue.svg" class="item_img" alt="" draggable="false">
                </Item>
            </div>
            <div class="item">
                <Item id="item-3" @click="openModal" @dragstart="dragStart" draggable="true">
                    <img src="@/assets/main-img/orange.svg" class="item_img" alt="" draggable="false">
                </Item>
            </div>
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
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <transition name="modal-fade">
                <ModalWindow class="modal" v-if="isModalOpen" @close="closeModal" />
            </transition>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.main {
    border-radius: 12px;

    .wrapper_main {
        width: 525px;
        height: 500px;
        border-radius: 12px;
        border-color: #4d4d4d;
        background: #262626;
        display: grid;
        grid-template-columns: repeat(5, 105px);
        grid-template-rows: repeat(5, 100px);

        .item {
            &:nth-child(5) {
                border-top-right-radius: 12px;
            }

            &:nth-child(1) {
                border-top-left-radius: 12px;
            }

            &:nth-last-child(1) {
                border-bottom-right-radius: 12px;
            }

            &:nth-last-child(5) {
                border-bottom-left-radius: 12px;
            }
        }

        .modal {
            position: absolute;
            margin-left: 273px;
        }
    }

    .wrapper_main>*:not(.modal) {
        border: 1px solid #4d4d4d;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper_main>*:not(.modal):hover {
        background-color: #2f2f2f;
    }

}

.item_img {
    width: 54px;
    height: 54px;
}


.modal-fade-enter-active {
    transition: all 0.3s ease-out;
}

.modal-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>