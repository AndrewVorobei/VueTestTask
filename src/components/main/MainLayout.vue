<script setup>
import { useStore } from "vuex";
import Item from "@/components/item/Item.vue";
import ModalWindow from "@/components/Modal/ModalWindow.vue";
import { dropItem, dragStart, allowDrop, openModal, closeModal, isModalOpen } from "./helper/index";


const store = useStore();

const list = store.state.li;


</script>
<template>
    <div class="main">
        <ul class="item-field" @dragover="allowDrop" @drop="dropItem">
            <li class="item" v-for="el in list" :key="el.id">
                <Item :item="el.item" v-if="el.item" @click="openModal" @dragStart="dragStart" />
            </li>
            <transition name="modal-fade">
                <ModalWindow v-if="isModalOpen" @close="closeModal" />
            </transition>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@import "@/components/Main/style.scss";
</style>