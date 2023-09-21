<template>
  <div class="container">
    <button class="closeModal" @click="closeModal">
      <img src="@/assets/footer-img/close-btn.svg" alt="">
    </button>

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
    <transition name="modal-fade">
      <div class="confirm" v-if="!isClose">
        <input type="text" v-model="deleteCount" placeholder="Введите количество" />
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

const emit = defineEmits(["close"]);

let isClose = ref(true);
let deleteCount = ref(null);

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

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 498px;

  border: 1px solid #4d4d4d;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  backdrop-filter: blur(8px);
  background: rgba(38, 38, 38, 0.5);


  .closeModal {
    display: flex;
    justify-content: center;
    align-self: end;
    width: 24px;
    height: 24px;
    margin: 8px 8px 0 0;
    border: none;
    background: none;
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
    margin-top: 23px;
    background-image: url("@/assets/ModalImages/ModalImage.png");
  }

  .skeletonsModal {
    display: flex;
    flex-direction: column;
    align-items: center;

    .stub {
      background-image: url("@/assets/ModalImages/Stub.png");
      background-position: center;
      background-repeat: no-repeat;
      width: 211px;
      height: 30px;
    }

    .skeletonContent {
      margin-top: 24px;
      background-image: url("@/assets/ModalImages/Content.png");
      background-position: center;
      background-repeat: no-repeat;
      width: 211px;
      height: 114px;

      backdrop-filter: none;
    }
  }



  .deleteItem {
    width: 220px;
    height: 39px;
    text-justify: center;
    color: #ffffff;
    background-color: #fa7272;
    border: none;
    border-radius: 8px;
  }

  .deleteItem:hover {
    background-color: #ff8888;
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

    input {
      width: 210px;
      height: 40px;
      background: #262626;
      border: 1px solid #4d4d4d;
      border-radius: 4px;
      margin: 20px 15px;

      &::placeholder {
        padding-left: 12px;
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
        opacity: 0.4;
      }

      &:focus {
        color: white;
        border: 1px solid #919191;

        outline: 0;
      }
    }

    .confirmDelete {
      display: flex;
      gap: 10px;
      justify-content: center;
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
  }
}

.modal-fade-enter-active {
  transition: all 0.4s ease-out;
}

.modal-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  transform: translateY(60px);
  opacity: 0;
}
</style>
