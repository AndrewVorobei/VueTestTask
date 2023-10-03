import { ref } from "vue";

let isModalOpen = ref(false);

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
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dropItem(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const droppedItem = document.getElementsByClassName(data);

  event.target.appendChild(droppedItem);
}

export { dropItem, dragStart, allowDrop, openModal, closeModal, isModalOpen };
